import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import CTA from "./CTA"

export default function SuccessStories() {
  const successStories = [
    {
      title: "Training Institute Automates Certificate",
      description:
        "A professional training institute struggled with manually issuing certificates to thousands of participants after each course. With CertifySend's automation, they reduced certificate processing time from weeks to minutes, allowing them to focus on delivering high-quality training instead of administrative tasks.",
      time: "2 months ago",
    },
    {
      title: "HR Team Enhances Employee Recognition",
      description:
        "An HR department in a multinational company wanted an efficient and seamless way to distribute employee achievement awards. Using our bulk certificate feature, they now send personalized certificates to employees worldwide, strengthening motivation and workplace engagement",
      time: "2 months ago",
    },
    {
      title: "Organizer Saves Time in Participant Verification",
      description:
        "A global conference organizer needed to verify attendees and distribute digital certificates efficiently. By integrating CertifySend's form manager and automated email delivery, they reduced manual errors and improved attendee experience significantly.",
      time: "2 months ago",
    },
    {
      title: "HR Team Enhances Employee Recognition",
      description:
        "An HR department in a multinational company wanted an efficient and seamless way to distribute employee achievement awards. Using our bulk certificate feature, they now send personalized certificates to employees worldwide, strengthening motivation and workplace engagement",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify credentials at scale. By using CertifySend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify credentials at scale. By using CertifySend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "3 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "3 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "3 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Institution Improves Student Certification",
      description:
        "A university offering online courses was overwhelmed with handling thousands of certificate requests every semester. After implementing CertifySend, they automated their certificate generation and delivery, allowing students to receive their credentials instantly upon course completion.",
      time: "2 months ago",
    },
    {
      title: "Body Increases Engagement & Credibility",
      description:
        "A professional certification board struggled to issue and verify certificates at scale. By using certifysend's secure certificate generation and email verification features, they ensured the authenticity of each issued certificate, increasing their credibility and participant satisfaction.",
      time: "2 months ago",
    },
    {
      title: "Organizer Saves Time on Participant Verification",
      description:
        "A global conference organizer needed to verify attendees and distribute digital certificates efficiently. By integrating CertifySend's form manager and automated email delivery, they reduced manual errors and improved attendee experience significantly.",
      time: "2 months ago",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[#53545C] font-normal text-base md:text-lg lg:text-xl leading-7 tracking-tighter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Success Stories</h1>
          <p className="text-base md:text-lg md:w-2/3">
            We take pride in helping businesses, educators, and organizations streamline their certificate distribution
            and email communication. Here are some inspiring success stories from our users who have transformed their
            workflows with CertifySend.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 lg:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="pr-2">
                  <h3 className="text-lg md:text-xl font-medium text-black mr-2">{story.title}</h3>
                  <span className="text-xs text-gray-400">{story.time}</span>
                </div>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4">{story.description}</p>
            </div>
          ))}
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

