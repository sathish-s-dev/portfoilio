'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { NavItems } from './NavItems';
import { MobileMenu } from './MobileMenu';

export function Header() {
	return (
		<header className='p-6 flex items-center gap-4 backdrop-blur-sm justify-between border-b border-slate-100/10 relative top-0 z-50'>
			<Link href='/'>
				<Image
					src={'/logo.svg'}
					width={150}
					height={80}
					alt='logo'
				/>
			</Link>
			<div className='flex gap-20 justify-center items-center'>
				<NavItems  className='hidden md:flex'/>
				<MobileMenu />
				<Button
					href='/contact'
					label="Let's talk"
					className='font-semibold md:block hidden'
				/>
			</div>
		</header>
	);
}
