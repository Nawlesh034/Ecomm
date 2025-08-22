import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mx-28 py-6 relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
            {/* Main Slide - Left */}
            <div className="lg:col-span-2 bg-gray-100 rounded-2xl flex items-center relative overflow-hidden">
              <div className="w-1/2 p-8 space-y-4 z-10">
                <p className="text-pink-500 text-sm uppercase tracking-wide font-medium">
                  Perfect for Summer Evenings
                </p>
                <h2 className="text-4xl font-bold leading-tight text-black">
                  Casual and Stylish for<br />All Seasons
                </h2>
                <p className="text-gray-700 text-lg">
                  Starting From{" "}
                  <span className="text-pink-600 font-bold text-2xl">
                    $129
                  </span>
                </p>
                <button className="mt-6 px-8 py-3 border-2 border-black rounded-full flex items-center space-x-3 hover:bg-black hover:text-white transition font-medium">
                  <span>SHOP NOW</span>
                  <span>→</span>
                </button>
              </div>
              <div className="w-1/2 h-full absolute right-0 top-0">
                <img
                  src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Fashion Model"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Side Slides - Right */}
            <div className="space-y-6">
              {/* Yellow Slide */}
              <div className="bg-yellow-100 rounded-2xl h-[240px] flex items-center relative overflow-hidden">
                <div className="w-1/2 p-4 z-10">
                  <p className="text-yellow-600 text-xs uppercase tracking-wide font-medium">
                    Trending Now
                  </p>
                  <h3 className="text-lg font-bold text-black mt-2">
                    Bright & Bold
                  </h3>
                  <p className="text-yellow-700 text-sm mt-1">
                    From $99
                  </p>
                </div>
                <div className="w-1/2 h-full absolute right-0 top-0">
                  <img
                    src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Yellow Fashion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Orange Slide */}
              <div className="bg-orange-100 rounded-2xl h-[240px] flex items-center relative overflow-hidden">
                <div className="w-1/2 p-4 z-10">
                  <p className="text-orange-600 text-xs uppercase tracking-wide font-medium">
                    New Arrival
                  </p>
                  <h3 className="text-lg font-bold text-black mt-2">
                    Autumn Vibes
                  </h3>
                  <p className="text-orange-700 text-sm mt-1">
                    From $149
                  </p>
                </div>
                <div className="w-1/2 h-full absolute right-0 top-0">
                  <img
                    src="https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Orange Fashion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows - Positioned exactly as in design */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-white rounded-lg shadow-lg p-1">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="block p-2 hover:bg-gray-100 rounded transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="h-px bg-gray-200 mx-2"></div>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="block p-2 hover:bg-gray-100 rounded transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
