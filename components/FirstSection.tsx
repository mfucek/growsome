import React from 'react'

function FirstSection() {

  return (
    <div className="snap-start relative h-screen flex items-center justify-center ">
      <div className="relative h-[96.8vh]">
        <img
          src={
            "https://images.unsplash.com/photo-1535401991746-da3d9055713e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTIyMnwwfDF8c2VhcmNofDZ8fHN0b3JlZnJvbnR8ZW58MHx8fHwxNjcyMzA1NzE0&ixlib=rb-4.0.3&q=80&w=1080"
          }
          alt="Image Not Found"
          className="relative z-0 cover opacity-[31%] object-cover h-[100%] lg:min-w-[100%]"
        ></img>
        <img
          src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/a94749ca-710d-473a-838b-a9dcdd516dc8?pitch-bytes=8061&pitch-content-type=image%2Fpng"
          alt="Growsome"
          className="top-[10px] scale-50 absolute lg:scale-100 lg:top-[70px] -left-[50px] lg:left-[1vw] 2xl:left-[50px]"
        />
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-70%] lg:whitespace-nowrap">
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-firaSans font-bold text-[rgb(26,26,26)] lg:w-auto mb-4 sm:whitespace-nowrap">
            Richtig gute Storefronts
          </div>
          <div className="hidden lg:block md:text-[21px] lg:text-[28px] font-firaSans lg:text-center text-[rgb(26,26,26)]">
            growsome - Ihre Boutique-Agentur für Headless E-Commerce in Hamburg
          </div>
          <div className="lg:hidden md:text-[21px] lg:text-[28px] font-firaSans lg:text-center text-[rgb(26,26,26)]">
            growsome - Ihre Boutique-Agentur für
          </div>
          <div className="lg:hidden md:text-[21px] lg:text-[28px] font-firaSans lg:text-center text-[rgb(26,26,26)]">
            Headless E-Commerce in Hamburg
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection