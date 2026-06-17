export interface ExperienceItem {
  id: string;
  org: string;
  role: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  upcoming?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'drdo',
    org: 'Defence Research & Development Organisation',
    role: 'Research Intern',
    location: 'India',
    period: 'Jul 2026',
    type: 'Research',
    upcoming: true,
    bullets: [
      'Selected for research internship at DRDO SAG.',
      'Focus area: AI-driven cryptanalysis and post-quantum cryptography.',
    ],
  },
  {
    id: 'dmrc',
    org: 'Delhi Metro Rail Corporation · Deloitte Team',
    role: 'Technical Intern',
    location: 'New Delhi',
    period: 'Dec 2025 – Jan 2026',
    type: 'Engineering',
    bullets: [
      'Embedded with a Deloitte engineering team on enterprise cloud development.',
      'Built a large-scale multi-view operational dashboard on GCP with Power BI integration.',
      'Gained hands-on exposure to real-world data pipeline architecture and cloud infrastructure design.',
    ],
  },
  {
    id: 'nicsi',
    org: 'National Informatics Centre Services Inc.',
    role: 'Technical Intern',
    location: 'New Delhi',
    period: 'Jun 2025 – Jul 2025',
    type: 'Engineering',
    bullets: [
      'Developed a functional conversational AI chatbot for government service delivery.',
      'Gained hands-on experience in AI system design and NLP.',
      'Assisted operational tasks to enhance team workflow efficiency.',
    ],
  },
];
