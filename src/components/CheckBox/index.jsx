import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const variants = {
  primary:
    'border-indigo-100 border-2 border-solid checked:border-blue-600 checked:border-[3px] checked:border-solid checked:bg-white-a700 checked:focus:bg-white-a700 checked:focus:border-blue_gray-600 checked:hover:bg-white-a700 checked:hover:border-blue_gray-600',
};

const sizes = {
  xs: 'h-[20px] w-[20px] rounded-sm',
};

const CheckBox = React.forwardRef(
  (
    {
      className,
      name,
      label,
      id = 'checkbox_id',
      onChange,
      variant = 'primary',
      size = 'xs',
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <div className={`${className} flex items-center gap-[5px] cursor-pointer`}>
        <input
          className={`${(size && sizes[size]) || ''} ${(variant && variants[variant]) || ''}`}
          ref={ref}
          type="checkbox"
          name={name}
          onChange={handleChange}
          id={id}
          {...restProps}
        />
        {!!label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(['xs']),
  variant: PropTypes.oneOf(['primary']),
};

export { CheckBox };