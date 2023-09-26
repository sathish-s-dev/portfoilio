import PageTransition from '@/components/PageTransition';
import ProjectCard from '@/components/ProjectCard';
import React from 'react';

const Projects = () => {
	return (
		<PageTransition>
			<div className='flex-1 flex flex-col gap-6 items-center my-12 p-6 md:p-16'>
				<h2 className='sub_heading w-full max-w-3xl tracking-wider'>
					Projects
				</h2>
				<div className='flex flex-col md:gap-14'>
					<ProjectCard
						src='/night.jpg'
						project='Feature Project'
						title='Example Project'
						description='A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track.'
						direction='left'
					/>
					<ProjectCard
						src='/night.jpg'
						project='Feature Project'
						title='Example Project'
						description='A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track.'
						direction='right'
					/>
					<ProjectCard
						src='/night.jpg'
						project='Feature Project'
						title='Example Project'
						description='A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track.'
						direction='left'
					/>
					<ProjectCard
						src='/night.jpg'
						project='Feature Project'
						title='Example Project'
						description='A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track.'
						direction='right'
					/>
					<ProjectCard
						src='/night.jpg'
						project='Feature Project'
						title='Example Project'
						description='A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track.'
						direction='left'
					/>
				</div>
			</div>
		</PageTransition>
	);
};

export default Projects;
