import type { Education, Experience, Project } from '../types/portfolio';

// Personal information and content live here, separate from the presentation.
export const profile = {
  name: 'Sreevani Y',
  firstName: 'Sreevani',
  lastName: 'Y',
  role: 'Software Craftsperson',
  email: 'sreevaniyaramaddu@gmail.com',
  phone: '+91 93460 61298',
  phoneHref: 'tel:+919346061298',
  github: 'https://github.com/sreevani-yarramaddu',
  linkedin: 'https://www.linkedin.com/in/sreevani-y',
  resume: '/Sree_Resume.pdf',
  image: '/sreevani-profile.jpg',
};

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const experiences: Experience[] = [
  {
    company: 'Everest Engineering', role: 'Curious Intern',
    logo: '/images/companies/everest-engineering.png',
    period: 'Jan 2025 — Present', location: 'Software development',
    highlights: [
      'Contributed to web and mobile application projects while learning new frameworks, databases, and development tools.',
      'Collaborated with teammates on feature development, debugging, testing, and application improvements.',
      'Applied Spec-Driven Development to clarify requirements, plan tasks, and implement features systematically.',
      'Supported team coordination and communication while building ownership and collaboration skills.',
    ],
    technologies: ['Web development', 'Mobile development', 'Spec-Driven Development', 'Testing'],
  },
];

export const projects: Project[] = [
  {
    title: 'Everest Canteen', category: 'MOBILE · FOOD ORDERING',
    description: 'A mobile-first canteen ordering app for browsing menus, placing orders, and tracking order status.',
    highlights: ['Menu browsing, search, cart management, and cross-device cart sync', 'Razorpay payment workflows and order lifecycle features', 'Firebase authentication, Firestore, Cloud Functions, notifications, and offline recovery'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Firestore', 'Cloud Functions', 'Razorpay'],
    repository: '',
    slides: [
      { src: '/images/projects/everest-canteen-menu.png', alt: 'Everest Canteen mobile menu screen showing food categories and menu items.', caption: 'Browse the menu', orientation: 'portrait' },
      { src: '/images/projects/everest-canteen-checkout.png', alt: 'Everest Canteen checkout screen with an item, quantity control, and place order button.', caption: 'Review the cart and checkout', orientation: 'portrait' },
      { src: '/images/projects/everest-canteen-tickets.png', alt: 'Everest Canteen maintenance tickets screen.', caption: 'Maintenance tickets', orientation: 'portrait' },
      { src: '/images/projects/everest-canteen-orders.png', alt: 'Everest Canteen orders screen showing an order summary and status.', caption: 'Track order status', orientation: 'portrait' },
    ],
  },
  {
    title: 'Everest Basecamp', category: 'WEB · CONFERENCE EXPERIENCE',
    description: 'A gamified conference app for FuseCon Malaysia, with activities, photo uploads, points, and rankings.',
    highlights: ['Built participant and game workflows across frontend and backend', 'Explored live leaderboard updates with SSE and PostgreSQL LISTEN/NOTIFY', 'Supported testing, k6 performance evaluation, and AWS deployment workflows'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'SSE', 'AWS', 'Docker', 'k6'],
    repository: '',
    slides: [
      { src: '/images/projects/basecamp.svg', alt: 'Illustration of a conference activity and live leaderboard app.', caption: 'Conference activity and leaderboard' },
    ],
  },
];

export const education: Education[] = [
  { degree: 'B.Tech · Computer Science & Engineering', institution: 'Rajiv Gandhi University of Knowledge Technologies, RGUKT IIIT', period: '2021 — 2025', grade: '8.9 / 10 CGPA' },
  { degree: 'Pre-University Course · MPC', institution: 'Rajiv Gandhi University of Knowledge Technologies, RGUKT IIIT', period: '2019 — 2021', grade: '9.8 / 10 CGPA' },
  { degree: '10th Standard · SSC', institution: 'Vivekananda Municipal High School, Madanapalle, Chittoor District', period: '2018 — 2019', grade: '9.8 / 10 Points' },
];

export const certifications = [
  'Stripe Certified Associate Developer',
  'Stripe Professional Payments Developer',
  'Stripe Professional Billing',
  'Codex Deployment Practitioner · OpenAI',
];
