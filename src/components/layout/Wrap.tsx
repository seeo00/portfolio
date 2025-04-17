import React from 'react';

interface WrapProps {
  children: React.ReactNode;
}

const Wrap = ({ children }: WrapProps) => {
  return <div className="pt-16 lg:pt-0 lg:pr-[4.5rem] xl:pr-20">{children}</div>;
};

export default Wrap;
