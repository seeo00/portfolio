'use client';

import React from 'react';

interface SlideMenuProps {
  isOpen: boolean;
  mounted: boolean;
  className?: string;
  children: React.ReactNode;
}

const SlideMenu = ({ isOpen, mounted, className = '', children }: SlideMenuProps) => {
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed z-20 transition-transform duration-500 ${
        isOpen ? 'translate-x-0 translate-y-0' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideMenu;
