import React, { useState } from "react";
import { CgMathMinus } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { IoCheckmark } from "react-icons/io5";

const ListingData = [
  {
    Listed: "03",
  },
  {
    "MLS#": "5",
  },
  {
    "Last Updated": "02",
  },
  {
    Profession: "4",
  },
  {
    "Original Price": "5-10 yr",
  },
  {
    Taxes: "1",
  },
];

const propertyMockData = [
  {
    Bedrooms: "03",
  },
  {
    Bedrooms: 5,
  },
  {
    Bathrooms: "02",
  },
  {
    Washrooms: 4,
  },
  {
    "Approx. Age": "5-10 yr",
  },
  {
    Kitchens: 1,
  },
  {
    "Lot Size": "103`x200`",
  },
  {
    "Property Type": "Detached",
  },
  {
    "Sq Footage": "2000-2500",
  },
  {
    Status: "For Sale",
  },
];

const parkingData = [
  {
    "Drive Parking": 2,
  },
  {
    "Garage Parking": 0,
  },
];

const basementData = [
  {
    Status: "Finished",
  },
  {
    Entrance: "Walkout",
  },
];

const UtilitiesData = [
  { "Central A/C": "Yes" },
  { "Heat Source": "Gas / Forced Air" },
  {
    Water: "Municipal",
  },
  {
    Sewers: "Septic",
  },
];

const interiorData = [
  "A/C & Heating",
  "Garage",
  "Swimming Pool",
  "Parking",
  "Garden",
  "Disabled Access",
  "Pet Friendly",
  "Ceiling Height",
  "Refriegerator",
  "Fire Place",
  "Elevator",
  "Wifi",
];

