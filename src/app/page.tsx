"use client";
import FadeUp from "../components/animations/FadeUp";
import Footer from "../components/layout/Footer";
import FAQ from "../components/landing/FAQ";
import Pricing from "../components/landing/Pricing";
import Testimonials from "../components/landing/Testimonials";
import Stats from "../components/landing/Stats";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <FadeUp>
      <Hero />
      </FadeUp>
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}