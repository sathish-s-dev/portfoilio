import Link from 'next/link';
import React from 'react';

const Button = ({ href, label, className }: ButtonProps) => {
	if (href)
		return (
			<Link
				className={`px-4 py-2 text-light-500 bg-accent-400 hover:bg-accent-400/90 rounded-md ${className}`}
				href={href}>
				{label}
			</Link>
		);
};

export default Button;
