import CTA from "./CTA"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"

const PrivacyPolicy = () => {
  return (
    <div className="font-inter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Privacy and Policy</h1>
          <p className="text-base sm:text-lg">Your Agreement</p>
        </div>
      </header>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-[#53545C] font-normal text-base sm:text-lg md:text-xl leading-7 tracking-tighter">
          <div className="prose max-w-none">
            <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold">Effective Date: 02/10/25</h2>
            <p className="mb-4 sm:mb-6">
              Welcome to CertifySend! Your privacy is important to us. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website, platform, and services. By accessing or
              using our services, you consent to the terms outlined in this policy. We encourage you to read this policy
              carefully to understand our practices regarding your personal data.
            </p>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#5570F1]">Information We Collect</h2>
              <p className="mb-2 sm:mb-4">
                To provide and improve our services, we collect various types of information from users. The data we
                collect helps us ensure the smooth operation of our platform, enhance security, and deliver personalized
                experiences. The types of information we collect include:
              </p>
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-2 mt-4 sm:mt-5">a. Personal Information</h3>
                <p>We may collect personal details that help identify you, including but not limited to:</p>
                <ul className="list-disc pl-4 sm:pl-6 mt-2">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>National Identification Number (NIN)</li>
                  <li>and Payment Information</li>
                </ul>
                <p className="mt-2">
                  This information is collected when you register an account, use our services, make a purchase, or
                  communicate with us.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-2">b. Non-Personal Information</h3>
                <p>
                  We also collect non-personal data, which does not directly identify you but helps us improve our
                  services. This may include:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 mt-2 italic">
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Device Information</li>
                  <li>Usage Data</li>
                </ul>
                <p className="mt-2">
                  This data is collected automatically through cookies, tracking technologies, and analytics tools to
                  enhance functionality and user experience.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-2">c. Information from Third Parties</h3>
                <p className="mb-2 sm:mb-3">
                  We may collect information from third-party services that integrate with our platform. This includes:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 italic space-y-2 sm:space-y-4">
                  <li>Payment processors to verify transactions and prevent fraud</li>
                  <li>Authentication providers for secure login and identity verification.</li>
                  <li>Analytics tools to understand platform usage and user behavior.</li>
                </ul>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#5570F1]">
                How We Use Your Information
              </h2>
              <p className="mb-2 sm:mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-4 sm:pl-6 italic space-y-3 sm:space-y-5">
                <li>
                  <span className="italic font-bold">Account Registration & Verification:</span> Your personal details
                  are used to create and authenticate your account, ensuring only authorized users access our services.
                </li>
                <li>
                  <span className="italic font-bold">Service Provision:</span> We process your information to generate
                  certificates, send bulk emails, and manage registration forms efficiently.
                </li>
                <li>
                  <span className="italic font-bold">Communication:</span> We use your contact information to send
                  updates, respond to inquiries, and provide customer support.
                </li>
                <li>
                  <span className="italic font-bold">Security & Fraud Prevention:</span> Your data helps us detect and
                  prevent unauthorized access, fraud, and potential security threats.
                </li>
                <li>
                  <span className="italic font-bold">Analytics & Improvement:</span> We analyze user activity to enhance
                  our services, optimize platform performance, and introduce new features.
                </li>
                <li>
                  <span className="italic font-bold">Legal & Compliance:</span> We may use your data to comply with
                  regulatory requirements, enforce our policies, and resolve disputes.
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#5570F1]">
                How We Share Your Information
              </h2>
              <p className="mb-2 sm:mb-3">
                We do not sell or rent your personal data. However, we may share your information in the following
                situations:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-3 sm:space-y-5">
                <li>
                  <span className="font-bold italic">With Service Providers:</span> We collaborate with third-party
                  vendors to facilitate payments, email communications, analytics, and customer support services. These
                  providers are bound by confidentiality agreements.
                </li>
                <li>
                  <span className="font-bold italic">Legal Requirements:</span> We may disclose your data if required by
                  law, legal processes, or in response to governmental requests to protect our legal rights.
                </li>
                <li>
                  <span className="font-bold italic">Business Transfers:</span> If we are involved in a merger,
                  acquisition, or asset sale, your data may be transferred as part of the business transaction.
                </li>
                <li>
                  <span className="font-bold italic">With Your Consent:</span> We may share your information when you
                  provide explicit consent for specific disclosures.
                </li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#5570F1]">Data Security</h2>
              <p className="mb-2 sm:mb-3">
                We take your data security seriously and implement strict measures to protect it. These measures
                include:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-3 sm:space-y-5">
                <li>
                  <span className="italic font-bold">Encrypted Data Storage & Transmission:</span> We use encryption
                  protocols to protect your personal information during transmission and storage.
                </li>
                <li>
                  <span className="italic font-bold">Access Controls & Authentication Mechanisms:</span> We limit access
                  to personal data to authorized personnel only, using secure authentication methods.
                </li>
                <li>
                  <span className="italic font-bold">Regular Security Audits & Vulnerability Assessments:</span> We
                  conduct periodic security assessments to identify and mitigate risks proactively.
                </li>
              </ul>
              <p className="mt-2 sm:mt-4">
                While we strive to safeguard your data, no system is completely immune to cyber threats. We encourage
                users to take personal security precautions, such as using strong passwords and enabling two-factor
                authentication.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#5570F1]">Your Rights & Choices</h2>
              <p className="mb-2 sm:mb-3">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-4 sm:pl-6">
                <li>
                  <span className="">Access & Correction:</span> You can request a copy of your data and update any
                  inaccuracies.
                </li>
                <li>
                  <span className="">Deletion:</span> You may request the deletion of your personal information, subject
                  to legal and contractual obligations.
                </li>
                <li>
                  <span className="">Opt-Out:</span> You have the right to unsubscribe from marketing communications at
                  any time.
                </li>
                <li>
                  <span className="">Data Portability:</span> You may request to transfer your data to another service
                  provider where feasible.
                </li>
              </ul>
              <p className="mt-2 sm:mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="/#privacy" className="text-[#5570F1]">
                  hello@certifysend.com.
                </a>
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-[#5570F1]">
                Cookies & Tracking Technologies
              </h2>
              <p className="mb-2 sm:mb-3">
                We use cookies and other tracking technologies to enhance your experience, including:
              </p>
              <ul className="list-disc pl-4 sm:pl-6">
                <li>Remembering user preferences and login details.</li>
                <li>Analyzing site traffic and user interactions to improve functionality.</li>
                <li>Providing personalized content and advertisements.</li>
              </ul>
              <p className="mt-2 sm:mt-4">
                You can control cookie settings in your browser. However, disabling cookies may affect the availability
                of certain features on our platform.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#5570F1]">Data Retention</h3>
                <p>
                  We retain your information for as long as necessary to provide our services, fulfill legal
                  requirements, and resolve disputes. After this period, we securely delete or anonymize your data in
                  accordance with industry best practices.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#5570F1]">Third-Party Links & Services</h3>
                <p>
                  Our platform may contain links to third-party websites. We are not responsible for their privacy
                  practices and encourage you to review their privacy policies before sharing personal data.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#5570F1]">Children's Privacy</h3>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal data from minors. If we discover that a minor has provided us with information, we will take
                  steps to delete it promptly. Parents or guardians who believe their child has provided personal data
                  should contact us immediately.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#5570F1]">International Data Transfers</h3>
                <p>
                  If you access our services from outside [Insert Jurisdiction], your data may be transferred to and
                  stored in a jurisdiction with different data protection laws. By using our platform, you consent to
                  such transfers, ensuring compliance with applicable international data protection laws.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-[#5570F1]">Updates to This Privacy Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. If changes are made, we will notify users by
                  posting an updated version on this page with a revised effective date. Your continued use of our
                  services after any updates indicates your acceptance of the changes.
                </p>
              </div>
            </section>

            <p className="mt-4 sm:mt-6 italic font-bold">
              By using our platform, you agree to this Privacy Policy and the processing of your data as described
              above.
            </p>
          </div>
        </div>
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default PrivacyPolicy

