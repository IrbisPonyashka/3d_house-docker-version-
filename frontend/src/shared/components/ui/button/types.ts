import { ComponentProps } from 'react';

export type ButtonVariant =
  | 'default'
  | 'secondary'
  | 'outlined'
  | 'outlinedAccent'
  | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ComponentProps<'button'> {
  variant: ButtonVariant;
  size: ButtonSize;
  isLoading?: boolean;
}
