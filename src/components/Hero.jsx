import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative">
      <div
        className="hidden lg:block absolute inset-0 w-1/2 ml-auto z-0"
        style={{ zIndex: -1 }}
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                  <span> The quick </span>
                  <span className="text-blue-600"> brown fox</span>
                  <span> jumps over the lazy dog.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                  auctor arcu vitae, luctus nisi.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <a
                  className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Check Now
                </a>
                <a
                  className="block sm:inline-block py-4 px-8 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
            <div className="flex items-center justify-center">
              <img
                className="lg:max-w-lg"
                src="images/working-from-airport.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
