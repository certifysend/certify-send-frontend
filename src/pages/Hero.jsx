import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const logoRef = useRef(null);
  const animatedLeftWaveRef = useRef(null);
  const animatedRightWaveRef = useRef(null);

  useEffect(() => {
    const logoElement = logoRef.current;
    let rotationAngle = 0;
    let rotationIncrement = 1;
    const maxRotation = 180;
    
    const animateLogo = () => {
      rotationAngle += rotationIncrement;
      
      if (rotationAngle >= maxRotation || rotationAngle <= 0) {
        rotationIncrement *= -1;
      }
      
      if (logoElement) {
        logoElement.style.transform = `rotate(${rotationAngle}deg)`;
      }
      
      requestAnimationFrame(animateLogo);
    };
    
    const leftWave = animatedLeftWaveRef.current;
    const rightWave = animatedRightWaveRef.current;
    
    let wavePosition = 0;
    let waveDirection = 2;
    const maxWaveMovement = 15;
    
    const animateWaves = () => {
      if (wavePosition >= maxWaveMovement) waveDirection = -1;
      if (wavePosition <= -maxWaveMovement) waveDirection = 1;
      
    
      wavePosition += 0.3 * waveDirection;
      

      if (leftWave) {
        leftWave.style.transform = `translateX(${-wavePosition}px)`;
      }
      
      if (rightWave) {
        rightWave.style.transform = `translateX(${wavePosition}px)`;
      }
      
      requestAnimationFrame(animateWaves);
    };
    
    const logoAnimation = requestAnimationFrame(animateLogo);
    const waveAnimation = requestAnimationFrame(animateWaves);
    
    return () => {
      cancelAnimationFrame(logoAnimation);
      cancelAnimationFrame(waveAnimation);
    };
  }, []);

  return (
    <section className="bg-[#F9FAFB] flex flex-col items-center justify-center text-center py-12 px-6">
      <div className="max-w-4xl mx-auto">
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
          <Link
            to="/signup"
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

     
      <div className="py-16 w-full relative">
      
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-64 h-64">
            
            <div className="absolute inset-0 rounded-3xl border border-blue-200 scale-[1.6] opacity-20"></div>
            <div className="absolute inset-0 rounded-3xl border border-blue-200 scale-[1.4] opacity-30"></div>
            <div className="absolute inset-0 rounded-3xl border border-blue-200 scale-[1.2] opacity-40"></div>
            <div className="absolute inset-0 rounded-3xl border border-blue-200 opacity-50"></div>
          </div>
        </div>
        
        
        <div className="absolute top-1/4 left-1/4 text-blue-500 text-xl pointer-events-none">+</div>
        <div className="absolute bottom-1/4 left-1/3 text-blue-500 text-xl pointer-events-none">+</div>
        <div className="absolute top-1/3 right-1/4 text-blue-500 text-xl pointer-events-none">+</div>
        <div className="absolute bottom-1/3 right-1/3 text-blue-500 text-xl pointer-events-none">+</div>
        
        
        <div className="flex flex-col md:flex-row justify-between items-center md:px-8 relative z-10">
        
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full max-w-xs">
              <div className="pattern-grid text-blue-200">
               
                <img src="/img/Left Wave.png" alt="" className="w-full" />
              </div>
            </div>
          </div>

         
          <div className="flex-none mx-4 my-8 md:my-0 relative">
            <div className="flex items-center">
             
              <div 
                ref={animatedLeftWaveRef} 
                className="transition-transform"
              >
                <img src="/img/1.png" alt="" className="h-8" />
              </div>
              
       
              
                <div ref={logoRef} className="bg-white bg-opacity-20 rounded-lg p-1" style={{ transition: "transform 0.3s ease" }}>
                <img src="/img/div.ui-ai-genius-logo.png" alt="" className="" />
                </div>
              
            
              <div 
                ref={animatedRightWaveRef}
                className="transition-transform"
              >
                <img src="/img/2.png" alt="" className="h-8" />
              </div>
            </div>
          </div>
          
         
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="w-full max-w-xs">
              <div className="pattern-grid text-blue-200">
               
                <img src="/img/Right Wave.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;