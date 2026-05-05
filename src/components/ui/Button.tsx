import { Link } from 'react-router-dom';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'ghost';
  size?: 'normal' | 'small';
  to?: string;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>
  & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

function Button({ variant = 'primary', size = 'normal', to, className = '', children, ...props }: ButtonProps) {
  const classes = `button button-${variant} button-${size} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export default Button;
