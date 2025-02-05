import React from "react";
import Hero from "./Hero";
import Feature from "./Feature";
import Pricing from "./Pricing";
import WhyChoose from "./WhyChoose";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Feature />
      <WhyChoose />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage;
