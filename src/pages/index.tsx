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
				<title>growsome</title>
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				></link>
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<div className="w-screen overflow-x-hidden">
				<Header />
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<ProductSection />
				<PartnerSection />
				<Services2Section />
				<ContactSection />
			</div>
		</>
	);
}
