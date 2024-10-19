import { AboutUs, WhyUs, ContactUs, Footer } from "../components";



const Hero = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-full flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Welcome to the Hero Component</h1>

      <AboutUs/>
      <WhyUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Hero;