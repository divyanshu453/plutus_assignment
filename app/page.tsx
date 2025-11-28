'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
// import WhyMoonEX from '@/components/WhyMoonEX';
import WhyMoonEX from '@/components/WhyMoonEX';
import Features from '@/components/Features';
// import FAQs from '@/components/FAQs';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyMoonEX />
        <Features />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}