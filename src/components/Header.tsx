import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Container } from './Container';

import Image from 'next/image';

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		let a = setInterval(() => {
			setScrolled(
				document.querySelector('#__next')!.scrollTop >= window.innerHeight - 200
			);
		}, 100);
		return () => {
			clearInterval(a);
		};
	}, []);
	return (
		<>
			<header
				className={classNames(
					scrolled && 'bg-white/80 backdrop-blur-md',
					'fixed w-screen z-40 duration-300'
				)}
			>
				<Container className="!py-0 min-h-0">
					<div className={classNames('p-8 md:p-12')}>
						<Image
							src={'/logo.png'}
							height={24}
							width={153}
							alt={''}
							className="hover:translate-y-[-2px] active:translate-y-[4px] duration-300 active:duration-100 cursor-pointer hover:opacity-80 active:opacity-60"
							onClick={() => {
								document
									.querySelector('#__next')!
									.scrollTo({ top: 0, behavior: 'smooth' });
							}}
						/>
					</div>
				</Container>
			</header>
		</>
	);
};
