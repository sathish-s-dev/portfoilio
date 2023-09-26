import Image from 'next/image';
import React from 'react';
import PageTransition from '@/components/PageTransition';

const About = () => {
	return (
		<PageTransition>
			<div className='flex-1 flex justify-center items-center'>
				<div className='relative z-24 p-16 flex justify-center items-center'>
					<div className='absolute w-24 h-24 -z-20 rounded-full bg-accent-300 top-6 left-6' />
					{/* light */}
					<div className='absolute w-72 h-72 top-3 left-3 -z-20 rounded-full bg-accent-400 blur-[140px]' />

					<div className='flex flex-col-reverse md:flex-row bg-light-400/5 border border-light-400/50 rounded-xl flex-1 max-w-3xl p-6 py-12 md:p-20 backdrop-blur-xl md:gap-8 text-light-400 z-24'>
						<div className='overflow-hidden flex justify-center'>
							<Image
								className=''
								src={'/hero_img.webp'}
								width={200}
								height={150}
								alt='hero image'
							/>
						</div>
						<div className='flex-1 flex gap-5 items-center md:items-start justify-center flex-col'>
							<h2 className='sub_heading tracking-wide md:tracking-widest'>
								Who Am I ?
							</h2>
							<p className='tracking-wide md:tracking-widest'>
								Hello! I&#39;m Sathish. S a passionate React developer with a
								strong drive to create seamless and user-centric web
								experiences. Welcome to my portfolio, where I showcase my
								projects, skills, and journey in the world of web development.
							</p>
						</div>
					</div>
					{/* <div className='absolute w-24 h-24 -z-20 rounded-full bg-accent-300 bottom-2 right-2 blur-sm' /> */}
					<div className='absolute w-24 h-24 -z-20 rounded-full bg-light-400 bottom-6 right-6' />
					{/*  */}
					<div className='absolute w-72 h-72 bottom-3 right-3 -z-20 rounded-full bg-light-400 blur-[140px]' />
				</div>
			</div>
		</PageTransition>
	);
};

export default About;

/**
 * 
 * 
 * <div className='flex-1'>
			<div className='outer_gradient -z-20'>
				<div className='inner_gradient -z-0 overflow-hidden flex justify-center'>
					<Image
						className='absolute z-10'
						src={'/hero_img.webp'}
						width={200}
						height={150}
						alt='hero image'
					/>
				</div>
			</div>
		</div>
 */
