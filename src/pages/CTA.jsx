const CTASection = () => {
  return (
    <section className="py-10 sm:py-20">
      <div
        style={{ backgroundImage: "url('/img/Radial.png')" }}
        className="relative bg-cover bg-center h-[454px] sm:h-[500px] flex items-center"
      >
        <div className="absolute inset-0 bg-[#5570F1] opacity-90"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-normal leading-tight sm:leading-[48px] tracking-[-0.04em] text-[#FAFBFF]">
            Ready to Simplify Your Certification and Webinar Process?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg font-normal leading-[26.1px] text-[#FAFBFF]">
            Start using Certifysend today and experience effortless automation with a free trial. Click below to begin your journey!
          </p>
          
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="flex items-center justify-center space-x-2 w-full sm:w-[250px] h-[56px] py-[14px] px-6 rounded-lg bg-[#FAFBFF] text-[#5570F1] text-lg font-semibold"
            >
              Sign up - it's free!
              <img src="/img/button-icon.png" alt="" className="w-5 h-5 text-[#5570F1]" />
            </a>
            <a
              href="/learn-more"
              className="w-full sm:w-auto px-6 py-3 border border-[#FAFBFF] rounded-lg text-base font-semibold text-[#FAFBFF] hover:bg-white hover:text-[#5570F1] transition-colors"
            >
              Learn about Certifysend
            </a>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default CTASection;
