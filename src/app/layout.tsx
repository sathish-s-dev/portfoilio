import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'sathish | portfolio',
	description: 'The portfolio website of sathish.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={
					'dark:bg-slate-900 bg-slate-100 dark:text-slate-100 text-slate-800 max-w-6xl mx-auto flex flex-col min-h-screen background'
				}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
