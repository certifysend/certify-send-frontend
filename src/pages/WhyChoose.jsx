import React from "react";

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-6 md:px-32">
        <div className="text-center">
          <h3 className="h-[28px] text-center text-[16px] font-semibold leading-[23.2px] text-[#5570F1]">
            Why Choose Certifysend?
          </h3>
          <h2 className="sh-[86px] text-center text-[36px] font-normal leading-[43.2px] tracking-[-0.04em] text-[#37393F]">
            Scalable, Affordable, and{" "}
            <br className="hidden md:block" />
            Supported Every Step of the Way
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-[18px] font-normal leading-[26.1px] text-center text-[#53545C]">
            Certifysend adapts to your needs, minimizes costs, and offers expert assistance 
            to ensure a seamless experience for all your certification and webinar management tasks.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="flex flex-col items-center text-center">
            <img src="/img/arrow-shrink.png" alt="" className="w-12 h-12 mb-6" />
            <h3 className="text-[20px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#45464E] mb-3">Scalability</h3>
            <p className="text-[16px] font-medium leading-[23.2px] text-center text-[#6E7079]">
              Whether you need to send 10 or 10,000 certificates, our platform scales with your needs.
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <img src="/img/Direction Line.png" alt="" className="w-24" />
          </div>

          <div className="flex md:hidden justify-center">
            <img src="/img/Direction Line2.png" alt="" className="h-12" />
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/img/wallet-fund.png" alt="" className="w-12 h-12 mb-6" />
            <h3 className="text-[20px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#45464E] mb-3">Cost-Effective</h3>
            <p className="text-[16px] font-medium leading-[23.2px] text-center text-[#6E7079]">
              Save on printing and postage costs while streamlining your certification and webinar processes.
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <img src="/img/Direction Line.png" alt="" className="w-24" />
          </div>

          <div className="flex md:hidden justify-center">
            <img src="/img/Direction Line2.png" alt="" className="h-12" />
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/img/support.png" alt="" className="w-12 h-12 mb-6" />
            <h3 className="text-[20px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#45464E] mb-3">Customer Support</h3>
            <p className="text-[16px] font-medium leading-[23.2px] text-center text-[#6E7079]">
              Our dedicated support team is here to help you with any questions or technical issues you might encounter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;