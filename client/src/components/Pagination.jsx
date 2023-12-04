import React from "react";

const Pagination = () => {
  return (
    <div className="flex py-3 justify-center items-center gap-2">
      <button className="bg-gray-200 px-2 border font-semibold p-1 text-[14px] text-center rounded-[4px]">
        {"<"}
      </button>
      <button className="bg-white px-2 border font-semibold p-1 text-[14px] text-center rounded-[4px]">
        1
      </button>
      <button className="bg-white px-2 border font-semibold p-1 text-[14px] text-center rounded-[4px]">
        2
      </button>
      <button className="bg-white px-2 border font-semibold p-1 text-[14px] text-center rounded-[4px]">
        ...
      </button>
      <button className="bg-white px-2 border font-semibold p-1 text-[14px] text-center rounded-[4px]">
        9
      </button>
      <button className="bg-white px-2 border font-semibold p-1 text-[14px] text-center rounded-[4px]">
        10
      </button>
      <button className="bg-white px-2 border font-semibold p-1 text-[14px] text-center rounded-[4px]">
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
