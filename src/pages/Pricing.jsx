// src/pages/Pricing.js
const PricingSection = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "0",
      period: "/month",
      description: "Perfect for small projects and testing.",
      features: ["Send 100 emails", "Send 10 Certificates", "Form Manager: 1"],
      buttonText: "Choose plan",
      isPopular: false,
    },
    {
      name: "Essentials Plan",
      price: "45,000",
      period: "/month",
      description: "Growing organizations with more capacity.",
      features: ["Send 10k - 50k emails", "Send 20,000 Certificate", "Form Manager: 100"],
      buttonText: "Choose plan",
      isPopular: false,
    },
    {
      name: "Pro Plan",
      price: "245,000",
      period: "/quarterly",
      description: "For high-volume needs with advanced features.",
      features: ["Send 50k - 100k emails", "Send 50k Certificates", "Form Manager: 500"],
      buttonText: "Choose plan",
      isPopular: true,
    },
    {
      name: "Custom Plan",
      description: "Flexible pricing based on your unique needs.",
      features: ["₦2 per email", "₦50 per certificate generated & sent", "₦5,000 per form managed"],
      buttonText: "Shop Now",
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-left md:text-center">
          <p className="text-[#5570F1] text-base font-semibold">Pricing</p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[1.2] tracking-[-0.04em] text-[#37393F] max-w-full md:w-[550px] mx-auto">Plans & Pricing</h2>
          <p className="text-[#53545C] mt-4 text-lg max-w-2xl mx-auto leading-[28.8px]">
            Gain access to higher email limits, enhanced automation tools, priority support, and more. Choose a plan
            that fits your needs and take your certification and email delivery to the next level!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                plan.isPopular
                  ? "bg-[#5570F1] text-white rounded-[18px] shadow-2xl transform translate-y-[-16px] hover:shadow-[0px_24px_48px_-12px_rgba(16,24,40,0.25)]"
                  : "bg-white text-[#37393F] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]"
              } p-6`}
            >
              {plan.isPopular && (
                <span className="absolute top-3 right-3 bg-white text-[#5570F1] text-[10px] font-semibold px-4 py-1 rounded-full ">
                  MOST POPULAR
                </span>
              )}

              <div className="flex flex-col h-full">
                <div>
                  {plan.isPopular ? (
                    <div className="mt-8">
                      <div className="flex items-baseline">
                        <span className="font-['Migra'] text-[36px] font-extrabold leading-[46px] text-white">
                        &#8358;{plan.price}
                        </span>
                        <span className="ml-1 text-xs text-white/80">{plan.period}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="font-['Migra'] text-[36px] font-extrabold leading-[46px] text-[#5570F1]">
                      &#8358;{plan.price}
                      </span>
                      {plan.period && <span className="ml-1 text-xs text-[#8B8D97]">{plan.period}</span>}
                    </div>
                  )}
                  <h3
                    className={`font-['Inter'] text-[24px] font-semibold leading-[28.8px] tracking-[-0.02em] mt-4 ${
                      plan.isPopular ? "text-white" : "text-[#1C1D22]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-2 ${
                      plan.isPopular
                        ? "text-white font-poppins text-[15px] leading-[22.5px]"
                        : "text-[#8B8D97] font-inter text-[14px] leading-[16.94px]"
                    } font-medium`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className={`space-y-3 flex-grow mt-6`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div
                        className={`flex items-center justify-center ${plan.isPopular ? "bg-white/10 rounded-full p-1" : ""}`}
                      >
                        <svg
                          className={`w-4 h-4 ${plan.isPopular ? "text-white" : "text-[#5570F1]"}`}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6666 5L7.49992 14.1667L3.33325 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span
                        className={`font-inter text-[14px] leading-[20.3px] ${
                          plan.isPopular ? "text-white" : "text-[#53545C]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-6 w-full py-2 px-4 rounded-lg font-medium text-[14px] leading-[20px] flex items-center justify-center transition-colors duration-200 ${
                    plan.isPopular
                      ? "bg-white text-[#5570F1] hover:bg-white/90"
                      : "bg-[#E5E7EB] text-[#BEC0CA] hover:bg-[#E5E7EB]/90"
                  }`}
                >
                  {plan.buttonText}
                  {(plan.isPopular || plan.name === "Custom Plan") && (
                    <img
                      src="/img/button-icon.png"
                      alt="Arrow"
                      className="ml-2 w-4 h-4"
                    />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;