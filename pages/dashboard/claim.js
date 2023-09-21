import Sidenav from "@/components/layout/Sidenav";
import notification from "@/public/assets/icons/notification.png";
import headerAvatar from "@/public/assets/images/header-avatar.png";
import tableAvatar from "@/public/assets/images/avatar-table.png";
import cashHand from "@/public/assets/images/cash-hand.png";
import chevDown from "@/public/assets/icons/chevron-down.svg";
import chevDownBig from "@/public/assets/icons/chevron-down-big.svg";
import search from "@/public/assets/icons/search.svg";
import flexicare from "@/public/assets/icons/flexicare.svg";
import homeInsurance from "@/public/assets/icons/home-insurance.svg";
import thirdParty from "@/public/assets/icons/third-party.svg";
import active from "@/public/assets/icons/active.svg";
import inactive from "@/public/assets/icons/inactive.svg";
import deactivated from "@/public/assets/icons/deactivated.svg";
import close from "@/public/assets/icons/close-rounded.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tableData = [
  {
    src: homeInsurance,
    productName: "Credit life",
    productCategory: "Credit life",
    provider: "Arm life Plc",
    distributor: "Mycovergenius",
    productId: "PR23456",
    customers: "10",
    status: "active",
    statusImg: active,
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: flexicare,
    productName: "Flexicare",
    productCategory: "Health",
    provider: "Hygeia",
    distributor: "Payfi",
    productId: "PR23456",
    customers: "40",
    status: "active",
    statusImg: active,
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: flexicare,
    productName: "Flexicare",
    productCategory: "Health",
    provider: "Hygeia",
    distributor: "Fincra",
    productId: "PR23456",
    customers: "30",
    status: "active",
    statusImg: active,
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: thirdParty,
    productName: "3rd Party",
    productCategory: "Auto",
    provider: "Arm life Plc",
    distributor: "Blackcopper",
    productId: "PR23456",
    customers: "20",
    status: "deactivated",
    statusImg: deactivated,
    dateSubmitted: "12th Jan 2020",
  },
  {
    src: homeInsurance,
    productName: "House Insurance",
    productCategory: "House Insurance",
    provider: "Arm life Plc",
    distributor: "Payday",
    productId: "PR23456",
    customers: "10",
    status: "inactive",
    statusImg: inactive,
    dateSubmitted: "12th Jan 2020",
  },
];

