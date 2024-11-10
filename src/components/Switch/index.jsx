// Import necessary libraries and types
import React from "react";
import SwitchProvider from "react-switch";
import PropTypes from "prop-types";

// Define variants with specific styles for the switch component
const variants = {
  swtFillBluegray20001: {
    offColor: "#a8b3cb",         // Background color when switch is off
    onColor: "#d50630",          // Background color when switch is on
    offHandleColor: "#ffffff",   // Handle color when switch is off
    onHandleColor: "#ffffff",    // Handle color when switch is on
  },
};

// Define sizes with dimensions for the switch component
const sizes = {
  xs: {                          // Extra-small size variant
    width: 40,                   // Width of the switch
    height: 20,                  // Height of the switch
  },
};

// Define the Switch component
const Switch = ({
  value = false,                 // Initial value, default is 'false'
  className,                     // CSS class for custom styling
  checkedIcon = <></>,           // Icon shown when switch is on
  uncheckedIcon = <></>,         // Icon shown when switch is off
  variant = "swtFillBluegray20001", // Style variant, default is 'swtFillBluegray20001'
  onChange,                      // Callback for when switch value changes
  size = "xs",                   // Size variant, default is 'xs'
}) => {
  // State to manage the switch value
  const [selected, setSelected] = React.useState(value);

  // Handle change in switch value and trigger onChange callback if provided
  const handleChange = (val) => {
    setSelected(val);             // Update internal state
    onChange?.(val);              // Call onChange prop if defined
  };

  // Render the SwitchProvider component with all props and selected styles
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}                         // Current value of switch
        onChange={handleChange}                    // Function to handle change
        {...variants[variant]}                     // Style based on variant
        {...sizes[size]}                           // Dimensions based on size
        checkedIcon={checkedIcon}                  // Icon for 'on' state
        uncheckedIcon={uncheckedIcon}              // Icon for 'off' state
      />
    </div>
  );
};

// Define expected prop types and default values
Switch.propTypes = {
  value: PropTypes.bool,                            // Boolean for initial switch state
  className: PropTypes.string,                      // CSS class
  checkedIcon: PropTypes.node,                      // Icon for 'on' state
  uncheckedIcon: PropTypes.node,                    // Icon for 'off' state
  onChange: PropTypes.func,                         // Callback on change
  size: PropTypes.oneOf(["xs"]),                    // Size variant
  variant: PropTypes.oneOf(["swtFillBluegray20001"]) // Style variant
};

// Export the Switch component for use in other files
export { Switch };
