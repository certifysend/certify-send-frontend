import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-[#F9FAFB] flex flex-col items-center justify-center text-center py-12 px-6">
      <div className=" sm:max-w-4xl">
        <h1 className="font-inter text-[#37393F] text-[28px] sm:text-[48px] font-normal leading-[1.3] sm:leading-[57.6px] tracking-[-0.04em]">
          Automate, Generate, and Deliver <br className="hidden sm:block" />
          <span>Digital Certificates with Ease!</span>
        </h1>

        <p className="font-inter text-[16px] sm:text-[20px] font-normal leading-[1.5] tracking-[-0.02em] text-[#6E7079] sm:max-w-[734px] mx-auto mt-4">
          Empower your organization with our cutting-edge platform that
          automates digital certificate generation and delivery—effortlessly
          sending thousands of certificates in just a few clicks!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full">
          <Link to="/signup"
            className="w-full sm:w-auto px-6 py-3 bg-[#5570F1] text-white font-medium rounded-lg flex items-center justify-center space-x-2"
          >
            <span>Sign up - it&apos;s free!</span>
            <img src="/img/button-icon1.png" alt="" className="w-5 h-5" />
          </Link>

          <button className="w-full sm:w-auto border border-[#6E7079] rounded-lg px-6 py-3">
            Learn about CertifySend
          </button>
        </div>
      </div>
 
      <section className="py-10">
      <div className="md:flex justify-between md:px-8">
        <div className="">
          <img src="/img/Left Wave.png" alt="" className="" />
         </div>

          <div className="">
            <img src="/img/flow-logo.png" alt="" className="w-full h-full" />
          </div>
          <div className="">
            <img src="/img/Right Wave.png" alt="" className="" />
          </div>
      </div>
    </section>
      
    </section>
  );
};

export default Hero;
