import Image from 'next/image';
import videoIcon from '@/public/assets/icons/video-1.svg';
import horDots from '@/public/assets/images/horizontal-dots.svg';
import verDots from '@/public/assets/images/vertical-dots.svg';
import heroImg from '@/public/assets/images/hero-img.png';
import heroArr from '@/public/assets/images/hero-arrows.svg';
import arrow from '@/public/assets/icons/arrow-forward.svg';

export default function Home() {
	return (
		<>
			<section className="px-4">
				<div className="flex gap-3 md:gap-6 bg-altGray-50 shadow-pill p-1 items-center rounded-full mb-7">
					<span className="rounded-full py-2 px-3 bg-accent shadow-button text-white font-medium text-xs">
						Just in!
					</span>{' '}
					<div className="flex gap-2 items-center">
						<p className="text-xs text-altGray-700">Mycover.ai just launched their AI Inspection APP, </p>
						<Image
							src={arrow}
							alt="icon to show view demo"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-7 lg:flex-row lg:items-center">
					<div className="space-y-5 text-center">
						<h1 className="text-[2rem] font-bold bg-heading bg-clip-text text-transparent leading-[1.3] md:text-[2.7rem] lg:text-white">
							Revolutionizing the insurance experience in Africa
						</h1>
						<p className="text-altGray700 md:w-[80%] md:mx-auto">
							Our Open Insurance API enables businesses and innovators easily embed or build new insurtech solutions to
							distribute insurance to anyone, from anywhere.{' '}
						</p>
						<div className="flex items-center gap-8 justify-center hidden md:flex">
							<button className="py-3 px-5 bg-accent text-white text-sm font-medium rounded-lg">Get Started</button>
							<button className="py-3 text-altGray-900 px-5 bg-altGray-100 flex gap-2 items-center justify-center text-sm font-medium rounded-lg">
								View Demo{' '}
								<Image
									src={videoIcon}
									alt="icon to show view demo"
								/>
							</button>
						</div>
					</div>
					<div className="md:w-[90%] mx-auto">
						<Image
							src={heroImg}
							alt="hero-section image with a diagram of the company's services. It is on a map background"
						/>
					</div>
					<div className="flex items-center gap-8 justify-center md:hidden">
						<button className="py-3 px-5 bg-accent text-white text-sm font-medium rounded-lg">Get Started</button>
						<button className="py-3 text-altGray-900 px-5 bg-altGray-100 flex gap-2 items-center justify-center text-sm font-medium rounded-lg">
							View Demo{' '}
							<Image
								src={videoIcon}
								alt="icon to show view demo"
							/>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
