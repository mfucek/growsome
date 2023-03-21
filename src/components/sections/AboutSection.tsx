import Image from 'next/image';
import { Container } from '../Container';

export const AboutSection = () => {
	return (
		<Container>
			<div className="flex flex-1 flex-col xl:flex-row p-4 gap-12">
				<div className="relative grow w-full xl:h-auto h-[400px] xl:min-h-[80vh] xl:max-w-[600px]">
					<div className="w-full h-full relative">
						<Image
							src={
								'https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/51edb74b-2980-428d-a1f6-1d5d7234fcf7?pitch-bytes=3069880&pitch-content-type=image%2Fjpeg'
							}
							fill
							alt={''}
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</div>
				<div className="grow w-full">
					<div className="px-6 h-full flex flex-col xl:justify-center">
						<h1 className="mb-8">Auf einen Blick</h1>
						<div>
							<h2 className="mb-6">Ihr erfolg ist unser antrieb</h2>
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
