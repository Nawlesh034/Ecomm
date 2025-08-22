import React from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "WOMEN'S COLLECTION",
    subtitle: "Up to 22% off Gimbals",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
  {
    id: 2,
    title: "MEN'S COLLECTIONS",
    subtitle: "Up to 22% off Gimbals",
    image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    id: 3,
    title: "KID'S COLLECTIONS",
    subtitle: "Up to 22% off Gimbals",
    image: "https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
];

export default function TrendingCollections() {
  return (
    <div className="grid grid-cols-1 mx-28 md:grid-cols-3 gap-6 py-10">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`${cat.bgColor} relative rounded-3xl overflow-hidden p-6 text-white h-48 flex flex-col justify-between`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${cat.bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-br')} opacity-85`}></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <span className="text-xs font-semibold bg-white/25 px-3 py-1 rounded-full backdrop-blur-sm">
              TRENDING PRODUCTS
            </span>
          </div>

          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-1">{cat.title}</h2>
            <p className="text-sm opacity-90 mb-3">{cat.subtitle}</p>
            <button className="flex items-center gap-1 text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition">
              COLLECTION <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Character Image - Positioned on right */}
          <div className="absolute bottom-0 right-0 w-24 h-32 z-20">
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover object-top rounded-tl-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
