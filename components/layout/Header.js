import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/public/assets/images/logo.svg';
import hamburger from '@/public/assets/icons/hamburger.svg';
import close from '@/public/assets/icons/close.svg';
import Image from 'next/image';

export default function Header() {
	const links = ['Products', 'Solutions', 'Developers', 'Company', 'Learn'];
	const [isOpen, setIsOpen] = useState(true);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className="p-5 px-4 flex justify-between items-center">
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
				} absolute inset-0 bg-white transition duration-500 flex flex-col py-9 px-6`}
			>
				<button
					onClick={toggleNav}
					type="button"
					className="flex items-center justify-center self-end"
				>
					<Image
						src={close}
						className="w-5"
						alt="hamburger menu button to toggle navigation"
						priority
					/>
				</button>
				<ul className="space-y-3 mt-7">
					{links.map((link) => (
						<li
							className="text-lg text-altGray-800 font-medium"
							key={link}
						>
							{link}
						</li>
					))}
				</ul>
				<div className="gap-4 mt-6 flex">
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
			<div className="flex items-center gap-6">
				<div className="space-x-5 hidden md:block">
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
					className="flex items-center justify-center"
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
