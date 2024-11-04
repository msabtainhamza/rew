"use client";
import Fancybox from "@/components/common/Fancybox";
import DropdownSeven from "@/components/search-dropdown/inner-dropdown/DropdownSeven";
import UseShortedProperty from "@/hooks/useShortedProperty";
import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoGridOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { PiGarage } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiListPlus } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import SearchFilters from "./SearchFilters";
import { set } from "mongoose";

const select_type: string[] = [
  "All",
  "Apartments",
  "Villa",
  "Mortgage",
  "Loft",
  "Home",
  "Flat",
  "Building",
  "Office",
  "Factory",
  "Industry",
];
const searchOptions = [
  {
    label: "City",
    value: "city",
    icon: <CiLocationOn />,
    options: [
      { value: "toronto", text: "Toronto" },
      { value: "mississauga", text: "Mississauga" },
      { value: "brampton", text: "Brampton" },
      { value: "vaughan", text: "Vaughan" },
      { value: "markham", text: "Markham" },
      { value: "richmondhill", text: "Richmond Hill" },
      { value: "oakville", text: "Oakville" },
      { value: "burlington", text: "Burlington" },
      { value: "milton", text: "Milton" },
      { value: "pickering", text: "Pickering" },
      { value: "ajax", text: "Ajax" },
      { value: "whitby", text: "Whitby" },
      { value: "oshawa", text: "Oshawa" },
      { value: "aurora", text: "Aurora" },
      { value: "newmarket", text: "Newmarket" },
      { value: "kingcity", text: "King City" },
      { value: "caledon", text: "Caledon" },
    ],
  },
  {
    label: "Type",
    value: "type",
    icon: <MdKeyboardArrowDown />,
    options: [
      { value: "apartments", text: "Buy Apartments" },
      { value: "condos", text: "Rent Condos" },
      { value: "houses", text: "Sell Houses" },
      { value: "industrial", text: "Rent Industrial" },
      { value: "villas", text: "Sell Villas" },
    ],
  },
  {
    label: "Beds",
    value: "beds",
    icon: <MdKeyboardArrowDown />,
    options: [
      { value: "1", text: "1+" },
      { value: "2", text: "2+" },
      { value: "3", text: "3+" },
      { value: "4", text: "4+" },
    ],
  },
  {
    label: "Baths",
    value: "baths",
    icon: <MdKeyboardArrowDown />,
    options: [
      { value: "1", text: "1+" },
      { value: "2", text: "2+" },
      { value: "3", text: "3+" },
      { value: "4", text: "4+" },
    ],
  },
  {
    label: "Price Range",
    value: "price_range",
    icon: <MdKeyboardArrowDown />,
    options: [
      { value: "1", text: "$1000 - $5000" },
      { value: "2", text: "$5000 - $10000" },
      { value: "3", text: "$10000 - $15000" },
      { value: "4", text: "$15000 - $20000" },
    ],
  },
];

const mapTabs = [
  {
    label: "Detached",
    value: "detached",
  },
  {
    label: "Semi-Detached",
    value: "semi-detached",
  },
  {
    label: "Townhouse",
    value: "townhouse",
  },
  {
    label: "Condo",
    value: "condo",
  },
  {
    label: "Commercial",
    value: "commercial",
  },
];

const advancedOptions = [
  {
    label: "Location",
    value: "city",
    icon: <CiLocationOn />,
    options: [
      { value: "toronto", text: "Toronto" },
      { value: "mississauga", text: "Mississauga" },
      { value: "brampton", text: "Brampton" },
      { value: "vaughan", text: "Vaughan" },
      { value: "markham", text: "Markham" },
      { value: "richmondhill", text: "Richmond Hill" },
      { value: "oakville", text: "Oakville" },
      { value: "burlington", text: "Burlington" },
      { value: "milton", text: "Milton" },
      { value: "pickering", text: "Pickering" },
      { value: "ajax", text: "Ajax" },
      { value: "whitby", text: "Whitby" },
      { value: "oshawa", text: "Oshawa" },
      { value: "aurora", text: "Aurora" },
      { value: "newmarket", text: "Newmarket" },
      { value: "kingcity", text: "King City" },
      { value: "caledon", text: "Caledon" },
    ],
  },
  {
    label: "I am looking to...",
    value: "type",
    icon: <MdKeyboardArrowDown />,
    options: [
      { value: "apartments", text: "Buy Apartments" },
      { value: "condos", text: "Rent Condos" },
      { value: "houses", text: "Sell Houses" },
      { value: "industrial", text: "Rent Industrial" },
      { value: "villas", text: "Sell Villas" },
    ],
  },
  {
    label: "Price Range",
    value: "price_range",
    icon: <MdKeyboardArrowDown />,
    options: [
      { value: "1", text: "$1000 - $5000" },
      { value: "2", text: "$5000 - $10000" },
      { value: "3", text: "$10000 - $15000" },
      { value: "4", text: "$15000 - $20000" },
      { value: "5", text: "$20000 - $25000" },
      { value: "6", text: "$25000 - $30000" },
      { value: "7", text: "$30000 - $35000" },
      { value: "8", text: "$35000 - $40000" },
      { value: "9", text: "$40000 - $45000" },
      { value: "10", text: "$45000 - $50000" },
    ],
  },
];

