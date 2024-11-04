const nearbyData = [
  {
    name: "School & College:",
    value: "1.5km",
  },
  {
    name: "Grocerry Center:",
    value: "0.2km",
  },
  {
    name: "Gym:",
    value: "0.5km",
  },
  {
    name: "Hospital:",
    value: "1.5km",
  },
  {
    name: "Metro Station:",
    value: "0.2km",
  },
  {
    name: "University:",
    value: "0.5km",
  },
  {
    name: "Shopping Mall:",
    value: "1.5km",
  },
  {
    name: "Police Station:",
    value: "0.2km",
  },
  {
    name: "Bus Station:",
    value: "0.5km",
  },
  {
    name: "River:",
    value: "1.5km",
  },
  {
    name: "Park:",
    value: "0.2km",
  },
  {
    name: "Airport:",
    value: "0.5km",
  },
];

export default function Nearby() {
  return (
    <div className="bg-white rounded-xl p-4">
      <h1 className="md:text-[36px] text-[24px] font-semibold text-dark mb-3 font-abhaya">
        Nearby
      </h1>
      <p className="text-[#717171] font-poppins mb-4 md:text-[20px] text-[14px]">
        Risk management and compliance, when approached strategically, have the
        potential to go beyond mitigating threats.
      </p>

      <div className="flex justify-between items-center mt-8 gap-y-3 gap-x-5 flex-wrap">
        {nearbyData.map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-[26%] gap-3 font-poppins"
          >
            <h1 className=" text-[#717171] md:text-[17px] text-[13px]">
              {data.name}
            </h1>
            <p className="text-black md:text-[17px] text-[13px]">
              {data.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
