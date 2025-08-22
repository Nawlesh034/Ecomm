import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Esther Howard",
    role: "Nursing Assistant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    review:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisi at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    review:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisi at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisi at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
  {
    id: 4,
    name: "Esther Howard",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
    review:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisi at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
];

export default function CustomerReviews() {
  return (
    <section className=" px-4 py-6  bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-pink-500 font-semibold uppercase tracking-wide">
          Customer Reviews
        </p>
        <h2 className="text-3xl font-bold mt-2">Product Reviews</h2>
        <p className="text-gray-500 mt-2">
          Our references are very valuable, the result of a great effort...
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-2xl p-6 relative flex flex-col justify-between"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm flex-grow">{review.review}</p>

            {/* User Info */}
            <div className="flex items-center mt-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-3">
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
              <FaQuoteRight className="text-pink-500 text-2xl ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
