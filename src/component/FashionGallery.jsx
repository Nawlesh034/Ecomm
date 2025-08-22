import React from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=600",
    shape: "circle",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1345081/pexels-photo-1345081.jpeg?auto=compress&cs=tinysrgb&w=600",
    shape: "rounded",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/7679726/pexels-photo-7679726.jpeg?auto=compress&cs=tinysrgb&w=600",
    shape: "circle",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
    shape: "rounded",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600",
    shape: "circle",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/6311654/pexels-photo-6311654.jpeg?auto=compress&cs=tinysrgb&w=600",
    shape: "rounded",
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
    shape: "circle",
  },
];

export default function FashionGallery() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
        {images.map((img) => (
          <div
            key={img.id}
            className={`w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 overflow-hidden shadow-md ${
              img.shape === "circle" ? "rounded-full" : "rounded-2xl sm:rounded-3xl"
            }`}
          >
            <img
              src={img.url}
              alt="Fashion"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
