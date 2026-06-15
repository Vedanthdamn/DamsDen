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
    tagline: 'Campus Food Ordering & Service Automation',
    description:
      'Full-stack campus food delivery platform — multi-vendor cart, digital wallet, loyalty system, role-based access control, real-time order tracking, and an admin dashboard. MySQL schema designed as part of DBMS coursework.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Supabase', 'MySQL'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'Shipped',
    imageFile: '/images/projects/srmiggy.png',
  },
  {
    id: 'routeiq',
    title: 'RouteIQ',
    tagline: 'TSP Delivery Route Optimizer',
    description:
      'Solves the Travelling Salesman Problem for real-world delivery routing. React + TypeScript frontend with MapLibre GL maps, FastAPI backend, OpenRouteService API integration. Deployed on Vercel and Render.',
    tags: ['React', 'TypeScript', 'FastAPI', 'MapLibre GL', 'Python'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'Shipped',
    imageFile: '/images/projects/routeiq.png',
  },
  {
    id: 'telemac',
    title: 'TeleMac',
    tagline: 'macOS Teleprompter from the Notch',
    description:
      'Native macOS teleprompter that drops from the notch. Voice-activated auto-scroll via AVFoundation speech recognition. Built in SwiftUI and AppKit, distributed as an unsigned DMG via GitHub Releases.',
    tags: ['Swift', 'SwiftUI', 'AppKit', 'AVFoundation', 'macOS'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'Shipped',
    imageFile: '/images/projects/telemac.png',
  },
  {
    id: 'drivescore',
    title: 'DriveScore.ai',
    tagline: 'AI-Powered Driver Safety Scoring System',
    description:
      'Real-time driver safety scoring using ML telemetry analytics. Tesla-style dashboard interface, async FastAPI backend built for parallel personal and fleet monitoring.',
    tags: ['FastAPI', 'Python', 'React', 'ML Analytics'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'In Development',
    imageFile: '/images/projects/drivescore.png',
  },
  {
    id: 'flowsense',
    title: 'FlowSense.ai',
    tagline: 'Intelligent Traffic Management System',
    description:
      'YOLOv8 vehicle detection with adaptive signal timing logic. Real-time React dashboard with multi-source video input support, built for smart city infrastructure.',
    tags: ['YOLOv8', 'Python', 'React', 'Computer Vision', 'FastAPI'],
    githubUrl: 'https://github.com/Vedanthdamn',
    year: '2025',
    status: 'In Development',
    imageFile: '/images/projects/flowsense.png',
  },
];
