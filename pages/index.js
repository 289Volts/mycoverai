import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import tetris from "@/public/assets/icons/tetris.png";
import globe from "@/public/assets/icons/globe.png";
import lock from "@/public/assets/icons/lock.png";
import jigsaw from "@/public/assets/icons/jigsaw.png";
import house from "@/public/assets/icons/sector-house.png";
import car from "@/public/assets/icons/sector-car.png";
import gadgets from "@/public/assets/icons/sector-gadgets.png";
import travel from "@/public/assets/icons/sector-travel.png";
import heart from "@/public/assets/icons/sector-health.png";
import chevRight from "@/public/assets/icons/chevron-right.png";
import eclipse from "@/public/assets/icons/ellipse.png";
import dashboard from "@/public/assets/images/dashboard.png";
import form from "@/public/assets/images/form.png";
import codesnap from "@/public/assets/images/codesnap.png";
import rectangleBlue from "@/public/assets/images/rectangle-blue.png";
import rectangleBlack from "@/public/assets/images/black-rect.png";
import triangle from "@/public/assets/images/triangle.png";
import arrowUp from "@/public/assets/images/tools-arrow-up.png";
import arrowDown from "@/public/assets/images/tools-arrow-down.png";
import screenshotModel from "@/public/assets/images/screenshot-model.png";
import screenshotCustomers from "@/public/assets/images/screenshot-2.png";
import groupEllipse from "@/public/assets/images/group-ellipse.png";
import progressLine from "@/public/assets/images/progress-line.png";
import techstars from "@/public/assets/images/brands-techstars.png";
import techcabal from "@/public/assets/images/brands-techcabal.png";
import techtrend from "@/public/assets/images/brands-techtrend.png";
import flutterwave from "@/public/assets/images/brands-flutterwave.png";
import imageGroup from "@/public/assets/images/image-group.png";
import waves from "@/public/assets/images/waves.png";
import Layout from "@/components/layout/Layout";

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

  const benefits = [
    {
      icon: tetris,
      heading: "Built for Anyone",
      text: "Direct access to several insurance companies in one place without worrying about multiple partnerships, integrations or compliance.",
      bgColor: "bg-purple50",
    },
    {
      icon: globe,
      heading: "Easy to integrate APIs",
      text: "Seamless and direct integrations into your platform. Built on a framework that lets you easily deploy insurance into the purchasing experience of customers.",
      bgColor: "bg-success50",
    },
    {
      icon: lock,
      heading: "Automated Claim Management",
      text: "Your customers gets automated claim support, from notifications to loss assessments, and instant payouts using real-time data inputs.",
      bgColor: "bg-orange50",
    },
    {
      icon: jigsaw,
      heading: "End-to-End Service",
      text: "Get access to a significant tool in the insurance value chain; a robust admin support for policy and claims management.",
      bgColor: "bg-blue50",
    },
  ];

  const sectors = [
    {
      icon: house,
      name: "Home",
    },
    {
      icon: car,
      name: "Auto",
    },
    {
      icon: gadgets,
      name: "Gadget",
    },
    {
      icon: travel,
      name: "Travel",
    },
    {
      icon: heart,
      name: "Health",
    },
  ];

  const activities = [
    {
      icon: eclipse,
      heading: "Designed for anyone",
      text: "Sell to customers directly from your dashboard.",
    },
    {
      icon: eclipse,
      heading: "Manage policies",
      text: "Process, activate and track customer policies.",
    },
    {
      icon: eclipse,
      heading: "Claims handling",
      text: "Reliably automate claims in real-time.",
    },
    {
      icon: eclipse,
      heading: "Real-time analytics",
      text: "Essential insights needed to grow your business.",
    },
  ];

  const tools = [
    {
      icon: eclipse,
      heading: "APIs",
      text: "Seamless API integrations designed to optimised user’s experience.",
    },
    {
      icon: eclipse,
      heading: "SDKs",
      text: "Customizable SDKs that plays nicely with your infrastructure.",
    },
    {
      icon: eclipse,
      heading: "Claims",
      text: "Reliably automate claims assessment with real-time data inputs, enabled by our API.",
    },
  ];

  const model = [
    {
      icon: eclipse,
      heading: "Go Full White Label",
      text: "Our API enable customers interact with your platform only",
    },
    {
      icon: eclipse,
      heading: "Semi White Label",
      text: "Optimise operational costs by leveraging our solutions.",
    },
    {
      icon: eclipse,
      heading: "Seamless Integration",
      text: "Easy integrations without partnerships and compliance.",
    },
    {
      icon: eclipse,
      heading: "No Platform",
      text: "Our platform was built for non-digital businesses too. ",
    },
  ];

  const solutions = [
    "Policy Manangement",
    "Simple Wallet System",
    "Claims Management",
    "E-HMO ID",
    "Fraud-free Inspection",
  ];

  const supporters = [
    {
      src: techstars,
      alt: "techstars logo",
    },
    {
      src: techcabal,
      alt: "techcabal logo",
    },
    {
      src: techtrend,
      alt: "techtrend logo",
    },
    {
      src: flutterwave,
      alt: "flutterwave logo",
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
            <div className="mx-auto space-y-5 text-center sm:w-[80%] md:w-auto lg:space-y-8 lg:text-left xl:ml-0 xl:mr-auto xl:w-[85%]">
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
      <section className="mx-auto w-[90%] py-8 lg:pt-[9rem] xl:w-[80%]">
        <div className="space-y-5 sm:space-y-8">
          <h2 className="text-[1.125rem] font-medium">
            Brands growing with us:
          </h2>
          <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:flex sm:justify-between">
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className={` ${src === bitma ? "py-0" : "w-[110px] py-8"} ${
                  src === bolt ? "w-[90px] " : ""
                }
                `}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray25 py-9">
        <div className="mx-auto w-[90%] xl:w-[80%]">
          <div className="mb-[6.5rem] space-y-2 text-center">
            <h2 className="text-xl font-bold text-altGray-800 xl:text-[1.875rem]">
              Insurtech with innovators in{" "}
              <span className="relative isolate before:absolute before:bottom-[-2px] before:right-[2px] before:z-[-1] before:h-[12px] before:w-[90%] before:bg-accent/90">
                mind
              </span>
            </h2>
            <p className="sm:text-xl">
              Build insurtech solutions with Africa’s largest digital insurance
              infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            {benefits.map(({ icon, heading, text, bgColor }) => (
              <div
                className={`${bgColor} relative w-[49%] space-y-10 rounded-xl px-[5rem] pb-[9rem] pt-[4rem] text-altGray-800`}
                key={heading}
              >
                <Image src={icon} alt="" className="" />
                <h2 className="text-[1.5rem] font-bold">{heading}</h2>
                <p className="text-[1.25rem]">{text}</p>
                <Image
                  src={heroArr}
                  alt=""
                  className="absolute bottom-0 left-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="xl:py-[5rem]">
        <div className="mx-auto w-[90%] xl:w-[80%]">
          <div className="mb-[6.5rem] space-y-2 text-center">
            <h2 className="text-xl font-bold text-altGray-800 xl:text-[1.875rem]">
              Exciting insurance products for all
              <span className="relative isolate before:absolute before:bottom-[-2px] before:right-[2px] before:z-[-1] before:h-[12px] before:w-[90%] before:bg-accent/90">
                sectors
              </span>
            </h2>
            <p className="sm:text-xl">
              Build insurtech solutions with Africa’s largest digital insurance
              infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            {sectors.map(({ icon, name }) => (
              <div
                key={name}
                className="flex w-[32%] items-center gap-7 rounded-[6px] border border-[#DBDFE4] bg-white px-7 py-9 shadow-sectors"
              >
                <Image src={icon} alt={`${icon} logo`} className="" />
                <span className="text-altGray800 text-[1.25rem] font-bold">
                  {name}
                </span>
              </div>
            ))}
            <button className="flex w-[32%] items-center justify-center gap-6 font-medium text-accent">
              View more
              <Image src={chevRight} alt={`cheveron right`} className="" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray25 py-[5.2rem]">
        <div className="ml-auto flex items-center xl:w-[90%]">
          <div className="w-[57%] space-y-[3rem]">
            <h2 className="font-bold text-altGray-800 xl:text-[1.875rem]">
              Manage all insurance activities from a unified
              <span className="relative isolate before:absolute before:bottom-[-2px] before:right-[2px] before:z-[-1] before:h-[12px] before:w-[90%] before:bg-accent/90">
                platform
              </span>
            </h2>
            <div className="flex flex-wrap justify-between gap-5 gap-y-[5rem]">
              {activities.map(({ icon, heading, text }) => (
                <div key={heading} className="flex w-[47%] gap-5">
                  <Image src={icon} alt="" className="mt-3 h-fit" />
                  <div className="space-y-2">
                    <h3 className="text-[1.875rem] font-bold text-altGray-800">
                      {heading}
                    </h3>
                    <p className="text-xl text-altGray-800">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <Image src={dashboard} alt="" className="" />
          </div>
        </div>
      </section>
      <section className="relative bg-gray900 xl:pb-[4rem] xl:pt-[9.5rem]">
        <Image src={triangle} alt="" className="absolute right-0 top-0" />
        <Image src={arrowUp} alt="" className="absolute bottom-0 left-0" />
        <Image src={arrowDown} alt="" className="absolute right-0 top-0" />
        <div className="mx-auto flex justify-between gap-6 xl:w-[80%]">
          <div className="w-[50%] space-y-[4.3rem]">
            <div className="space-y-7">
              <h2 className="pr-5 text-[1.875rem] font-bold text-accent">
                Everything you need to start building
              </h2>
              <p className="text-xl font-bold text-altGray-25">
                We understand the crux of good developer experience while
                interfacing with an API. Our developer-friendly guide will get
                you started in no time.
              </p>
              <button className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white">
                Read the docs
              </button>
            </div>
            <div className="isolate rounded-lg bg-gray800 px-[3rem] pb-[3.3rem] pt-[2.9rem] shadow-tools">
              <div className="flex flex-col justify-between gap-[3.5rem]">
                {tools.map(({ icon, heading, text }) => (
                  <div key={heading} className="flex gap-5">
                    <Image src={icon} alt="" className="mt-3 h-fit" />
                    <div className="space-y-2">
                      <h3 className="text-[1.875rem] font-bold text-white">
                        {heading}
                      </h3>
                      <p className="text-xl text-altGray-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[48%] space-y-4">
            <Image src={form} alt="" className="isolate h-[63%]" />
            <Image src={codesnap} alt="" className="" />
          </div>
        </div>
      </section>
      <section className="xl:px- xl:pt-[8rem]">
        <div className="ml-auto flex items-center xl:w-[90%]">
          <div className="w-[57%] space-y-[3rem]">
            <div className="space-y-6">
              <h2 className="font-bold text-altGray-800 xl:text-[1.875rem]">
                Insurance for any business &nbsp;
                <span className="relative isolate before:absolute before:bottom-[-2px] before:right-[2px] before:z-[-1] before:h-[12px] before:w-[90%] before:bg-accent/90">
                  model
                </span>
              </h2>
              <p className="sm:text-xl">
                Our API is perfect for anyone, from non-digital businesses to
                large fintech platforms to unlock new markets in different ways.
              </p>
            </div>
            <div className="flex flex-wrap justify-between gap-5 gap-y-[5rem]">
              {model.map(({ icon, heading, text }) => (
                <div key={heading} className="flex w-[48%] gap-5">
                  <Image src={icon} alt="" className="mt-3 h-fit" />
                  <div className="space-y-2">
                    <h3 className="text-[1.875rem] font-bold text-altGray-800">
                      {heading}
                    </h3>
                    <p className="text-xl text-altGray-800">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <Image src={screenshotModel} alt="" className="" />
          </div>
        </div>
      </section>
      <section className="bg-gray50 py-[6.5rem]">
        <div className="mx-auto xl:w-[80%]">
          <div className="mx-auto mb-[6.5rem] w-[87%] space-y-3 text-center">
            <h2 className="text-xl font-bold text-altGray-800 xl:text-[1.875rem]">
              All-in-one solution for your &nbsp;
              <span className="relative isolate before:absolute before:bottom-[3px] before:right-[2px] before:z-[-1] before:h-[12px] before:w-[90%] before:bg-accent/90">
                customers
              </span>
            </h2>
            <p className="sm:text-xl">
              Increase retention by giving customers the convenience of a
              seamless insurance experience with our user-friendly mobile app.
              Customers enjoy insurance from anywhere.
            </p>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="flex w-[25%] justify-between">
              <div className="flex justify-between gap-5">
                <Image src={groupEllipse} alt="" className="" />
                <ul className="space-y-4">
                  {solutions.map((solution, i) => (
                    <li
                      key={solution}
                      className={`font-medium ${
                        i === 0 ? "text-accent" : "text-altGray-700"
                      }`}
                    >
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
              <Image src={progressLine} alt="" className="" />
            </div>
            <Image src={screenshotCustomers} alt="" className="" />
            <div className=" w-[34%]">
              <h3 className="text-[1.5rem] font-bold text-altGray-800">
                Efficient Policy Manangement
              </h3>
              <p className="text-[1.126rem] text-altGray-600">
                Your customers have full control over policies purchased from
                you. The app is made to take the worry off you in managing all
                insurance activities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-[90%] py-8 pb-[6rem] lg:pt-[3rem] xl:w-[80%] ">
        <div className="space-y-9">
          <h2 className="text-[1.125rem] font-medium">
            Brands that support us:
          </h2>
          <div className="gap-4 sm:flex sm:justify-between">
            {supporters.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} className={`sm:w-aut`} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray50">
        <div className="mx-auto flex w-[90%] justify-between py-8 lg:pt-[9rem] xl:w-[80%]">
          <div className="w-[36%]">
            <h2 className="text-[2.25rem] font-bold text-altGray-800">
              Do you still have &nbsp;
              <span className="relative isolate before:absolute before:bottom-[-2px] before:right-[2px] before:z-[-1] before:h-[12px] before:w-[90%] before:bg-accent/90">
                questions?
              </span>
            </h2>
            <p className="mb-8 mt-4 text-[1.25rem] text-altGray-800 ">
              Have a chat with anyone from our friendly team here{" "}
            </p>
            <button className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white">
              Contact Us
            </button>
          </div>
          <div className="w-1/2">
            <Accordion type="single" collapsible className=" ">
              <AccordionItem
                className="bg-gray100 shadow-accordion"
                value="item-1"
              >
                <AccordionTrigger className="">
                  Are you an Insurance Comapany?
                </AccordionTrigger>
                <AccordionContent className="">
                  MyCover.ai is a product of the first insurtech in Nigeria. We
                  enable any business to access multiple insurance companies and
                  their products from one place.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="shadow-accordion" value="item-2">
                <AccordionTrigger className="">
                  How do I handle claims?
                </AccordionTrigger>
                <AccordionContent className="">
                  MyCover.ai is a product of the first insurtech in Nigeria. We
                  enable any business to access multiple insurance companies and
                  their products from one place.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="shadow-accordion" value="item-3">
                <AccordionTrigger className="">
                  Do I need to have an online platform?
                </AccordionTrigger>
                <AccordionContent className="">
                  MyCover.ai is a product of the first insurtech in Nigeria. We
                  enable any business to access multiple insurance companies and
                  their products from one place.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="shadow-accordion" value="item-4">
                <AccordionTrigger className="">
                  Do I need a license?
                </AccordionTrigger>
                <AccordionContent className="">
                  MyCover.ai is a product of the first insurtech in Nigeria. We
                  enable any business to access multiple insurance companies and
                  their products from one place.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="pt-[14rem]">
        <div className="relative bg-gray900 py-[4rem]">
          <Image src={waves} alt="" className="absolute right-0 top-0" />
          <Image src={arrowUp} alt="" className="absolute bottom-0 left-0" />
          <div className="mx-auto flex items-center justify-between gap-[4rem] xl:w-[80%]">
            <div className="w-[55%]">
              <h2 className="text-[3rem] font-bold text-white">
                Join our insurtech ecosystem to democratise insurance in{" "}
                <span className="text-accent">Africa.</span>
              </h2>
              <button className="isolate mt-[3rem] w-[30%] rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white">
                Get Started
              </button>
            </div>
            <Image src={imageGroup} alt="" className="isolate" />
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
