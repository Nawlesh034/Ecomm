import React from "react";
import { Play } from "lucide-react";

export default function VideoBanner() {
  return (
    <div className="relative mx-4 sm:mx-8 lg:mx-20 xl:mx-28 rounded-2xl overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
        alt="Video Banner"
        className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
      />

      {/* Overlay Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition">
          <Play size={24} className="text-red-500 ml-0.5 sm:ml-1" fill="red" />
        </button>
      </div>
    </div>
  );
}
