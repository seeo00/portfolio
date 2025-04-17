import React from 'react';
import { TfiArrowRight } from 'react-icons/tfi';
import { TfiPlus } from 'react-icons/tfi';

const Hero = () => {
  return (
    <section className="bg-white container flex flex-col h-[calc(100svh-65px)] lg:h-[100svh] py-5 tracking-tight font-[450] lg:font-[425]">
      <div className="text-[12vw] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8vw] leading-[0.96] flex gap-3">
        Portfolio
        <TfiPlus className="h-auto w-[10vw] lg:w-[4.5rem] xl:w-[5.5rem] 2xl:w-[6.75rem]" />
      </div>
      <div className="text-[12vw] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8vw] leading-[0.96]">
        Frontend Developer
      </div>
      <div className="text-[12vw] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8vw] leading-[0.96]  flex flex-wrap">
        2025 <TfiArrowRight className="h-auto w-[10vw] lg:w-[4.5rem] xl:w-[5.5rem] 2xl:w-[6.75rem] mx-3" /> Ongoing
      </div>
      <div className="w-full mt-10 xl:mt-20 text-xl lg:text-2xl xl:text-3xl font-medium">
        <p>Code, Design, Experience: Creating Digital Interfaces That Engage Users</p>
        <p className="mt-2">코드와 디자인을 통해 직관적이고 감각적인 웹 경험을 만드는 프론트엔드 개발자입니다.</p>
      </div>
      <div className="mt-auto -translate-y-40 flex justify-end">
        <a href="#" className="flex text-base lg:text-xl hover:text-primary">
          Go to GitHub <TfiArrowRight className="-rotate-45 mt-1 ml-1 w-4 h-4 lg:w-5 lg:h-5 stroke-[0.5]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
