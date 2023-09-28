import Image from 'next/image';
import Button from '../../components/Button';
import PageTransition from '@/components/PageTransition';
import { JobText } from '@/components/JobText';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
	return (
		<PageTransition>
			<div className='flex flex-1 flex-col md:flex-row items-center justify-center md:justify-between p-6 py-16 md:p-10 md:py-28 gap-8'>
				<div className='flex-1 flex justify-center flex-col gap-4  h-full w-full rounded-md bg-clip-padding md:items-start md:py-24'>
					<h2 className='text-3xl md:text-5xl capitalize font-bold tracking-wider text-light-400'>
						hi i&apos;m{' '}
						<span className='uppercase text-accent text-accent-300 '>
							Sathish
						</span>
					</h2>
					<JobText />

					<p className='text-light-400 text-[12px] max-w-xs md:text-sm capitalize md:max-w-md md:text-start tracking-widest'>
						{' '}
						I make meaningful and delightful digital products that create an
						equilibrium between user needs and business goals.
					</p>
					<Button
						href='/contact'
						label='Hire Me'
						className='font-semibold self-start'
					/>
				</div>
				<div className='flex-1 w-full justify-center flex relative items-center'>
					<Image
						src='/hero_img.webp'
						alt='hero image'
						width={450}
						height={350}
						className='object-cover w-72 h-[400px] rounded-b-[150px] overlay'
						priority
					/>
				</div>
			</div>
		</PageTransition>
	);
}
