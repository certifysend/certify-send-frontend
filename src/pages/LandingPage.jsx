"use client"

import { useRef } from "react"
import Hero from "./Hero"
import Feature from "./Feature"
import Pricing from "./Pricing"
import WhyChoose from "./WhyChoose"
import HowItWorks from "./HowItWorks"
import Testimonial from "./Testimonial"
import CTA from "./CTA"
import FAQ from "./FAQ"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"

function LandingPage() {
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)
  const howItWorksRef = useRef(null)
  const faqRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const ScrollButtons = () => (
    <div className="fixed right-5 bottom-5 flex flex-col gap-2 z-50">
      <button
        onClick={() => scrollToSection(featuresRef)}
        className="bg-[#5570F1] text-white p-2 rounded-full"
        aria-label="Scroll to Features"
      >
        F
      </button>
      <button
        onClick={() => scrollToSection(pricingRef)}
        className="bg-[#5570F1] text-white p-2 rounded-full"
        aria-label="Scroll to Pricing"
      >
        P
      </button>
      <button
        onClick={() => scrollToSection(howItWorksRef)}
        className="bg-[#5570F1] text-white p-2 rounded-full"
        aria-label="Scroll to How It Works"
      >
        H
      </button>
      <button
        onClick={() => scrollToSection(faqRef)}
        className="bg-[#5570F1] text-white p-2 rounded-full"
        aria-label="Scroll to FAQ"
      >
        Q
      </button>
    </div>
  )

  return (
    <div className="overflow-hidden md:overflow-visible font-inter">
      <Banner />
      <Navbar />
      <Hero />
      <section id="features" ref={featuresRef}>
        <Feature />
      </section>
      <section id="why-choose">
        <WhyChoose />
      </section>
      <section id="how-it-works" ref={howItWorksRef}>
        <HowItWorks />
      </section>
      <section id="pricing" ref={pricingRef}>
        <Pricing />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <CTA />
      <section id="faq" ref={faqRef}>
        <FAQ />
      </section>
      <Footer />
      <ScrollButtons />
    </div>
  )
}

export default LandingPage

