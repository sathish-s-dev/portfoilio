import React from 'react';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeperators';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ value, heading }: ProgressBarProps) => {
	return (
		<div className='flex justify-center items-center flex-col gap-4 w-44 bg-slate-100/5 p-10 border border-light-400/50 rounded-xl shadow-md hover:scale-105 hover:cursor-pointer shadow-light-400/10'>
			<CircularProgressbarWithChildren
				value={value}
				text={`${value}%`}
				strokeWidth={10}
				styles={buildStyles({
					strokeLinecap: 'butt',
					pathColor: '#FF6839',
					textColor: '#CCD6F6',
				})}>
				<RadialSeparators
					count={10}
					style={{
						background: '#CCD6F6',
						width: '2px',
						// This needs to be equal to props.strokeWidth
						height: `${10}%`,
					}}
				/>
			</CircularProgressbarWithChildren>
			<p>{heading}</p>
		</div>
	);
};

export default ProgressBar;