const customerData = [
  {
    customerName: "Alexandra Igwe",
    policyNo: "IN - 123455",
    totalClaimed: 0,
    status: "active",
    statusImg: active,
  },
  {
    customerName: "Ajayi Ibrahim",
    policyNo: "IN - 123455",
    totalClaimed: 0,
    status: "active",
    statusImg: active,
  },
  {
    customerName: "Dabiri Oluwaseun",
    policyNo: "IN - 123455",
    totalClaimed: 1,
    status: "expired",
    statusImg: deactivated,
  },
  {
    customerName: "Chuks Alex",
    policyNo: "IN - 123455",
    totalClaimed: 1,
    status: "expired",
    statusImg: deactivated,
  },
];
export default function Claim() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="relative grid grid-cols-[0.23fr_1fr] overflow-hidden bg-gray50">
      <div
        className={`absolute inset-0 z-[1] overflow-hidden transition duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className=" h-full w-full bg-[#323B4B80] backdrop-blur-[2px]" />
        <div className="absolute bottom-0 right-0 top-0 flex w-[43%] gap-7">
          <button onClick={toggleOverlay} className="mt-10 self-start">
            <Image src={close} alt="close button icon" className="" />
          </button>
          <div className="flex-1 bg-white px-8 py-7">
            <div className="">
              <div className="mb-9 border-b border-b-altGray-300 pb-4">
                <h2 className="text-[2.125rem] font-semibold text-[#1E1F20]">
                  Claim / <span className="text-accent">Credit Life</span>
                </h2>
                <p className="text-[1.125rem] text-altGray-700/80">
                  Select the Customer you are making claim on{" "}
                </p>
              </div>
              <div className="mb-6 flex w-full justify-between gap-3">
                <div className="shadow-textFilter flex flex-1 items-center gap-2 rounded-lg border border-altGray-300 bg-white px-[0.875rem] py-[0.13rem]">
                  <Image src={search} alt="cheveron down icon" />
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search Customer"
                    className="placeholder:text-altGray-400 flex-1 py-2 placeholder:text-sm"
                  />
                </div>
                <div className="shadow-textFilter flex w-fit items-center gap-2 rounded-lg border border-altGray-300 bg-white px-[1.125rem] py-[0.13rem] text-sm font-semibold text-altGray-700">
                  <span className="">Filters by : All</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl bg-white">
                {/* table */}
                <div className="">
                  <table className="w-full text-left">
                    <thead className="bg-gray25">
                      <tr className="border-b-altGray-200 border-b">
                        <th className="text-altGray-500 px-6 py-3 text-xs">
                          Customer name
                        </th>
                        <th className="text-altGray-500 px-6 py-3 text-xs">
                          Policy No.
                        </th>
                        <th className="text-altGray-500 px-6 py-3 text-xs">
                          Total Claimed
                        </th>
                        <th className="text-altGray-500 px-6 py-3 text-xs">
                          Status
                        </th>
                        <th className="text-altGray-500 py-3 px-6 text-xs">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {customerData.map(
                        ({
                          customerName,
                          policyNo,
                          totalClaimed,
                          status,
                          statusImg,
                        }) => (
                          <tr
                            key={customerName}
                            className="border-b-altGray-200 border-b"
                          >
                            <td className="flex items-center gap-3 px-6 py-4">
                              <span className="text-xs font-medium text-altGray-900">
                                {customerName}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-xs text-altGray-700">
                              {policyNo}
                            </td>
                            <td className="px-6 py-4 text-xs text-altGray-700">
                              {totalClaimed}
                            </td>
                            <td className="px-6 py-4">
                              <div
                                className={`flex w-fit items-center justify-center gap-[8px] rounded-2xl px-2 ${
                                  status === "active"
                                    ? "bg-[#ECFDF3] text-[0.63rem] text-[#027A48]"
                                    : status === "inactive"
                                    ? "bg-[#FFFAEB] text-[0.75rem] text-[#B54708]"
                                    : "bg-[#FEF3F2] text-[0.75rem] text-[#B42318]"
                                }`}
                              >
                                <Image
                                  src={statusImg}
                                  alt="notifications"
                                  className="rounded-full"
                                />
                                <span className="capitalize">{status}</span>
                              </div>
                            </td>
                            <td className=" px-6 py-4 text-sm font-medium">
                              <button className="w-full  text-accent">
                                Select
                              </button>
                            </td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        <div className="mx-auto my-6 w-[90%] rounded-xl">
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
          <div className="my-[1.875rem] mt-5">
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
          <div className="flex flex-col gap-4 rounded-xl bg-white">
            {/* table */}
            <div className="">
              <table className="w-full text-left">
                <thead className="bg-gray25">
                  <tr className="border-b-altGray-200 border-b">
                    <th className="py-3 pl-6">
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Product name
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Product Category
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Provider
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Distributor
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Product I.D
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      No. customer
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Date added
                    </th>
                    <th className="text-altGray-500 px-6 py-3 text-xs">
                      Policy status
                    </th>
                    <th className="text-altGray-500 py-3 pr-6 text-xs">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {tableData.map(
                    ({
                      src,
                      productName,
                      productCategory,
                      provider,
                      distributor,
                      productId,
                      customers,
                      status,
                      statusImg,
                      dateSubmitted,
                    }) => (
                      <tr
                        key={distributor}
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
                            {productName}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {productCategory}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {provider}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {distributor}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {productId}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {customers}
                        </td>
                        <td className="px-6 py-4 text-xs text-altGray-700">
                          {dateSubmitted}
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className={`flex w-fit items-center gap-[10px] rounded-2xl px-2 ${
                              status === "active"
                                ? "bg-[#ECFDF3] text-[0.63rem] text-[#027A48]"
                                : status === "inactive"
                                ? "bg-[#FFFAEB] text-[0.75rem] text-[#B54708]"
                                : "bg-[#FEF3F2] text-[0.75rem] text-[#B42318]"
                            }`}
                          >
                            <Image
                              src={statusImg}
                              alt="notifications"
                              className="rounded-full"
                            />
                            <span className="capitalize">{status}</span>
                          </div>
                        </td>
                        <td className=" py-4 pr-6 text-xs text-altGray-800">
                          <button
                            onClick={toggleOverlay}
                            disabled={
                              status === "deactivated" || status === "inactive"
                            }
                            className="w-full rounded-lg bg-[#D8EEE9] p-[0.63rem] disabled:bg-[#D8EEE9]/50"
                          >
                            Claim
                          </button>
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
