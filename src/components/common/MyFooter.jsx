import React from "react";
import logo from "../../assets/images/webp/logo.webp";
import line from "../../assets/images/webp/line.webp";
import { BolIcon, CopyIcon, InstagrIcon, MessageIcon } from "./Icon";

const MyFooter = () => {
  return (
    <div className="bg-black rounded-tl-[60px] rounded-tr-[60px]">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="flex  justify-center lg:justify-start">
            <div className=" max-w-[372px] pt-[70px]">
              <div className="flex justify-center lg:justify-start">
                <img src={logo} alt="logo" />
              </div>
              <p className="opacity-70 text-center lg:text-start text-white text-sm font-normal font-Inter leading-7 mt-6">
                SellYourApp is an Appstun organization. Appstun is a global
                mobile app company that buys, builds, and grows mobile apps.
              </p>
              <div className="flex justify-center lg:justify-start gap-5 mt-[26px]">
                <div className="hover:translate-y-[-7px] duration-300">
                  <InstagrIcon />
                </div>
                <div className="hover:translate-y-[-7px] duration-300">
                  <MessageIcon />
                </div>
                <div className="hover:translate-y-[-7px] duration-300">
                  <BolIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-center lg:justify-start gap-20">
            <ul className="text-center sm:text-start mt-[90px]">
              <li className="text-white font-Inter font-medium text-sm mt-4">
                Quick Links
              </li>
              <li className="text-gray font-Inter font-medium text-sm mt-3">
                About
              </li>
              <li className="text-gray font-Inter font-medium text-sm mt-3">
                App Sale process
              </li>
              <li className="text-gray font-Inter font-medium text-sm mt-3">
                Why Us?
              </li>
              <li className="text-gray font-Inter font-medium text-sm mt-3">
                Our App
              </li>
            </ul>
            <ul className="text-center sm:text-start mt-[90px]  mb-12 llg:mb-0">
              <li className="text-white font-Inter font-medium text-sm mt-4">
                Information
              </li>
              <li className="text-gray font-Inter font-medium text-sm mt-3">
                Contact
              </li>
              <li className="text-gray font-Inter font-medium text-sm mt-3">
                support@appstun.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 mb-6">
          <img className="w-full" src={line} alt="line" />
        </div>
        <div className="flex justify-center pb-6">
          <p className="flex items-center opacity-70 text-white text-sm font-normal font-Inter leading-7">
            Copyright
            <span className="mx-1.5">
              <CopyIcon />
            </span>
            Appstun All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
