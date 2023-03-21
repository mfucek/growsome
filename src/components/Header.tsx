import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Container } from './Container';

import Image from 'next/image';

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		let a = setInterval(() => {
			// console.log(document.documentElement.scrollTop);
			// console.log(document.documentElement.clientHeight);
			setScrolled(
				document.documentElement.scrollTop >=
					document.documentElement.clientHeight
			);
		}, 100);
		return () => {
			clearInterval(a);
		};
	}, []);
	return (
		<>
			<header className="fixed w-screen z-40">
				<Container>
					<div
						className={classNames(
							'p-12 duration-300',
							scrolled && 'bg-white/80 backdrop-blur-md'
						)}
					>
						<Image src={'/logo.png'} height={24} width={153} alt={''} />
					</div>
				</Container>
			</header>
		</>
	);
};
