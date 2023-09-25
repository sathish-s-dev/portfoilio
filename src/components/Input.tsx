import React from 'react';
import { InputProps } from '../../types';

const Input = ({ type, placeholder, className, ref }: InputProps) => {
	return (
		<input
			type={type || 'text'}
			placeholder={placeholder}
			className={`p-2 bg-inherit border-b border-light-400 focus-within:ring-0 focus:outline-none ${className}`}
			ref={ref}
		/>
	);
};

export default Input;
