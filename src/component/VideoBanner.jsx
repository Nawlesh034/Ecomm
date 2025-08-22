import React from "react";
import { Play } from "lucide-react";

export default function VideoBanner() {
  return (
    <div className="relative  mx-28  rounded-2xl overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" 
        alt="Video Banner"
        className="w-full h-80 object-cover"
      />

      {/* Overlay Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-105 transition">
          <Play size={30} fill="red" className="text-red-500 ml-1" />
        </button>
      </div>
    </div>
  );
}
