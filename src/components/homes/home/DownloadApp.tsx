import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
  return (
    <div className="md:w-[88%] w-full mx-auto mt-[60px] mb-[100px] flex md:flex-row flex-col-reverse justify-between items-center bg-gradient4 md:rounded-[50px] md:h-[525.59px] h-auto">
      <div className="md:w-[45%] w-full flex flex-col justify-center h-full md:pr-8 p-10">
        <p className="text-black md:text-left text-center md:text-[50px] text-[25px] font-bold font-urbanist leading-tight">
          Download our App
        </p>
        <p className="text-[#595959] md:text-left text-center text-[18px] mt-5 leading-relaxed">
          Lörem ipsum gobel vefökopöktiga men lajyns beskade. Exopp timent. Ar
          astrosade för att farat dekasangen. Mick bara stenosamma teck. Mänera
          gigasel som tepänera dianing. Lörem ipsum gobel vefökopöktiga men
          lajyns beskade. Exopp timent.
        </p>
        <div className="md:flex mt-8 gap-6">
          <div className="w-[203.95px] h-[95.07px] md:mb-0 mb-3 md:block flex justify-center items-center">
            <Image
              src="/assets/images/hero/playstore.png"
              alt="playstore"
              width={203.95}
              height={95.07}
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="w-[203.95px] h-[57.07px] md:block flex justify-center items-center">
            <Image
              src="/assets/images/hero/appstore.png"
              alt="appstore"
              width={203.95}
              height={57.07}
              className="w-full h-full bg-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[50%] w-[98%] h-full flex justify-center items-end">
        <div className="md:h-[460px] h-[360px] w-full flex justify-center md:items-end items-center">
          <Image
            src="/assets/images/hero/download-img.png"
            alt="download app"
            width={425}
            height={460}
            className="w-full min-h-full bg-cover md:rounded-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
