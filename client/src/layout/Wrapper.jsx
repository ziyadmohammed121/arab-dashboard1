import React, { useState } from "react";
import userLogo from "../assets/Rectangle 10.png";
import hamburger from "../assets/hamburger.png";
import MobileNav from "../components/MobileNav";

const Wrapper = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="bg-blue-50 min-h-screen h-full md:h-screen w-full">
        <div className="w-[90%] mx-auto py-[15px] flex flex-col h-full justify-between">
          <div className="sm:hidden w-8 h-8 overflow-hidden">
            <img
              onClick={() => setShowNav((pre) => !pre)}
              src={hamburger}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Good Morning</h1>
            <div className="rounded-[10px] px-4 py-2 gap-4 bg-white flex items-center">
              <div className="">
                <h2 className="font">John Doe</h2>
                <p className="text-[12px]">john@doe.com</p>
              </div>
              <img src={userLogo} alt="" />
            </div>
          </div>
          {children}
        </div>
      </div>
      <MobileNav setShowNav={setShowNav} showNav={showNav} />
    </>
  );
};

export default Wrapper;
