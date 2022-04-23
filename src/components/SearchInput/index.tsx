import { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react';
import classnames from 'classnames';
import { debounce } from 'lodash';

import { MagnifierIcon } from 'components/Icons';

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  fullWidth?: boolean;
  delay?: number;
  icon?: ReactNode;
  onChange?: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, fullWidth, delay = 500, icon, onChange, ...rest }, ref) => {
    // debounce change for performance
    const handleChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    }, delay);

    // MagnifierIcon by default
    const startAdornment = useMemo(() => icon || <MagnifierIcon />, [icon]);

    return (
      <div
        className={classnames(className, 'relative px-4 items-center bg-gray3', {
          'w-full flex': fullWidth,
          'inline-flex': !fullWidth
        })}
      >
        <div className="h-px flex items-center">{startAdornment}</div>
        <label className="flex-1">
          <input
            ref={ref}
            className="w-full pl-1 py-2.5 text-sm border-none outline-none bg-transparent"
            onChange={handleChange}
            {...rest}
          />
        </label>
      </div>
    );
  }
);
