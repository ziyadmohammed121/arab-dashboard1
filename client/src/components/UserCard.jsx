import React from "react";
import userImage from "../assets/media.png";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const UserCard = () => {
  return (
    <div className="flex items-center justify-center md:block">
      <div className="w-[250px] bg-white rounded-[10px] flex flex-col h-[290px] overflow-hidden">
        <img
          src={userImage}
          alt=""
          className="w-full h-full object-cover overflow-hidden"
        />
        <h2 className="text-[16px] font-semibold text-center pt-3">John Doe</h2>
        <p className="text-gray-500 font-semibold text-center py-2 text-[14px]">
          CEO
        </p>
        <div className="flex items-center gap-4 w-full justify-center pb-4">
          <img src={insta} alt="" className="h-[18px]" />
          <img src={fb} alt="" className="h-[18px]" />
          <img src={twitter} alt="" className="h-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
