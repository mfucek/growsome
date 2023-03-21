import React from "react";
import Image from "next/image";

function SixthSection() {
  return (
    <div className="snap-start relative h-screen w-screen flex justify-center">
      <div className="flex mt-[1700px] sm:mt-[2850px] md:mt-[2050px] lg:mt-[3900px] 2xl:mt-[0px]">
          <div className="h-[96.8vh] min-w-[90vh] object-cover my-[1.6vh] -mr-[50px] relative hidden 2xl:block">
            <Image
              src="/../public/Growsome5.png"
              alt="Image Not Found"
              fill
            ></Image>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="ml-[10px] xl:ml-[100px] text-3xl md:text-6xl lg:text-6xl 2xl:text-4xl font-firaSans font-bold text-[rgb(17,17,17)] mb-0 mt-[3.2vh]">
              Unser Service
            </div>
            <img
              src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/848834ce-2e22-4156-81d7-61c2893d8962?pitch-bytes=3615876&pitch-content-type=image%2Fjpeg"
              alt="Image Not Found"
              className="h-[25.8vh] my-[1.6vh] block object-scale-down ml-[30px] mr-[12px] 2xl:hidden"
            />
          </div>
          <div className="ml-[10px] 2xl:text-[18px] xl:ml-[100px] text-2xl md:text-4xl lg:text-4xl font-firaSans text-[rgb(68,68,68)] lg:w-auto mb-0 mt-[4.2vh] max-w-[80vw] 2xl:max-w-[35vw]">
            Wir arbeiten agil und verzichten dabei auf alles, was keinen
            direkten Wert für den Kunden schafft. Wir bieten Full-Service und
            arbeiten mit Ihnen stets Hand in Hand.
          </div>
          <div className="ml-[10px] xl:ml-[100px] text-2xl md:text-4xl lg:text-4xl 2xl:text-[18px] font-workSans font-light text-[rgb(17,17,17)] lg:w-auto mb-1 mt-[1.8vh] tracking-[5px] md:tracking-[14px] 2xl:tracking-[10px]">
            NEUENTWICKLUNG
          </div>
          <div className="ml-[10px] 2xl:text-[18px] xl:ml-[100px] md:text-[24px] lg:text-[28px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mb-4 mt-[2vh] lg:max-w-[35vw] lg:min-w-[900px] 2xl:max-w-[200px] 2xl:min-w-[600px]">
            Wir entwickeln Ihren Webshop basierend auf bewährten, skalierbaren
            Platformen wie SCAYLE oder Shopify auf. Dabei unterstützen wir in
            der Konzeption, Entwicklung, Conversion-Verbesserung, Hosting und
            Betrieb.
          </div>
          <div className="2xl:tracking-[10px] ml-[10px] 2xl:text-[18px] xl:ml-[100px] text-2xl md:text-4xl lg:text-4xl font-workSans font-light text-[rgb(17,17,17)] lg:w-auto mb-1 mt-[1.8vh] tracking-[5px] md:tracking-[14px]">
            WEITERENWICKLUNG
          </div>
          <div className="ml-[10px] 2xl:text-[18px] xl:ml-[100px] md:text-[24px] lg:text-[28px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mb-1 mt-[1.8vh] lg:max-w-[35vw] lg:min-w-[900px] 2xl:max-w-[200px] 2xl:min-w-[600px]">
            Existierende Shops können wir übernehmen und weiterentwickeln.
            Hierbei machen wir zunächst einen Checkup der bestehenden Lösung,
            optimieren dort die notwendige Dinge, um ein solides Fundament für
            die Weiterentwicklung zu schaffen.
          </div>
          <div className="2xl:tracking-[10px] xl:ml-[100px] 2xl:text-[18px] text-2xl md:text-4xl lg:text-4xl font-workSans font-light text-[rgb(17,17,17)] lg:w-auto mb-1 mt-[1.8vh] tracking-[5px] md:tracking-[14px] hidden sm:block">
            MAINTENANCE & BETRIEB
          </div>
          <div className="ml-[10px] xl:ml-[100px] text-2xl md:text-4xl lg:text-4xl font-workSans font-light text-[rgb(17,17,17)] lg:w-auto mb-1 mt-[1.8vh] tracking-[5px] md:tracking-[14px] sm:hidden block">
            MAINTENANCE &
          </div>
          <div className="ml-[10px] xl:ml-[100px] text-2xl md:text-4xl lg:text-4xl font-workSans font-light text-[rgb(17,17,17)] lg:w-auto mb-1 mt-[1.8vh] tracking-[5px] md:tracking-[14px] sm:hidden block">
            BETRIEB
          </div>
          <div className="ml-[10px] 2xl:text-[18px] xl:ml-[100px] md:text-[24px] lg:text-[28px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mb-4 mt-[2vh] lg:max-w-[35vw] lg:min-w-[900px] 2xl:max-w-[200px] 2xl:min-w-[600px]">
            Wir betreuen und betreiben durch uns entwickelte oder bestehende
            Webshops. Hierbei einigen wir uns mit Ihnen auf gemeinsame Service
            Level Agreements.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;

