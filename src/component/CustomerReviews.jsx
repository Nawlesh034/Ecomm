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
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-pink-500 font-semibold uppercase tracking-wide text-xs sm:text-sm">
          Customer Reviews
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          Product Reviews
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Our references are very valuable, the result of a great effort...
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-md sm:shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 relative flex flex-col justify-between"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-base sm:text-lg ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm sm:text-base flex-grow">
              {review.review}
            </p>

            {/* User Info */}
            <div className="flex items-center mt-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div className="ml-3">
                <h4 className="font-bold text-sm sm:text-base">
                  {review.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {review.role}
                </p>
              </div>
              <FaQuoteRight className="text-pink-500 text-lg sm:text-2xl ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
