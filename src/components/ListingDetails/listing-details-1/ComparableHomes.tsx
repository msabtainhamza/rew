"use client";
import Image from "next/image";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";

const Card = ({
  title,
  location,
  price,
  cardName,
  cardImage,
}: {
  title: string;
  location: string;
  price: string;
  cardName: string;
  cardImage: string;
}) => {
  return (
    <div className="py-3 px-[10px] mb-2 bg-white shadow-xl rounded-xl md:w-[30%]  w-full">
      <div className="h-[190px] w-full bg-[#717171] rounded-xl relative">
        <div className="w-full h-full">
          <Image
            src={cardImage}
            alt="card"
            width={500}
            height={190}
            objectFit="contain"
            className="rounded-xl w-full h-full bg-cover"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between items-start px-3 py-2 absolute top-0 left-0">
          <div className="rounded-3xl bg-white px-3 py-2 text-[11px] font-abhaya">
            {cardName}
          </div>
          <div className="flex justify-end items-end absolute bottom-3 right-5">
            <div className="bg-[#ff6b2c] p-1 rounded-full text-white text-[14px] flex justify-center items-center">
              <TfiArrowTopRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="md:text-[22px] text-[19px] text-black mt-2 font-abhaya">
        {title}
      </h3>
      <p className="md:text-[15px] text-[14px] text-[#999999]  font-lato">
        {location}
      </p>

      <div className="flex justify-between items-center mt-4">
        <p className="md:text-[24px] text-[22px] font-abhaya">{price}</p>
        <div className="flex justify-end gap-2 items-center">
          <BsHeart className="text-[#D5D5D5] text-md hover:text-[#6965fd]" />
          <IoBookmarkOutline className="text-[#D5D5D5] text-md hover:text-[#6965fd]" />
          <IoIosAddCircleOutline className="text-[#D5D5D5] text-2xl hover:text-[#6965fd]" />
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    name: "For Sale",
    isActive: true,
  },
  {
    name: "Sold",
    isActive: false,
  },
  {
    name: "For Rent",
    isActive: false,
  },
  {
    name: "Rented",
    isActive: false,
  },
];

const CardsData = [
  {
    title: "Blueberry villa.",
    location: "Mirpur 10, Stadium dhaka 1208",
    price: "$34000",
    cardName: "FOR SALE",
    cardImage: "/assets/images/listing/img_07.jpg",
  },
  {
    title: "Redwood apartment.",
    location: "Mirpur 11, Stadium dhaka 1208",
    price: "$28000",
    cardName: "SOLD",
    cardImage: "/assets/images/listing/img_08.jpg",
  },
  {
    title: "Greenfield estate.",
    location: "Mirpur 12, Stadium dhaka 1208",
    price: "$50000",
    cardName: "FOR RENT",
    cardImage: "/assets/images/listing/img_09.jpg",
  },
  {
    title: "Blueberry villa.",
    location: "Mirpur 10, Stadium dhaka 1208",
    price: "$34000",
    cardName: "FOR SALE",
    cardImage: "/assets/images/listing/img_10.jpg",
  },
  {
    title: "Redwood apartment.",
    location: "Mirpur 11, Stadium dhaka 1208",
    price: "$28000",
    cardName: "SOLD",
    cardImage: "/assets/images/listing/img_11.jpg",
  },
  {
    title: "Greenfield estate.",
    location: "Mirpur 12, Stadium dhaka 1208",
    price: "$50000",
    cardName: "FOR RENT",
    cardImage: "/assets/images/listing/img_12.jpg",
  },
  {
    title: "Blueberry villa.",
    location: "Mirpur 10, Stadium dhaka 1208",
    price: "$34000",
    cardName: "FOR SALE",
    cardImage: "/assets/images/listing/img_13.jpg",
  },
  {
    title: "Redwood apartment.",
    location: "Mirpur 11, Stadium dhaka 1208",
    price: "$28000",
    cardName: "SOLD",
    cardImage: "/assets/images/listing/img_14.jpg",
  },
  {
    title: "Greenfield estate.",
    location: "Mirpur 12, Stadium dhaka 1208",
    price: "$50000",
    cardName: "FOR RENT",
    cardImage: "/assets/images/listing/img_15.jpg",
  },
  {
    title: "Greenfield estate.",
    location: "Mirpur 12, Stadium dhaka 1208",
    price: "$50000",
    cardName: "FOR RENT",
    cardImage: "/assets/images/listing/img_15.jpg",
  },
];

const comparableSelector = [{ id: "1" }, { id: "2" }, { id: "3" }];

export default function ComparableHomes() {
  const [activeTab, setActiveTab] = useState("For Sale");
  const [activeComparable, setActiveComparable] = useState("1");

  const handleActiveComparable = (id: string) => {
    setActiveComparable(id);
  };

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  // Filter cards based on active tab
  const filteredCards = CardsData.filter((card) => {
    return card.cardName === activeTab.toUpperCase();
  });

  return (
    <div className="bg-white px-4 py-3 rounded-xl">
      <div className="md:flex justify-between items-center">
        <h1 className="md:px-0 px-2 font-semibold font-abhaya text-dark md:text-[36px] md:text-left text-center text-[24px]">
          Comparable Homes You May Like
        </h1>
        <div className="flex justify-end items-center gap-3">
          {comparableSelector.map((item, index) => (
            <div
              key={index}
              className={`rounded-full cursor-pointer h-[12px] w-[12px] ${
                activeComparable === item.id
                  ? "bg-black border border-black"
                  : "bg-white border border-black"
              }`}
              onClick={() => handleActiveComparable(item.id)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-row flex-wrap md:gap-[2px] justify-between items-center border-b border-b-[#DADADA] mt-4 pb-1">
        {tabs.map((tab, index) => (
          <>
            <button
              key={index}
              onClick={() => handleTabChange(tab.name)}
              className={`${
                activeTab === tab.name
                  ? "bg-[#6965fd]  text-white"
                  : "text-[#4a4c56] font-bold border border-[#717171]"
              } text-[14px] px-5  py-2 md:rounded-3xl rounded-xl md:mb-0 mb-2 md:w-[18%]  md:block hidden`}
            >
              {tab.name}
            </button>
            <button
              key={index}
              onClick={() => handleTabChange(tab.name)}
              className={`${
                activeTab === tab.name
                  ? " text-[#6965fd] border border-[#6965fd] font-bold"
                  : " text-[#4a4c56] font-bold"
              } text-[14px] px-1 py-[2px]  rounded-md md:mb-0 mb-2  w-[24%] md:hidden block`}
            >
              {tab.name}
            </button>
          </>
        ))}
      </div>
      <div className="md:flex md:flex-wrap justify-start gap-8 overflow-x-auto items-center">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            location={card.location}
            price={card.price}
            cardName={card.cardName}
            cardImage={card.cardImage}
          />
        ))}
      </div>
    </div>
  );
}
