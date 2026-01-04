'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TfiArrowRight } from 'react-icons/tfi';
import { TfiPlus } from 'react-icons/tfi';

interface HeroProps {
  onAnimationComplete?: () => void;
}

const Hero = ({ onAnimationComplete }: HeroProps) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  const [isSmallScreen, setIsSmallScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false;
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsSmallScreen(window.innerWidth < 640);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const frontendDeveloperY = isSmallScreen ? '80%' : isMobile ? '50%' : '100%';
  const portfolioY = isSmallScreen ? '150%' : '100%';
  const ongoingY = isSmallScreen ? '150%' : '100%';
  return (
    <section className="bg-white container flex flex-col h-[calc(100svh-65px)] lg:h-[100svh] py-5 tracking-tight font-[450] lg:font-[425]">
      <div className="-my-10 overflow-hidden py-10">
        <motion.div
          initial={{ opacity: 0, y: portfolioY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 0.1 }, y: { duration: 0.6, ease: 'easeOut' } }}
          className="text-[12vw] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8vw] leading-[0.96] flex gap-3"
        >
          Portfolio
          <TfiPlus className="h-auto w-[10vw] lg:w-[4.5rem] xl:w-[5.5rem] 2xl:w-[6.75rem]" />
        </motion.div>
      </div>
      <div className="-my-10 overflow-hidden py-10">
        <motion.div
          initial={{ opacity: 0, y: frontendDeveloperY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 0.1 }, y: { duration: 0.6, ease: 'easeOut' } }}
          className="text-[12vw] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8vw] leading-[0.96]"
        >
          Frontend Developer
        </motion.div>
      </div>
      <div className="-my-10 overflow-hidden py-10">
        <motion.div
          initial={{ opacity: 0, y: ongoingY }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 0.1 }, y: { duration: 0.6, ease: 'easeOut' } }}
          className="text-[12vw] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8vw] leading-[0.96]  flex flex-wrap"
        >
          2025 <TfiArrowRight className="h-auto w-[10vw] lg:w-[4.5rem] xl:w-[5.5rem] 2xl:w-[6.75rem] mx-3" /> Ongoing
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        className="w-full mt-10 xl:mt-20 text-xl lg:text-2xl xl:text-3xl font-medium"
      >
        <p>Code, Design, Experience: Creating Digital Interfaces That Engage Users</p>
        <p className="mt-2">코드와 디자인을 통해 직관적이고 감각적인 웹 경험을 만드는 프론트엔드 개발자입니다.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
        onAnimationComplete={onAnimationComplete}
        className="mt-auto -translate-y-40 flex justify-end"
      >
        <a
          href="https://github.com/seeo00"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-base lg:text-xl hover:text-primary"
        >
          Go to GitHub <TfiArrowRight className="-rotate-45 mt-1 ml-1 w-4 h-4 lg:w-5 lg:h-5 stroke-[0.5]" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
