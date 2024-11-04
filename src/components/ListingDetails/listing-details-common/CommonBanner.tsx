import Link from "next/link";

const CommonBanner = ({ style_3, data }: any) => {
  console.log(data);
  return (
    <div className="w-full">
      <div className="md:flex justify-between items-center font-poppins">
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="font-medium md:text-[40px] text-[24px] ">
            {/* {`${data?.UnitNumber !== null ? `${data?.UnitNumber} -` : ""}  ${
            data?.StreetNumber
          } ${data?.StreetName} ${data?.StreetSuffix}`} */}
            33 Ashcreek Dr, Brampton
          </h2>
          <p className="md:text-[22px] text-[16px] text-[#7a7a7a] font-[500]">
            Brampton, Credit Valley, Peel, Ontario L6Y 3A7
          </p>
        </div>
        <div className="font-poppins md:mt-0 mt-6">
          <div className="flex md:flex-row flex-col md:justify-end justify-start md:items-center gap-4">
            <div className="flex justify-center items-center text-[12px] bg-white border border-black  rounded-[23px] w-[106.21px] h-[28px]">
              For Sale
            </div>
            <div className="text-black md:text-[40px] text-[24px] font-[500] md:flex justify-end items-center">
              Price: $1,67,000
            </div>
          </div>
          <p className=" text-[#7a7a7a] font-[500] md:text-[22px] text-[16px] md:text-right text-left">
            Property Taxes: <span className="text-black">$8,343/yr</span>
          </p>
        </div>
      </div>
      <div className="md:flex justify-between items-center  font-poppins">
        <p className="md:text-[22px] text-[16px] text-[#7c7c7c] md:mt-[50px] mt-3">
          Days on Market Taxes:{" "}
          <span
            className="text-black
          "
          >
            8
          </span>
        </p>
        <div className="md:flex justify-end items-start gap-[120px] mt-11">
          <div className="flex md:justify-between justify-start text-black md:text-[20px] text-[14px] items-center gap-8">
            <p>Select Type:</p>
            <p>All</p>
          </div>
          <ul className="flex md:justify-end justify-start items-center gap-3 mt-2">
            <li className="">
              <Link
                href=""
                className="text-[18px] font-abhaya text-black flex items-center gap-1 mr-3"
              >
                <i
                  className="fa-sharp fa-regular fa-share-nodes"
                  style={{ fontSize: "16px" }}
                ></i>{" "}
                Share
              </Link>
            </li>
            <li>
              <Link
                href=""
                style={{ width: "32px", height: "32px", fontSize: "16px" }}
                className={`border border-black text-black rounded-[50%] flex justify-center items-center hover:bg-[#6965fd] hover:border-none hover:text-white`}
              >
                <i className="fa-light fa-heart hover:text-white"></i>
              </Link>
            </li>
            <li>
              <Link
                href=""
                style={{ width: "32px", height: "32px", fontSize: "16px" }}
                className={`border border-black text-black rounded-[50%] flex justify-center items-center hover:bg-[#6965fd] hover:border-none hover:text-white`}
              >
                <i className="fa-light fa-bookmark hover:text-white"></i>
              </Link>
            </li>
            <li>
              <Link
                href=""
                style={{ width: "32px", height: "32px", fontSize: "16px" }}
                className={`border border-black text-black rounded-[50%] flex justify-center items-center hover:bg-[#6965fd] hover:border-none hover:text-white`}
              >
                <i className="fa-light fa-circle-plus hover:text-white"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
