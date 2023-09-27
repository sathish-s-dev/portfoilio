import Link from 'next/link';
import React from 'react';

import { footerItems } from '@/constants';
import { SocialIcons } from './SocialIcons';

const Footer = () => {
	return (
		<footer className='flex flex-col md:gap-4 p-6 border-t border-slate-100/10'>
			<div className='flex justify-center items-center gap-4 '>
				<SocialIcons />
			</div>
			<div className='text-[12px] text-slate-400 flex flex-col md:flex-row items-center gap-2 pt-6 justify-center md:justify-between'>
				<Link
					href={'/'}
					className=' flex items-start gap-2'>
					<span className='flex items-start gap-1'>
						Copyright<span className='text-[10px]'>©</span>
					</span>{' '}
					<span>2023 | All Rights Reserved</span>
				</Link>
				<span className='flex gap-4'>
					<Link href='/'>Privacy Policy</Link>
					<Link href='/'>Terms of use</Link>
				</span>
			</div>
		</footer>
	);
};

export default Footer;


