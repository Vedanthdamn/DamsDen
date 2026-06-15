export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  year: string;
  status: 'Shipped' | 'In Development';
  imageFile: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'srmiggy',
    title: 'SRMiggy',
    tagline: 'The campus had no good way to order food. Now it does.',
    description: 'Multi-vendor food ordering with a wallet, loyalty system, and admin dashboard. Built as a DBMS project. Used by students at SRMIST.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Supabase', 'MySQL'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'Shipped',
    imageFile: '/images/projects/srmiggy.png',
  },
  {
    id: 'routeiq',
    title: 'RouteIQ',
    tagline: 'Finds the shortest path between delivery stops. Actually works.',
    description: 'TSP solver for delivery routing. MapLibre maps, FastAPI backend, deployed on Vercel and Render.',
    tags: ['React', 'TypeScript', 'FastAPI', 'MapLibre GL', 'Python'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'Shipped',
    imageFile: '/images/projects/routeiq.png',
  },
  {
    id: 'telemac',
    title: 'TeleMac',
    tagline: 'A teleprompter that drops from the Mac notch. For the non-fancy.',
    description: 'SwiftUI macOS app. Voice-activated scroll. Drops from the notch area. Ships as an unsigned DMG.',
    tags: ['Swift', 'SwiftUI', 'AppKit', 'AVFoundation', 'macOS'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'Shipped',
    imageFile: '/images/projects/telemac.png',
  },
  {
    id: 'drivescore',
    title: 'DriveScore.ai',
    tagline: 'Scores how safely you drive, in real time.',
    description: 'ML telemetry scoring with a Tesla-style dashboard. FastAPI backend, async, supports fleet monitoring.',
    tags: ['FastAPI', 'Python', 'React', 'ML Analytics'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'In Development',
    imageFile: '/images/projects/drivescore.png',
  },
  {
    id: 'flowsense',
    title: 'FlowSense.ai',
    tagline: 'Watches traffic. Adjusts the signals. No human needed.',
    description: 'YOLOv8 vehicle detection with adaptive signal timing. React dashboard, multi-source video input.',
    tags: ['YOLOv8', 'Python', 'React', 'Computer Vision', 'FastAPI'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'In Development',
    imageFile: '/images/projects/flowsense.png',
  },
];
