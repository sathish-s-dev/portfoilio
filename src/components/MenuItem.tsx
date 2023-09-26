'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			origin: 0,
			y: { stiffness: 1000 },
		},
	},
};

// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ i, index }: { i: MenuItemProps; index: number }) => {
	const pathName = usePathname();

	return (
		<motion.li
			className={`flex flex-col w-full justify-center items-center p-3 ${
				pathName === i.url ? 'bg-light-400 text-accent-500' : ' text-light-400'
			}`}
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 1 }}>
			<Link
				className={``}
				href={i.url}>
				{i.title}
			</Link>
		</motion.li>
	);
};
