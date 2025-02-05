import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I customize certificates with my branding?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? It is some sort of hack? Are you copying and pasting an actual font?"
    },
    {
      question: "Can I integrate this with my existing systems?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text?"
    },
    {
      question: "How does the free trial work?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text?"
    },
    {
      question: "Is my data secure?",
      answer: "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text?"
    }
  ];

  return (
    <section className="py-10 bg-white space-y-8">
      <div className="mx-auto px-6 md:px-32">
        <div className="text-center">
          <h3 className="text-[16px] font-semibold text-[#5570F1]">FAQ</h3>
          <h2 className="text-[24px] md:text-[36px] text-[#344054] font-normal">Frequently Asked Questions</h2>
          <p className="text-[16px] md:text-[18px] text-[#53545C] max-w-full md:w-[720px] mx-auto mt-2">
            Need help with something? Here are our most frequently asked questions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 border-l-4 border-[#5570F1]">
              <h3 className="text-[18px] font-semibold text-[#37393F]">{faq.question}</h3>
              <p className="text-[14px] md:text-[16px] text-[#53545C] mt-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[18px] text-[#53545C]">
            If you couldn't find your favorite questions, kindly send us a mail at
          </p>
          <div className="mt-4">
            <a
              href="mailto:hello@certifysend.co"
              className="inline-block hover:underline border border-[#5570F1] rounded-lg py-2 px-5 text-[16px] font-medium text-[#5570F1]"
            >
              hello@certifysend.co
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 mt-12">
        <div>
          <h2 className="text-[24px] font-bold text-[#1D2739]">Subscribe to our newsletter</h2>
          <p className="text-[14px] md:text-[16px] text-[#475367] mx-auto mt-2 px-10 md:px-0">
            Never miss a beat. Get a weekly dose of tips, trends, and banter in your inbox.
          </p>
        </div>

        <form className="mt-6 md:flex items-center justify-center gap-4 w-full max-w-md mx-auto px-6 md:px-0">
          <div className="flex items-center w-full max-w-md border rounded-md relative">
            <div className="flex items-center absolute left-4">
              <img src="/img/icon-mail.png" alt="email-icon" className="h-5 w-5" />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-32 mt-4 md:mt-0 text-[16px] font-semibold bg-[#5570F1] text-white py-3 px-6 rounded-md flex items-center justify-center hover:bg-[#4560E1]"
          >
            Subscribe
            <img src="/img/button-icon1.png" alt="" className="w-5 h-5 md:hidden ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default FAQSection;
