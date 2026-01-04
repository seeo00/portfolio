export interface Project {
  title: string;
  period: string;
  description: string;
  imageSrc: string;
  liveLink: string;
  codeLink?: string;
  tags: string[];
}

export interface ProjectGroup {
  title: string;
  period: string;
  projects: Project[];
}

export const projectGroups: ProjectGroup[] = [
  {
    title: 'Work Experience',
    period: '2025',
    projects: [
      {
        title: '삼성선물 Open API',
        period: '2025.04 - 2025.09',
        description:
          '삼성선물의 Open API 생태계 조성을 위한 사용자용 포털과 관리자 전용 시스템을 신규 구축하였습니다. 특히 어드민 시스템의 UI/UX 디자인 및 프론트엔드 개발 전 과정을 전담하여 설계하였습니다.',
        imageSrc: '/images/ssfutures_mockup.png',
        liveLink: 'https://openapi.ssfutures.com/#/',
        tags: ['Commercial', 'Vue3', 'Vite', 'PrimeVue', 'Tailwind CSS', 'SCSS'],
      },
    ],
  },
  {
    title: 'Selected Projects',
    period: '2024-2025',
    projects: [
      {
        title: 'OHESHIO',
        period: '2025.02 - 2025.03',
        description:
          '패션브랜드 오헤시오 웹사이트 리뉴얼 프로젝트. 사용자의 쇼핑 경험을 개선하기 위해 기획부터 디자인 그리고 개발까지 전 과정 리뉴얼을 진행하였습니다.',
        imageSrc: '/images/oheshio_mockup.png',
        liveLink: 'https://oheshiorenewal.vercel.app/',
        codeLink: 'https://github.com/jineeds/OHESHIO.git',
        tags: ['Team', 'React', 'Vite', 'Redux Toolkit', 'Tailwind CSS'],
      },
      {
        title: 'Getty',
        period: '2025.01 - 2025.02',
        description:
          '사용자 맞춤 콘텐츠를 제공하는 OTT 플랫폼. 로컬스토리지 기반 찜하기, 프로필 선택 등 사용자 경험을 고려한 기능을 구현하였습니다.',
        imageSrc: '/images/getty_mockup.png',
        liveLink: 'https://getty-ott.vercel.app/',
        codeLink: 'https://github.com/seeo00/getty.git',
        tags: ['Team', 'React', 'Vite', 'Redux Toolkit', 'MUI', 'Swiper', 'Styled-Components'],
      },
      {
        title: 'ARTRound Seoul',
        period: '2024.11 - 2024.12',
        description:
          '모바일 전용 전시 탐색 웹 서비스. 카카오 지도 API 연동, 로컬스토리지 기반 찜 기능 등을 구현하며 모바일 UX에 집중한 프로젝트입니다.',
        imageSrc: '/images/artround_mockup.png',
        liveLink: 'https://artround-seoul.vercel.app/',
        codeLink: 'https://github.com/seeo00/artround-seoul.git',
        tags: ['Personal', 'Next.js', 'Tailwind CSS', 'Chakra UI', 'Framer Motion', 'Kakao Map API', 'Swiper'],
      },
      {
        title: 'Kiaf SEOUL',
        period: '2024.10 - 2024.11',
        description:
          'Kiaf SEOUL 사이트 리디자인 프로젝트. GSAP, Lenis 등 다양한 애니메이션을 활용하여 브랜드 메시지를 감각적으로 전달하였습니다.',
        imageSrc: '/images/kiafseoul_mockup.png',
        liveLink: 'https://seeo00.github.io/kiafseoul/pages/',
        codeLink: 'https://github.com/seeo00/kiafseoul.git',
        tags: ['Personal', 'HTML', 'SCSS', 'JavaScript', 'GSAP', 'Matter.js', 'Lenis'],
      },
    ],
  },
];
