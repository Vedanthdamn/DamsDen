'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleOffset: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const STAR_COUNT = 180;
const SHOOTING_STAR_INTERVAL = 4000; // ms between shooting stars

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = 0;
    let stars: Star[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      if (!canvas) return;
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        size: Math.random() * 1.4 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.08 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.008 + 0.003,
      }));
    }

    function spawnShootingStar() {
      if (!canvas) return;
      const angle = (Math.random() * 30 + 20) * (Math.PI / 180);
      const speed = Math.random() * 6 + 5;
      shootingStars.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 60,
        opacity: 1,
        life: 0,
        maxLife: 60,
      });
    }

    function draw(timestamp: number) {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (const star of stars) {
        const twinkle = Math.sin(timestamp * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.opacity + twinkle * 0.08;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 234, 240, ${Math.max(0.05, Math.min(0.7, alpha))})`;
        ctx.fill();

        // Drift slowly downward, wrap around
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      // Spawn shooting stars periodically
      if (timestamp - lastShootingStarTime > SHOOTING_STAR_INTERVAL) {
        spawnShootingStar();
        lastShootingStarTime = timestamp;
      }

      // Draw and update shooting stars
      shootingStars = shootingStars.filter((s) => s.life < s.maxLife);
      for (const s of shootingStars) {
        const progress = s.life / s.maxLife;
        const alpha = (1 - progress) * 0.7;
        const tailX = s.x - s.vx * (s.length / 8);
        const tailY = s.y - s.vy * (s.length / 8);

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(232, 234, 240, 0)`);
        grad.addColorStop(1, `rgba(232, 234, 240, ${alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.life++;
      }

      animId = requestAnimationFrame(draw);
    }

    // Pause when tab is hidden to save CPU
    function onVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(draw);
      }
    }

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 101,
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
}
