import Head from 'next/head'
import React from 'react';
import FifthSection from '../../components/FifthSection';
import FirstSection from '../../components/FirstSection';
import FourthSection from '../../components/FourthSection';
import SecondSection from '../../components/SecondSection';
import SeventhSection from '../../components/SeventhSection';
import SixthSection from '../../components/SixthSection';
import ThirdSection from '../../components/ThirdSection';

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
      <div className="snap-mandatory h-screen grid overflow-x-hidden 2xl:snap-y justify-center">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection/>
      </div>
    </>
  );
}
