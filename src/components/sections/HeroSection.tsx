import Image from 'next/image';
import { Container } from '../Container';

export const HeroSection = () => {
	return (
		<Container>
			<div className="h-[80vh] relative p-4">
				<div className="h-full w-full absolute -z-10 pr-8 pb-8">
					<div className="relative h-full w-full">
						<Image
							src={'/growsome1.jpg'}
							alt={''}
							fill
							className="opacity-30"
							style={{ objectFit: 'cover' }}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
							priority
						/>
					</div>
				</div>
				<div className="w-full h-full flex flex-col justify-center align-middle text-center">
					<h2 className="display-1 display-1 mb-4">Richtig gute Storefronts</h2>
					<h3 className="display-3">
						growsome - Ihre Boutique-Agentur für Headless E-Commerce in Hamburg
					</h3>
				</div>
			</div>
		</Container>
	);
};
