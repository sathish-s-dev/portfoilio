import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

import { navItems } from '@/constants';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = ({ toggle }: { toggle: HandleToggle }) => {
	return (
		<motion.ul
			className={
				'absolute top-20 left-0 w-full overflow-hidden flex flex-col gap-6 mt-2'
			}
			variants={variants}>
			{navItems.map((i, index) => (
				<MenuItem
					i={i}
					index={index}
					key={i.title}
					handleToggle={toggle}
				/>
			))}
		</motion.ul>
	);
};
