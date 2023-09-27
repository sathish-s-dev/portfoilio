'use client';
import Link from 'next/link';
import { IconContext } from 'react-icons';

import { footerItems } from '@/constants';

export function SocialIcons() {
	return (
		<>
			{footerItems.map((item) => (
				<Link
					className='border-accent-400 text-accent-300 border p-2 rounded-full hover:scale-105 focus:scale-105 hover:border-white hover:text-white'
					key={item.title}
					href={'#'}>
					{item.icon}
				</Link>
			))}
		</>
	);
}
