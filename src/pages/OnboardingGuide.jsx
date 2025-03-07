import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import CTA from "./CTA"
import Footer from "../components/Footer"

const OnboardingGuide = () => {
  const onboardingSteps = [
    {
      id: 1,
      title: "Create Your Account",
      description: "Create a strong password and provide your name and email to get started.",
      background: "bg-[#FAFBFF]",
      stepItems: [
        "Use a strong password",
        "Verify your email address",
        "Set up a strong password to secure your account",
      ],
      formFields: [
        { name: "firstName", label: "First Name", type: "text", placeholder: "Enter first name" },
        { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter last name" },
        { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
        { name: "password", label: "Password", type: "password", placeholder: "Create a strong password" },
      ],
    },
    {
      id: 2,
      title: "Complete Basic KYC Verification",
      description: "Verify your identity with quick KYC process.",
      background: "bg-[#FEF6E7]",
      stepItems: ["Upload government-issued ID", "NIN or Passport verification", "Provide address and utility bill"],
      formFields: [
        { name: "nni", label: "National Identification Number (NIN)", type: "text", placeholder: "Enter your NIN" },
        { name: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
        { name: "otp", label: "One-Time Password (OTP)", type: "text", placeholder: "Enter OTP" },
      ],
    },
    {
      id: 3,
      title: "Set Up Your First Project",
      description: "A Project helps you manage certificates, forms, and emails in one place.",
      background: "bg-[#F9FAFB]",
      stepItems: [
        "Click on Projects in the sidebar",
        "Choose Create New Project and enter the necessary details",
        "Start adding recipients, templates, or bulk email settings",
      ],
    },
    {
      id: 4,
      title: "Generate & Send Certificates",
      description: "Creating and distributing certificates is easy.",
      background: "bg-[#E7F6EC]",
      stepItems: [
        "Go to Certificates in the dashboard",
        "Choose Upload New List or Select from Existing List",
        "Design or upload a certificate template",
        "Click Send, and your recipients will receive their certificates instantly!",
      ],
    },
    {
      id: 5,
      title: "Manage Forms & Collect Data",
      description: "Use CertifySend's Form Manager to collect recipient information easily.",
      background: "bg-[#FAFBFF]",
      stepItems: [
        "Navigate to Forms in the sidebar",
        "Create a new form and customize the fields",
        "Share the link to collect submissions",
        "Track and manage responses easily",
      ],
    },
    {
      id: 6,
      title: "Send Bulk Emails with Ease",
      description: "Want to send emails to thousands of recipients effortlessly?",
      background: "bg-[#FBEAE9]",
      stepItems: [
        "Go to Bulk Email and select your recipient list",
        "Create or upload a custom email template",
        "Personalize the content using dynamic fields",
        "Schedule or send emails instantaneously!",
      ],
    },
    {
      id: 7,
      title: "Track & Manage Sent Items",
      description: "Stay on top of all sent certificates and emails.",
      background: "bg-[#FAFBFF]",
      stepItems: [
        "Navigate to the Sent section",
        "View logs of emails, certificates, and forms sent",
        "Monitor delivery success and manage failed deliveries",
      ],
    },
    {
      id: 8,
      title: "Upgrade Your Plan",
      description: "Need higher limits? Upgrade your plan to unlock more features.",
      background: "bg-[#FEF6E7]",
      stepItems: [
        "Send more emails & certificates",
        "Manage additional forms",
        "Get priority support",
        "Check out our Pricing Plans for details",
      ],
    },
  ]

  return (
    <div className="text-[#53545C] font-normal text-base sm:text-xl leading-7 tracking-tighter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Onboarding Guide</h1>
          <p className="text-base sm:text-lg">
            Welcome to CertifySend—your go-to platform for seamless certificate generation, bulk email distribution, and
            more.
          </p>
        </div>
      </header>

      <div className="px-4 py-6 space-y-8 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
        {onboardingSteps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-center p-4 sm:p-6 lg:p-8 ${step.background} rounded-lg shadow-sm`}
          >
            <div className="w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-[#5570F1]">{String(step.id).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{step.title}</h2>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>

                  <ul className="space-y-2 pl-4">
                    {step.stepItems.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#5570F1] mt-1 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                <img
                  src={`/img/frame${step.id}.png`}
                  alt={`Step ${step.id} Illustration`}
                  className="w-full max-w-md object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTA />
      <Footer />
    </div>
  )
}

export default OnboardingGuide

