import React from "react";
import bg_img from "../assets/images/png/bg-img-rb.png";

const YourApp = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-gradient-to-b from-white via-white to-white rounded-3xl shadow border border-white backdrop-blur-[54px] px-6 py-10">
        <div className="flex gap-6">
          <input type="name" placeholder="Your Name" />
          <input type="email" />
        </div>
      </div>
    </div>
  );
};

export default YourApp;
