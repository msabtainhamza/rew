import { LiaSchoolSolid } from "react-icons/lia";
import { CiMedicalCase, CiMoneyBill, CiShoppingBasket } from "react-icons/ci";

const walkScoreData = [
  {
    name: "Transit Score",
    value: "63/100 (Moderate Distance Walkable)",
    icon: <CiMoneyBill className="text-black text-3xl" />,
  },
  {
    name: "School Score",
    value: "70/10 (Short Distance Walkable)",
    icon: <LiaSchoolSolid className="text-black text-3xl" />,
  },
  {
    name: "Medical Score",
    value: "80/100 (Short Distance Walkable)",
    icon: <CiMedicalCase className="text-black text-3xl" />,
  },
  {
    name: "Shopping Score",
    value: "90/100 (Long Distance Walkable)",
    icon: <CiShoppingBasket className="text-black text-3xl" />,
  },
];

export default function Nearby() {
  return (
    <div className="bg-white rounded-xl p-4">
      <h1 className="md:text-[36px] text-[24px] font-semibold text-dark mb-3 font-abhaya">
        Walk Score
      </h1>
      <p className="text-[#717171] font-poppins mb-4 md:text-[20px] text-[16px]">
        Risk management and compliance, when approached strategically, have the
        potential
      </p>

      <div className="flex justify-between items-center flex-wrap">
        {walkScoreData.map((item, index) => (
          <div
            key={index}
            className=" rounded-xl flex items-center gap-4 md:w-[45%] w-full mb-2"
          >
            {item.icon}
            <div>
              <h3 className="md:text-[18px] text-[14px] font-semibold text-dark font-abhaya">
                {item.name}
              </h3>
              <p className="text-[#717171] font-poppins md:text-[17px] text-[13px]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
