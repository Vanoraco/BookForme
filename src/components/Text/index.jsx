// Import React library
import React from "react";

// Define size classes for different text sizes
const sizes = {
  textxs: "text-[10px] font-normal",                            // Extra small text size
  texts: "text-[11px] font-normal not-italic",                  // Small text size
  textmd: "text-[12px] font-normal not-italic",                 // Medium text size
  textlg: "text-[13px] font-normal not-italic",                 // Large text size
  textxl: "text-[14px] font-normal not-italic",                 // Extra large text size
  text2xl: "text-[15px] font-normal not-italic",                // 2x large text size
  text3xl: "text-[16px] font-normal not-italic sm:text-[13px]", // 3x large with responsive small text
  text4xl: "text-[20px] font-normal not-italic sm:text-[17px]", // 4x large with responsive small text
  text6xl: "text-[24px] font-normal md:text-[22px] sm:text-[20px]" // 6x large with responsive sizes
};

// Define the Text component
const Text = ({
  children,                   // Content inside the text component
  className = "",             // Additional CSS classes
  as = "p",                   // HTML tag, defaults to <p>
  size = "textxl",            // Size class, default is 'textxl'
  ...restProps                // Any other properties passed to the component
}) => {
  // Determine the HTML element to render (default is <p>)
  const Component = as;

  // Render the component with dynamic classes and content
  return (
    <Component
      className={`text-white-a700 font-roboto ${className} ${sizes[size]}`} // Dynamic classes
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Export the Text component
export { Text };
