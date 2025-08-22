import React, { useState, useEffect } from "react";

const FlashSale = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ecomm-backend-9ygz.onrender.com/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to static data if API fails
        setProducts([
          {
            _id: 1,
            name: "Fashion Item",
            category: "FASHION BAG",
            price: 99,
            image: "https://images.pexels.com/photos/634754/pexels-photo-634754.jpeg"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-pink-50 rounded-3xl p-8 md:p-12 relative overflow-visible mx-28">
      {/* Header */}
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-6 relative z-10">
        <div>
          <p className="text-pink-500 font-semibold uppercase tracking-wide">
            New Collection
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Trending Flash Sell
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="flex gap-4">
          {["15 Days", "23 Hours", "45 Min", "40 Sec"].map((item, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-md text-sm font-semibold text-gray-900"
            >
              <span>{item.split(" ")[0]}</span>
              <span className="text-xs text-gray-500">{item.split(" ")[1]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="mt-8 flex justify-center items-center py-12">
          <div className="text-gray-600">Loading flash sale products...</div>
        </div>
      )}

      {/* Product Cards - peeking outside */}
      {!loading && (
        <div className="mt-8 flex gap-6 mx-36 relative z-20 overflow-x-auto">
          {products.slice(0, 5).map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md w-56 flex-shrink-0 relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-xl"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/224x256/cccccc/ffffff?text=No+Image';
                }}
              />
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                25% Off
              </div>
              <div className="p-4">
                <p className="text-lg font-bold">${product.price}</p>
                <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                <p className="text-pink-500 text-sm uppercase font-semibold">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Right Side Pink Section */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-500 rounded-l-3xl hidden md:block z-0"></div>

      {/* Button */}
      <div className="absolute top-8 right-8 hidden md:block z-10">
        <button className="bg-white text-pink-500 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2">
          View All Collection →
        </button>
      </div>
    </section>
  );
};

export default FlashSale;
