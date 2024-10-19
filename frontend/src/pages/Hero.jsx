import { AboutUs, WhyUs, ContactUs, Footer } from "../components";



const Hero = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <h1 className="text-4xl font-bold text-white">Welcome to the Hero Component</h1>

      <AboutUs/>
      <WhyUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Hero;