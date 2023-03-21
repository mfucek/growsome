import Image from 'next/image';
import { Container } from '../Container';

export const ProductSection = () => {
	return (
		<Container>
			<div className="p-4">
				<div className="h-[400px] relative mb-12">
					<Image
						src={'/product.jpeg'}
						fill
						style={{ objectFit: 'cover' }}
						alt={''}
						sizes={'(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
					/>
				</div>
				<div className="flex flex-col xl:flex-row xl:gap-12 px-4">
					<div className="grow-0 shrink-0">
						<h2 className="display-1 mb-8"> Über growsome</h2>
					</div>
					<div className="w-full">
						<p>
							Unsere Gründer verfügen über umfangreiche Kenntnisse und
							Erfahrungen im E-Commerce-Bereich. Wir haben die Technologie
							hinter dem SCAYLE Headless Storefront entwickelt, auf die viele
							große und bekannte Marken vertrauen. Wenn Sie mit uns
							zusammenarbeiten, erhalten Sie also nicht nur ein Team von
							E-Commerce-Experten, sondern auch direkten Zugang zu der
							grundlegenden Technologie, die diesen Marken zu ihrem Erfolg
							verholfen hat.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};
