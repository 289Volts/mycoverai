import React from "react";

export default function Footer({ font }) {
  const categories = [
    "Health",
    "Auto",
    "Travel",
    "Gadget",
    " Office Content",
    "Home",
  ];
  const company = [
    "About Us",
    "Privacy Policy",
    "Blog",
    "Careers",
    "Terms and Conditions",
    "Mycovergenius",
  ];
  return (
    <footer
      className={`${font} grid grid-cols-[0.7fr_0.5fr_1fr] px-[8rem] gap-[6rem] py-[9rem]`}
    >
      <div className="flex flex-col gap-[4rem]">
        <div className="space-y-4">
          <h2 className="text-[1.875rem] font-bold text-altGray-800">
            PRODUCT CATEGORY
          </h2>
          <ul className="space-y-3 text-sm text-altGray-700">
            {categories.map((category) => (
              <li key={category} className="">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="mb-4 text-[1.875rem] font-bold text-altGray-800">
            CUSTOMER SUPPORT
          </h2>
          <div className="space-y-1 text-sm text-altGray-700">
            <p className="">Phone: +234 1234567889</p>
            <p className="">info@mycover.ai</p>
            <p className="">Hours: Mon. - Fri. 8AM - 5PM</p>
          </div>
        </div>
        <p className="text-sm text-altGray-700">
          Mycover.ai © 2021 / ALL RIGHTS RESERVED
        </p>
      </div>
      <div className="flex flex-col gap-[4rem]">
        <div className="space-y-4">
          <h2 className="text-[1.875rem] font-bold text-altGray-800">
            COMPANY
          </h2>
          <ul className="space-y-3 text-sm text-altGray-700">
            {company.map((comp) => (
              <li key={comp} className="">
                {comp}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-[1.875rem] font-bold text-altGray-800">
            CONTACT
          </h2>
          <p className="text-sm text-altGray-700">
            No 8, Province Estate,Maruwa bust stop, Lekki Phase 1
          </p>
        </div>
      </div>
      <div className="">
        <h2 className="mb-4 text-[1.875rem] font-bold text-altGray-800">
          ABOUT US
        </h2>
        <p className="text-altGray-700">
          MyCover.ai is Africa's leading insurance infrastructure platform. We
          leverage artificial intelligence and machine learning to scale
          insurance penetration across the continent.
        </p>
        <p className="text-altGray-700">
          Through our retail channel <span className="text-accent">mycovergenius</span>, we provide product-focused
          and technology-driven policies targeted at deepening insurance
          adoption in Africa; creating unique and relevant products in
          partnership with leading insurance companies. To us, insurance is not
          just about policies, it is Africa's surest safety net!
        </p>
      </div>
    </footer>
  );
}
