import { Container } from '../Container';

export const ServicesSection = () => {
	return (
		<Container>
			<h1 className="w-full text-center mb-8">Unser Angebot</h1>
			<div className="px-4 flex flex-col lg:flex-row gap-4 w-full">
				<div className="w-full grow mb-8 lg:mb-0">
					<img
						src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/29cb9237-df5c-43cb-a439-c30f4763aacb?pitch-bytes=1627812&pitch-content-type=image%2Fjpeg"
						alt="Image Not Found"
						className="w-full"
					/>
					<h2 className="px-4 mb-8 mt-4"> Fachwissen & Technologie </h2>
					<p className="px-4">
						Unser Team ist erfahren darin, moderne E-Commerce Stores für große
						Marken erfolgreich zu entwickeln. Wir haben die
						Headless-Infrastruktur hinter SCAYLE entwickelt und sind vom
						Frontend bis zum Backend tief mit der komplexen Technologie
						vertraut.
					</p>
				</div>
				<div className="w-full grow mb-8 lg:mb-0">
					<img
						src="https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/b4549e6e-86f0-405e-a37c-3ee51fd288ca?pitch-bytes=2586063&pitch-content-type=image%2Fjpeg"
						alt="Image Not Found"
						className="w-full"
					/>
					<h2 className="px-4 mb-8 mt-4"> PERSÖNLICHE BETREUUNG</h2>
					<p className="px-4">
						Wir sehen uns als verlängerten Arm Ihres Unternehmens und sind
						bestrebt, Ihnen einen persönlichen Service und Support zu bieten.
						Dank unseres maßgeschneiderten Ansatzes können Sie darauf vertrauen,
						dass Ihre Interessen stets unsere höchste Priorität genießen.
					</p>
				</div>
				<div className="w-full grow mb-8 lg:mb-0">
					<img
						src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTIyMnwwfDF8c2VhcmNofDEzfHxvZmZlcnxlbnwwfHx8fDE2NzE3ODM5MTU&ixlib=rb-4.0.3&q=80&w=1080"
						alt="Image Not Found"
						className="w-full"
					/>
					<h2 className="px-4 mb-8 mt-4"> ALLES AUS EINER HAND</h2>
					<p className="px-4">
						Wir bieten die komplette Klaviatur an Dienstleistungen für die
						Umsetzung individueller Storefronts an, darunter auch Hosting und
						Wartung, kontinuierliche Weiterentwicklung und Programme zur
						Conversion-Optimierung. Wir unterstützen Sie gerne bei jedem
						Schritt.
					</p>
				</div>
			</div>
		</Container>
	);
};
