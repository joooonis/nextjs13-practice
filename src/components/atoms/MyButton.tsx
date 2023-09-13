import React from 'react';
import { cva, type VariantProps } from 'cva';

const button = cva('button', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white border-transparent hover:bg-blue-600',
      secondary:
        'bg-gray-300 text-gray-700 border-transparent hover:bg-gray-400',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-4',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    { intent: 'primary', size: 'medium', className: 'uppercase' },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const MyButton: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  fullWidth,
  ...props
}) => (
  <button
    className={button({ intent, size, fullWidth, className })}
    {...props}
  />
);
