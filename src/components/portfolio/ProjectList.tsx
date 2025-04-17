import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
  {
    title: 'OHESHIO',
    period: '2025.02.26 - 2025.03.18',
    description:
      '패션브랜드 오헤시오 웹사이트 리뉴얼 프로젝트로, 사용자의 쇼핑 경험을 개선하기 위해 기획부터 디자인 그리고 개발까지 전 과정 리뉴얼을 진행하였습니다.',
    imageSrc: '/images/oheshio_mockup.png',
    liveLink: 'https://your-project.vercel.app',
    codeLink: 'https://github.com/your-project',
    tags: ['Team Project', 'React', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Styled-Components'],
  },
  {
    title: 'Getty',
    period: '2025.01.10 - 2025.02.02',
    description:
      '사용자 맞춤 콘텐츠를 제공하는 OTT 플랫폼. 로컬스토리지 기반 찜하기, 프로필 선택 등 사용자 경험을 고려한 기능을 구현하였습니다.',
    imageSrc: '/images/getty_mockup.png',
    liveLink: 'https://your-getty.vercel.app',
    codeLink: 'https://github.com/your-getty',
    tags: ['Team Project', 'React', 'Vite', 'Redux Toolkit', 'MUI', 'Swiper'],
  },
  {
    title: 'ARTRound Seoul',
    period: '2025.01.01 - 2025.01.09',
    description:
      '모바일 전용 전시 탐색 웹 서비스. 카카오 지도 API 연동, 로컬스토리지 기반 찜 기능 등을 구현하며 모바일 UX에 집중한 프로젝트입니다.',
    imageSrc: '/images/artround_mockup.png',
    liveLink: 'https://artround.vercel.app',
    codeLink: 'https://github.com/your-artround',
    tags: ['Personal Project', 'Next.js', 'Tailwind CSS', 'Chakra UI', 'Framer Motion', 'Kakao Map API', 'Swiper'],
  },
  {
    title: 'Kiaf SEOUL',
    period: '2024.12.01 - 2024.12.20',
    description:
      'Kiaf 서울 아트페어 사이트 리디자인 프로젝트. GSAP, Lenis 등 다양한 애니메이션을 활용하여 브랜드 메시지를 감각적으로 전달하였습니다.',
    imageSrc: '/images/kiafseoul_mockup.png',
    liveLink: 'https://kiaf-seoul.vercel.app',
    codeLink: 'https://github.com/your-kiaf',
    tags: ['Personal Project', 'HTML', 'SCSS', 'JavaScript', 'GSAP', 'Matter.js', 'Lenis'],
  },
];

const ProjectList = () => {
  return (
    <>
      <div className="w-full h-40">
        <div className="container h-full py-5 flex justify-between items-end text-2xl xl:text-[1.6rem] 2xl:text-[1.6vw] font-medium">
          <h2>Project</h2>
          <p>2024-2025</p>
        </div>
      </div>
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
