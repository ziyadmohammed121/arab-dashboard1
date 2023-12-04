import React from "react";
import useFetch from "../hooks/useFetch";

const Table = () => {
  const tableData = useFetch("/api/table");
  return (
    <>
      <div className="border w-full h-fit border-gray-300 shadow-sm rounded-lg overflow-hidden">
        <table className="w-full text-sm leading-4 h-full">
          <thead className="bg-white">
            <tr>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Id
              </th>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Name
              </th>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Quantity
              </th>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Price
              </th>
            </tr>
          </thead>
          <tbody className=" [&>*:nth-child(odd)]:bg-gray-300 [&>*:nth-child(even)]:bg-white">
            {tableData?.map((item, id) => (
              <tr key={id}>
                <td className="py-3 px-4 text-left font-medium text-gray-600 border">
                  {item.id}
                </td>
                <td className="py-3 px-4 text-left border">{item.name}</td>
                <td className="py-3 px-4 text-left border">{item.price}</td>
                <td className="py-3 px-4 text-left border">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
