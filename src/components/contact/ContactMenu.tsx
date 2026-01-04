'use client';

import React, { useState, useEffect } from 'react';
import SlideMenu from '../ui/SlideMenu';

interface ContactMenuProps {
  isOpen: boolean;
}

const ContactMenu = ({ isOpen }: ContactMenuProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* 모바일 메뉴 */}
      <div className="lg:hidden">
        <SlideMenu
          isOpen={isOpen}
          mounted={mounted}
          className={`top-0 left-0 right-0 w-full h-[60vh] bg-black flex flex-col items-start justify-between ${
            isOpen ? '' : 'translate-y-[-100%]'
          }`}
        >
          <p className="pt-20 px-4 text-white font-semibold text-xl">Open for new collaboration.</p>

          <div className="w-full border-t border-white p-4">
            <a href="mailto:csyoung0929@gmail.com" className="relative text-white text-xl font-medium group">
              Contact me
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </SlideMenu>
      </div>
      {/* 데스크탑 메뉴 */}
      <div className="hidden lg:block">
        <SlideMenu
          isOpen={isOpen}
          mounted={mounted}
          className={`top-0 right-0 bottom-0 w-8/12 h-[100svh] bg-black flex flex-col items-start justify-between ${
            isOpen ? '' : 'translate-x-full'
          }`}
        >
          <p className="p-5 mr-20 text-white text-3xl font-semibold">Open for new collaboration.</p>
          <div className="w-full mr-20 border-t border-white p-5">
            <a href="mailto:csyoung0929@gmail.com" className="relative text-white text-3xl font-medium group">
              Contact me
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </SlideMenu>
      </div>
    </>
  );
};

export default ContactMenu;
