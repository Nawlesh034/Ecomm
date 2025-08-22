import React from "react";

const DiscountBanner = () => {
  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-white flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 px-4 sm:px-8 py-6 sm:py-8 md:mx-28 h-auto sm:h-32">
      
      {/* Left Content */}
      <div className="flex-1 space-y-2 sm:space-y-3 text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <span className="bg-white/25 text-[10px] sm:text-xs uppercase px-2 sm:px-3 py-1 rounded-full tracking-wide font-semibold">
            TRENDING PRODUCTS
          </span>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug sm:leading-tight">
          Get <span className="text-yellow-200">30% Discount</span> On All Hudis!
        </h2>
        
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
          <span className="flex items-center">✓ ZARA</span>
          <span className="flex items-center">✓ GUCCI</span>
          <span className="flex items-center">✓ PUBLIO</span>
          <span className="flex items-center">✓ MEN'S</span>
          <span className="flex items-center">✓ WOMEN'S</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0 relative">
        <img
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Fashion Model"
          className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-4 border-white/30"
        />
      </div>
      
      {/* Right Button */}
      <div className="flex-shrink-0">
        <button className="bg-white/20 backdrop-blur-sm border border-white/40 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/30 transition flex items-center gap-1.5 sm:gap-2">
          CHECK DISCOUNT
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
