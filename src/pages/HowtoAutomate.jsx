"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import CTA from "./CTA"

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("View all")

  const blogCategories = [
    "View all",
    "Latest Updates",
    "Industry Insights",
    "Guides & Tutorials",
    "Product Updates",
    "Success Stories",
  ]

  const blogPosts = [
    {
      id: 1,
      category: "Industry Insights",
      title: "The Future of Digital Certificates: Why Paper is Becoming Obsolete",
      description: "How businesses and institutions are moving towards secure, digital certification.",
      image: "/img/blog-img1.png",
      tab: "Industry Insights",
    },
    {
      id: 2,
      category: "Guides & Tutorials",
      title: "Mastering Bulk Email: Tips for Higher Deliverability & Engagement",
      description: "Best practices to ensure your emails reach inboxes and drive results.",
      image: "/img/blog-img2.png",
      tab: "Guides & Tutorials",
    },
    {
      id: 3,
      category: "Guides & Tutorials",
      title: "How to Automate Certificate Distribution & Save Time",
      description: "A step-by-step guide to streamlining your certificate creation and delivery process.",
      image: "/img/blog-img3.png",
      tab: "Guides & Tutorials",
    },
    {
      id: 4,
      category: "Industry Insights",
      title: "The Power of Personalized Emails: Why Customization Matters",
      description: "How personalized bulk emails can improve engagement and response rates.",
      image: "/img/blog-img4.png",
      tab: "Industry Insights",
    },
    {
      id: 5,
      category: "Guides & Tutorials",
      title: "A Beginner's Guide to Managing Registration Forms Effectively",
      description: "Simplifying event and course registrations with smart form management.",
      image: "/img/blog-img5.png",
      tab: "Guides & Tutorials",
    },
  ]

  const tabContent = {
    "View all": blogPosts,
    "Latest Updates": [
      {
        id: 6,
        category: "Latest Updates",
        title: "New Feature: Bulk Email Sending",
        description: "Learn how to use our new bulk email feature.",
        image: "/img/blog-img6.png",
      },
      {
        id: 7,
        category: "Latest Updates",
        title: "Improved Certificate Templates",
        description: "Explore our new and improved certificate templates.",
        image: "/img/blog-img7.png",
      },
    ],
    "Industry Insights": [
      {
        id: 8,
        category: "Industry Insights",
        title: "The Future of Digital Certificates",
        description: "Why paper certificates are becoming obsolete.",
        image: "/img/blog-img8.png",
      },
      {
        id: 9,
        category: "Industry Insights",
        title: "The Rise of Digital Credentials",
        description: "How digital credentials are transforming industries.",
        image: "/img/blog-img9.png",
      },
    ],
    "Guides & Tutorials": [
      {
        id: 10,
        category: "Guides & Tutorials",
        title: "How to Automate Certificate Distribution",
        description: "A step-by-step guide to automating your workflow.",
        image: "/img/blog-img10.png",
      },
      {
        id: 11,
        category: "Guides & Tutorials",
        title: "Mastering Bulk Email",
        description: "Tips for higher deliverability and engagement.",
        image: "/img/blog-img11.png",
      },
    ],
    "Product Updates": [
      {
        id: 12,
        category: "Product Updates",
        title: "New Dashboard Design",
        description: "Explore the new and improved dashboard.",
        image: "/img/blog-img12.png",
      },
      {
        id: 13,
        category: "Product Updates",
        title: "Enhanced Security Features",
        description: "Learn about our latest security updates.",
        image: "/img/blog-img13.png",
      },
    ],
    "Success Stories": [
      {
        id: 14,
        category: "Success Stories",
        title: "How Company X Saved Time with CertifySend",
        description: "A case study on time-saving with CertifySend.",
        image: "/img/blog-img14.png",
      },
      {
        id: 15,
        category: "Success Stories",
        title: "Streamlining Certificates for Education",
        description: "How a university improved its certification process.",
        image: "/img/blog-img15.png",
      },
    ],
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-nowrap gap-4 mb-8 border-b border-gray-200 pb-4 overflow-x-auto">
        {blogCategories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#5570F1] transition-colors duration-300 relative whitespace-nowrap ${
              activeCategory === category
                ? "text-[#5570F1] border-b-2 border-[#5570F1]"
                : "hover:border-b-2 hover:border-[#5570F1]"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tabContent[activeCategory].map((post, index) => (
          <div
            key={index}
            className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="bg-gray-400 bg-opacity-50 flex justify-between items-center px-4 py-2 text-white">
              <div className="flex gap-2 flex-wrap">
                <button className="hover:text-[#5570F1] transition-colors text-sm">Latest Updates</button>
                <button className="hover:text-[#5570F1] transition-colors text-sm">Industry Insights</button>
              </div>
              <img src="/img/round.png" alt="" className="w-8 h-8 md:w-10 md:h-10" />
            </div>

            <div className="mt-4 p-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function BlogPost() {


  return (
    <div className="min-h-screen bg-white text-[#53545C] font-inter font-normal text-base md:text-xl leading-7 tracking-tighter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container max-w-7xl mx-auto py-8 md:py-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How to Automate Certificate Distribution & Save Time</h1>
          <p className="text-base md:text-lg">
            A Step-by-Step Guide to Streamlining Your Certificate Creation and Delivery Process
          </p>
        </div>
      </header>

      <div className="w-full">
        <img src="/img/automate-cert.png" alt="Traditional Certificate" className="w-full h-auto" loading="lazy" />
      </div>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <p className="text-gray-700 mb-8">
          In today's fast-paced digital world, manually creating and distributing certificates can be a time-consuming
          and error-prone process. Whether you're an educational institution, training provider, or event organizer,
          automating your certificate distribution can help you streamline your certificate issuance process, reduce
          human errors, and enhance efficiency.
        </p>

        <p className="text-gray-700 mb-12">
          In this guide, we'll walk you through the process of automating certificate distribution, saving you valuable
          time while ensuring accuracy and professionalism.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#5570F1] mb-4 w-full md:w-1/2">
            Step 1: Choose a Reliable Certificate Management Platform
          </h2>
          <p className="text-gray-700 mb-4">
            The first step in automating your certificate distribution is selecting the right platform. A robust
            certificate management system, like CertifySend, allows you to create, customize, and distribute
            certificates effortlessly.
          </p>
          <h3 className="font-semibold mb-2">Key Features to Look For:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Customizable Templates – Easily design certificates that reflect your brand.</li>
            <li>Bulk Certificate Generation – Issue certificates to hundreds or thousands of recipients in seconds.</li>
            <li>Automated Email Delivery – Send certificates automatically without manual intervention.</li>
            <li>Verification System – Allow recipients to verify their certificates online.</li>
            <li>
              Integration Capabilities – Connect with learning management systems (LMS), CRM tools, and email platforms.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#5570F1] mb-4">Step 2: Design Your Certificate Templates</h2>
          <p className="text-gray-700 mb-4">
            Using a template-based system eliminates the need to create certificates from scratch every time. Most
            platforms offer drag and drop editors, allowing you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Add your logo, branding elements, and colors.</li>
            <li>Include recipient details dynamically (name, course, date, certificate ID, etc.).</li>
            <li>Choose from multiple formats (PDF, digital badge, etc.).</li>
            <li>Set expiration dates if applicable.</li>
          </ul>
          <img
            src="/img/design-cert.png"
            alt="Certificate with ribbon"
            className="rounded-lg w-full mb-8"
            loading="lazy"
          />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#5570F1] mb-4">Step 3: Collect Recipient Data Efficiently</h2>
          <p className="text-gray-700 mb-4">
            To generate certificates in bulk, you need accurate recipient data. You can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Upload a CSV file containing recipient names, emails, and other relevant details.</li>
            <li>Integrate with a Registration Form to collect recipient information automatically.</li>
            <li>Sync with an LMS or CRM to pull user data directly.</li>
          </ul>
          <p className="text-gray-700 italic">
            Make sure your data is clean and properly formatted to avoid errors during certificate generation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#5570F1] mb-4 w-full md:w-1/2">
            Step 4: Automate Certificate Generation & Distribution
          </h2>
          <p className="text-gray-700 mb-4">
            Once you have your templates and recipient data ready, automation takes over:
          </p>
          <h3 className="font-semibold mb-2">Advanced Options:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Select your template and map recipient details to the appropriate fields.</li>
            <li>Generate certificates in bulk with a single click.</li>
            <li>Automate email distribution, sending personalized certificates to each recipient.</li>
            <li>Enable instant downloads for recipients via email or a self-service portal.</li>
            <li>Send reminders for expiring or undelivered certificates.</li>
            <li>Add verification features like QR codes or unique IDs for authenticity.</li>
            <li>Schedule automated reminders for certificate renewal.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#5570F1] mb-4">Step 5: Monitor, Manage, and Optimize</h2>
          <p className="text-gray-700 mb-4">
            Automation doesn't stop at distribution. You should continuously monitor the process to ensure smooth
            operations.
          </p>
          <h3 className="font-semibold mb-2">What to Track:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Delivery Status – Check if emails were successfully sent and opened.</li>
            <li>Download Activity – See how many recipients accessed their certificates.</li>
            <li>Error Reports – Identify failed deliveries and fix issues promptly.</li>
          </ul>
          <p className="text-gray-700 mb-8">
            Analyzing these insights allows you to improve efficiency and ensure no recipient is left behind.
          </p>
          <img
            src="/img/monitor-cert.png"
            alt="Certificate with red ribbon"
            className="rounded-lg w-full mb-8"
            loading="lazy"
          />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#5570F1] mb-4 w-full md:w-1/2">
            Step 6: Integrate with Other Systems for Seamless Workflows
          </h2>
          <p className="text-gray-700 mb-4">
            To further optimize your workflow, integrate your certificate distribution system with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Email Marketing Platforms (e.g., Mailchimp, SendGrid) for enhanced communication.</li>
            <li>LMS Platforms (e.g., Moodle, Teachable) for automatic certificate issuance upon course completion.</li>
            <li>CRM & Payment Systems to streamline tracking and revenue management.</li>
          </ul>
          <p className="text-gray-700">
            By connecting these different tools, you create a seamless and fully automated process.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#5570F1] mb-4 w-full md:w-1/2">
            Final Thoughts: Save Time & Improve Efficiency with Automation
          </h2>
          <p className="text-gray-700 mb-4">
            Automating certificate distribution is no longer a luxury—it's a necessity for organizations that value
            efficiency, professionalism, and time savings. By using a dedicated platform like CertifySend, you can
            eliminate manual tasks, reduce errors, and ensure every recipient receives their certificate reliably and
            securely.
          </p>
          <p className="text-gray-700">
            Ready to simplify your certificate distribution process? Get started with CertifySend today and experience
            effortless automation.
          </p>
        </section>
      </main>

      <section className="mt-16">
        <BlogGrid />
      </section>
      <CTA />

      <Footer />
    </div>
  )
}

