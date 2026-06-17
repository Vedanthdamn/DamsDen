'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const MAX_CHARS = 2000;

// ─── SETUP REQUIRED ───────────────────────────────────────────────────────────
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form → set email to damavedanth@gmail.com
// 3. Copy the form ID (looks like "xrgvabcd") and paste it below
const FORMSPREE_ID = 'YOUR_FORM_ID';
// ──────────────────────────────────────────────────────────────────────────────

type FormState = 'idle' | 'sending' | 'sent' | 'error';

const inputBase: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(232,234,240,0.12)',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  color: 'rgba(232,234,240,0.85)',
  padding: '12px 0',
  marginBottom: '40px',
  caretColor: 'rgba(232,234,240,0.7)',
  transition: 'border-color 200ms ease',
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      alert('Contact form not yet configured. Email damavedanth@gmail.com directly.');
      return;
    }

    setFormState('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setFormState('sent');
        setName(''); setEmail(''); setMessage('');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  function borderColor(field: string) {
    return focusedField === field
      ? 'rgba(232,234,240,0.45)'
      : 'rgba(232,234,240,0.12)';
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 10vw, 10vw) clamp(60px, 8vw, 80px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <motion.div {...fadeUp(0)}>
        <SectionLabel title="contact" />
      </motion.div>

      <motion.h2
        {...fadeUp(0.08)}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 6vw, 56px)',
          fontWeight: 300,
          color: 'rgba(232,234,240,0.95)',
          margin: '0 0 16px 0',
          lineHeight: 1.1,
          letterSpacing: '-0.01em',
        }}
      >
        Start a conversation.
      </motion.h2>

      <motion.p
        {...fadeUp(0.14)}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: 'rgba(232,234,240,0.4)',
          margin: '0 0 64px 0',
          lineHeight: 1.6,
          maxWidth: '480px',
        }}
      >
        Internships, collaborations, or just something worth saying.
      </motion.p>

      {formState === 'sent' ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: '540px' }}
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 300, color: 'rgba(232,234,240,0.85)', margin: '0 0 12px 0' }}>
            Sent.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(232,234,240,0.4)', margin: 0 }}>
            I&apos;ll get back to you at {email || 'your email'}.
          </p>
        </motion.div>
      ) : (
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          {...fadeUp(0.2)}
          style={{ maxWidth: '540px', width: '100%' }}
        >
          {/* Name */}
          <div style={{ position: 'relative' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: focusedField === 'name' ? 'rgba(232,234,240,0.5)' : 'rgba(232,234,240,0.25)',
                letterSpacing: '0.08em',
                marginBottom: '6px',
                transition: 'color 200ms ease',
              }}
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              required
              autoComplete="name"
              style={{ ...inputBase, borderBottomColor: borderColor('name') }}
            />
          </div>

          {/* Email */}
          <div style={{ position: 'relative' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: focusedField === 'email' ? 'rgba(232,234,240,0.5)' : 'rgba(232,234,240,0.25)',
                letterSpacing: '0.08em',
                marginBottom: '6px',
                transition: 'color 200ms ease',
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              autoComplete="email"
              style={{ ...inputBase, borderBottomColor: borderColor('email') }}
            />
          </div>

          {/* Message */}
          <div style={{ position: 'relative' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: focusedField === 'message' ? 'rgba(232,234,240,0.5)' : 'rgba(232,234,240,0.25)',
                letterSpacing: '0.08em',
                marginBottom: '6px',
                transition: 'color 200ms ease',
              }}
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, MAX_CHARS))}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
              rows={5}
              style={{
                ...inputBase,
                resize: 'vertical',
                minHeight: '120px',
                lineHeight: 1.7,
                borderBottomColor: borderColor('message'),
              }}
            />
            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: 'rgba(232,234,240,0.2)',
                textAlign: 'right',
                margin: '-32px 0 40px 0',
              }}
            >
              {message.length} / {MAX_CHARS}
            </p>
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <button
              type="submit"
              disabled={formState === 'sending'}
              style={{
                background: 'none',
                border: 'none',
                cursor: formState === 'sending' ? 'wait' : 'pointer',
                padding: 0,
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '28px',
                fontWeight: 300,
                color: formState === 'sending' ? 'rgba(232,234,240,0.3)' : 'rgba(232,234,240,0.9)',
                transition: 'color 200ms ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => { if (formState !== 'sending') e.currentTarget.style.color = 'rgba(232,234,240,1)'; }}
              onMouseLeave={(e) => { if (formState !== 'sending') e.currentTarget.style.color = 'rgba(232,234,240,0.9)'; }}
            >
              {formState === 'sending' ? 'Sending...' : 'Send →'}
            </button>

            {formState === 'error' && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(220,100,100,0.8)', margin: 0 }}>
                Something went wrong. Email directly below.
              </p>
            )}
          </div>

          {/* Direct email fallback */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(232,234,240,0.25)',
              marginTop: '32px',
            }}
          >
            Or email directly:{' '}
            <a
              href="mailto:damavedanth@gmail.com"
              style={{
                color: 'rgba(232,234,240,0.55)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.9)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.55)'; }}
            >
              damavedanth@gmail.com
            </a>
          </p>
        </motion.form>
      )}
    </section>
  );
}
