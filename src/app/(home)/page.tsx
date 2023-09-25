import Image from 'next/image';
import Button from '../../components/Button';

export default function Home() {
	return (
		<main className='flex flex-1 flex-col md:flex-row items-center justify-center md:justify-between p-6 py-16 md:p-10 md:py-28 gap-8'>
			<div className='flex-1 flex justify-center flex-col gap-4  h-full w-full rounded-md bg-clip-padding items-center md:items-start md:py-24'>
				<h2 className='text-5xl md:text-6xl capitalize font-bold tracking-wider'>
					hi i&apos;m{' '}
					<span className='uppercase text-accent text-accent-300 '>
						Sathish
					</span>
				</h2>
				<h3 className='text-3xl font-semibold text-light-500 tracking-wider'>
					Junior Front-end Developer
				</h3>
				<p className='text-light-400 text-sm capitalize max-w-md md:text-start text-center tracking-widest'>
					{' '}
					I make meaningful and delightful digital products that create an
					equilibrium between user needs and business goals.
				</p>
				<Button
					href='/contact'
					label='Hire Me'
					className='font-semibold'
				/>
			</div>
			<div className='flex-1 w-full justify-center flex h-full relative items-center'>
				<Image
					src='/hero_img.webp'
					alt='hero image'
					width={450}
					height={350}
					className='object-cover w-72 rounded-b-3xl'
				/>
				{/* <div className='absolute  -bottom-14 inset-8 -z-10 blob_bg backdrop:blur-xl rounded-t-full rounded-b-full' /> */}
				{/* <div className='absolute top-48 left-28 right-28 bottom-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500 via-emerald-200 to-emerald-100 backdrop:blur-xl rounded-t-full rounded-b-full overflow-clip' /> */}
			</div>
		</main>
	);
}
