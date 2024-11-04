"use client";
import { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
// import DropdownSix from "@/components/search-dropdown/inner-dropdown/DropdownSix";
import UseShortedProperty from "@/hooks/useShortedProperty";
import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
// import ReactPaginate from "react-paginate";
import ClipLoader from "react-spinners/ClipLoader";
// import { fetchMediaData, fetchPropertyData } from "@/services/api";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { PiGarage } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiListPlus } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

import DropdownSeven from "@/components/search-dropdown/inner-dropdown/DropdownSeven";
import { IoGridOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import SearchFilters from "../listing-14/SearchFilters";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// const select_type: string[] = [
//   "All",
//   "Houses",
//   "Condos",
//   "Townhomes",
//   "Apartments",
//   "Land & Lots",
//   "Commercial Properties",
// ];

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

const ListingThirteenArea = () => {
  const itemsPerPage = 10;
  const page = "listing_5";
  const maxPageBoxes = 10; // Limit to show max 15 page numbers

  const {
    itemOffset,
    sortedProperties,
    currentItems,
    // pageCount,
    // handlePageClick,
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

  const [pageCount, setPageCount] = useState(0);
  const [show, setShow] = useState(false);
  const [skipValue, setSkipValue] = useState(0);
  const [selectedType, setSelectedType] = useState("All");
  const [propertiesData, setpropertiesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});
  const [styleView, setStyleView] = useState("grid");
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const handleSelectChange = (value: string, index: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [index]: value,
    }));
    setOpenDropdownIndex(null);
  };

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleStyleView = () => {
    setStyleView(styleView === "grid" ? "list" : "grid");
  };
  const handleResetFilter = () => {
    resetFilters();
  };

  // useEffect(() => {
  //   const MediaData = async () => {
  //     try {
  //       const data = await fetchMediaData();
  //       console.log(data?.value);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // const PropertyData = async () => {
  //   try {
  //     const data = await fetchPropertyData(skipValue);
  //     setpropertiesData(data?.value);
  //     setTotalResults(data?.["@odata.count"]);
  //     setPageCount(Math.ceil(data?.["@odata.count"] / itemsPerPage));
  //     const nonEmptyRoomTypes = data?.value?.filter(
  //       (item: any) => item.RoomType && item.RoomType.length > 0
  //     );
  //     console.log("nonEmptyRoomTypes", nonEmptyRoomTypes);
  //   } catch (error) {
  //     console.log(error);
  //     setError("Failed to fetch property data");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //   MediaData();
  //   PropertyData();
  // }, [skipValue]);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  if (loading) {
    return (
      <div className="loading-spinner flex justify-center items-center text-center w-full h-[100vh]">
        {" "}
        <ClipLoader
          color={"#ffffff"}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  console.log(pageCount, "pageCount");

  // console.log(propertiesData);
  // // Handles page changes
  // const handlePageClick = (event: { selected: number }) => {
  //   const newSkipValue = event.selected * itemsPerPage;
  //   setSkipValue(newSkipValue);
  // };

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="w-[100vw] mt-[160px] ">
      <div className="w-[100vw]">
        <div className="md:hidden block relative w-[97%] m-auto px-2">
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
          <div className="bg-[#f1f1f1] w-full py-4 hidden md:block">
            <div className="md:flex  justify-between items-center md:px-[20px] md:w-[94%] w-full m-auto px-2 ">
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

      {/* <div className="listing-type-filter">
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

      <div className="wrapper">
        <div className="row gx-0">
          <div className="w-full">
            <div className="ps-3 pe-3 ps-md-4 pe-md-4 ps-xxl-5 pe-xxl-5 pt-50 pb-200 xl-pb-120 md-pb-80">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
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
                                  <div className="absolute w-full top-3 px-2 flex justify-between items-center">
                                    <div className=" font-[500] text-[12px] font-urbanist w-[68.94px] h-[21.0px] flex justify-center items-center text-black-500 bg-[#93ffc3]">
                                      {/* {item.ListPriceUnit} */}For Sale
                                    </div>
                                    <Link href="#" className="">
                                      <i className="fa-light fa-heart hover:font-bold text-white hover:text-[#807def]"></i>
                                    </Link>
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
                                    className="text-[18px] text-black  font-urbanist font-[500]"
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
                                  className="text-[14px] font-lato font-[400] text-[#999999] h-10"
                                  style={{ maxWidth: "90%" }}
                                >
                                  123 Falcon Dr, Brampton
                                </div>

                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between ">
                                  <li className="flex justify-start items-start gap-2">
                                    <LiaBedSolid className="text-black text-xl mt-1" />
                                    <span className="flex flex-col justify-start items-start">
                                      <p className="text-black text-[16px] font-lato font-[400]">
                                        {"03"}
                                      </p>
                                      <p className="text-[#999999] -mt-2 text-[16px] font-[400] font-urbanist">
                                        bed
                                      </p>
                                    </span>
                                  </li>
                                  <li className="flex justify-start items-start gap-2">
                                    <PiBathtub className="text-black text-xl mt-1" />
                                    <span className="flex flex-col justify-start items-start">
                                      <p className="text-black text-[16px] font-lato font-[400]">
                                        {"02"}
                                      </p>
                                      <p className="text-[#999999] -mt-2 text-[16px] font-[400] font-urbanist">
                                        bath
                                      </p>
                                    </span>
                                  </li>
                                  <li className="flex justify-start items-start gap-2">
                                    <PiGarage className="text-black text-xl mt-1" />
                                    <span className="flex flex-col justify-start items-start">
                                      <p className="text-black text-[16px] font-lato font-[400]">
                                        {"02"}
                                      </p>
                                      <p className="text-[#999999] -mt-2 text-[16px] font-[400] font-urbanist">
                                        garage
                                      </p>
                                    </span>
                                  </li>
                                </ul>

                                <div className="pl-footer py-1 border-t border-b border-[#a8a8a8] border-dashed d-flex align-items-center justify-content-between">
                                  <div className=" text-[20px] font-[400] font-poppins text-[#5501fe] ">
                                    $99.00
                                  </div>
                                  <Link
                                    href={`/listing_details_01?id=${1}`}
                                    className="h-10 w-10 bg-black flex justify-center items-center"
                                  >
                                    <i className="bi text-white bi-arrow-up-right"></i>
                                  </Link>
                                </div>
                                <div className="flex justify-between items-center text-[16px] text-[#7f7f7f] font-lato font-[400]">
                                  <p>Detached</p>
                                  <p>4 dags</p>
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
                      className="md:flex justify-start items-start md:h-[300px] h-auto w-full bg-[#f4f4f4]"
                    >
                      <div className="md:w-[35%] w-full h-full relative">
                        <Image
                          alt=""
                          src={"/assets/images/listing/img_15.jpg"}
                          width={400}
                          height={300}
                          className="w-full h-full bg-contain"
                        />
                        <div className="absolute left-3  top-3 px-2 flex justify-center font-[500] text-[12px] font-abhaya bg-[#ffffff] w-[68.94px] h-[21.0px] items-center">
                          For Sale
                        </div>
                      </div>
                      <div className=" px-3 py-3 w-full">
                        <div className="md:w-[95%] w-full mx-auto flex justify-between items-center">
                          <h2 className="text-[32px] text-black font-abhaya font-[500]">
                            Morpho Palace
                          </h2>
                          <div className="flex justify-end items-center gap-3">
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

                        <div className="md:w-[95%] w-full mx-auto text-[18px] font-[400] font-lato text-[#545454] mt-2">
                          Mirpur 10, National Stadium, 1210, Dhaka, BD
                        </div>
                        <div className="md:w-[95%] w-full mx-auto flex flex-wrap justify-between items-center font-lato md:mt-[40px] mt-[20px]">
                          <div className="md:w-auto w-[32%]">
                            <p className="text-[20px] text-black font-[400]">
                              2137
                            </p>
                            <p className="text-[#626262] text-[16px] font-lato">
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
                            <p className="text-[20px] text-black font-[400]">
                              03
                            </p>
                            <p className="text-[#626262] text-[16px] font-lato">
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
                            <p className="text-[20px] text-black font-[400]">
                              02
                            </p>
                            <p className="text-[#626262] text-[16px] font-lato">
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
                            <p className="text-[20px] text-black font-[400]">
                              01
                            </p>
                            <p className="text-[#626262] text-[16px] font-lato">
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
                            <p className="text-[20px] text-black font-[400]">
                              01
                            </p>
                            <p className="text-[#626262] text-[16px] font-lato">
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
                            <p className="text-[20px] text-black font-[400]">
                              02
                            </p>
                            <p className="text-[#626262] text-[16px] font-lato">
                              Garages
                            </p>
                          </div>
                        </div>
                        <div className="md:w-[95%] w-full mx-auto flex justify-between items-center mt-[40px]">
                          <p className="font-abhaya text-[36px] text-black font-[500]">
                            $24,0000
                          </p>
                          <div className="flex bg-black justify-center items-center w-[47.37px] h-[47.37px]">
                            <GoArrowUpRight className="text-white text-[20px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* <div className="mt-10 flex justify-center">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={<i className="fa-regular fa-chevron-right"></i>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={Math.min(maxPageBoxes, pageCount)}
                  pageCount={pageCount}
                  previousLabel={<i className="fa-regular fa-chevron-left"></i>}
                  renderOnZeroPageCount={null}
                  className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
                />
              </div> */}
            </div>
          </div>

          {/* <div className="col-xxl-3 col-lg-4 order-lg-first">
            <div className="advance-search-panel h-100 border-end">
              <div className="main-bg grey-bg h-100">
                <DropdownSix
                  handleSearchChange={handleSearchChange}
                  handleBedroomChange={handleBedroomChange}
                  handleBathroomChange={handleBathroomChange}
                  handlePriceChange={handlePriceChange}
                  maxPrice={maxPrice}
                  priceValue={priceValue}
                  handleResetFilter={handleResetFilter}
                  selectedAmenities={selectedAmenities}
                  handleAmenityChange={handleAmenityChange}
                  handleLocationChange={handleLocationChange}
                  handleStatusChange={handleStatusChange}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mb-[80px] -mt-[130px]">
        <div className="flex  gap-2 justify-between items-center text-black font-lato">
          <div className="hover:text-white hover:bg-[#aeacff] hover:p-2 w-[30px] h-[30px] flex justify-center items-center cursor-pointer text-[17px]">
            1
          </div>
          <div className="hover:text-white hover:bg-[#aeacff] hover:p-2 w-[30px] h-[30px] flex justify-center items-center cursor-pointer text-[17px]">
            2
          </div>
          <div className="hover:text-white hover:bg-[#aeacff] hover:p-2 w-[30px] h-[30px] flex justify-center items-center cursor-pointer text-[17px]">
            3
          </div>
          <div className="hover:text-white hover:bg-[#aeacff] hover:p-2 w-[30px] h-[30px] flex justify-center items-center cursor-pointer text-[17px]">
            4...
          </div>
        </div>
        <div className="flex justify-start gap-2 items-center text-[17px] font-lato text-black cursor-pointer">
          <p>Last</p>
          <HiOutlineArrowLongRight />
        </div>
      </div>
    </div>
  );
};

export default ListingThirteenArea;
