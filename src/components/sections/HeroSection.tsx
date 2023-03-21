import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Container } from '../Container';

export const HeroSection = () => {
	const [scrolled, setScroled] = useState(false);
	useEffect(() => {
		setScroled(true);
	}, []);

	const ref = useRef<HTMLDivElement>(null);
	return (
		<>
			<div className="relative">
				<div className="w-full absolute -z-10">
					<div className="relative h-screen w-full">
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
			</div>
			<Container className="snap-start !pt-0">
				<div className="h-[80vh] relative" ref={ref}>
					<div
						className={classNames(
							scrolled ? 'reveal-after' : 'reveal-before',
							'w-full h-full flex flex-col justify-center align-middle text-center'
						)}
					>
						<h2 className="display-1 display-1 mb-4">
							Richtig gute Storefronts
						</h2>
						<h3 className="display-3">
							growsome - Ihre Boutique-Agentur für Headless E-Commerce in
							Hamburg
						</h3>
					</div>
				</div>
			</Container>
		</>
	);
};
