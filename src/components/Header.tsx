import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Container } from './Container';

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
			<div className="fixed w-screen z-40">
				<Container>
					<div
						className={classNames(
							'p-12 duration-300',
							scrolled && 'bg-white/80 backdrop-blur-md'
						)}
					>
						<img
							src="/logo.png"
							alt="Growsome"
							className="h-6 hover:translate-y-[-2px] active:translate-y-[4px] duration-300 active:duration-100 cursor-pointer hover:opacity-80 active:opacity-60"
							onClick={() => {
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}
						/>
					</div>
				</Container>
			</div>
		</>
	);
};
