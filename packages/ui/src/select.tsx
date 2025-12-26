import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

type OptionType = string | { value: string; label: string };

interface SelectProps extends SelectPrimitive.SelectProps {
  options?: OptionType[];
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, options, ...props }, ref) => (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger ref={ref} className="px-3 py-2 border rounded bg-background">
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content className="bg-popover border rounded shadow-lg">
        <SelectPrimitive.Viewport>
          {options
            ? options.map((opt, idx) => {
                if (typeof opt === 'string') {
                  return (
                    <SelectPrimitive.Item
                      key={opt}
                      value={opt}
                      className="px-3 py-2 cursor-pointer"
                    >
                      {opt}
                    </SelectPrimitive.Item>
                  );
                } else {
                  return (
                    <SelectPrimitive.Item
                      key={opt.value}
                      value={opt.value}
                      className="px-3 py-2 cursor-pointer"
                    >
                      {opt.label}
                    </SelectPrimitive.Item>
                  );
                }
              })
            : children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
);
Select.displayName = 'Select';
