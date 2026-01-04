'use client';

import Link from 'next/link';
import React from 'react';

type MenuId = 'about' | 'contact' | null;

interface HeaderProps {
  openMenu: (menuId: MenuId) => void;
  closeMenu: () => void;
  isMenuOpen: (menuId: MenuId) => boolean;
}

const Header = ({ openMenu, closeMenu, isMenuOpen }: HeaderProps) => {
  const isAboutOpen = isMenuOpen('about');
  const isContactOpen = isMenuOpen('contact');

  const toggleAboutMenu = () => {
    if (isAboutOpen) {
      closeMenu();
    } else {
      openMenu('about');
    }
  };

  const toggleContactMenu = () => {
    if (isContactOpen) {
      closeMenu();
    } else {
      openMenu('contact');
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-auto z-30 border-b lg:border-l lg:border-b-0 border-black bg-white overflow-hidden">
      {/* 1024 이상 */}
      <nav className="hidden lg:flex flex-col w-[4.5rem] xl:w-20 h-[100svh]">
        <button
          type="button"
          onClick={toggleAboutMenu}
          className="relative flex flex-col items-center justify-center w-full h-36 group bg-primary text-white text-[2.2rem] xl:text-[2.4rem] font-medium border-b border-black"
        >
          <div
            className={`absolute rotate-90 transition-transform duration-500 ${
              isAboutOpen ? 'translate-x-full' : '-translate-x-6 xl:-translate-x-7 group-hover:translate-x-0'
            }`}
          >
            About
          </div>
          <div
            className={`absolute rotate-90 transition-transform duration-500 ${
              isAboutOpen ? '-translate-x-6 xl:-translate-x-7 group-hover:translate-x-0' : '-translate-x-full'
            }`}
          >
            Close
          </div>
        </button>
        <Link
          href={'/'}
          className="flex flex-col items-center justify-center w-full h-80 group text-[2.2rem] xl:text-[2.4rem] font-medium border-b border-black"
        >
          <div className="absolute -translate-x-6 xl:-translate-x-7 rotate-90 transition-transform duration-500 group-hover:translate-x-0">
            Portfolio
          </div>
        </Link>
        <button
          type="button"
          onClick={toggleContactMenu}
          className="flex flex-col items-center justify-center w-full h-40 mt-auto group bg-black text-white text-[2.2rem] xl:text-[2.4rem] font-medium"
        >
          <div
            className={`absolute rotate-90 transition-transform duration-500 ${
              isContactOpen ? 'translate-x-full' : '-translate-x-6 xl:-translate-x-7 group-hover:translate-x-0'
            }`}
          >
            Contact
          </div>
          <div
            className={`absolute rotate-90 transition-transform duration-500 ${
              isContactOpen ? '-translate-x-6 xl:-translate-x-7 group-hover:translate-x-0' : '-translate-x-full'
            }`}
          >
            Close
          </div>
        </button>
      </nav>
      {/* 모바일 */}
      <nav className="flex lg:hidden w-full h-16">
        <button
          type="button"
          onClick={toggleAboutMenu}
          className="relative flex flex-col justify-end w-1/3 bg-primary text-2xl sm:text-3xl text-white text-center  font-medium border-r border-black"
        >
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-500 ${
              isAboutOpen ? 'translate-y-full' : 'translate-y-[0.5rem]'
            }`}
          >
            About
          </div>
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-500 ${
              isAboutOpen ? 'translate-y-[0.5rem]' : 'translate-y-full'
            }`}
          >
            Close
          </div>
        </button>
        <Link
          href="/"
          className="relative flex flex-col justify-end w-2/3 text-2xl sm:text-3xl text-center font-medium"
        >
          <div className="absolute left-1/2 -translate-x-1/2 transition-transform duration-500 translate-y-[0.5rem]">
            Portfolio
          </div>
        </Link>
        <button
          type="button"
          onClick={toggleContactMenu}
          className="relative flex flex-col justify-end w-1/3 bg-black text-2xl sm:text-3xl text-white text-center  font-medium"
        >
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-500 ${
              isContactOpen ? 'translate-y-full' : 'translate-y-[0.5rem]'
            }`}
          >
            Contact
          </div>
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-500 ${
              isContactOpen ? 'translate-y-[0.5rem]' : 'translate-y-full'
            }`}
          >
            Close
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
