import React from 'react';

const Footer = () => {
  return (
    <footer className="container fixed top-0 left-0 right-0 -z-10 h-[100svh] flex">
      <div className="mt-auto flex flex-col-reverse items-start lg:flex-row lg:items-end lg:gap-5">
        <h1 className="text-[12vw] lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8vw] translate-y-[20%] leading-[0.9]">
          Seoyoung
        </h1>
        <p className="text-sm xl:text-base font-medium">© 2025 Seoyoung. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
