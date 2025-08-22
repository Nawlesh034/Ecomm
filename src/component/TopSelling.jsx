import React, { useState, useEffect } from "react";
import { Star } from "lucide-react"; // star icon

export default function TopSelling() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://ecomm-backend-jkso.onrender.com/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="bg-gray-100  mx-28 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-pink-600 text-sm tracking-widest font-semibold">
            MOST SELLING ITEMS
          </p>
          <h2 className="text-2xl font-bold">
            Top selling Categories This Week
          </h2>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-full bg-pink-600 text-white text-sm">
            All Products
          </button>
          <button className="px-3 py-1 rounded-full bg-black text-white text-sm">
            Best Selling
          </button>
          <button className="px-3 py-1 rounded-full bg-black text-white text-sm">
            On Selling
          </button>
          <button className="px-3 py-1 rounded-full bg-black text-white text-sm">
            Top Rating
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-600">Loading products...</div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex justify-center items-center py-8">
          <div className="text-red-600">Error: {error}</div>
        </div>
      )}

      {/* Products Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.slice(0, 8).map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200/cccccc/ffffff?text=No+Image';
                  }}
                />
                <p className="text-pink-600 font-bold mt-2">${product.price}</p>
                <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <div className="flex mt-1 text-yellow-500">
                  {Array.from({ length: product.rating || 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-600">
              No products found
            </div>
          )}
        </div>
      )}
    </section>
  );
}
