import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/icon_47.svg";
import icon_2 from "@/assets/images/icon/bed.png";
import icon_3 from "@/assets/images/icon/bath.svg";
import icon_4 from "@/assets/images/icon/icon_50.svg";
import icon_5 from "@/assets/images/icon/icon_51.svg";

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  value: string;
}

const CommonPropertyOverview = ({ data }: { data: any }) => {
  const property_overview_data: DataType[] = [
    {
      id: 1,
      icon: icon_5,
      value: "Apartment",
      title: "Type",
    },
    {
      id: 2,
      icon: icon_2,
      value: "03",
      title: "Bed",
    },
    {
      id: 3,
      icon: icon_3,
      value: "02",
      title: "Bath",
    },
    {
      id: 4,
      icon: icon_1,
      value: "2500-3000",
      title: "Sqft.",
    },
    {
      id: 5,
      icon: icon_1,
      value: "110`X205`",
      title: "Lot",
    },
    {
      id: 6,
      icon: icon_4,
      value: "Finished",
      title: "Basement",
    },
    {
      id: 7,
      icon: icon_4,
      value: "5-10",
      title: "Age",
    },
  ];

  return (
    <div className="w-full bg-white rounded-[18px] shadow-lg pt-7 my-7 flex justify-center items-center font-lato">
      <div className="w-[95%] m-auto">
        <div className="flex flex-wrap justify-between gap-2">
          {property_overview_data.map((item, index) => (
            <div
              key={item.id}
              className={`md:w-[13%] w-[48%] md:mb-0 mb-3 pb-2 flex justify-center items-start flex-col md:gap-2 gap-1 ${
                index === property_overview_data.length - 1
                  ? ""
                  : "md:border-r border-[#b3b3b3]"
              }`}
            >
              <div className="flex items-center gap-1 ml-2">
                <Image
                  src={item.icon}
                  alt="icon"
                  className=" w-[30px] md:w-[40px] h-[30px]  md:h-[40px]"
                />
                <span className="ml-2 md:text-[20px] text-[16px] text-black ">
                  {item.title}
                </span>
              </div>
              <p className="text-black mt-2 md:text-[22px] text-[18px] font-bold ml-3">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonPropertyOverview;
