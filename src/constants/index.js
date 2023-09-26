export const navItems = [
	{
		title: 'About',
		url: '/about',
	},
	{
		title: 'Skills',
		url: '/skills',
	},
	{
		title: 'Projects',
		url: '/projects',
	},
	{
		title: 'Website',
		url: '#',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
];

export const footerItems = [
	{
		title: 'instagram',
		url: '#',
		icon: '',
	},
	{
		title: 'facebook',
		url: '#',
		icon: '',
	},
	{
		title: 'github',
		url: '#',
		icon: '',
	},
	{
		title: 'linkedIn',
		url: '#',
		icon: '',
	},
];

export const skills = [
	{
		title: 'UI Design',
		tech: [
			{
				name: 'PhotoShop',
				percentage: 80,
			},
			{
				name: 'Figma',
				percentage: 70,
			},
		],
	},
	{
		title: 'Web Design',
		tech: [
			{
				name: 'HTML 5',
				percentage: 90,
			},
			{
				name: 'CSS 3',
				percentage: 85,
			},
			{
				name: 'Java Script',
				percentage: 85,
			},
		],
	},
	{
		title: 'FrameWorks',
		tech: [
			{
				name: 'React Js',
				percentage: 85,
			},
			{
				name: 'Next Js',
				percentage: 60,
			},
			{
				name: 'Express Js',
				percentage: 85,
			},
		],
	},
	{
		title: 'VCS',
		tech: [
			{
				name: 'Git',
				percentage: 75,
			},
			{
				name: 'Git Hub',
				percentage: 70,
			},
		],
	},
];

export const pageTransitionVariant = {
	hidden: {
		opacity: 0,
		x: -50,
	},
	enter: {
		opacity: 1,
		x: 0,
	},
	exit: {
		opacity: 0,
		x: 50,
	},
};
