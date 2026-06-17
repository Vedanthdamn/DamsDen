'use client';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(232,234,240,0.07)',
        padding: 'clamp(40px, 6vw, 64px) clamp(24px, 10vw, 10vw)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top row: name + socials */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '20px',
        }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px',
            fontWeight: 300,
            color: 'rgba(232,234,240,0.85)',
            letterSpacing: '-0.01em',
          }}
        >
          Vedanth Dama
        </span>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/Vedanthdamn' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vedanth-dama' },
            { label: 'damavedanth@gmail.com', href: 'mailto:damavedanth@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(232,234,240,0.35)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(232,234,240,0.35)'; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: 'rgba(232,234,240,0.2)',
          margin: 0,
        }}
      >
        Not built for bots or ATS. Built for people.
      </p>
    </footer>
  );
}
