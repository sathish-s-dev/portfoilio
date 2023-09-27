import { useCycle, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { navItems } from '@/constants';
import { usePathname } from 'next/navigation';

const variants = {
	container: {
		hidden: {
			clipPath: 'circle(30px at 80% 10%)',
			transition: {
				delay: 2,
				type: 'spring',
				stiffness: 400,
				damping: 40,

				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
		show: (height = 300) => ({
			clipPath: `circle(${height * 2 + 200}px at 80% 5%)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
				staggerChildren: 0.07,
				delayChildren: 0.2,
			},
		}),
	},
	link: {
		hidden: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 50 },
			},
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 50, velocity: -100 },
			},
		},
	},
};

const MobileMenu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const pathName = usePathname();

	return (
		<div
			className='text-2xl cursor-pointer relative md:hidden block'
			onClick={() => toggleOpen()}>
			{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
			{isOpen ? (
				<motion.div
					variants={variants.container}
					initial='hidden'
					animate='show'
					className='bg-accent-400 w-72 h-screen absolute -top-8 -right-6 -z-10'>
					<nav className='flex-col gap-4 text-[16px] relative flex top-20 items-strech text-center '>
						{navItems.map((item, index) => (
							<motion.li
								variants={variants.link}
								key={index}
								className={`list-none ${
									pathName === item.url
										? 'text-accent-400 bg-light-400 hover:drop-shadow-2xl hover:text-accent-500'
										: 'text-slate-300'
								}`}>
								<Link
									className={`font-semibold hover:scale-105 hover:drop-shadow-xl origin-left transition-all duration-100 p-2 `}
									href={item.url}>
									{item.title}
								</Link>
							</motion.li>
						))}
					</nav>
				</motion.div>
			) : null}
		</div>
	);
};

export default MobileMenu;
