"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CTA from "./CTA"

const Blog = () => {
  const navigate = useNavigate()
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

  
  const handleCardClick = (postId) => {
    navigate(`/blog/${postId}`)
  }

  return (
    <div className="text-[#53545C] font-inter font-normal text-base md:text-xl leading-7 tracking-tighter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container max-w-7xl mx-auto py-8 md:py-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Insights and articles from our team</h1>
          <p className="text-base md:text-lg">
            CertifySend Blog—your go-to source for the latest updates, insights, and best practices in certificate
            management, bulk email communication, and digital documentation.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4 overflow-x-auto">
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
              onClick={() => handleCardClick(post.id)}
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />

              <div className="bg-gray-400 bg-opacity-50 flex justify-between items-center px-4 py-2 text-white">
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveCategory("Latest Updates")
                    }}
                    className="hover:text-[#5570F1] transition-colors text-sm"
                  >
                    Latest Updates
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveCategory("Industry Insights")
                    }}
                    className="hover:text-[#5570F1] transition-colors text-sm"
                  >
                    Industry Insights
                  </button>
                </div>
                <img src="/img/round.png" alt="" className="w-8 h-8 md:w-10 md:h-10" loading="lazy" />
              </div>

              <div className="mt-4 p-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default Blog

