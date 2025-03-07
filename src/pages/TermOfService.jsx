import CTA from "./CTA"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white font-inter text-[#53545C] font-normal text-base sm:text-lg md:text-xl leading-6 md:leading-7 tracking-tighter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Terms of Service</h1>
          <p className="text-base md:text-lg">Your Agreement</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
        <div className="prose max-w-none">
          <h2 className="text-xl md:text-2xl mb-4 md:mb-6">Effective Date: 02/10/25</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base">
            Welcome to CertifySend! These Terms of Service outline the rules, obligations, and conditions governing your
            use of our website, platform, and services. By accessing or using CertifySend, you agree to comply with
            these terms. If you do not agree with any part of these Terms, please do not use our services.
          </p>

          <section className="mb-6 md:mb-8 space-y-2 md:space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">Definitions</h2>
            <p className="text-sm md:text-base">For clarity, the following terms are defined as:</p>
            <ul className="list-disc pl-4 md:pl-6 space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <strong>"CertifySend"</strong> refers to our platform, website, and any associated services.
              </li>
              <li>
                <strong>"User"</strong> refers to any individual or entity that accesses or utilizes our platform and
                services.
              </li>
              <li>
                <strong>"Services"</strong> include but are not limited to certificate generation, bulk email services,
                and other related functionalities provided by CertifySend.
              </li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">User Accounts</h2>
            <div className="mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 pl-2 md:pl-5">a. Registration</h3>
              <p className="text-sm md:text-base">
                To access certain features of CertifySend, you may be required to create an account. When registering,
                you agree to:
              </p>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>Provide accurate, current, and complete information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access or use of your account</li>
                <li>Be at least 18 years old to create an account and use our services</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 pl-2 md:pl-5">b. Account Termination</h3>
              <p className="text-sm md:text-base">We reserve the right to suspend or terminate your account if:</p>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>You provide false or misleading information</li>
                <li>You engage in fraudulent, abusive, or illegal activities</li>
                <li>You violate any terms outlined in this agreement</li>
              </ul>
              <p className="mt-1 md:mt-2 text-sm md:text-base">
                Termination may result in the loss of access to all stored data, certificates, and services.
              </p>
            </div>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">Acceptable Use</h2>
            <p className="text-sm md:text-base">When using CertifySend, you agree NOT to:</p>
            <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Send spam, phishing attempts, or unauthorized bulk emails</li>
              <li>Interfere with or disrupt the platform's operations</li>
              <li>Attempt to gain unauthorized access to other accounts, servers, or networks</li>
              <li>Engage in fraudulent or deceptive activities</li>
              <li>Upload or distribute malicious software, viruses, or harmful code</li>
            </ul>
            <p className="mt-1 md:mt-2 text-sm md:text-base">
              Failure to comply with these guidelines may lead to immediate suspension or termination of your account.
            </p>
          </section>

          <section className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">Payment & Billing</h2>
            <div className="mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">a. Pricing & Subscription</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>CertifySend offers both free and paid subscription plans with varying features and limitations</li>
                <li>Prices for paid plans are subject to change, with reasonable prior notice</li>
                <li>Continued use of the service after a price change constitutes acceptance of the new pricing</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">b. Refund Policy</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>Payments made for our services are non-refundable, except where required by applicable laws</li>
                <li>
                  Refunds, if granted, will be processed at our sole discretion and under exceptional circumstances
                </li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">c. Payment Information</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>We use third-party payment processors to handle transactions securely</li>
                <li>
                  CertifySend does not store or process credit card details directly; all transactions comply with
                  industry security standards
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-6 md:mb-8">
            <div className="mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">Data Privacy & Security</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>We collect, store, and process user data in compliance with our Privacy Policy</li>
                <li>
                  We implement industry-standard security measures to protect user information from unauthorized access,
                  theft, or misuse
                </li>
                <li>However, no online service is entirely risk-free, and we cannot guarantee absolute security</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">
                Service Availability & Modifications
              </h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>
                  We strive to keep CertifySend operational at all times but do not guarantee uninterrupted service
                </li>
                <li>
                  We reserve the right to update, modify, or discontinue any part of our services at any time without
                  prior notice
                </li>
                <li>Users may experience temporary downtime due to maintenance, updates, or technical issues</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">Limitation of Liability</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>
                  CertifySend is provided "as is" without any warranties or guarantees regarding accuracy, reliability,
                  or fitness for a specific purpose
                </li>
                <li>
                  We are not liable for any indirect, incidental, special, or consequential damages arising from your
                  use or inability to use our services
                </li>
                <li>
                  Our total liability under any claim shall not exceed the amount paid by the user (if any) for the
                  services within the past three (3) months
                </li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">Intellectual Property</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>
                  All content, including logos, text, graphics, and software associated with CertifySend, is the
                  exclusive property of CertifySend
                </li>
                <li>
                  Users may not copy, modify, distribute, or commercially exploit any part of our intellectual property
                  without prior written consent
                </li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">Governing Law</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>
                  These Terms of Service shall be governed by and interpreted in accordance with the laws of [Insert
                  Jurisdiction]
                </li>
                <li>Any disputes arising from these Terms shall be resolved in the courts of [Insert Jurisdiction]</li>
              </ul>
            </div>

            <div className="mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-[#5570F1]">Changes to These Terms</h3>
              <ul className="list-disc pl-4 md:pl-6 text-sm md:text-base">
                <li>We may revise and update these Terms from time to time</li>
                <li>
                  Changes will be posted on this page, and continued use of our services after such changes constitutes
                  acceptance of the updated Terms
                </li>
              </ul>
            </div>
          </section>

          <p className="mt-4 md:mt-6 italic font-bold text-sm md:text-base">
            By using CertifySend, you acknowledge that you have read, understood, and agreed to these Terms of Service.
          </p>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  )
}

export default TermsOfService

