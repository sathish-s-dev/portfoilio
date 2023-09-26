import * as React from 'react';
import { useRef } from 'react';
import { motion, sync, useCycle } from 'framer-motion';
import { useDimensions } from '@/hooks/useDimenstions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 82% 6% )`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(25px at 82% 6.25%)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const MobileMenu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);


	return (
		<motion.nav
			initial={false}
			className={`absolute top-0 right-0 bottom-0 min-h-screen w-72 md:hidden z-50`}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}>
			<motion.div
				className={"absolute top-0 right-0 bottom-0 min-h-screen w-72 bg-accent-400 border backdrop-blur-3xl border-light-400/50 "}
				variants={sidebar}
			/>
			<Navigation  />
			<MenuToggle toggle={() => toggleOpen()} />
		</motion.nav>
	);
};
