import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  withArrow?: boolean;
  className?: string;
}

export function Button({ variant = 'primary', withArrow, className, children, ...props }: PropsWithChildren<ButtonProps>) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer';
  const variants = {
    primary: 'bg-[#2C2B29] text-white hover:bg-black',
    secondary: 'bg-[#F2efe9] text-[#2C2B29] hover:bg-[#e8e4dc]',
    outline: 'border border-[#2C2B29] text-[#2C2B29] hover:bg-gray-50',
    ghost: 'text-[#2C2B29] hover:text-black hover:opacity-80'
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
