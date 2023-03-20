import React from "react";

function FourthSection() {
  return (
    <div className="snap-start relative h-screen w-screen flex justify-center content-center">
      <div className="flex flex-col justify-around mt-[945px] sm:mt-[1600px] md:mt-[1900px] lg:mt-[2600px] 2xl:mt-[0px]">
        <div className="flex mt-[60px] 2xl:min-w-[1860px] content-center justify-center">
          <img
            src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/3c8739ed-0b32-4b59-830c-caa69e7717b2?pitch-bytes=2916650&pitch-content-type=image%2Fjpeg"
            alt="Image Not Found"
            className="object-fill h-[55vh] 2xl:w-[1860px] min-h-[300px] min-w-[900px] hidden lg:block mb-[20px]"
          />
        </div>
        <div className="flex flex-col content-center justify-center 2xl:ml-0 2xl:flex-row">
          <div className="text-3xl md:text-6xl text-center font-firaSans font-bold text-[rgb(26,26,26)] sm:mt-[0px] mb-[20px] whitespace-nowrap">
            Über growsome
          </div>
          <div className="text-[21px] xl:text-[24px] font-firaSans  text-[rgb(68,68,68)] mb-4 translate=-x-1/2 2xl:translate-x-0 2xl:ml-[200px] min-w-[80vw] sm:min-w-[0vw] max-w-[70vw] 2xl:max-w-[1125px] 2xl:min-w-[1125x]">
            Unsere Gründer verfügen über umfangreiche Kenntnisse und Erfahrungen
            im E-Commerce-Bereich. Wir haben die Technologie hinter dem SCAYLE
            Headless Storefront entwickelt, auf die viele große und bekannte
            Marken vertrauen. Wenn Sie mit uns zusammenarbeiten, erhalten Sie
            also nicht nur ein Team von E-Commerce-Experten, sondern auch
            direkten Zugang zu der grundlegenden Technologie, die diesen Marken
            zu ihrem Erfolg verholfen hat.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
