import Image from 'next/image';
import React from 'react';
import { ProjectDetails } from './ProjectDetails';

const ProjectCard = (props: ProjectCardProps) => {
	const { src, direction } = props;
	return (
		<div
			className={`max-w-2xl flex py-4 md:justify-center md:flex-row ${
				direction === 'right' ? 'flex-col-reverse items-end' : 'flex-col'
			} md:items-center cursor-pointer`}>
			{direction === 'left' ? (
				<>
					<ProjectDetails {...props} />
					<div className='w-48 h-48 overflow-hidden rounded-md flex items-end justify-end bg-gradient-to-tl from-transparent via-light-400/5 to-light-400/10'>
						<Image
							src={src}
							alt='click'
							width={24}
							className='opactiy-0.8 w-[90%] h-[90%]
          '
							height={24}
						/>
					</div>
				</>
			) : (
				<>
					<div className='w-48 h-48  overflow-hidden rounded-md flex items-end justify-start bg-gradient-to-tr from-transparent via-light-400/5 to-light-400/10'>
						<Image
							src={src}
							alt='click'
							width={24}
							className='opactiy-0.8 w-[90%] h-[90%]
              '
							height={24}
						/>
					</div>
					<ProjectDetails {...props} />
				</>
			)}
		</div>
	);
};

export default ProjectCard;
