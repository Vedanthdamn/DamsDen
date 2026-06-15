interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '64px',
      }}
    >
      <span
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: 'rgba(232,234,240,0.25)',
          letterSpacing: '0.1em',
        }}
      >
        {number}
      </span>
      <div
        style={{
          width: '32px',
          height: '1px',
          background: 'rgba(232,234,240,0.1)',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '11px',
          color: 'rgba(232,234,240,0.4)',
          letterSpacing: '0.3em',
        }}
      >
        {title}
      </span>
    </div>
  );
}
