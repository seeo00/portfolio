'use client';

import { useState } from 'react';
import AboutMenu from '@/components/about/AboutMenu';
import ContactMenu from '@/components/contact/ContactMenu';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Wrap from '@/components/layout/Wrap';
import Hero from '@/components/portfolio/Hero';
import ProjectList from '@/components/portfolio/ProjectList';

type MenuId = 'about' | 'contact' | null;

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<MenuId>(null);

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
    <Wrap>
      <Header openMenu={openMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
      <Hero />
      <main className="relative w-full -translate-y-40 bg-white border-y border-black">
        <ProjectList />
      </main>
      <Footer />
      <AboutMenu isOpen={isMenuOpen('about')} />
      <ContactMenu isOpen={isMenuOpen('contact')} />
    </Wrap>
  );
}
