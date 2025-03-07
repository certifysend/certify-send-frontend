const Footer = () => {
  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "Free Trial", href: "/free-trial" },
        { name: "Case Studies", href: "/case-studies" },
      ],
    },
    community: {
      title: "Community",
      links: [
        { name: "Webinars", href: "/webinars" },
        { name: "Events", href: "/events" },
        { name: "Referral Program", href: "/referral" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Careers", href: "/careers" },
      ],
    },
    learn: {
      title: "Learn",
      links: [
        { name: "FAQ", href: "/#faq" },
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "eBooks/Resources", href: "/resources" },
        { name: "Onboarding Guide", href: "/onboarding" },
      ],
    },
  }

  return (
    <footer className="bg-white">
      <div className="p-5 md:p-10 mx-auto md:px-10">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 md:w-[495px] h-[300px] bg-[#5570F1] rounded-lg p-6 text-white">
            <h2 className="text-4xl font-normal leading-[48px] tracking-[-0.04em] text-left underline-offset-4 decoration-transparent  h-[96px]">
              Stay Connected with Certifysend
            </h2>
            <p className="text-base font-normal leading-[23.2px] text-left decoration-transparent h-[69px]">
              Simplify certification, streamline webinars, and save time with our cutting-edge platform.
            </p>
            <div className="flex justify-between items-end">
              <button className="bg-white text-[#5570F1] px-4 py-4 rounded-lg text-sm flex justify-between items-center">
                Get Started{" "}
                <span className="">
                  <img src="/img/button-icon.png" alt="" className="h-5 w-5" />
                </span>
              </button>
              <img src="/img/Vector.png" alt="" className="w-20 h-20" />
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
              <div className="">
                <h3 className="mb-5 w-[99px] h-[20px] gap-0 text-[14px] font-medium leading-[20.3px] text-left decoration-skip-ink-none text-[#8D8484]">
                  {footerLinks.product.title}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="w-[118px] h-5 text-sm font-medium leading-[20.3px] text-[#3E3838] text-left decoration-skip-ink-none"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-5 w-[99px] h-[20px] gap-0 text-[14px] font-medium leading-[20.3px] text-left decoration-skip-ink-none text-[#8D8484]">
                  {footerLinks.community.title}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.community.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="w-[118px] h-5 text-sm font-medium leading-[20.3px] text-[#3E3838] text-left decoration-skip-ink-none"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-5 w-[99px] h-[20px] gap-0 text-[14px] font-medium leading-[20.3px] text-left decoration-skip-ink-none text-[#8D8484]">
                  {footerLinks.learn.title}
                </h3>
                <ul className="space-y-3">
                  {footerLinks.learn.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="w-[118px] h-5 text-sm font-medium leading-[20.3px] text-[#3E3838] text-left decoration-skip-ink-none"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-start md:justify-end items-start">
                <img src="/img/logo.png" alt="CertifySend Logo" className="h-8" />
              </div>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex flex-wrap gap-1 sm:gap-2 items-center text-[10px] xs:text-xs sm:text-[14px]">
                <a href="/privacy" className="text-[#3E3838] hover:text-[#5570F1] transition-colors font-semibold">
                  Privacy Policy
                </a>
                <span className="text-gray-300">•</span>
                <a href="/site-map" className="text-[#3E3838] hover:text-[#5570F1] transition-colors font-semibold">
                  Site Map
                </a>
                <span className="text-gray-300">•</span>
                <a href="/service-term" className="text-[#3E3838] hover:text-[#5570F1] transition-colors font-semibold">
                  Terms of Service
                </a>
                <span className="text-gray-300">•</span>
                <a href="/help" className="text-[#3E3838] hover:text-[#5570F1] transition-colors font-semibold">
                  Help Center
                </a>
              </div>
              <div className="text-xs sm:text-sm md:text-base font-normal text-[#514A4A]">
                &copy;2025 Certifysend. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

