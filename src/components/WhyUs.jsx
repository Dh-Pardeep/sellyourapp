import React from "react";
import great from "../assets/images/webp/great.webp";
import cash from "../assets/images/webp/cash.webp";
import price from "../assets/images/webp/price.webp";
import process from "../assets/images/webp/process.webp";
import vibes from "../assets/images/webp/vibes.webp";

const WhyUs = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-28">
        <div className="flex justify-center">
          <h3 className="text-white font-Manrope font-medium text-lg">
            Why Us?
          </h3>
        </div>
        <div className="flex justify-center text-center mt-4">
          <p className="text-dark-gray font-Inter font-normal text-xm max-w-[758px]">
            Selling your App business is a big step. You’ve spent a lot of time
            and effort building your app. You deserve to get the best price
            offer and a smooth selling process.
          </p>
        </div>
        <div className="lg:flex gap-[70px]">
          <div className="flex justify-center">
            <div className="md:flex gap-[70px]">
              <div className="flex justify-center">
                <div className="sm:flex gap-[70px]">
                  <div className="mt-20">
                    <div className="flex justify-center">
                      <img className="max-w-[133px]" src={great} alt="cash" />
                    </div>
                    <p className="text-center mt-5 text-dark-gray font-Inter font-normal text-xm max-w-[220px]">
                      We guarantee 14 days from contact to exit
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-20">
                      <div className="flex justify-center">
                        <img className="max-w-[133px]" src={cash} alt="cash" />
                      </div>
                      <p className="text-center mt-5 text-dark-gray font-Inter font-normal text-xm max-w-[189px]">
                        Full cash offer, get paid immediately
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-20">
                  <div className="flex justify-center">
                    <img className="max-w-[133px]" src={price} alt="cash" />
                  </div>
                  <p className="text-center mt-5 text-dark-gray font-Inter font-normal text-xm max-w-[153px]">
                    Best price/valuation guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="sm:flex gap-[70px]">
              <div className="mt-20">
                <div className="flex justify-center">
                  <img className="max-w-[133px]" src={vibes} alt="cash" />
                </div>
                <p className="text-center mt-5 text-dark-gray font-Inter font-normal text-xm max-w-[203px]">
                  Good vibes only. We value human connections.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="mt-20">
                  <div className="flex justify-center">
                    <img className="max-w-[133px]" src={process} alt="cash" />
                  </div>
                  <p className="text-center mt-5 text-dark-gray font-Inter font-normal text-xm max-w-[158px]">
                    Simple process, zero complexity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20 pb-[75px]">
          <div className="px-10 cursor-pointer rounded-[38px] py-4 inline-block bg-gradient-to-r from-red-500 to-indigo-600 hover:from-indigo-800 hover:to-red-700 delay-1000">
            <button className="text-white font-Manrope font-normal text-xm">
              SellYourApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
