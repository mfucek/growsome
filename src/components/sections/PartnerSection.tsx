import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';

let fakeScrolled = false;

export const PartnerSection = () => {
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
			<h2 className="display-1 w-full text-center mb-8">Ihre Partner</h2>
			<div
				className={classNames(
					scrolled ? 'reveal-after' : 'reveal-before',
					'px-4 flex flex-col lg:flex-row gap-4 w-full mb-16'
				)}
				ref={ref}
			>
				<div className="w-full grow mb-8 lg:mb-0">
					<div className="relative w-full h-[200px]">
						<Image
							src="/Portrait1.png"
							alt="Image Not Found"
							className={classNames(
								scrolled ? 'scale-after' : 'scale-before',
								'w-full'
							)}
							fill
							style={{ objectFit: 'contain' }}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
					<h3 className="display-2 px-4 mb-8 mt-4 text-center">
						SEBASTIAN HOITZ
					</h3>
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
							className={classNames(
								scrolled ? 'scale-after' : 'scale-before',
								'w-full'
							)}
							fill
							style={{ objectFit: 'contain' }}
							sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
						/>
					</div>
					<h3 className="display-2 px-4 mb-8 mt-4 text-center">
						MARCUS BINDSEIL
					</h3>
					<p className="px-4">
						Software Architekt, Produktentwickler, Organisationsentwickler,
						agile Transformation, 25 Jahre Erfahrung im E-Commerce
					</p>
				</div>
			</div>
			<div
				className={classNames(
					scrolled ? 'reveal-after' : 'reveal-before',
					'p-4'
				)}
			>
				<p className="display-3">
					UNSER TEAM VON PROGRAMMIERERN WIRD DURCH AUSGESUCHTE EXPERTEN AUS
					UNSEREM NETZWERK ERGÄNZT
				</p>
			</div>
		</Container>
	);
};
