import React from "react";
import Image from "next/image";

function FifthSection() {
  return (
    <div className="snap-start relative h-screen flex flex-col items-center ">
      <div className="font-firaSans text-[rgb(17,17,17)] font-bold md:mb-[50px] mt-[700px] sm:mt-[1900px] md:mt-[1100px] lg:mt-[2600px] 2xl:mt-[30px] text-[48px] md:text-[96px]">
        Ihre Partner
      </div>
      <div className="flex flex-col 2xl:flex-row items-center justify-center">
        <div className="flex flex-col items-center content-center 2xl:mr-[200px]">
          <div className="h-[225.75px] w-[216.31px] md:w-[432.63px] md:h-[451.5px] relative">
            <Image src="/../public/Portrait1.png" alt="" fill></Image>
          </div>
          <div className="tracking-[10px] font-workSans text-center mt-[20px] text-[24px] md:text-[32px]">
            SEBASTIAN HOITZ
          </div>
          <div className="text-[24px] md:text-[32px] font-firaSans tracking-wide mt-[20px] max-w-[830px] mx-[20px]">
            Serial Entrepreneur, Software Architekt, E-Commerce Experte, SCAYLE
            Architekt, Spezialist digitale Transformation
          </div>
        </div>
        <div className="flex flex-col items-center mt-[30px]">
          <div className="h-[225.75px] w-[216.31px] md:w-[462.63px] md:h-[451.5px] relative">
            <Image src="/../public/Portrait2.png" alt="" fill></Image>
          </div>
          <div className="tracking-[10px] font-workSans text-center mt-[20px]  text-[24px] md:text-[32px]">
            MARCUS BINDSEIL
          </div>
          <div className="text-[24px] md:text-[32px] font-firaSans tracking-wide mt-[20px] max-w-[830px] mx-[20px] 2xl:ml-0">
            Software Architekt, Produktentwickler, Organisationsentwickler,
            agile Transformation, 25 Jahre Erfahrung im E-Commerce
          </div>
        </div>
      </div>
      <div className="font-workSans text-[24px] md:text-[32px] mt-[160px] max-w-[90vw] 2xl:max-w-screen">
        unser Team von Programmierern wird durch ausgesuchte Experten aus
        unserem Netzwerk ergänzt
      </div>
    </div>
  );
}

export default FifthSection;


