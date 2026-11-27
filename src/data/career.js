import rocketScienceLogo from '../assets/images/rslogo.svg';
import veygoLogo from '../assets/images/veygologo.svg';

export const seasons = [
  {
    name: 'Rocket Science Group',
    period: '2024–Present',
    logo: rocketScienceLogo,
    entries: [
      {
        date: 'Jun 2025',
        title: 'Senior Platform Engineer',
        promotion: true,
        summary: 'Promoted within the platform team. My work includes game systems observability, delivery pipelines and data ingestion.',
        projects: ['game-data-warehouse-ingestion', 'game-platform-observability', 'game-backend-delivery'],
      },
      {
        date: 'Sep 2024',
        title: 'Platform Engineer',
        summary: 'Worked with game studios to build, test, and maintain the platforms behind their games.',
        projects: ['game-backend-load-testing'],
      },
    ],
  },
  {
    name: 'Veygo UK',
    period: '2022–2024',
    logo: veygoLogo,
    entries: [
      {
        date: 'Jul 2023',
        title: 'Software Engineer',
        promotion: true,
        summary: 'Helped build a fraud analytics service, mentored new engineers, and helped manage and resolve critical production incidents.',
        projects: ['fraud-analytics'],
      },
      {
        date: 'Jan 2022',
        title: 'Junior Software Engineer',
        summary: 'Worked on a temporary car insurance platform and started a weekly dependency maintenance review.',
        projects: ['dependency-maintenance'],
      },
    ],
  },
  {
    name: 'Career transition',
    period: 'Before 2022',
    entries: [
      {
        date: 'Nov 2021',
        title: 'Code First Girls NanoDegree',
        summary: 'Completed a software development programme covering algorithms, data structures, and web development before joining Veygo.',
      },
      {
        date: 'Aug 2021',
        title: 'Transition into software engineering',
        summary: 'Moved from finance into engineering during the pandemic, building personal projects along the way.',
        projects: ['uni-takeaway', 'meal-planner'],
      },
      {
        date: 'Earlier career',
        title: 'Finance controller and auditor',
        summary: 'Worked in finance before moving into tech. I’m an ACCA-qualified Chartered Accountant.',
      },
    ],
  },
];
