import React from "react";
const YourApp = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#919191] rounded-3xl shadow border border-white backdrop-blur-[54px] px-6 py-10">
        <div className="flex gap-6">
          <input
            className=" bg-white border-2"
            type="name"
            placeholder="Your Name"
          />
          <input
            className="bg-white border-2"
            type="email"
            placeholder="Your Email"
          />
        </div>
      </div>
    </div>
  );
};

export default YourApp;
