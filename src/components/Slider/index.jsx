// Import necessary libraries and styles
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Define the Slider component with React.forwardRef to accept a ref and forward it to AliceCarousel
const Slider = React.forwardRef(
  (
    {
      items = [],            // Array of items to display in the carousel, defaulting to an empty array
      activeIndex = 0,       // Index of the currently active item, default is 0
      centerMode,            // Boolean flag to enable center mode
      magnifiedIndex = 0,    // Index offset for the magnified item when center mode is enabled
      activeSlideCSS = "scale-75", // CSS class for scaling active slide, default is "scale-75"
      ...props               // Any additional props passed to the component
    },
    ref                     // The ref passed down for the AliceCarousel instance
  ) => {
    // Helper function to determine if an item should be rendered with reduced size
    const isSmall = (index) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        // When index is out of bounds, wrap around by subtracting the length of items
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        // Normal condition for isSmall
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    // Prepare the slide items array, applying the CSS class to non-active slides when centerMode is enabled
    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (isSmall(index)) {
            // Clone element with updated className for scaled down effect
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS].filter(Boolean).join(" "),
            });
          }
          // Return unmodified element for active item
          return React.cloneElement(child);
        })
      : items;

    // Render AliceCarousel with the processed items and additional props
    return (
      <AliceCarousel
        items={slideItems}              // Array of items to be rendered in the carousel
        infinite                         // Enable infinite looping
        ref={ref}                        // Pass ref to AliceCarousel instance
        {...props}                       // Spread additional props
        touchTracking                    // Enable touch tracking for touch devices
        mouseTracking                    // Enable mouse tracking for desktop devices
        disableButtonsControls           // Disable built-in next/prev buttons
      />
    );
  }
);

// Export the Slider component for use in other parts of the application
export { Slider };
