import Image from 'next/image';
import React from 'react';
import { SocialIcons } from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';

const Contact = () => {
	return (
		<div className='flex-1 flex justify-center items-center'>
			<div className='p-6 md:p-24 flex flex-col gap-10 max-w-5xl'>
				<div className='flex flex-col md:flex-row gap-4 bg-light-400/5 rounded-lg border p-6 md:p-16 flex-1'>
					<div className='flex-1 '>
						<h2 className='text-xl tracking-wide text-accent-400 font-semibold'>
							Get In Touch
						</h2>
						<GetInTouch />
					</div>
					<div className='flex-1 flex flex-col md:flex-row'>
						<Image
							src='/illustration.svg'
							alt='web design illustration'
							className='w-full h-full object-contain'
							width={350}
							height={350}
						/>
					</div>
				</div>
				<div className=' flex-1 flex flex-col md:flex-row gap-4 bg-light-400/5 rounded-lg border p-8 md:p-16 justify-center items-center'>
					<div className='flex-1 flex flex-col gap-3 max-w-md'>
						<h2 className='text-xl tracking-wide text-accent-400 font-semibold'>
							Social Links
						</h2>
						<p className='text-sm text-light-400'>
							I&#39;m currently looking to join a cross-functional team that
							values improving people&#39;s lives through accessible design. or
							have a project in mind? Let&#39;s connect.
						</p>
					</div>
					<div className='flex flex-col justify-center gap-4 p-10 items-center'>
						<h2 className='text-xl tracking-wide text-accent-400 font-semibold'>
							Contact
						</h2>
						<div className='flex gap-4 flex-wrap'>
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
