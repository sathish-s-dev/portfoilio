
import { navItems } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export function NavItems() {
	const pathName = usePathname();
	console.log(pathName);
	return (
		<nav className='hidden lg:gap-6 md:gap-4 md:flex'>
			{navItems.map((item, index) => (
				<Link
					className={`font-semibold hover:scale-105 hover:drop-shadow-xl shadow-accent-400 hover:text-accent-300 transition-all duration-100 ${
						pathName === item.url
							? 'text-accent-400  hover:drop-shadow-2xl hover:text-acc'
							: 'text-slate-300'
					}`}
					key={index}
					href={item.url}>
					{item.title}
				</Link>
			))}
		</nav>
	);
}
