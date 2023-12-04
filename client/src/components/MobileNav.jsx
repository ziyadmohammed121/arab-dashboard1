import React, { useRef } from "react";
import logo from "../assets/Briefcase.png";
import mainLogo from "../assets/StatBoard.png";
import logout from "../assets/Shutdown.png";
import { NavLink } from "react-router-dom";
import { navLinks } from "./SideBar";
import useOuterClick from "../hooks/outerClick";

const MobileNav = ({ showNav, setShowNav }) => {
  const navRef = useRef(null);
  useOuterClick(navRef, setShowNav);
  return (
    <div
      ref={navRef}
      className={`h-screen fixed left-0 top-0 duration-500 ease-out transition-all ${
        showNav ? "translate-x-0" : "translate-x-[-110%]"
      }`}
    >
      <div
        className={`bg-blue-950 flex sm:hidden h-screen text-white flex-col justify-between`}
      >
        <div className="flex justify-center items-center flex-col mt-[20px]">
          <img src={logo} alt="" />
          <img src={mainLogo} alt="" />
        </div>
        <div className="flex flex-col gap-5 justify-end pl-[35px]">
          {navLinks.map((item, id) => (
            <NavLink
              onClick={() => setShowNav(false)}
              to={item.to}
              key={id}
              className={({ isActive }) =>
                isActive
                  ? "bg-white flex font-semibold items-center pr-16 gap-4 text-blue-950 rounded-bl-[10px] rounded-tl-[10px] px-4 py-2 text-[16px]"
                  : "bg-gray-900 flex font-semibold pr-16 items-center gap-4 text-white rounded-bl-[10px] rounded-tl-[10px] px-4 py-2 text-[16px]"
              }
            >
              <img src={item.icon} alt="" /> {item.title}
            </NavLink>
          ))}
        </div>
        <button className="bg-white justify-center flex items-center gap-4 text-red-500 px-4 py-2 text-[14px]">
          Logout <img src={logout} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
