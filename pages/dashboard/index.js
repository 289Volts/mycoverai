import Sidenav from "@/components/layout/Sidenav";
import notification from "@/public/assets/icons/notification.png";
import headerAvatar from "@/public/assets/images/header-avatar.png";
import tableAvatar from "@/public/assets/images/avatar-table.png";
import chevDown from "@/public/assets/icons/chevron-down.svg";
import chevDownBig from "@/public/assets/icons/chevron-down-big.svg";
import cancel from "@/public/assets/icons/cancel.svg";
import search from "@/public/assets/icons/search.svg";
import filter from "@/public/assets/icons/filter.svg";
import exports from "@/public/assets/icons/export.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="grid grid-cols-[0.23fr_1fr] bg-gray50">
      <Sidenav />
      <section className="">
        <div className="flex items-center justify-between bg-white px-10 py-5 font-semibold">
          <div className="flex w-[40%] items-center justify-between gap-9">
            <h1 className="text-text1 border-r=[#E6E8EC] w-[40%] border-r text-2xl">
              Claims
            </h1>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className="flex-1 border-b border-b-[#E5E6ED] py-3 placeholder:text-xs placeholder:text-[#B0B7C3]"
            />
          </div>
          <div className="flex gap-6">
            <Image src={notification} alt="notifications" />
            <div className="flex items-center gap-4">
              <Image src={headerAvatar} alt="user avatar" />
              <button className="flex items-center gap-2">
                <span className="text-dark text-sm font-semibold">
                  Hello Alexander
                </span>
                <Image src={chevDown} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 w-[90%]">
          <div className="border-b-altGray-500 flex items-center justify-end gap-3 border-b-[0.2px] pb-2">
            <button className="shadow-timeFilter flex items-center gap-2 rounded-lg border border-altGray-300 bg-white px-[1.125rem] py-2 text-sm font-semibold">
              <span className="">Filters by : All time</span>
              <Image src={chevDownBig} aria-hidden alt="chevron facing down" />
            </button>
            <button className="shadow-timeFilter bg-gray200 flex items-center gap-[0.63rem] rounded-lg  px-2 text-xs">
              <span className="">12 July - 12 August</span>
              <Image src={cancel} aria-hidden alt="cancel icon" />
            </button>
          </div>
          <div className="flex justify-between my-[1.875rem]">
            <Link
              href=""
              className="flex w-[15%] items-center justify-center rounded-lg bg-accent px-[2.8rem] py-[0.63rem] font-medium text-white"
            >
              Make Claim
            </Link>
            <div className="flex gap-7">
              <div className="flex flex-col gap-1 rounded-lg bg-accent px-4 py-2">
                <span className="text-sm text-white">Total Claims</span>
                <span className="text-[1.25rem] font-semibold text-white">
                  2,420
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg bg-purple-500 px-4 py-2">
                <span className="text-sm text-white">Settled</span>
                <span className="text-[1.25rem] font-semibold text-white">
                  500
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg bg-yellow-500 px-4 py-2">
                <span className="text-sm text-white">In progress</span>
                <span className="text-[1.25rem] font-semibold text-white">
                  300
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-lg bg-red-400 px-4 py-2">
                <span className="text-sm text-white">Rejected</span>
                <span className="text-[1.25rem] font-semibold text-white">
                  1050
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
