import Image from 'next/image';
import { Container } from '../Container';

export const AboutSection = () => {
	return (
		<Container>
			<div className="flex flex-1 flex-col xl:flex-row p-4 gap-12">
				<div className="relative grow w-full xl:h-auto h-[400px] xl:min-h-[80vh] xl:max-w-[600px]">
					<div className="w-full h-full relative">
						<Image
							src={'/about.jpeg'}
							fill
							alt={''}
							style={{ objectFit: 'cover' }}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
				</div>
				<div className="grow w-full">
					<div className="px-2 md:px-6 h-full flex flex-col xl:justify-center">
						<h2 className="display-1 display-1 mb-8">Auf einen Blick</h2>
						<div>
							<h3 className="display-2 mb-6">Ihr erfolg ist unser antrieb</h3>
							<ul>
								<li>
									Wir sind Experten für digitale Transformation mit umfassender
									Erfahrung im Bereich E-Commerce, Skalierung von
									Online-Plattformen und data driven Performance-Optimierung
								</li>

								<li>
									Unser Anspruch ist es, intuitiv bedienbare Software zu
									entwickeln die reibungslos funktioniert
								</li>

								<li>
									Dabei arbeiten wir pragmatisch, verlässlich, partnerschaftlich
									und hands-on und sind stets bereit Verantwortung zu übernehmen
								</li>

								<li>
									Dafür stehen wir als Gründerteam mit über 40 Jahren Erfahrung
									im erfolgreichen Umsetzen von Online Businesses
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
