import Image from 'next/image';
import { Container } from '../Container';

export const ProductSection = () => {
	return (
		<Container>
			<div className="p-4">
				<div className="h-[400px] relative mb-12">
					<Image
						src={
							'https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/3c8739ed-0b32-4b59-830c-caa69e7717b2?pitch-bytes=2916650&pitch-content-type=image%2Fjpeg'
						}
						fill
						style={{ objectFit: 'cover' }}
						alt={''}
					/>
				</div>
				<div className="flex flex-col xl:flex-row xl:gap-12 px-4">
					<div className="grow-0 shrink-0">
						<h1 className="mb-8"> Über growsome</h1>
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
