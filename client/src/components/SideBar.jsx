import React from "react";
import dashboardIc from "../assets/Circled Menu.png";
import supportIc from "../assets/Support.png";
import pluginsIc from "../assets/Puzzle.png";
import helpIc from "../assets/Help.png";
import logo from "../assets/Briefcase.png";
import mainLogo from "../assets/StatBoard.png";
import logout from "../assets/Shutdown.png";
import { NavLink } from "react-router-dom";

export const navLinks = [
  {
    title: "Dashboard",
    to: "/",
    icon: dashboardIc,
  },
  {
    title: "Support",
    to: "/support",
    icon: supportIc,
  },
  {
    title: "Plugins",
    to: "/plugins",
    icon: pluginsIc,
  },
  {
    title: "Help",
    to: "/help",
    icon: helpIc,
  },
];
const SideBar = () => {
  return (
    <div className="bg-blue-950 hidden sm:flex text-white h-screen flex-col justify-between">
      <div className="flex justify-center items-center flex-col mt-[20px]">
        <img src={logo} alt="" />
        <img src={mainLogo} alt="" />
      </div>
      <div className="flex flex-col gap-5 justify-end pl-[35px]">
        {navLinks.map((item, id) => (
          <NavLink
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
  );
};

export default SideBar;
