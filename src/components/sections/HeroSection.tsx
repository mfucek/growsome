import Image from 'next/image';
import { Container } from '../Container';

export const HeroSection = () => {
	return (
		<Container>
			<div className="h-[80vh] relative p-4">
				<div className="h-full w-full absolute -z-10 pr-8 pb-8">
					<div className="relative h-full w-full">
						<Image
							src={
								'https://images.unsplash.com/photo-1535401991746-da3d9055713e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTIyMnwwfDF8c2VhcmNofDZ8fHN0b3JlZnJvbnR8ZW58MHx8fHwxNjcyMzA1NzE0&ixlib=rb-4.0.3&q=80&w=1080'
							}
							alt={''}
							fill
							className="opacity-30"
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</div>
				<div className="w-full h-full flex flex-col justify-center align-middle text-center">
					<h1 className="mb-4">Richtig gute Storefronts</h1>
					<h3>
						growsome - Ihre Boutique-Agentur für Headless E-Commerce in Hamburg
					</h3>
				</div>
			</div>
		</Container>
	);
};
