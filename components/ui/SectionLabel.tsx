interface SectionLabelProps {
  title: string;
}

export default function SectionLabel({ title }: SectionLabelProps) {
  return (
    <p
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '12px',
        color: 'rgba(232,234,240,0.25)',
        letterSpacing: '0.06em',
        fontWeight: 400,
        marginBottom: '40px',
        marginTop: 0,
      }}
    >
      {title}
    </p>
  );
}
