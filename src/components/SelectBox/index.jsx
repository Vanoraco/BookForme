// Import React and the Select component from react-select
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

// Define shape styles as an object for reuse
const shapes = {
  round: "rounded-lg",
};

// Define variant styles with color options
const variants = {
  fill: {
    blue_gray_50: "bg-blue_gray-50 text-gray-600_01",
  },
};

// Define size options for the select box
const sizes = {
  xs: "h-[44px] pl-3 pr-6 text-[10px]",
};

// Create the SelectBox component using React.forwardRef
const SelectBox = React.forwardRef(
  (
    {
      children,             // Any children passed to the SelectBox
      className = "",       // Optional className, defaults to an empty string
      options = [],         // Options for the select dropdown, defaults to an empty array
      isSearchable = false, // Whether the select box is searchable, defaults to false
      isMulti = false,      // Whether multiple options can be selected, defaults to false
      indicator,            // Custom indicator component (e.g., dropdown arrow)
      shape,                // Optional shape prop
      variant = "fill",     // Variant style, defaults to "fill"
      size = "xs",          // Size style, defaults to "xs"
      color = "blue_gray_50", // Color style, defaults to "blue_gray_50"
      ...restProps          // Any additional props
    },
    ref                     // Forwarded ref to access the underlying Select component
  ) => {
    return (
      <>
        {/* Main Select component */}
        <Select
          ref={ref}
          options={options} // Options passed to react-select
          className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
          isSearchable={isSearchable} // Set search functionality
          isMulti={isMulti} // Allow multiple selections

          // Customize indicator (like a dropdown arrow) and separator visibility
          components={{
            IndicatorSeparator: () => null, // Remove the indicator separator
            ...(indicator && { DropdownIndicator: () => indicator }), // Use custom indicator if provided
          }}

          // Style overrides for different parts of the select component
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "none !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": { border: "none !important" },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#ffffff" : "transparent",
              color: state.isSelected ? "#006ce4" : "inherit",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#006ce4",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({
              ...base,
              zIndex: 999999,
            }),
            menu: (base) => ({
              ...base,
              minWidth: "max-content",
              width: "max-content",
            }),
          }}
          // Render the select menu in a portal to prevent overflow issues
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps} // Spread any additional props
        />
        {children} {/* Render any additional children */}
      </>
    );
  }
);

// Define prop types for the SelectBox component for type-checking
SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_50"]),
};

// Export the SelectBox component for use in other parts of the application
export { SelectBox };
