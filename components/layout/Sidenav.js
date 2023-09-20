import Image from "next/image";
import logo from "@/public/assets/images/sidenav-logo.png";
import abstract from "@/public/assets/images/abstract.png";
import globe from "@/public/assets/icons/globe.svg";
import dashboard from "@/public/assets/icons/analytics.svg";
import stack from "@/public/assets/icons/stack.svg";
import policy from "@/public/assets/icons/policy.svg";
import list from "@/public/assets/icons/list.svg";
import clipboard from "@/public/assets/icons/clipboard.svg";
import users from "@/public/assets/icons/users.svg";
import greenClaim from "@/public/assets/icons/green-claim.svg";
import wallet from "@/public/assets/icons/wallet.svg";
import arrows from "@/public/assets/icons/arrows-crossing.svg";
import people from "@/public/assets/icons/people.svg";
import inspect from "@/public/assets/icons/inspect.svg";
import whiteClaim from "@/public/assets/icons/white-claim.svg";
import settings from "@/public/assets/icons/settings.svg";
import Link from "next/link";

export default function Sidenav() {
  const admin = [
    {
      src: stack,
      text: "Sales",
    },
    {
      src: policy,
      text: "Policies",
    },
    {
      src: list,
      text: "Products",
    },
    {
      src: clipboard,
      text: "Customer",
    },
    {
      src: users,
      text: "Users",
    },
    {
      src: greenClaim,
      text: "Claim",
    },
  ];

  const transactions = [
    {
      src: wallet,
      text: "Wallet",
    },
    {
      src: arrows,
      text: "Transaction history",
    },
  ];

  const others = [
    {
      src: people,
      text: "Provider",
    },
    {
      src: people,
      text: "Distributors",
    },
  ];

  const service = [
    {
      src: inspect,
      text: "Inspection",
    },
    {
      src: whiteClaim,
      text: "Claim",
    },
  ];
  return (
    <aside className="bg-sideNav text-altGray-200 relative px-9 py-6 pb-14 text-sm font-medium">
      <Link href="/" className="">
        {" "}
        <Image src={logo} alt="company logo" className="" />
      </Link>

      <Image
        src={abstract}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-0"
      />
      <div className="mt-[2.9rem] flex items-center gap-2">
        <Image src={globe} alt="globe icon" className="" />
        <span className="">Get Started</span>
      </div>
      <div className="mt-8 space-y-11">
        <div className="space-y-4">
          <span className="text-altGray-400 text-[0.625rem] font-normal">
            DASHBOARD
          </span>
          <div className="flex items-center gap-2">
            <Image src={dashboard} alt="globe icon" className="" />
            <span className="">Analytics</span>
          </div>
        </div>
        <div className="space-y-4">
          <span className="text-altGray-400 text-[0.625rem] font-normal">
            ADMIN
          </span>
          {admin.map(({ text, src }) => (
            <div key={text} className="flex items-center gap-2">
              <Image src={src} alt={text} className="" />
              <span className={`${text === "Claim" ? "text-accent" : ""}`}>
                {text}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <span className="text-altGray-400 text-[0.625rem] font-normal">
            TRANSACTIONS
          </span>
          {transactions.map(({ text, src }) => (
            <div key={text} className="flex items-center gap-2">
              <Image src={src} alt={text} className="" />
              <span className="">{text}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <span className="text-altGray-400 text-[0.625rem] font-normal">
            OTHERS
          </span>
          {others.map(({ text, src }) => (
            <div key={text} className="flex items-center gap-2">
              <Image src={src} alt={text} className="" />
              <span className="">{text}</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <span className="text-altGray-400 text-[0.625rem] font-normal">
            SERVICE
          </span>
          {service.map(({ text, src }) => (
            <div key={text} className="flex items-center gap-2">
              <Image src={src} alt={text} className="" />
              <span className="">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex items-center gap-2">
        <Image src={settings} alt="globe icon" className="" />
        <span className="">Settings</span>
      </div>
    </aside>
  );
}
