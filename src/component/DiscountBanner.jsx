import React from "react";

const DiscountBanner = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-white flex items-center justify-between px-8 py-8 mx-28 h-32">
      
      {/* Left Content */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="bg-white/25 text-xs uppercase px-3 py-1 rounded-full tracking-wide font-semibold">
            TRENDING PRODUCTS
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Get <span className="text-yellow-200">30% Discount</span> On All Hudis!
        </h2>
        
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <span className="flex items-center">✓ ZARA</span>
          <span className="flex items-center">✓ GUCCI</span>
          <span className="flex items-center">✓ PUBLIO</span>
          <span className="flex items-center">✓ MEN'S</span>
          <span className="flex items-center">✓ WOMEN'S</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0 relative h-full">
        <img
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" 
          alt="Fashion Model"
          className="h-24 w-24 rounded-full object-cover border-4 border-white/30"
        />
      </div>
      
      {/* Right Button */}
      <div className="flex-shrink-0 ml-6">
        <button className="bg-white/20 backdrop-blur-sm border border-white/40 px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition flex items-center gap-2">
          CHECK DISCOUNT
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
