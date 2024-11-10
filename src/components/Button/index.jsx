import React from 'react';
import PropTypes from 'prop-types';

const shapes = {
  circle: 'rounded-[50%]',
  round: 'rounded',
};

const variants = {
  fill: {
    red_900: 'bg-red-900 text-white-a700',
    red_800: 'bg-red-800 text-white-a700',
    white_A700: 'bg-white-a700 text-blue-760',
    amber_600_01: 'bg-amber-600 text-white-a700',
  },
  outline: {
    indigo_100: 'border-indigo-100 border border-solid',
  },
};

const sizes = {
  '6x1': 'h-[52px] px-8 text-[20px]',
  sm: 'h-[28px] px-2 text-[14px]',
  lg: 'h-[36px] px-3',
  '2x1': 'h-[40px] px-3',
  '7x1': 'h-[72px] px-[34px] text-[14px]',
  '5x1': 'h-[48px] px-3.5 text-[14px]',
  md: 'h-[32px] px-4 text-[13px]',
  '3x1': 'h-[44px] px-2.5',
  xs: 'h-[24px] px-4 text-[14px]',
  '4x1': 'h-[44px] px-2.5 text-[14px]',
  xl: 'h-[36px] px-4 text-[13px]',
};

const Button = ({
  children,
  className,
  leftIcon,
  rightIcon,
  shape,
  variant = 'fill',
  size = 'xl',
  color = 'amber_600_01',
  ...restProps
}) => {
  return (
    <button
      className={`
        ${className}
        flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap 
        ${shape &&  shapes[shape]} ${size &&  sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(['circle', 'round']),
  size: PropTypes.oneOf([
    '6x1',
    'sm',
    'lg',
    '2x1',
    '7x1',
    '5x1',
    'md',
    '3x1',
    'xs',
    '4x1',
    'xl',
  ]),
  variant: PropTypes.oneOf(['fill', 'outline']),
  color: PropTypes.oneOf([
    'red_900',
    'red_800',
    'white_A700',
    'amber_600_01',
    'indigo_100',
  ]),
};

export default Button;