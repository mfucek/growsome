import { Header } from '@/components/Header';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnerSection } from '@/components/sections/PartnerSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { Services2Section } from '@/components/sections/Services2Section';
import { ServicesSection } from '@/components/sections/ServicesSection';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Growsome - Experte für digitale Transformation </title>
				<meta
					name="description"
					content="Wir sind Experten für digitale Transformation mit umfassender Erfahrung im Bereich E-Commerce, Skalierung von Online-Plattformen und data driven Performance-Optimierung"
				/>
			</Head>

			<Header />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ProductSection />
			<PartnerSection />
			<Services2Section />
			<ContactSection />
		</>
	);
}
