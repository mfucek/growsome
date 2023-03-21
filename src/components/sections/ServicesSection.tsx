import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';

let fakeScrolled = false;

export const ServicesSection = () => {
	const [scrolled, setScroled] = useState(false);
	useEffect(() => {}, [fakeScrolled]);
	useEffect(() => {
		let a = setInterval(() => {
			fakeScrolled =
				document.querySelector('#__next')!.scrollTop * 1.5 -
					ref.current!.offsetTop >
				0;
			setScroled(
				(scrolled) =>
					document.querySelector('#__next')!.scrollTop * 1.5 -
						ref.current!.offsetTop >
					0
			);
		}, 100);
		return () => {
			clearInterval(a);
		};
	}, []);

	const ref = useRef<HTMLDivElement>(null);
	return (
		<Container className="snap-start">
			<h2
				className={classNames(
					scrolled ? 'reveal-after' : 'reveal-before',
					'display-1 w-full text-center mb-8'
				)}
			>
				Unser Angebot
			</h2>
			<div
				className={classNames(
					scrolled ? 'reveal-after' : 'reveal-before',
					'px-4 flex flex-col lg:flex-row gap-4 w-full'
				)}
				ref={ref}
			>
				<div className="w-full grow mb-8 lg:mb-0">
					<div className="h-[320px] w-full relative overflow-hidden">
						<Image
							fill
							style={{ objectFit: 'cover' }}
							src="/services1.jpeg"
							alt="Image Not Found"
							className={classNames(
								scrolled ? 'scale-after' : 'scale-before',
								'w-full'
							)}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
					<h3 className="display-2 px-4 mb-8 mt-4">Fachwissen & Technologie</h3>
					<p className="px-4">
						Unser Team ist erfahren darin, moderne E-Commerce Stores für große
						Marken erfolgreich zu entwickeln. Wir haben die
						Headless-Infrastruktur hinter SCAYLE entwickelt und sind vom
						Frontend bis zum Backend tief mit der komplexen Technologie
						vertraut.
					</p>
				</div>
				<div className="w-full grow mb-8 lg:mb-0">
					<div className="h-[320px] w-full relative overflow-hidden">
						<Image
							fill
							style={{ objectFit: 'cover' }}
							src="/services2.jpeg"
							alt="Image Not Found"
							className={classNames(
								scrolled ? 'scale-after' : 'scale-before',
								'w-full'
							)}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
					<h3 className="display-2 px-4 mb-8 mt-4"> PERSÖNLICHE BETREUUNG</h3>
					<p className="px-4">
						Wir sehen uns als verlängerten Arm Ihres Unternehmens und sind
						bestrebt, Ihnen einen persönlichen Service und Support zu bieten.
						Dank unseres maßgeschneiderten Ansatzes können Sie darauf vertrauen,
						dass Ihre Interessen stets unsere höchste Priorität genießen.
					</p>
				</div>
				<div className="w-full grow mb-8 lg:mb-0">
					<div className="h-[320px] w-full relative overflow-hidden">
						<Image
							fill
							style={{ objectFit: 'cover' }}
							src="/services3.jpeg"
							alt="Image Not Found"
							className={classNames(
								scrolled ? 'scale-after' : 'scale-before',
								'w-full'
							)}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
					<h3 className="display-2 px-4 mb-8 mt-4"> ALLES AUS EINER HAND</h3>
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
