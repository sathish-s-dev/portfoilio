import * as React from 'react';
import { useRef } from 'react';
import { motion, sync, useCycle } from 'framer-motion';
import { useDimensions } from '@/hooks/useDimenstions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 82% 4.5% )`,
		transition: {
			type: 'spring',
			stiffness: 10,
			restDelta: 2,
			damping: 5,
		},
		// transition: {
		// 	type: 'tween',
		// 	duration: 1.5,
		// },
	}),
	closed: {
		clipPath: 'circle(0px at 82% 4.5%)',
		transition: {
			delay: 0,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
		// transition: {
		// 	type: 'tween',
		// 	duration: 0.5,
		// },
	},
};

export const MobileMenu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	const handleToggle = () => {
		toggleOpen();
	};

	return (
		<motion.nav
			initial={false}
			className={`absolute top-0 right-0 bottom-0 min-h-screen w-72 md:hidden z-50`}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}>
			<motion.div
				className={
					'absolute top-0 right-0 bottom-0 min-h-screen w-72 bg-accent-400 border backdrop-blur-3xl border-light-400/50 '
				}
				variants={sidebar}
			/>
			<Navigation
				toggle={handleToggle}
				isOpen={isOpen}
			/>
			<MenuToggle toggle={handleToggle} />
		</motion.nav>
	);
};
