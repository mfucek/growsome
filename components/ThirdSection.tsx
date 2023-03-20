import React from "react";

function ThirdSection() {
  return (
    <div className="snap-start relative h-screen w-screen flex justify-center mt-[90vh] sm:mt-[200px] lg:mt-0">
      <div className="flex flex-col content-center justify-center mt-[100px] md:mt-[1500px] 2xl:mt-[0px]">
        <div className="text-3xl md:text-6xl font-firaSans font-bold text-[rgb(26,26,26)] mb-[5vh] -mt-[30px] text-center">
          Unser Angebot
        </div>
        <div className="flex flex-col 2xl:flex-row 2xl:justify-around">
          <div className="flex flex-col content-center mx-[10px]">
            <img
              src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/29cb9237-df5c-43cb-a439-c30f4763aacb?pitch-bytes=1627812&pitch-content-type=image%2Fjpeg"
              alt="Image Not Found"
              className="lg:max-w-[600px] lg:min-w-[600px]"
            />
            <div className="text-xl md:text-3xl lg:text-3xl font-workSans text-[rgb(17,17,17)] mb-4 mt-[3.2vh] max-w-[564px] md:whitespace-nowrap tracking-widest text-center md:ml-[0px]">
              FACHWISSEN & TECHNOLOGIE
            </div>
            <div className="md:text-[21px] lg:text-[28px] font-firaSans text-[rgb(68,68,68)] mb-4 mt-[3.5vh] max-w-[90vw] mx-[10px] md:max-w-[564px] lg:min-w-[564px] md:mx-[18px]">
              Unser Team ist erfahren darin, moderne E-Commerce Stores für große
              Marken erfolgreich zu entwickeln. Wir haben die
              Headless-Infrastruktur hinter SCAYLE entwickelt und sind vom
              Frontend bis zum Backend tief mit der komplexen Technologie
              vertraut.
            </div>
          </div>
          <div className="flex flex-col content-center mx-[10px]">
            <img
              src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/b4549e6e-86f0-405e-a37c-3ee51fd288ca?pitch-bytes=2586063&pitch-content-type=image%2Fjpeg"
              alt="Image Not Found"
              className="lg:max-w-[600px] lg:min-w-[600px]"
            />
            <div className="text-xl md:text-3xl lg:text-3xl font-workSans text-[rgb(17,17,17)] mb-4 mt-[3.2vh] max-w-[564px] md:whitespace-nowrap tracking-widest text-center md:ml-[0px]">
              PERSÖNLICHE BETREUUNG
            </div>
            <div className="md:text-[21px] lg:text-[28px] font-firaSans text-[rgb(68,68,68)] mb-4 mt-[3.5vh] max-w-[90vw] mx-[10px] md:max-w-[564px] lg:min-w-[564px] md:mx-[18px]">
              Wir sehen uns als verlängerten Arm Ihres Unternehmens und sind
              bestrebt, Ihnen einen persönlichen Service und Support zu bieten.
              Dank unseres maßgeschneiderten Ansatzes können Sie darauf
              vertrauen, dass Ihre Interessen stets unsere höchste Priorität
              genießen. vertraut.
            </div>
          </div>
          <div className="flex flex-col content-center mx-[10px]">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTIyMnwwfDF8c2VhcmNofDEzfHxvZmZlcnxlbnwwfHx8fDE2NzE3ODM5MTU&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Image Not Found"
              className="lg:max-w-[600px] lg:min-w-[600px]"
            />
            <div className="text-xl md:text-3xl lg:text-3xl font-workSans text-[rgb(17,17,17)] mb-4 mt-[3.2vh] max-w-[564px] md:whitespace-nowrap tracking-widest text-center md:ml-[0px]">
              ALLES AUS EINER HAND
            </div>
            <div className="md:text-[21px] lg:text-[28px] font-firaSans text-[rgb(68,68,68)] mb-4 mt-[3.5vh] max-w-[90vw] mx-[10px] md:max-w-[564px] lg:min-w-[564px] md:mx-[18px]">
              Wir bieten die komplette Klaviatur an Dienstleistungen für die
              Umsetzung individueller Storefronts an, darunter auch Hosting und
              Wartung, kontinuierliche Weiterentwicklung und Programme zur
              Conversion-Optimierung. Wir unterstützen Sie gerne bei jedem
              Schritt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
