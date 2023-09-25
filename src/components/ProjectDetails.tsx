import Image from "next/image";

export function ProjectDetails({
	project,
	title,
	description,
	direction,
}: ProjectCardProps) {
	return (
		<div
			className={`flex-1 flex flex-col p-2 ${
				direction === 'right' ? 'text-right' : 'text-left'
			}`}>
			<p className='text-[12px] text-light-400'>{project}</p>
			<h3 className='text-lg uppercase tracking-wider font-semibold pb-4'>
				{title}
			</h3>
			<div
				className={`bg-light-400/10 w-full text-start p-4 relative border border-light-400/40 rounded-xl backdrop-blur-lg my-4 ${
					direction === 'right' ? 'md:right-10 right-0' : 'md:left-10 left-0'
				}`}>
				<p className='text-sm'>{description}</p>
			</div>
			<div
				className={`flex gap-3 relative ${
					direction === 'right'
						? 'md:right-10 right-0 justify-end'
						: 'md:left-10 left-0'
				}`}>
				<Image
					src={'/click-icon.svg'}
					alt='click'
					width={24}
					height={24}
					className='opactiy-0.8'
				/>
				<Image
					src={'/click-icon.svg'}
					alt='click'
					width={24}
					className='opactiy-0.8'
					height={24}
				/>
			</div>
		</div>
	);
}
