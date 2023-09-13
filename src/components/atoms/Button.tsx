import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'font-semibold py-2 w-28 rounded-md hover:opacity-80 transition duration-200',
        {
          'bg-primary-black text-primary-white': variant === 'solid',
          'bg-prtext-primary-white hover:bg-gray-100 border-2 border-gray-300':
            variant === 'outline',
        }
      )}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
