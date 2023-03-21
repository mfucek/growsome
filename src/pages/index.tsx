import { Header } from '@/components/Header';
import FifthSection from '@/components/sections/FifthSection';
import FirstSection from '@/components/sections/FirstSection';
import FourthSection from '@/components/sections/FourthSection';
import SecondSection from '@/components/sections/SecondSection';
import SeventhSection from '@/components/sections/SeventhSection';
import SixthSection from '@/components/sections/SixthSection';
import ThirdSection from '@/components/sections/ThirdSection';
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
					rel="stylesheet"></link>
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"></link>
			</Head>
			<div className="snap-mandatory h-screen grid overflow-x-hidden 2xl:snap-y justify-center">
				<Header />
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<FifthSection />
				<SixthSection />
				<SeventhSection />
			</div>
		</>
	);
}
