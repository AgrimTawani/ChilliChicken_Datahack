/* eslint-disable no-unused-vars */
import { AboutUs, WhyUs, ContactUs, Footer, Navbar } from "../components";
import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const splineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    const spline = splineRef.current;

    gsap.set([text, button, spline], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(text, 
      { x: '-100%' }, 
      { duration: 1, x: '0%', autoAlpha: 1 }
    )
    .fromTo(button,
      { y: '100%' },
      { duration: 0.8, y: '0%', autoAlpha: 1 },
      '-=0.5'
    )
    .fromTo(spline,
      { x: '100%' },
      { duration: 1, x: '0%', autoAlpha: 1 },
      '-=0.8'
    );

  }, []);


  return (
    <div className="bg-black h-screen text-white overflow-x-hidden relative ">
      <Navbar />
      <div className="flex flex-row flex-nowrap">

      <div ref={containerRef} className="flex flex-row flex-nowrap bg-black min-h-screen">
      <div className="flex-1 text-white flex flex-col items-center justify-center gap-[10px] mr-[10%]">
        <h1 ref={textRef} className="text-5xl md:text-7xl font-bold text-center mb-4 ">
          Welcome to
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"> Flightly</span>.
        </h1>
        <button ref={buttonRef} className="bg-white text-black py-2 px-4 rounded-full font-semibold hover:bg-gray-200 transition-colors">
          Search Flights
        </button>
      </div>
      <div ref={splineRef} className="flex-1 bg-custom-bg h-[80%] mt-[5%] mr-[10%] ml-[-53%]">
        <Spline scene="https://prod.spline.design/xS4a3m1PBVY7CKFS/scene.splinecode" />      
      </div>
      </div>
      </div>
      <AboutUs />
      <WhyUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Hero;
