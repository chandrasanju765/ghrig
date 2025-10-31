import React from "react";

const ServiceBanner = () => {
  return (
    <section className="service-banner max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-white">
      {/* LEFT SIDE */}
      <div className="service-left max-w-lg">
        <span className="service-badge inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full mb-4 font_family_jakarta">
          gHRig People Solutions
        </span>

        <h1 className="service-title text-4xl sm:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3 font_family_jakarta">
          Background Verification
        </h1>

        <p className="service-subtext text-base sm:text-lg text-gray-600 mb-8 font_family_inter">
          Employment and education checks
        </p>

        <div className="service-buttons flex flex-wrap gap-3 mb-10">
          <button className="btn-primary px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors font_family_inter">
            Hire Now
          </button>
          <button className="btn-outline px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors font_family_inter">
            Explore Roles
          </button>
        </div>

        <div className="service-dots flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`dot w-2 h-2 rounded-full transition-all ${
                i === 0 ? "bg-purple-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE – visible only on lg+ */}
      <div className="service-right hidden lg:flex justify-center items-center flex-1">
        <div className="image-wrapper">
          {/* Card – banner1 */}
          <img
            src="/assets/images/service_banner1.png"
            alt="Background Card"
            className="bg-image"
          />

          {/* Character – banner2 */}
          <img
            src="/assets/images/service_banner2.png"
            alt="Character Illustration"
            className="front-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;