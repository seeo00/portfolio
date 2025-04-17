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
          className={`top-0 left-0 right-0 w-full h-[60vh] bg-black ${isOpen ? '' : 'translate-y-[-100%]'}`}
        >
          contact
        </SlideMenu>
      </div>
      {/* 데스크탑 메뉴 */}
      <div className="hidden lg:block">
        <SlideMenu
          isOpen={isOpen}
          mounted={mounted}
          className={`top-0 right-0 bottom-0 w-8/12 h-[100svh] bg-black ${isOpen ? '' : 'translate-x-full'}`}
        >
          contact
        </SlideMenu>
      </div>
    </>
  );
};

export default ContactMenu;
