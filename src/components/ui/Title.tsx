import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Title = ({ children, className = "" }: Props) => {
  return (
    <h1
      className={`max-sm:text-3xl sm:text-4xl lg:text-5xl text-center max-w-[700px] leading-tight ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
