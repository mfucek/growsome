import { Container } from './Container';

export const Header = () => {
	return (
		<>
			<div className="fixed w-screen z-40">
				<Container>
					<div className="p-12">
						<img
							src="/logo.png"
							alt="Growsome"
							className="h-6 hover:translate-y-[-2px] active:translate-y-[4px] duration-300 active:duration-100 cursor-pointer hover:opacity-80 active:opacity-60"
							onClick={() => {
								document.documentElement.scrollTo({ top: 0 });
							}}
						/>
					</div>
				</Container>
			</div>
		</>
	);
};
