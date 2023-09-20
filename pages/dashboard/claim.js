import Sidenav from "@/components/layout/Sidenav";
import notification from "@/public/assets/icons/notification.png";
import headerAvatar from "@/public/assets/images/header-avatar.png";
import tableAvatar from "@/public/assets/images/avatar-table.png";
import cashHand from "@/public/assets/images/cash-hand.png";
import chevDown from "@/public/assets/icons/chevron-down.svg";
import chevDownBig from "@/public/assets/icons/chevron-down-big.svg";
import search from "@/public/assets/icons/search.svg";
import filter from "@/public/assets/icons/filter.svg";
import anchor from "@/public/assets/icons/export.svg";

import Image from "next/image";
import Link from "next/link";

const tableData = [
  {
    src: tableAvatar,
    name: "Alex Igwe",
    insurance: "IN - 4567899",
    email: "alex@gmail.com",
    phone: "090876542345",
    product: "Comprehensive Auto",
    policyId: "RTYUI-12",
    timesClaimed: "2",
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: tableAvatar,
    name: "Alex Igwe",
    insurance: "IN - 4567899",
    email: "alex@gmail.com",
    phone: "090876542345",
    product: "3rd Party Auto",
    policyId: "RTYUI-12",
    timesClaimed: "1",
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: tableAvatar,
    name: "Alex Igwe",
    insurance: "IN - 4567899",
    email: "alex@gmail.com",
    phone: "090876542345",
    product: "Gadget",
    policyId: "RTYUI-12",
    timesClaimed: "3",
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: tableAvatar,
    name: "Alex Igwe",
    insurance: "IN - 4567899",
    email: "alex@gmail.com",
    phone: "090876542345",
    product: "Gadget cover",
    policyId: "RTYUI-12",
    timesClaimed: "1",
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: tableAvatar,
    name: "Alex Igwe",
    insurance: "IN - 4567899",
    email: "alex@gmail.com",
    phone: "090876542345",
    product: "Office content",
    policyId: "RTYUI-12",
    timesClaimed: "2",
    dateSubmitted: "12th Jan 2020",
  },
];
export default function Claim() {
  return (
    <main className="static grid grid-cols-[0.23fr_1fr] bg-gray50">
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
                <Image src={chevDown} alt="chevron down icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto my-6 w-[88%] rounded-xl">
          <div className="flex justify-between rounded-xl bg-white pl-9 pt-4">
            <div className="">
              <p className="text-[2.125rem] font-semibold text-black">
                Make Claim
              </p>
              <p className="text-[1.125rem] text-altGray-700">
                Select a product to make claim on
              </p>
            </div>
            <Image src={cashHand} alt="" className="" />
          </div>
          <div className="mx-auto my-[1.875rem] mt-5">
            <div className="flex w-full justify-between gap-3">
              <div className="shadow-textFilter flex flex-1 items-center gap-2 rounded-lg border border-altGray-300 bg-white px-[0.875rem] py-[0.13rem]">
                <Image src={search} alt="cheveron down icon" />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Product"
                  className="placeholder:text-altGray-400 flex-1 py-2 placeholder:text-sm"
                />
              </div>
              <div className="shadow-textFilter flex w-fit items-center gap-2 rounded-lg border border-altGray-300 bg-white px-[1.125rem] py-[0.13rem] text-sm font-semibold text-altGray-700">
                <span className="">Filters by : All Products</span>
                <Image src={chevDownBig} alt="cheveron down icon" />
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-[90%] flex-col gap-4 rounded-xl bg-white">
            {/* table */}
            <div className="">
              <table className="w-full text-left">
                <thead className="bg-gray25">
                  <tr className="">
                    <th className="py-3 pl-6">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Customer name
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Insurance No.
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Email address
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Phone no
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Product
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Policy I.D
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      All time claimed
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Date submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {tableData.map(
                    ({
                      src,
                      name,
                      insurance,
                      email,
                      phone,
                      product,
                      policyId,
                      timesClaimed,
                      dateSubmitted,
                    }) => (
                      <tr
                        key={product}
                        className="border-b-altGray-200 border-b"
                      >
                        <td className="py-4 pl-6">
                          <input type="checkbox" name="" id="" />
                        </td>
                        <td className="flex items-center gap-3 px-6 py-4">
                          <Image
                            src={src}
                            alt="notifications"
                            className="rounded-full"
                          />
                          <span className="text-xs font-medium text-altGray-900">
                            {name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {insurance}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {email}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {phone}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {product}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {policyId}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {timesClaimed}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {dateSubmitted}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
                <tfoot className=""></tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
