import React from "react";
import Image from "next/image";

function FifthSection() {
  return (
    <div className="snap-start relative h-screen flex flex-col items-center">
      <div className="m-auto">
        <div className="font-firaSans text-[rgb(17,17,17)] font-bold md:mb-[20px] mt-[700px] sm:mt-[1900px] md:mt-[1100px] lg:mt-[2600px] 2xl:my-0 text-[48px] md:text-[64px] text-center 2xl:mb-[50px]">
          Ihre Partner
        </div>
        <div className="flex flex-col 2xl:flex-row items-center justify-center">
          <div className="flex flex-col items-center content-around">
            <div className="h-[225.75px] w-[216.31px] md:w-[337.5px] md:h-[337.5px] relative">
              <Image src="/../public/Portrait1.png" alt="" fill></Image>
            </div>
            <div className="tracking-[10px] font-workSans text-center mt-[20px] text-[24px] md:text-[24px]">
              SEBASTIAN HOITZ
            </div>
            <div className="text-[24px] md:text-[22px] font-firaSans tracking-wide mt-[20px] max-w-[630px] mx-[20px]">
              Serial Entrepreneur, Software Architekt, E-Commerce Experte,
              SCAYLE Architekt, Spezialist digitale Transformation
            </div>
          </div>
          <div className="flex flex-col items-center mt-[0px]">
            <div className="h-[225.75px] w-[216.31px] md:w-[337.5px] md:h-[337.5px] relative">
              <Image src="/../public/Portrait2.png" alt="" fill></Image>
            </div>
            <div className="tracking-[10px] font-workSans text-center mt-[16px]  text-[24px] md:text-[24px]">
              MARCUS BINDSEIL
            </div>
            <div className="text-[24px] md:text-[22px] font-firaSans tracking-wide mt-[20px] max-w-[630px] mx-[20px] 2xl:ml-10">
              Software Architekt, Produktentwickler, Organisationsentwickler,
              agile Transformation, 25 Jahre Erfahrung im E-Commerce
            </div>
          </div>
        </div>
        <div className="font-workSans text-[24px] md:text-[24px] mt-[20px] max-w-[90vw] 2xl:max-w-screen text-center">
          UNSER TEAM VON PROGRAMMIERERN WIRD DURCH AUSGESUCHTE EXPERTEN AUS
          UNSEREM NETZWERK ERGÄNZT
        </div>
      </div>
    </div>
  );
}

export default FifthSection;