const DistinctiveOtherFee = ({ propertyData }: any) => {
  const [isListingExpanded, setIsListingExpanded] = useState(false);
  const [isPropertyExpanded, setIsPropertyExpanded] = useState(false);
  const [isBasementExpanded, setIsBasementExpanded] = useState(false);
  const [isParkingExpanded, setIsParkingExpanded] = useState(false);
  const [isUtilitiesExpanded, setIsUtilitiesExpanded] = useState(false);
  const [isInteriorExpanded, setIsInteriorExpanded] = useState(false);

  // const distinctiveFeatures = [
  //   { label: "Separate Entrance", value: "-" },
  //   { label: "Entrance Type", value: "-" },
  //   { label: "Basement Kitchen", value: propertyData?.KitchensBelowGrade },
  // ];

  // const otherFees = [
  //   { label: "Garage Type", value: propertyData?.GarageType || "-" },
  //   { label: "Garage Spaces", value: propertyData?.GarageParkingSpaces || "-" },
  //   { label: "Driveway Parking", value: propertyData?.ParkingSpaces || "-" },
  // ];

  const toggleListing = () => {
    setIsListingExpanded(!isListingExpanded);
  };

  const toggleProperty = () => {
    setIsPropertyExpanded(!isPropertyExpanded);
  };
  const toggleBasement = () => {
    setIsBasementExpanded(!isBasementExpanded);
  };

  const toggleParking = () => {
    setIsParkingExpanded(!isParkingExpanded);
  };
  const toggleUtilities = () => {
    setIsUtilitiesExpanded(!isUtilitiesExpanded);
  };
  const toggleInterior = () => {
    setIsInteriorExpanded(!isInteriorExpanded);
  };

  return (
    <div className="w-full ">
      <div className="w-full py-6">
        <div
          onClick={toggleListing}
          className="flex justify-between items-center cursor-pointer  w-full"
        >
          <p className="text-black font-[500] md:text-[24px] text-[20px] font-abhaya">
            Listing Information
          </p>
          <button className="bg-black text-white md:h-[35px] h-[27px] w-[27px] flex justify-center items-center md:p-2 p-1 rounded-full">
            {isListingExpanded ? (
              <CgMathMinus className="text-xl text-white" />
            ) : (
              <FiPlus className="text-xl text-white" />
            )}
          </button>
        </div>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isListingExpanded ? "700px" : "0",
            opacity: isListingExpanded ? "1" : "0",
          }}
        >
          <div className="flex mt-3 w-full gap-3 rounded-4 flex-wrap justify-between items-center bg-white py-3 rounded-2">
            {ListingData.map((feature, index) => (
              <div
                key={index}
                className="md:w-2/5 w-full flex justify-between items-center"
              >
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.keys(feature)[0]}:
                </p>
                <p className="text-black md:text-[18px] text-[15px] font-[400] font-abhaya">
                  {Object.values(feature)[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#DADADA] w-full py-6">
        <div
          onClick={toggleProperty}
          className="flex justify-between items-center cursor-pointer  w-full"
        >
          <p className="text-black font-[500] md:text-[24px] text-[20px] font-abhaya">
            Property Details
          </p>
          <button className="bg-black text-white md:h-[35px] h-[27px] w-[27px] flex justify-center items-center md:p-2 p-1 rounded-full">
            {isPropertyExpanded ? (
              <CgMathMinus className="text-xl text-white" />
            ) : (
              <FiPlus className="text-xl text-white" />
            )}
          </button>
        </div>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isPropertyExpanded ? "700px" : "0",
            opacity: isPropertyExpanded ? "1" : "0",
          }}
        >
          <div className="flex mt-3 w-full gap-3 rounded-4 flex-wrap justify-between items-center bg-white py-3 rounded-2">
            {propertyMockData.map((feature, index) => (
              <div
                key={index}
                className="md:w-2/5 w-full flex justify-between items-center"
              >
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.keys(feature)[0]}:
                </p>
                <p className="text-black md:text-[18px] text-[15px] font-[400] font-abhaya">
                  {Object.values(feature)[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#DADADA] w-full py-6">
        <div
          onClick={toggleBasement}
          className="flex justify-between items-center cursor-pointer  w-full"
        >
          <p className="text-black font-[500] md:text-[24px] text-[20px] font-abhaya">
            Basement
          </p>
          <button className="bg-black text-white md:h-[35px] h-[27px] w-[27px] flex justify-center items-center md:p-2 p-1 rounded-full">
            {isBasementExpanded ? (
              <CgMathMinus className="text-xl text-white" />
            ) : (
              <FiPlus className="text-xl text-white" />
            )}
          </button>
        </div>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isBasementExpanded ? "700px" : "0",
            opacity: isBasementExpanded ? "1" : "0",
          }}
        >
          <div className="flex mt-3 w-full gap-3 rounded-4 flex-wrap justify-between items-center bg-white py-3 rounded-2">
            {basementData.map((feature, index) => (
              <div
                key={index}
                className="md:w-2/5 w-full flex justify-between items-center"
              >
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.keys(feature)[0]}:
                </p>
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.values(feature)[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#DADADA] w-full py-6">
        <div
          onClick={toggleParking}
          className="flex justify-between items-center cursor-pointer  w-full"
        >
          <p className="text-black font-[500] md:text-[24px] text-[20px] font-abhaya">
            Parking
          </p>
          <button className="bg-black text-white md:h-[35px] h-[27px] w-[27px] flex justify-center items-center md:p-2 p-1 rounded-full">
            {isBasementExpanded ? (
              <CgMathMinus className="text-xl text-white" />
            ) : (
              <FiPlus className="text-xl text-white" />
            )}
          </button>
        </div>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isParkingExpanded ? "700px" : "0",
            opacity: isParkingExpanded ? "1" : "0",
          }}
        >
          <div className="flex mt-3 w-full gap-3 rounded-4 flex-wrap justify-between items-center bg-white py-3 rounded-2">
            {parkingData.map((feature, index) => (
              <div
                key={index}
                className="md:w-2/5 w-full flex justify-between items-center"
              >
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.keys(feature)[0]}:
                </p>
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.values(feature)[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#DADADA] w-full py-6">
        <div
          onClick={toggleUtilities}
          className="flex justify-between items-center cursor-pointer  w-full"
        >
          <p className="text-black font-[500] md:text-[24px] text-[20px] font-abhaya">
            Utilities
          </p>
          <button className="bg-black text-white md:h-[35px] h-[27px] w-[27px] flex justify-center items-center md:p-2 p-1 rounded-full">
            {isBasementExpanded ? (
              <CgMathMinus className="text-xl text-white" />
            ) : (
              <FiPlus className="text-xl text-white" />
            )}
          </button>
        </div>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isUtilitiesExpanded ? "700px" : "0",
            opacity: isUtilitiesExpanded ? "1" : "0",
          }}
        >
          <div className="flex mt-3 w-full gap-3 rounded-4 flex-wrap justify-between items-center bg-white py-3 rounded-2">
            {UtilitiesData.map((feature, index) => (
              <div
                key={index}
                className="md:w-2/5 w-full flex justify-between items-center"
              >
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.keys(feature)[0]}:
                </p>
                <p className="text-[#5a5a5a] md:text-[18px] text-[15px] font-[400] font-lato">
                  {Object.values(feature)[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#DADADA] w-full py-6">
        <div
          onClick={toggleInterior}
          className="flex justify-between items-center cursor-pointer  w-full"
        >
          <p className="text-black font-[500] md:text-[24px] text-[20px] font-abhaya">
            Interior Features
          </p>
          <button className="bg-black text-white md:w-[35px] md:h-[35px] h-[27px] w-[27px] flex justify-center items-center md:p-2 p-1 rounded-full">
            {isBasementExpanded ? (
              <CgMathMinus className="text-xl text-white" />
            ) : (
              <FiPlus className="text-xl text-white" />
            )}
          </button>
        </div>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isInteriorExpanded ? "700px" : "0",
            opacity: isInteriorExpanded ? "1" : "0",
          }}
        >
          <div className="flex mt-3 w-full gap-3 rounded-4 flex-wrap justify-between items-center bg-white py-3 rounded-2">
            {interiorData.map((feature, index) => (
              <div
                key={index}
                className="md:w-1/5 w-[48%] flex justify-start gap-1 items-center"
              >
                <IoCheckmark className="text-black" />
                <p className="text-black md:text-[18px] text-[15px] font-[400] font-abhaya">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistinctiveOtherFee;
