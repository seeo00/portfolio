'use client';

import React, { useState, useEffect } from 'react';
import SlideMenu from '../ui/SlideMenu';

interface AboutMenuProps {
  isOpen: boolean;
}

const AboutMenu = ({ isOpen }: AboutMenuProps) => {
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
          className={`top-0 left-0 right-0 w-full h-[90svh] bg-primary ${isOpen ? '' : 'translate-y-[-100%]'}`}
        >
          About
        </SlideMenu>
      </div>
      {/* 데스크탑 메뉴 */}
      <div className="hidden lg:block">
        <SlideMenu
          isOpen={isOpen}
          mounted={mounted}
          className={`top-0 right-0 bottom-0 w-10/12 h-[100svh] bg-primary ${isOpen ? '' : 'translate-x-full'}`}
        >
          About
        </SlideMenu>
      </div>
    </>
  );
};

export default AboutMenu;
