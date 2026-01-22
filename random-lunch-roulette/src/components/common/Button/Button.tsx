import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props
}: ButtonProps) => {
  const combinedClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className={styles.spinner} /> : children}
    </button>
  );
};
