import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/public/assets/images/logo.svg';
import hamburger from '@/public/assets/icons/hamburger.svg';
import close from '@/public/assets/icons/close.svg';
import Image from 'next/image';

export default function Header() {
	const links = ['Products', 'Solutions', 'Developers', 'Company', 'Learn'];
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className="p-5 px-4 flex justify-between items-center lg:w-[90%] mx-auto lg:px-0 xl:w-[80%]">
			<Link
				href="/"
				className=""
			>
				<Image
					src={logo}
					className="w-[150px] text-gray"
					alt="company text logo which reads mycover.ai"
					priority
				/>
			</Link>
			<nav
				className={`${
					isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
				} absolute inset-0 bg-white transition duration-500 flex flex-col py-8 px-6 sm:w-[58%] z-[2] lg:translate-x-[0] lg:block lg:relative lg:w-fit lg:p-0 lg:bg-transparent`}
			>
				<button
					onClick={toggleNav}
					type="button"
					className="flex items-center justify-center self-end lg:hidden"
				>
					<Image
						src={close}
						className="w-6"
						alt="hamburger menu button to toggle navigation"
						priority
					/>
				</button>
				<ul className="space-y-3 mt-6 lg:mt-0 lg:space-y-0 lg:flex lg:gap-5 xl:gap-6">
					{links.map((link) => (
						<li
							className="text-lg text-altGray-800 font-medium lg:text-sm xl:p-2"
							key={link}
						>
							{link}
						</li>
					))}
				</ul>
				<div className="gap-4 mt-6 flex sm:hidden">
					<Link
						href=""
						className="py-3 px-5 text-altGray-600 w-1/2 text-center font-medium bg-gray100 rounded-lg"
					>
						Login
					</Link>
					<Link
						href=""
						className="py-3 px-5 text-white w-1/2 text-center font-medium rounded-lg bg-accent"
					>
						Get Started
					</Link>
				</div>
			</nav>
			<div
				role="button"
				aria-roledescription="Full screen div which serves as a trigger for closing the open navigation menu"
				tabIndex={0}
				onClick={toggleNav}
				className={`absolute inset-0 bg-black/50 z-[1] ${
					isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
				} hidden sm:block lg:hidden`}
			/>
			<div className="flex items-center gap-6">
				<div className="space-x-5 hidden sm:flex">
					<Link
						href=""
						className="py-3 px-5 text-altGray-600 text-sm font-medium bg-gray100 rounded-lg"
					>
						Login
					</Link>
					<Link
						href=""
						className="py-3 px-5 text-white text-sm font-medium rounded-lg bg-accent"
					>
						Get Started
					</Link>
				</div>
				<button
					onClick={toggleNav}
					type="button"
					className="flex items-center justify-center lg:hidden"
				>
					<Image
						src={hamburger}
						className="w-6"
						alt="hamburger menu button to toggle navigation"
						priority
					/>
				</button>
			</div>
		</header>
	);
}
