import * as React from 'react';
import { motion } from 'framer-motion';

const Path = (props: any) => (
	<motion.path
		fill='transparent'
		strokeWidth='2'
		stroke='#CCD6F6'
		strokeLinecap='round'
		{...props}
	/>
);

export const MenuToggle = ({ toggle }: { toggle: HandleToggle }) => {
	return (
		<button
			className='outline-none border-none cursor-pointer absolute top-[22px] right-[13px] w-[50px] h-[40px] rounded-full bg-transparent'
			title='menu toggle'
			onClick={toggle}>
			<svg
				width='23'
				height='23'
				viewBox='0 0 23 23'>
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					d='M 2 9.423 L 20 9.423'
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</button>
	);
};
