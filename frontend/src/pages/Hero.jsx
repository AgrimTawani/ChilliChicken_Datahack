import { AboutUs, WhyUs, ContactUs, Footer } from "../components";
import Spline from '@splinetool/react-spline';



const Hero = () => {
  return (
    <div className="bg-zinc-950 h-screen text-white">
      <div className="absolute top-[-30%] left-[-10%]">
      <Spline scene="https://prod.spline.design/xS4a3m1PBVY7CKFS/scene.splinecode" />
      </div>
      <AboutUs/>
      <WhyUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Hero;