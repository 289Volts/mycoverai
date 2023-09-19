import Image from "next/image";
import videoIcon from "@/public/assets/icons/video-1.svg";
import horDots from "@/public/assets/images/horizontal-dots.svg";
import verDots from "@/public/assets/images/vertical-dots.svg";
import heroImg from "@/public/assets/images/hero-img.png";
import heroArr from "@/public/assets/images/hero-arrows.svg";
import arrow from "@/public/assets/icons/arrow-forward.svg";
import bolt from "@/public/assets/images/partners-bolt.png";
import bitma from "@/public/assets/images/partners-bitma.png";
import blackcopper from "@/public/assets/images/partners-blackcopper.png";
import ise from "@/public/assets/images/partners-ise.png";
import transtura from "@/public/assets/images/partners-transtura.png";
import soft from "@/public/assets/images/partners-soft.png";

export default function Home() {
  const images = [
    {
      src: bolt,
      alt: "Bolt logo",
    },
    {
      src: bitma,
      alt: "Bitmama logo",
    },
    {
      src: blackcopper,
      alt: "Blackcopper logo",
    },
    {
      src: ise,
      alt: "Dise logo",
    },
    {
      src: transtura,
      alt: "Transtura logo",
    },
    {
      src: soft,
      alt: "Soft Alliance logo",
    },
  ];
  return (
    <>
      <section className="relative mx-auto w-[90%] px-4 pt-[2rem] sm:px-0 sm:pt-[1.5rem] lg:w-auto lg:pl-[3rem] lg:pt-[4rem] xl:ml-auto xl:mr-0 xl:w-[90%] xl:px-0">
        <Image
          src={verDots}
          alt="icon to show view demo"
          className="absolute right-0 top-0 z-[-1] hidden xl:block"
          aria-hidden
        />

        <Image
          src={heroArr}
          alt="arrow heads facing north eastwards"
          className="absolute bottom-[-2rem] left-[-12%] hidden xl:block"
        />
        <div className="mb-7 hidden w-fit items-center gap-3 rounded-full bg-altGray-50 p-1 shadow-pill sm:mx-auto sm:flex md:gap-6 lg:mx-0 xl:mb-0">
          <span className="rounded-full bg-accent px-3 py-2 text-xs font-medium text-white shadow-button">
            Just in!
          </span>{" "}
          <div className="flex items-center gap-2">
            <p className="text-xs text-altGray-700 md:text-sm">
              Mycover.ai just launched their AI Inspection APP
            </p>
            <Image src={arrow} alt="icon to show view demo" />
          </div>
        </div>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-8 xl:gap-0 ">
          <div className="lg:w-[85%] xl:w-[90%]">
            <div className="mx-auto space-y-5 text-center sm:w-[80%] md:w-auto lg:space-y-8 lg:text-left xl:w-[85%]">
              <h1 className="sm:text-8 bg-heading bg-clip-text text-[1.75rem] font-bold leading-[1.3] text-transparent md:text-[2.7rem] xl:text-[3rem]">
                Revolutionizing the insurance experience in Africa
              </h1>
              <p className="text-altGray700 md:mx-auto md:w-[80%] lg:w-auto">
                Our Open Insurance API enables businesses and innovators easily
                embed or build new insurtech solutions to distribute insurance
                to anyone, from anywhere.{" "}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 sm:gap-8 lg:mt-[3rem] lg:justify-start">
              <button className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white">
                Get Started
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-altGray-100 px-5 py-3 text-sm font-medium text-altGray-900">
                View Demo <Image src={videoIcon} alt="icon to show view demo" />
              </button>
            </div>
          </div>
          <div className="relative mx-auto sm:w-[90%] lg:bg-white xl:w-[100%] xl:bg-transparent">
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
          <div className="flex hidden items-center justify-center gap-8">
            <button className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white">
              Get Started
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg bg-altGray-100 px-5 py-3 text-sm font-medium text-altGray-900">
              View Demo <Image src={videoIcon} alt="icon to show view demo" />
            </button>
          </div>
        </div>
      </section>
      <section className="pt-8 lg:pt-[9rem] mx-auto w-[90%] xl:w-[80%]">
        <div className="space-y-5 sm:space-y-0">
          <h2 className="text-[1.125rem] font-medium">
            Brands growing with us:
          </h2>
          <div className="grid grid-cols-2 items-center justify-items-center sm:flex sm:justify-between gap-8">
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className={`sm:w-auto ${
                  src === bitma ? "py-0" : "w-[110px] py-8"
                } ${src === bolt ? "w-[90px] " : ""}
                `}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
