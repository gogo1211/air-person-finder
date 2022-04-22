import { forwardRef, InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
  return <input ref={ref} className="" {...props} />;
});
