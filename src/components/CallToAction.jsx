// components/CallToAction.jsx

export default function CallToAction() {
    return (
      <div
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1650&q=80')", // Replace with your background
        }}
      >
        <div className="bg-[#1E3A8A]/90">
          <div className="lg:max-w-5xl max-w-7xl mx-auto px-6 lg:px-0 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="md:w-2/3">
             <h2 className="text-3xl md:text-4xl font-semibold mb-4">Call To Action</h2>
              <p className="text-md md:text-lg font-sans text-gray-200">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
  
            {/* Right Button */}
            <div>
              <a
                href="#"
                className="inline-block lg:mr-16 px-10 py-3 border-2 border-white text-white text-xl font-medium rounded-full hover:bg-white hover:text-[#1E3A8A] transition duration-300"
              >
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
