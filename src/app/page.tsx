'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import AboutMenu from '@/components/about/AboutMenu';
import ContactMenu from '@/components/contact/ContactMenu';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Wrap from '@/components/layout/Wrap';
import Hero from '@/components/portfolio/Hero';
import ProjectList from '@/components/portfolio/ProjectList';
import { projectGroups } from '@/data/projects';

type MenuId = 'about' | 'contact' | null;

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<MenuId>(null);
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);

  // 초기 마운트 시 스크롤 잠금
  useLayoutEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, []);

  // Hero 애니메이션 완료 시 스크롤 해제
  useEffect(() => {
    if (heroAnimationComplete) {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [heroAnimationComplete]);

  // 메뉴 열기
  const openMenu = (menuId: MenuId) => {
    setActiveMenu(menuId);
  };

  // 메뉴 닫기
  const closeMenu = () => {
    setActiveMenu(null);
  };

  // 현재 열려있는 메뉴 추적
  const isMenuOpen = (menuId: MenuId) => {
    return activeMenu === menuId;
  };

  return (
    <>
      {heroAnimationComplete && <SmoothScroll />}
      <Wrap>
        <Header openMenu={openMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
        <Hero onAnimationComplete={() => setHeroAnimationComplete(true)} />
        <main className="relative w-full">
          <motion.div
            initial={{ y: 160 }}
            animate={heroAnimationComplete ? { y: -160 } : { y: 160 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="bg-white border-b border-black"
          >
            {projectGroups.map((group, index) => (
              <ProjectList key={index} title={group.title} projects={group.projects} />
            ))}
          </motion.div>
        </main>
        <Footer />
        <AboutMenu isOpen={isMenuOpen('about')} />
        <ContactMenu isOpen={isMenuOpen('contact')} />
      </Wrap>
    </>
  );
}
