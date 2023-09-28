'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function JobText() {
	const text = 'Frontend Developer';
	return (
		<div className='flex items-start md:gap-0 flex-col'>
			<p className='text-xl md:text-2xl font-bold tracking-wider text-light-400'>
				I am a
			</p>{' '}
			<TypeAnimation
				sequence={[
					'FrontEnd Developer',
					1500,
					'UI/UX Designer',
					1500,
					'Native Developer',
					1500,
				]}
				wrapper='span'
				speed={60}
				className='text-3xl md:text-4xl capitalize whitespace-nowrap font-extrabold tracking-wider text-accent-300'
				repeat={Infinity}
			/>
		</div>
	);
}
