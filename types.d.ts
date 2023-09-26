interface ButtonProps {
	href: string;
	label: string;
	className?: string;
}

interface ProjectCardProps {
	project: string;
	title: string;
	src: string;
	description: string;
	direction: string;
}

interface InputProps {
	placeholder?: string;
	type?: string;
	className?: string;
	ref?: any;
}

interface ProgressBarProps {
	value: number;
	heading: string;
}

interface MenuItemProps {
	title: string;
	url: string;
}

type HandleToggle = () => void;
