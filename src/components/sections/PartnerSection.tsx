import Image from 'next/image';
import { Container } from '../Container';

export const PartnerSection = () => {
	return (
		<Container>
			<h1 className="w-full text-center mb-8">Ihre Partner</h1>
			<div className="px-4 flex flex-col lg:flex-row gap-4 w-full mb-16">
				<div className="w-full grow mb-8 lg:mb-0">
					<div className="relative w-full h-[200px]">
						<Image
							src="/Portrait1.png"
							alt="Image Not Found"
							className="w-full"
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<h2 className="px-4 mb-8 mt-4 text-center"> SEBASTIAN HOITZ</h2>
					<p className="px-4">
						Serial Entrepreneur, Software Architekt, E-Commerce Experte, SCAYLE
						Architekt, Spezialist digitale Transformation
					</p>
				</div>
				<div className="w-full grow mb-8 lg:mb-0">
					<div className="relative w-full h-[200px]">
						<Image
							src="/Portrait2.png"
							alt="Image Not Found"
							className="w-full"
							fill
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<h2 className="px-4 mb-8 mt-4 text-center"> MARCUS BINDSEIL </h2>
					<p className="px-4">
						Software Architekt, Produktentwickler, Organisationsentwickler,
						agile Transformation, 25 Jahre Erfahrung im E-Commerce
					</p>
				</div>
			</div>
			<div className="p-4">
				<h3>
					UNSER TEAM VON PROGRAMMIERERN WIRD DURCH AUSGESUCHTE EXPERTEN AUS
					UNSEREM NETZWERK ERGÄNZT
				</h3>
			</div>
		</Container>
	);
};
