import Image from 'next/image';
import { Container } from '../Container';

export const Services2Section = () => {
	return (
		<Container>
			<div className="flex flex-1 flex-col xl:flex-row p-4 gap-12">
				<div className="relative grow w-full xl:h-auto h-[400px] xl:min-h-[80vh] xl:max-w-[600px]">
					<div className="w-full h-full relative">
						<Image
							src={'/Growsome5.png'}
							fill
							alt={''}
							style={{ objectFit: 'cover' }}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
				</div>
				<div className="grow w-full">
					<div className="px-2 md:px-6 h-full flex flex-col xl:justify-center">
						<h2 className="display-1 mb-8">Unser Service</h2>
						<div>
							<p className="mb-8">
								Wir arbeiten agil und verzichten dabei auf alles, was keinen
								direkten Wert für den Kunden schafft. Wir bieten Full-Service
								und arbeiten mit Ihnen stets Hand in Hand.
							</p>
							<h3 className="display-2 mb-4">NEuentwicklung</h3>
							<p className="mb-8">
								Wir entwickeln Ihren Webshop basierend auf bewährten,
								skalierbaren Platformen wie SCAYLE oder Shopify auf. Dabei
								unterstützen wir in der Konzeption, Entwicklung,
								Conversion-Verbesserung, Hosting und Betrieb.
							</p>

							<h3 className="display-2 mb-4">weiterentwicklunG</h3>
							<p className="mb-8">
								Existierende Shops können wir übernehmen und weiterentwickeln.
								Hierbei machen wir zunächst einen Checkup der bestehenden
								Lösung, optimieren dort die notwendige Dinge, um ein solides
								Fundament für die Weiterentwicklung zu schaffen.
							</p>

							<h3 className="display-2 mb-4">maintenance & Betrieb</h3>
							<p className="mb-8">
								Wir betreuen und betreiben durch uns entwickelte oder bestehende
								Webshops. Hierbei einigen wir uns mit Ihnen auf gemeinsame
								Service Level Agreements.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
