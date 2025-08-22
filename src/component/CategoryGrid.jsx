import React from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Men", img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg" },
  { name: "Kids", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" },
  { name: "Pants", img: "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg" },
  { name: "Men", img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" },
  { name: "Women", img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" },
  { name: "Jeans", img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg" },
  { name: "Sweater", img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg" },
  { name: "Shoe", img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
];

const CategoryGrid = () => {
  return (
    <div className="px-4 sm:px-10 md:mx-28 py-6 sm:py-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white rounded-full shadow-sm border border-gray-100 p-2 pr-3 sm:pr-4 hover:shadow-md transition cursor-pointer group"
          >
            {/* Left side - Circular Image + Name */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-100"
              />
              <span className="font-medium text-gray-800 text-xs sm:text-sm">
                {cat.name}
              </span>
            </div>

            {/* Right side - Arrow */}
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition">
              <ChevronRight className="text-pink-500 w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
