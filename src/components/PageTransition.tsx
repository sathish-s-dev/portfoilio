'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { pageTransitionVariant } from '@/constants';
const { hidden, enter, exit } = pageTransitionVariant;

const PageTransition = ({ children }: { children: ReactNode }) => {
	return (
		<motion.main
			initial={hidden}
			animate={enter}
			transition={{
				type: 'spring',
				damping: 7,
			}}
			exit={exit}>
			{children}
		</motion.main>
	);
};

export default PageTransition;
