import React from "react";

// Define text size classes
const sizes = {
  text5xl: "text-[22px] font-medium sm:text-[18px]",
  headingxs: "text-[11px] font-bold",
  headings: "text-[12px] font-bold",
  headingmd: "text-[13px] font-bold",
  headinglg: "text-[14px] font-bold",
  headingxl: "text-[16px] font-bold sm:text-[13px]",
  heading2x1: "text-[18px] font-bold sm:text-[15px]",
  heading3x1: "text-[20px] font-bold sm:text-[17px]",
  heading4xl: "text-[22px] font-semibold sm:text-[18px]",
  heading5xl: "text-[24px] font-bold md:text-[22px] sm:text-[20px]",
  heading6x1: "text-[29px] font-bold md:text-[27px] sm:text-[24px]",
  heading7xl: "text-[44px] font-bold md:text-[40px] sm:text-[37px]",
  heading8xl: "text-[48px] font-black md:text-[44px] sm:text-[40px]",
  heading9x1: "text-[128px] font-bold md:text-[48px]",
};

// Heading component
const Heading = ({ children, className = "", size = "headingxl", as, ...restProps }) => {
  const Component = as || "h6";
  
  return (
    <Component
      className={`text-gray-900_02 font-krub ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