const advancedFilters = [...advancedOptions, ...searchOptions];

const ListingFourteenArea = () => {
  const itemsPerPage = 4;
  const page = "listing_7";

  const {
    itemOffset,
    sortedProperties,
    currentItems,
    pageCount,
    handlePageClick,
    handleBathroomChange,
    handleBedroomChange,
    handleSearchChange,
    handlePriceChange,
    maxPrice,
    priceValue,
    resetFilters,
    selectedAmenities,
    handleAmenityChange,
    handleLocationChange,
    handleStatusChange,
    handleTypeChange,
    handlePriceDropChange,
  } = UseShortedProperty({ itemsPerPage, page });

  const handleResetFilter = () => {
    resetFilters();
  };

  const [selectedType, setSelectedType] = useState("All");

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});

  const handleSelectChange = (value: string, index: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [index]: value,
    }));
    setOpenDropdownIndex(null);
  };
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const [styleView, setStyleView] = useState("grid");
  const handleStyleView = () => {
    setStyleView(styleView === "grid" ? "list" : "grid");
  };

  const [activeTab, setActiveTab] = useState("detached");

  const handleActiveTab = (value: string) => {
    setActiveTab(value);
  };
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-[100vw] mt-[160px] ">
      <div className="w-[100vw]">
        <div className="md:hidden block -mt-10 mb-5 relative w-[97%] m-auto px-2">
          <div
            onClick={() => handleShow()}
            className=" flex  rounded-md justify-between px-2 py-2 items-center bg-white shadow-lg "
          >
            <p>
              Advanced Filters{" "}
              {`(${Object.keys(selectedOptions)?.length})` || ""}
            </p>
            <MdKeyboardArrowDown />
          </div>
          {show && (
            <div className="absolute w-[95%] m-auto z-[999] px-2 py-1 top-8 left-[10px]  bg-white shadow-lg rounded-md">
              {advancedFilters.map((option, index) => (
                <div key={index} className="relative">
                  <div
                    onClick={() => handleDropdownClick(index)}
                    className="flex justify-between items-center py-1"
                  >
                    <p className="text-[13px]">
                      {selectedOptions[index] || option.label}
                    </p>
                    <MdKeyboardArrowDown />
                  </div>
                  <ul
                    className={`absolute w-full max-h-[200px] rounded-[8px] overflow-y-auto z-[9999] top-8 left-0 bg-white border border-[#717171] ${
                      openDropdownIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {openDropdownIndex === index &&
                      option.options.map((opt, i) => (
                        <li
                          key={i}
                          className={`p-1 text-[#000000] text-[13px] font-[400] font-urbanist  hover:text-[#938fff] cursor-pointer`}
                          onClick={() => handleSelectChange(opt.text, index)}
                        >
                          {opt.text}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        {styleView === "list" ? (
          <SearchFilters />
        ) : (
          <div className="bg-[#f1f1f1] w-full py-4 md:block hidden">
            <div className="md:flex justify-between items-center md:px-[20px] md:w-[94%] w-full m-auto px-2 ">
              <div className="md:mb-0 mb-2  md:flex justify-between items-center py-3 px-2 md:border-2 border-[#7f7f7f] rounded-[6px] bg-white md:w-[65%] w-full">
                {searchOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center px-3 md:w-[20%] w-full ${
                      index === searchOptions.length - 1
                        ? "border-0"
                        : "md:border-r md:border-r-[#0F2A3733] border-r-none"
                    } relative`}
                    onClick={() => handleDropdownClick(index)}
                  >
                    <p className="text-[#999999] text-[18px] font-[400] font-urbanist">
                      {selectedOptions[index] || option.label}
                    </p>
                    <p className="text-[#999999] text-[18px] font-[400] font-urbanist">
                      {option.icon}
                    </p>
                    <div className="absolute top-0 left-0 w-full">
                      <ul
                        className={`absolute w-full max-h-[200px] rounded-[8px] overflow-y-auto z-[9999] top-10 left-0 bg-white border border-[#717171] ${
                          openDropdownIndex === index ? "block" : "hidden"
                        }`}
                      >
                        {openDropdownIndex === index &&
                          option.options.map((opt, i) => (
                            <li
                              key={i}
                              className={`p-1 text-[#999999] text-[15px] font-[400] font-urbanist hover:bg-[#999999] hover:text-white cursor-pointer`}
                              onClick={() =>
                                handleSelectChange(opt.text, index)
                              }
                            >
                              {opt.text}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center md:w-[34%] w-full gap-2">
                <div className="md:mb-0 mb-2 md:w-[60%] w-[36%] mx-auto flex justify-center  gap-[8px] md:py-[16px] py-[4px] md:text-[20px] text-[16px] font-[500] font-urbanist text-black items-center border-2 rounded-[8px] border-[#7f7f7f] bg-transparent relative">
                  ADVANCED
                  <PiListPlus className="text-[#000000] md:text-[20px] text-[16px]" />
                </div>
                <div className="md:mb-0 mb-2 md:w-[40%] w-[36%] flex mx-auto justify-center gap-2 md:py-[16px] py-[6px] md:text-[20px] text-[16px] font-[500] font-urbanist text-white items-center  rounded-[8px] bg-[#7e7bee] relative">
                  SEARCH
                  <CiSearch className="text-[#ffffff] md:text-[25px] text-[20px]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="listing-type-filter border-0">
            <div className="wrapper">
               <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
                  <li>Select Type:</li>
                  {select_type.map((select, i) => (
                     <li key={i}>
                        <Link
                           href="#"
                           className={selectedType === select ? "active" : ""}
                           onClick={() => handleTypeClick(select)}
                        >
                           {select}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div> */}
      <div className=" md:flex hidden justify-center items-center flex-wrap  w-full md:px-0 px-2 gap-5 md:py-3 py-[2px]">
        {mapTabs.map((tab, index) => (
          <div
            key={index}
            className={`flex justify-center md:text-[20px] text-[16px] md:w-auto w-[31%]  font-urbanist font-[500] text-black items-center cursor-pointer ${
              activeTab === tab.value ? "underline" : ""
            } `}
          >
            <p onClick={() => handleActiveTab(tab.value)}>{tab.label}</p>
          </div>
        ))}
      </div>
      <div className=" md:hidden flex justify-center items-center flex-wrap  w-full md:px-0 px-2 gap-0 md:py-3 py-[5px]">
        {mapTabs.map((tab, index) => (
          <div
            key={index}
            className={`flex justify-center md:text-[20px] text-[16px] md:w-auto w-[31%]  font-urbanist font-[500] text-black items-center cursor-pointer ${
              activeTab === tab.value ? "underline" : ""
            } `}
          >
            <p onClick={() => handleActiveTab(tab.value)}>{tab.label}</p>
          </div>
        ))}
      </div>
      <div className="md:flex">
        <div className="md:w-[50%] w-full">
          <div className="w-full">
            <div className="px-3 py-0 ">
              <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-8 md:mb-11">
                <div className="font-lato text-[18px] text-black font-[400]">
                  Showing 1-8 of 1,230 results
                  <span className="color-dark fw-500">
                    {/* {itemOffset + 1}–{itemOffset + currentItems.length} */}
                    {/* {skipValue + 1}–{skipValue + itemsPerPage} */}
                  </span>{" "}
                  {/* of{" "} */}
                  <span className="color-dark fw-500">
                    {/* {sortedProperties.length} */}
                    {/* {totalResults} */}
                  </span>{" "}
                  {/* results */}
                </div>
                <div className="d-flex align-items-center xs-mt-20 ">
                  <div className="short-filter d-flex align-items-center">
                    <div className="fs-16 me-2">Short by:</div>
                    <NiceSelect
                      className="nice-select rounded-0"
                      options={[
                        { value: "newest", text: "Popular" },
                        { value: "newest", text: "Newest" },
                        { value: "best_seller", text: "Best Seller" },
                        { value: "best_match", text: "Best Match" },
                        { value: "price_low", text: "Price Low" },
                        { value: "price_high", text: "Price High" },
                      ]}
                      defaultCurrent={0}
                      onChange={handleTypeChange}
                      name=""
                      placeholder=""
                    />
                  </div>

                  <div
                    className="p-1 ml-3  cursor-pointer border border-black rounded-full "
                    onClick={() => handleStyleView()}
                  >
                    {styleView === "list" ? (
                      <IoGridOutline size={22} />
                    ) : (
                      <RxHamburgerMenu size={22} />
                    )}
                  </div>
                </div>
              </div>
              {styleView === "grid" ? (
                <div className="flex justify-center items-center mt-0">
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 ">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map(
                        (item: any, index: any) => (
                          <div
                            key={index}
                            className="rounded-lg shadow-md"
                            // data-wow-delay={item.data_delay_time}
                          >
                            <div className="listing-card-one style-two ">
                              <div className="img-gallery">
                                <div className="relative overflow-hidden">
                                  <div className="absolute w-full top-3 pr-2 flex justify-start items-center">
                                    <div className=" font-[500] text-[12px] font-urbanist w-[68.94px] h-[21.0px] flex justify-center items-center text-black-500 bg-[#93ffc3]">
                                      {/* {item.ListPriceUnit} */}For Sale
                                    </div>
                                    {/* <Link href="#" className="">
                                      <i className="fa-light fa-heart hover:font-bold text-white hover:text-[#807def]"></i>
                                    </Link> */}
                                  </div>

                                  <div className="w-full">
                                    <Image
                                      alt=""
                                      src={"/assets/images/listing/img_15.jpg"}
                                      width={400}
                                      height={300}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="property-info p-2">
                                <div className="d-flex flex-wrap align-items-center justify-content-between ">
                                  <Link
                                    href={`/listing_details_01?id=${1}`}
                                    className="text-[24px] text-black hover:text-[#ff6b2c] font-urbanist font-[500]"
                                    style={{ maxWidth: "90%" }}
                                  >
                                    {/* {item.City}{" "} */} 123 Falcon Dr,
                                    Brampton
                                    <span className="fs-6 fw-normal">
                                      {/* {item.PropertySubType} */}
                                    </span>
                                  </Link>
                                </div>
                                <div
                                  className="text-[16px] font-lato font-[400] text-[#999999] h-10"
                                  style={{ maxWidth: "90%" }}
                                >
                                  123 Falcon Dr, Brampton
                                </div>

                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between ">
                                  <li className="flex justify-start items-start gap-2">
                                    <LiaBedSolid className="text-black text-xl mt-1" />
                                    <span className="flex gap-2 justify-start items-start">
                                      <p className="text-black text-[16px] font-lato font-[400]">
                                        {"03"}
                                      </p>
                                      <p className="text-[#999999]  text-[16px] font-[400] font-urbanist">
                                        bed
                                      </p>
                                    </span>
                                  </li>
                                  <li className="flex justify-start items-start gap-2">
                                    <PiBathtub className="text-black text-xl mt-1" />
                                    <span className="flex gap-2 justify-start items-start">
                                      <p className="text-black text-[16px] font-lato font-[400]">
                                        {"02"}
                                      </p>
                                      <p className="text-[#999999]  text-[16px] font-[400] font-urbanist">
                                        bath
                                      </p>
                                    </span>
                                  </li>
                                  <li className="flex justify-start items-start gap-2">
                                    <PiGarage className="text-black text-xl mt-1" />
                                    <span className="flex gap-2 justify-start items-start">
                                      <p className="text-black text-[16px] font-lato font-[400]">
                                        {"02"}
                                      </p>
                                      <p className="text-[#999999] text-[16px] font-[400] font-urbanist">
                                        garage
                                      </p>
                                    </span>
                                  </li>
                                </ul>

                                <div className="pl-footer py-1 border-t border-b border-[#a8a8a8] border-dashed d-flex align-items-center justify-content-between">
                                  <div className=" text-[32px] font-[400] font-poppins text-black ">
                                    $99.00
                                  </div>
                                  <Link
                                    href={`/listing_details_01?id=${1}`}
                                    className="h-10 w-10 bg-black hover:bg-[#ff6b2c] flex justify-center items-center"
                                  >
                                    <i className="bi text-white bi-arrow-up-right"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-9 w-full m-auto">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="md:flex justify-start items-start md:h-[200px] h-auto w-full bg-[#f4f4f4]"
                    >
                      <div className="md:w-[55%] w-full h-full relative">
                        <Image
                          alt=""
                          src={"/assets/images/listing/img_15.jpg"}
                          width={400}
                          height={400}
                          className="w-full h-full bg-contain"
                        />
                        <div className="absolute left-0  top-3 px-2 flex justify-center font-[500] text-[12px] font-abhaya bg-[#ffffff] w-[68.94px] h-[21.0px] items-center">
                          For Sale
                        </div>
                      </div>
                      <div className=" px-3 py-3 w-full">
                        <div className="md:w-[95%] w-full mx-auto flex justify-between items-center">
                          <h2 className="text-[26px] text-black font-abhaya font-[500]">
                            Morpho Palace
                          </h2>
                          <div className="flex justify-end items-center gap-2">
                            <Link href="#">
                              <i className="fa-light fa-heart hover:font-bold text-black hover:text-[#807def]"></i>
                            </Link>
                            <Link href="#">
                              <i className="fa-light fa-bookmark hover:font-bold text-black hover:text-[#807def]"></i>
                            </Link>
                            <Link href="#">
                              <i className="fa-light fa-circle-plus hover:font-bold text-black hover:text-[#807def]"></i>
                            </Link>
                          </div>
                        </div>

                        <div className="md:w-[95%] w-full mx-auto text-[15px] font-[400] font-lato text-[#545454] mt-1">
                          Mirpur 10, National Stadium, 1210, Dhaka, BD
                        </div>
                        <div className="md:w-[95%] w-full mx-auto flex flex-wrap justify-between items-center font-lato md:mt-[15px] mt-[20px]">
                          <div className="md:w-auto w-[32%]">
                            <p className="text-[14px] text-black font-[400]">
                              2137
                            </p>
                            <p className="text-[#626262] text-[14px] font-lato">
                              sqft
                            </p>
                          </div>
                          <div className="md:block hidden">
                            <Image
                              src={"/assets/images/listing/vector-line.png"}
                              width={10}
                              height={30}
                              className=""
                              alt="vector line"
                            />
                          </div>
                          <div className="md:w-auto w-[32%]">
                            <p className="text-[14px] text-black font-[400]">
                              03
                            </p>
                            <p className="text-[#626262] text-[14px] font-lato">
                              bed
                            </p>
                          </div>
                          <div className="md:block hidden">
                            <Image
                              src={"/assets/images/listing/vector-line.png"}
                              width={10}
                              height={30}
                              className=""
                              alt="vector line"
                            />
                          </div>
                          <div className="md:w-auto w-[32%]">
                            <p className="text-[14px] text-black font-[400]">
                              02
                            </p>
                            <p className="text-[#626262] text-[14px] font-lato">
                              bath
                            </p>
                          </div>
                          <div className="md:block hidden">
                            <Image
                              src={"/assets/images/listing/vector-line.png"}
                              width={10}
                              height={30}
                              className=""
                              alt="vector line"
                            />
                          </div>
                          <div className="md:w-auto w-[32%]">
                            <p className="text-[14px] text-black font-[400]">
                              01
                            </p>
                            <p className="text-[#626262] text-[14px] font-lato">
                              Kitchen
                            </p>
                          </div>
                          <div className="md:block hidden">
                            <Image
                              src={"/assets/images/listing/vector-line.png"}
                              width={10}
                              height={30}
                              className=""
                              alt="vector line"
                            />
                          </div>
                          <div className="md:w-auto w-[32%]">
                            <p className="text-[14px] text-black font-[400]">
                              01
                            </p>
                            <p className="text-[#626262] text-[14px] font-lato">
                              Parking Spot
                            </p>
                          </div>
                          <div className="md:block hidden">
                            <Image
                              src={"/assets/images/listing/vector-line.png"}
                              width={10}
                              height={30}
                              className=""
                              alt="vector line"
                            />
                          </div>
                          <div className="md:w-auto w-[32%]">
                            <p className="text-[14px] text-black font-[400]">
                              02
                            </p>
                            <p className="text-[#626262] text-[14px] font-lato">
                              Garages
                            </p>
                          </div>
                        </div>
                        <div className="md:w-[95%] w-full mx-auto flex justify-between items-center mt-[15px]">
                          <p className="font-abhaya text-[20px] text-black font-[500]">
                            $24,0000
                          </p>
                          <div className="flex bg-black justify-center items-center w-[37.37px] h-[37.37px]">
                            <GoArrowUpRight className="text-white text-[17px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full mt-[10px]">
          <div id="google-map-area" className="h-100">
            <div className="google-map-home" id="contact-google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100 md:h-full h-[50vh]"
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div className="col-xxl-6 col-lg-7">
          <div className="bg-light pl-40 pr-40 pt-35 pb-60">
            <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
              <div>
                Showing{" "}
                <span className="color-dark fw-500">
                  {itemOffset + 1}–{itemOffset + currentItems.length}
                </span>{" "}
                of{" "}
                <span className="color-dark fw-500">
                  {sortedProperties.length}
                </span>{" "}
                results
              </div>
              <div className="d-flex align-items-center xs-mt-20">
                <div className="short-filter d-flex align-items-center">
                  <div className="fs-16 me-2">Short by:</div>
                  <NiceSelect
                    className="nice-select"
                    options={[
                      { value: "newest", text: "Newest" },
                      { value: "best_seller", text: "Best Seller" },
                      { value: "best_match", text: "Best Match" },
                      { value: "price_low", text: "Price Low" },
                      { value: "price_high", text: "Price High" },
                    ]}
                    defaultCurrent={0}
                    onChange={handleTypeChange}
                    name=""
                    placeholder=""
                  />
                </div>
                <Link
                  href="/listing_15"
                  className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                  data-bs-toggle="tooltip"
                  title="Switch To List View"
                >
                  <i className="fa-regular fa-bars"></i>
                </Link>
              </div>
            </div>

            <div className="row">
              {currentItems.map((item: any) => (
                <div
                  key={item.id}
                  className="col-md-6 d-flex mb-40 wow fadeInUp"
                >
                  <div className="listing-card-one style-three border-30 w-100 h-100">
                    <div className="img-gallery p-15">
                      <div className="position-relative border-20 overflow-hidden">
                        <div className="tag bg-white text-dark fw-500 border-20">
                          {item.tag}
                        </div>
                        <Image
                          src={item.thumb ? item.thumb : ""}
                          className="w-100 border-20"
                          alt="..."
                        />
                        <Link
                          href="/listing_details_06"
                          className="btn-four inverse rounded-circle position-absolute"
                        >
                          <i className="bi bi-arrow-up-right"></i>
                        </Link>
                        <div className="img-slider-btn">
                          03 <i className="fa-regular fa-image"></i>
                          <Fancybox
                            options={{
                              Carousel: {
                                infinite: true,
                              },
                            }}
                          >
                            {item.carousel_thumb.map(
                              (thumb: any, index: any) => (
                                <a
                                  key={index}
                                  className="d-block"
                                  data-fancybox="gallery5"
                                  href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}
                                ></a>
                              )
                            )}
                          </Fancybox>
                        </div>
                      </div>
                    </div>
                    <div className="property-info pe-4 ps-4">
                      <Link href="/listing_details_06" className="title tran3s">
                        {item.title}
                      </Link>
                      <div className="address">{item.address}</div>
                      <div className="pl-footer m0 d-flex align-items-center justify-content-between">
                        <strong className="price fw-500 color-dark">
                          $
                          {item.price.toLocaleString({
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{" "}
                          {item.price_text && (
                            <>
                              / <sub>m</sub>
                            </>
                          )}
                        </strong>
                        <ul className="style-none d-flex action-icons">
                          <li>
                            <Link href="#">
                              <i className="fa-light fa-heart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-light fa-bookmark"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fa-light fa-circle-plus"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-5">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<i className="fa-regular fa-chevron-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={pageCount}
                pageCount={pageCount}
                previousLabel={<i className="fa-regular fa-chevron-left"></i>}
                renderOnZeroPageCount={null}
                className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ListingFourteenArea;
