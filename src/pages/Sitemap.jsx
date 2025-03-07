import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CTA from "./CTA"
import Banner from "../components/Banner"

export default function SiteMap() {
  return (
    <div className="min-h-screen bg-white font-inter text-[#53545C] font-normal text-base sm:text-lg md:text-xl leading-7 tracking-tighter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Site Map</h1>
          <p className="text-sm sm:text-base md:text-lg">
            Welcome to the CertifySend Site Map. Below is an overview of all the pages and sections available on our
            platform for easy navigation.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {[
            {
              title: "Home",
              items: [
                "Overview of CertifySend's features and services",
                "How it works",
                "Call-to-action for signing up or logging in",
                "Why Choose CertifySend?",
                "Testimonials",
              ],
            },
            {
              title: "About Us",
              items: ["Our mission and vision", "How CertifySend helps businesses and professionals"],
            },
            {
              title: "Features",
              items: [
                "Automated Certificate Generation - Say goodbye to manual processes! Our platform allows you to create and customize certificates in bulk, saving you time and reducing errors.",
                "Seamless Email Delivery - Instantly send certificates directly to recipients' inboxes. Ensure that every participant receives their achievement promptly and professionally.",
                "Registration Forms for Webinars - Easily set up custom registration forms for your online webinars. Collect attendee information and manage registrations effortlessly.",
                "Automated Emails & Reminders - Keep your participants informed with automated confirmation emails and reminders for upcoming virtual sessions, ensuring high attendance rates.",
                "Secure & Reliable - Our platform ensures the highest level of security for your data and certificates, so you can trust that your information is safe.",
                "Analytics & Tracking - Monitor delivery status and engagement rates with built-in analytics, helping you understand how your certificates are received and track webinar attendance.",
              ],
            },
            {
              title: "Plans & Pricing",
              items: ["Free, Essentials, Pro, and Custom pricing plans", "Features comparison for each plan"],
            },
            {
              title: "Help Center",
              items: [
                "Frequently Asked Questions (FAQs)",
                "Customer support contact details",
                "User guides and tutorials",
                "Business inquiries and partnerships",
                "Contact support for assistance",
              ],
            },
            {
              title: "Blog",
              items: [
                "Industry insights and best practices",
                "Step-by-step guides and automation tips",
                "Updates and announcements",
              ],
            },
            { title: "Privacy Policy", items: ["How we collect, use, and protect user data"] },
            { title: "Terms of Service", items: ["Legal agreements and usage terms for Certifysend"] },
            {
              title: "Dashboard (For Registered Users Only)",
              items: [
                "Projects – View and manage all created projects, including files, logs, and settings.",
                "Certificates – Create, customize, and distribute certificates effortlessly.",
                "Forms – Design and manage registration forms to collect recipient details.",
                "Bulk Email – Send personalized emails to multiple recipients in just a few clicks.",
                "Sent – Track all previously sent emails and certificates with status updates.",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl text-[#5570F1] font-medium mb-4">{section.title}</h2>
              <hr className="my-4 sm:my-6 border-[#6E7079] border-opacity-50" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <span className="text-[#5570F1] mr-2 flex-shrink-0">+</span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

