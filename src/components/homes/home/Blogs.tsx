import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    img: "/assets/images/listing/img_33.jpg",
    description:
      "Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp.",
  },
  {
    img: "/assets/images/listing/img_34.jpg",
    description:
      "Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp.",
  },
  {
    img: "/assets/images/listing/img_36.jpg",
    description:
      "Lörem ipsum protism soködade att pseudoligen semick, transcism heteromatisk och heteroska metrogam endotyp.",
  },
];

const Card = ({ item }: { item: any }) => {
  return (
    <div className="md:w-[369.93px] w-[330px] h-[424.52px] rounded-[20px] shadow-md">
      <div className="w-full h-[283.24px] ">
        <Image
          src={item.img}
          width={369.93}
          height={283.24}
          alt={item.price}
          className="rounded-[20px] w-full h-full object-cover"
        />
      </div>
      <div className="w-full px-2 py-1">
        <div className="h-[100px] truncate w-full text-black">
          {item.address}
        </div>
        <Link href="" className="text-">
          See More
        </Link>
      </div>
    </div>
  );
};

export default function Cards() {
  return (
    <div className="w-full mt-7">
      <div className="flex justify-between items-center w-[88%] m-auto">
        <h1 className="md:text-[48px] text-[25px] text-black font-bold font-urbanist">
          Our Blog
        </h1>
        <p className="w-[40%]">
          Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet
          jymäde ekotes. Sonera håtär men kavar för dock
        </p>
        <div className="flex justify-between items-center gap-4">
          <p className="text-[18px] text-[#595959] md:block hidden">SEE ALL</p>
          <div className="bg-black md:w-[55px] w-[39px] md:h-[55px] h-[39px] rounded-full flex justify-center items-center">
            <HiArrowLongRight className="text-white text-[18px]" />
          </div>
        </div>
      </div>
      <div className="my-6 flex justify-start items-center md:gap-5 gap-3 ml-[6vw] pr-4 overflow-x-auto scrollable py-1">
        {data.map((item, index) => (
          <Card key={index} item={item as any} />
        ))}
      </div>
    </div>
  );
}
