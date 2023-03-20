import React from "react";
import Image from "next/image";

function SeventhSection() {
  return (
    <div className="snap-start relative h-screen w-screen flex justify-center">
      <div className="flex flex-row mt-[2250px] sm:mt-[2850px] md:mt-[2300px] lg:mt-[4450px] 2xl:mt-[0px]">
        <div className="flex flex-col  mr-[100px]">
          <div className="flex flex-col xl:flex-row 2xl:flex-col">
            <div className="ml-[10px] xl:ml-[100px] text-6xl md:text-8xl lg:text-10xl font-firaSans font-bold text-[rgb(17,17,17)] mb-4 mt-[5.2vh]">
              Kontakt
            </div>
            <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-firaSans text-[rgb(68,68,68)] max-w-[80vw] xl:max-w-[30vw] mb-4 mt-[4.2vh] 2xl:max-w-[16vw]">
              Wir freuen uns über Ihr Interesse, uns und unsere Services näher
              kennenzulernen. Lassen Sie uns über Ihre Ideen sprechen und
              gemeinsam einen Plan machen.
            </div>
          </div>
          <div className="flex flex-col xl:flex-row 2xl:flex-col">
            <div className="flex flex-col">
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[12.2vh] 2xl:max-w-[16vw]">
                growsome GmbH
              </div>
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:max-w-[16vw]">
                Hofweg 98
              </div>
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:max-w-[16vw]">
                22085 Hamburg
              </div>
            </div>
            <div className="flex flex-col">
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-workSans text-[rgb(17,17,17)] lg:w-auto mb-4 mt-[7.5vh] tracking-[14px]">
                TELEFON
              </div>
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:max-w-[16vw] tracking-wider">
                +49 175 2517038
              </div>
            </div>
            <div className="flex flex-col">
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-workSans text-[rgb(17,17,17)] lg:w-auto mb-4 mt-[7.5vh] tracking-[14px]">
                WEB
              </div>
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:max-w-[16vw] tracking-wider">
                hello@growsome.agency
              </div>
              <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:max-w-[16vw] tracking-wider mb-[30px] 2xl:mb-0">
                https://growsome.agency
              </div>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:block">
          <div className="h-[96.8vh] w-[128.26vh] my-[1.6vh] object-scale-down relative hidden opacity-[70%] 2xl:block">
            <Image
              src="/../public/Growsome6.jpg"
              alt="Image Not Found"
              fill
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;

