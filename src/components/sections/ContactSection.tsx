import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';

let fakeScrolled = false;

export const ContactSection = () => {
	const [scrolled, setScroled] = useState(false);
	useEffect(() => {}, [fakeScrolled]);
	useEffect(() => {
		let a = setInterval(() => {
			fakeScrolled =
				document.querySelector('#__next')!.scrollTop -
					ref.current!.offsetTop +
					150 >
				0;
			setScroled(
				(scrolled) =>
					document.querySelector('#__next')!.scrollTop -
						ref.current!.offsetTop +
						400 >
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
			<div
				className="flex flex-1 flex-col p-4 gap-12 xl:flex-row-reverse"
				ref={ref}
			>
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
				<div
					className={classNames(
						scrolled ? 'reveal-after' : 'reveal-before',
						'grow w-full'
					)}
				>
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
