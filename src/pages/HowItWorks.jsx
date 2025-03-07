const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your account and log in to our platform."
    },
    {
      title: "Design Your Certificate",
      description: "Choose a template or upload your design."
    },
    {
      title: "Input Recipients",
      description: "Upload a list of recipients or enter them manually."
    },
    {
      title: "Set Up Webinars",
      description: "Create registration forms for your virtual sessions."
    },
    {
      title: "Effortless Bulk Email Delivery",
      description: "Send personalized emails to multiple recipients in just a few clicks."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto md:px-32 px-6">
        <div className="hidden md:grid md:grid-cols-2 gap-x-16">
          <div>
            <h3 className="text-[16px] font-semibold leading-[23.2px] text-left text-[#5570F1] w-[568px] h-[28px]">
              How it works
            </h3>
            <h2 className="text-base md:text-[36px] font-normal leading-[43.2px] tracking-[-0.04em] text-left text-[#344054] w-[568px] h-[86px]">
              A Simple, Streamlined Process to Generate and Deliver Certificates
            </h2>
            <p className="text-[18px] font-normal leading-[26.1px] text-left text-[#53545C] w-[568px] h-[78px] mt-3">
              From signing up to sending certificates, our platform guides you step-by-step to ensure effortless and efficient certification management.
            </p>
            <a 
              href="/get-started" 
              className="inline-flex items-center text-[18px] leading-[26.1px] text-left text-[#5570F1] h-[26px] mt-6"
            >
              Get Started
             <img src="/img/arrow_forward.png" alt="" className="w-[24px] h-[24px]" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 auto-rows-min">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-[#F6F6F6] border border-[#BEC0CA] rounded-lg p-6 ${
                  index === steps.length - 1 ? "col-span-2" : ""
                }`}
              >
                <div className="mb-4">
                  <img src="/img/lock.png" alt="" className="h-5 w-5" />
                </div>
                <h3 className="text-[18px] font-semibold leading-[26.1px] text-left text-[#45464E] w-full h-[26px]">{step.title}</h3>
                <p className="text-[16px] font-normal leading-[23.2px] text-left decoration-skip-ink-none w-full h-[46px] gap-0 text-[#667085] mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="text-left">
            <h3 className="text-[#5570F1] font-semibold text-sm uppercase tracking-wide">
              How it works
            </h3>
            <h2 className="text-2xl mt-3 text-[32px] font-normal leading-[43.2px] tracking-[-0.04em] text-left text-[#344054] w-[370px]">
              A Simple, Streamlined Process to Generate and Deliver Certificates
            </h2>
            <p className="text-gray-600 mt-4 text-sm">
              From signing up to sending certificates, our platform guides you step-by-step to ensure effortless and efficient certification management.
            </p>
            <a 
              href="/get-started" 
              className="inline-flex items-center text-[#5570F1] font-semibold mt-4 text-sm hover:underline"
            >
              Get Started
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="p-4 bg-[#F6F6F6] border border-[#BEC0CA] rounded-lg"
              >
                <div className="items-center gap-3">
                  <img src="/img/lock.png" alt="" className="h-5 w-5" />
                  <div>
                    <h3 className="font-medium text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;