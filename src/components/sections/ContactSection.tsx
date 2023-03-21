// import React from "react";
// import Image from "next/image";

// function SeventhSection() {
//   return (
//     <div className="snap-start relative h-screen w-screen flex justify-center">
//       <div className="flex flex-row mt-[2250px] sm:mt-[2850px] md:mt-[2300px] lg:mt-[4450px] 2xl:mt-[0px]">
//         <div className="flex flex-col  mr-[100px]">
//           <div className="flex flex-col xl:flex-row 2xl:flex-col">
//             <div className="ml-[10px] xl:ml-[100px] text-6xl 2xl:text-4xl md:text-8xl lg:text-10xl font-firaSans font-bold text-[rgb(17,17,17)] 2xl:mb-0 mb-4 mt-[5.2vh]">
//               Kontakt
//             </div>
//             <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-firaSans text-[rgb(68,68,68)] max-w-[80vw] xl:max-w-[30vw] mb-4 2xl:mb-0 mt-[4.2vh] 2xl:max-w-[20vw]">
//               Wir freuen uns über Ihr Interesse, uns und unsere Services näher
//               kennenzulernen. Lassen Sie uns über Ihre Ideen sprechen und
//               gemeinsam einen Plan machen.
//             </div>
//           </div>
//           <div className="flex flex-col xl:flex-row 2xl:flex-col">
//             <div className="flex flex-col">
//               <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[12vh] 2xl:mt-[6.2vh] 2xl:mb-0 2xl:max-w-[16vw]">
//                 growsome GmbH
//               </div>
//               <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-0 2xl:mb-0 2xl:max-w-[16vw]">
//                 Hofweg 98
//               </div>
//               <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-0 2xl:mb-0 2xl:max-w-[16vw]">
//                 22085 Hamburg
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-workSans text-[rgb(17,17,17)] lg:w-auto mb-4 mt-[7.5vh] tracking-[14px]">
//                 TELEFON
//               </div>
//               <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:-mt-4 2xl:max-w-[16vw] tracking-wider">
//                 +49 175 2517038
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-workSans text-[rgb(17,17,17)] lg:w-auto mb-4 mt-[7.5vh] tracking-[14px]">
//                 WEB
//               </div>
//               <div className="ml-[10px] xl:ml-[100px] 2xl:mt-0 text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:max-w-[16vw] tracking-wider">
//                 hello@growsome.agency
//               </div>
//               <div className="ml-[10px] xl:ml-[100px] text-xl md:text-3xl lg:text-3xl 2xl:text-[16px] font-firaSans text-[rgb(68,68,68)] lg:w-auto mt-[1.2vh] 2xl:max-w-[16vw] tracking-wider mb-[30px] 2xl:mb-0">
//                 https://growsome.agency
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="hidden 2xl:block">
//           <div className="h-[96.8vh] w-[128.26vh] my-[1.6vh] object-scale-down relative hidden opacity-[70%] 2xl:block">
//             <Image
//               src="/../public/Growsome6.jpg"
//               alt="Image Not Found"
//               fill
//             ></Image>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SeventhSection;
import Image from 'next/image';
import { Container } from '../Container';

export const ContactSection = () => {
	return (
		<Container>
			<div className="flex flex-1 flex-col p-4 gap-12 xl:flex-row-reverse">
				<div className="relative grow w-full xl:h-auto h-[400px] xl:min-h-[80vh] xl:max-w-[600px]">
					<div className="w-full h-full relative">
						<Image
							src={'/Growsome6.jpg'}
							fill
							alt={''}
							style={{ objectFit: 'cover' }}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
				</div>
				<div className="grow w-full">
					<div className="px-2 md:px-6 h-full flex flex-col xl:justify-center">
						<h2 className="display-1 display-1 mb-8">Kontakt</h2>
						<div>
							<p className="mb-20">
								Wir freuen uns über Ihr Interesse, uns und unsere Services näher
								kennenzulernen. Lassen Sie uns über Ihre Ideen sprechen und
								gemeinsam einen Plan machen.
							</p>
							<p className="mb-12">
								growsome GmbH
								<br />
								Hofweg 98
								<br />
								22085 Hamburg
							</p>
							<h3 className="display-3 mb-2">Telefon</h3>
							<p className="mb-12">+49 175 2517038</p>

							<h3 className="display-3 mb-2">WEB</h3>
							<p>
								hello@growsome.agency
								<br />
								https://growsome.agency
							</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
