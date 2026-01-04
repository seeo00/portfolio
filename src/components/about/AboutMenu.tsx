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
          <p className="pt-20 px-4 text-white">
            <span className="font-semibold text-xl">
              기획부터 디자인, 개발까지 서비스의 전체 흐름을 이해하는 프론트엔드 개발자 입니다.
            </span>
            <span className="block font-medium mt-6 text-lg">
              모바일 앱 기획을 거치며 사용자의 동선과 비즈니스 로직을 깊이 고민했고, 이후 디자인과 퍼블리싱 실무를 통해
              시각적 완성도와 구현의 디테일을 익혔습니다.
            </span>
            <span className="block font-medium mt-3 text-lg">
              이러한 폭넓은 경험은 현재 프론트엔드 개발자로서 기획자와 디자이너의 언어를 완벽히 이해하고, 최적의 사용자
              경험(UX)을 효율적인 코드로 구현해내는 저만의 강력한 무기가 되었습니다. 단순히 화면을 만드는 것을 넘어,
              서비스의 본질을 코드에 녹여내는 개발자가 되겠습니다.
            </span>
          </p>
        </SlideMenu>
      </div>
      {/* 데스크탑 메뉴 */}
      <div className="hidden lg:block">
        <SlideMenu
          isOpen={isOpen}
          mounted={mounted}
          className={`top-0 right-0 bottom-0 w-10/12 h-[100svh] bg-primary ${isOpen ? '' : 'translate-x-full'}`}
        >
          <p className="p-5 mr-20 text-white">
            <span className="font-semibold text-3xl">
              기획부터 디자인, 개발까지 서비스의 전체 흐름을 이해하는 프론트엔드 개발자 입니다.
            </span>
            <span className="block font-medium mt-10 text-2xl">
              모바일 앱 기획을 거치며 사용자의 동선과 비즈니스 로직을 깊이 고민했고, 이후 디자인과 퍼블리싱 실무를 통해
              시각적 완성도와 구현의 디테일을 익혔습니다.
            </span>
            <span className="block font-medium mt-5 text-2xl">
              이러한 폭넓은 경험은 현재 프론트엔드 개발자로서 기획자와 디자이너의 언어를 완벽히 이해하고, 최적의 사용자
              경험(UX)을 효율적인 코드로 구현해내는 저만의 강력한 무기가 되었습니다. 단순히 화면을 만드는 것을 넘어,
              서비스의 본질을 코드에 녹여내는 개발자가 되겠습니다.
            </span>
          </p>
        </SlideMenu>
      </div>
    </>
  );
};

export default AboutMenu;
