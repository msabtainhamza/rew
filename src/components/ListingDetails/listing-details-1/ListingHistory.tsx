import React, { useState } from "react";
import { CgMathMinus } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

const tableData = [
  {
    dateListed: "10/27/2021",
    lastPrice: "16,567,000",
    dateRemoved: "10/27/2021",
    status: "Sold",
    soldPrice: "16,00,000",
    mls: "W2345432",
  },
  {
    dateListed: "10/27/2021",
    lastPrice: "16,567,000",
    dateRemoved: "10/27/2021",
    status: "Sold",
    soldPrice: "16,00,000",
    mls: "W2345432",
  },
  {
    dateListed: "10/27/2021",
    lastPrice: "16,567,000",
    dateRemoved: "10/27/2021",
    status: "Sold",
    soldPrice: "16,00,000",
    mls: "W2345432",
  },
  {
    dateListed: "10/27/2021",
    lastPrice: "16,567,000",
    dateRemoved: "10/27/2021",
    status: "Sold",
    soldPrice: "16,00,000",
    mls: "W2345432",
  },
];

const ListingHistory = ({ propertyData }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" bg-white shadow-lg rounded-[18px] md:py-[20px] md:px-[35px] px-[20px] py-[20px]">
      <div
        onClick={toggleExpand}
        className="flex cursor-pointer w-full justify-between items-center py-3"
      >
        <p className="font-[500] md:text-[36px] text-[24px] text-black fs-20 font-abhaya">
          Listing History
        </p>
        <div className="bg-black text-white w-[35px] h-[35px] flex items-center justify-center p-1 rounded-full cursor-pointer">
          {isExpanded ? (
            <CgMathMinus className="text-2xl text-white" />
          ) : (
            <FiPlus className="text-2xl text-white" />
          )}
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isExpanded ? "300px" : "0",
          // opacity: isExpanded ? '1' : '0',
        }}
      >
        <table className="md:w-full w-[700px] overflow-x-auto ">
          <thead>
            <tr className="font-abhaya text-left md:text-[20px] text-[16px] text-black ">
              <th className="py-3">Date Listed</th>
              <th className="py-3">Last Price</th>
              <th className="py-3">Date Removed</th>
              <th className="py-3">Status</th>
              <th className="py-3">Sold Price</th>
              <th className="py-3">MLS#</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="font-lato border-[#b7b7b7] border-t text-left md:text-[16px] text-[14px]  text-[#7f7f7f]"
              >
                <td className="py-3">{data.dateListed}</td>
                <td className="py-3">{data.lastPrice}</td>
                <td className="py-3">{data.dateRemoved}</td>
                <td className="py-3">{data.status}</td>
                <td className="py-3">{data.soldPrice}</td>
                <td className="py-3">{data.mls}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListingHistory;
