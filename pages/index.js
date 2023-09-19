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
			<section className="px-4 sm:px-0 pt-[2rem] sm:pt-[1.5rem] lg:pt-[4rem] relative w-[90%] mx-auto lg:w-auto lg:pl-[3rem] xl:w-[90%] xl:ml-auto xl:mr-0 xl:px-0">
				<Image
					src={verDots}
					alt="icon to show view demo"
					className="top-0 absolute right-0 z-[-1] hidden xl:block"
					aria-hidden
				/>

				<Image
					src={heroArr}
					alt="arrow heads facing north eastwards"
					className="absolute bottom-[-2rem] left-[-12%] hidden xl:block"
				/>
				<div className="sm:flex hidden gap-3 md:gap-6 bg-altGray-50 shadow-pill p-1 items-center rounded-full mb-7 xl:mb-0 w-fit sm:mx-auto lg:mx-0">
					<span className="rounded-full py-2 px-3 bg-accent shadow-button text-white font-medium text-xs">
						Just in!
					</span>{' '}
					<div className="flex gap-2 items-center">
						<p className="text-xs text-altGray-700 md:text-sm">Mycover.ai just launched their AI Inspection APP</p>
						<Image
							src={arrow}
							alt="icon to show view demo"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-8 xl:gap-0 ">
					<div className="xl:w-[90%] lg:w-[85%]">
						<div className="space-y-5 text-center lg:text-left lg:space-y-8 xl:w-[85%] sm:w-[80%] md:w-auto mx-auto">
							<h1 className="text-[1.75rem] sm:text-8 font-bold bg-heading bg-clip-text text-transparent leading-[1.3] md:text-[2.7rem] xl:text-[3rem]">
								Revolutionizing the insurance experience in Africa
							</h1>
							<p className="text-altGray700 md:w-[80%] md:mx-auto lg:w-auto">
								Our Open Insurance API enables businesses and innovators easily embed or build new insurtech solutions
								to distribute insurance to anyone, from anywhere.{' '}
							</p>
						</div>
						<div className="mt-8 items-center gap-6 sm:gap-8 justify-center flex lg:justify-start lg:mt-[3rem]">
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
					<div className="sm:w-[90%] mx-auto xl:w-[100%] lg:bg-white xl:bg-transparent relative">
						<Image
							src={heroImg}
							alt="hero-section image with a diagram of the company's services. It is on a map background"
						/>
						<Image
							aria-hidden
							src={horDots}
							alt="green dots stacked horizontally"
							className="absolute bottom-[-6rem] left-8 hidden xl:block"
						/>
					</div>
					<div className="flex items-center gap-8 justify-center hidden">
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
