
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 mr-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-xl font-bold">Flightly</span>
            </div>
            <p className="text-lg font-bold">
              Your brand, built <span className="text-blue-400">better</span>
            </p>      
            <p className="text-xs">Privacy Policy | Terms & Conditions</p>
          </div>
          
          <div className="flex flex-wrap justify-between w-full md:w-2/3">
            <div className="w-1/2 md:w-auto mb-4 md:mb-0">
              <h3 className="text-blue-400 font-bold mb-2">Company</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Portfolio</a></li>
              </ul>
            </div>
            
            <div className="w-1/2 md:w-auto mb-4 md:mb-0">
              <h3 className="text-blue-400 font-bold mb-2">Services</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-blue-400">Web Design</a></li>
                <li><a href="#" className="hover:text-blue-400">Graphic Design</a></li>
                <li><a href="#" className="hover:text-blue-400">Software</a></li>
                <li><a href="#" className="hover:text-blue-400">Webflow</a></li>
              </ul>
            </div>
            
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <h3 className="text-blue-400 font-bold mb-2">Contact</h3>
              <p className="mt-1 text-sm">
                <a href="mailto:hello@phunk.co.uk" className="hover:text-blue-400">hello@flightly.co.in</a>
              </p>
              <p className="text-sm">
                <a href="tel:+441133908188" className="hover:text-blue-400">+441133 908 188</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
