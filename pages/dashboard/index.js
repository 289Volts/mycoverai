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
            <Image src={notification} alt="" />
            <div className="flex items-center gap-4">
              <Image src={headerAvatar} alt="" />
              <button className="flex items-center gap-2">
                <span className="text-dark text-sm font-semibold">
                  Hello Alexander
                </span>
                <Image src={chevDown} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
