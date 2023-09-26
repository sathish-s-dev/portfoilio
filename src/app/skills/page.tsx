'use client';
import ProgressBar from '@/components/ProgressBar';
import React, { useState } from 'react';
import { skills } from '@/constants';
import PageTransition from '@/components/PageTransition';

const Skills = () => {
	const [percentage, setPercentage] = useState(75);

	return (
		<PageTransition>
			<div className='flex-1 flex justify-center items-center'>
				<div className=' flex-1 flex flex-col gap-4 md:p-24 p-8  rounded-lg  backdrop-blur-sm '>
					<h2 className='text-3xl text-light-500'>My Skills</h2>
					<div className='flex flex-col gap-14'>
						{skills.map((skill, index) => (
							<div
								key={index}
								className='flex flex-col gap-6 flex-wrap'>
								<h3 className='text-xl text-light-500'>{skill.title}</h3>
								<div className='flex gap-8 flex-wrap'>
									{skill.tech.map((tech, index) => (
										<ProgressBar
											key={index}
											value={tech.percentage}
											heading={tech.name}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default Skills;
