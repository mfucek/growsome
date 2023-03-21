import { Container } from './Container';

export const Header = () => {
	return (
		<>
			<div className="fixed w-screen">
				<Container>
					<div className="p-3">
						<img src="/logo.png" alt="Growsome" height="32px" />
					</div>
				</Container>
			</div>
		</>
	);
};
