/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-black/90 to-blue-500 text-white overflow-hidden flex items-center">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4 opacity-10 pointer-events-none">
        {Array.from({ length: 144 }).map((_, index) => (
          <div key={index} className="border border-black/30 rounded-sm"></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <main>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              We're <span className="text-cyan-400">Flightly</span>.<br />
              Pleased to meet you.
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Our team is here to create a seamless and smooth, yet interactive experience for you.
              </p>
              
              <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;