'use client';

import { FormEvent, useRef } from 'react';
import Input from './Input';

const GetInTouch = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		let name = nameRef.current?.value;
		let message = messageRef.current?.value;
		let email = emailRef.current?.value;
		console.log(nameRef, messageRef, emailRef);
	};

	return (
		<form
			className='flex flex-col gap-6 mt-4'
			onSubmit={handleSubmit}>
			{/* <Input
				placeholder='name'
				ref={nameRef}
			/>
			<Input
				placeholder='email'
				ref={messageRef}
			/>
			<Input
				placeholder='message'
				ref={emailRef}
				className='py-4'
			/> */}
			<input
				type='text'
				ref={nameRef}
				className={`p-2 bg-inherit border-b border-light-400 focus-within:ring-0 focus:outline-none`}
				placeholder='name'
			/>
			<input
				type='email'
				ref={emailRef}
				className={`p-2 bg-inherit border-b border-light-400 focus-within:ring-0 focus:outline-none`}
				placeholder='email'
			/>
			<input
				type='text'
				ref={messageRef}
				className={`p-2 bg-inherit border-b border-light-400 focus-within:ring-0 focus:outline-none`}
				placeholder='message'
			/>

			<button className='px-4 py-2 rounded-md bg-accent-400 self-start'>
				send message
			</button>
		</form>
	);
};

export default GetInTouch;
