import * as React from 'react';
import { CheckIcon } from 'lucide-react';
import { cn } from './utils';

export interface CheckProps extends React.HTMLAttributes<HTMLSpanElement> {
  checked?: boolean;
}

export const Check = React.forwardRef<HTMLSpanElement, CheckProps>(
  ({ checked = false, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded border border-input bg-background text-primary transition-colors',
        checked ? 'bg-primary text-primary-foreground' : '',
        className
      )}
      {...props}
    >
      {checked && <CheckIcon className="w-4 h-4" />}
    </span>
  )
);
Check.displayName = 'Check';
