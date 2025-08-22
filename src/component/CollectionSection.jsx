import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CollectionSection = () => {
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
        // Fallback to empty array if API fails
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-pink-50 rounded-2xl p-6 mx-28 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-pink-500 text-sm uppercase tracking-wide font-medium">
            SUMMER COLLECTION
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            Shopping Every Day
          </h2>
        </div>
        <button className="flex items-center gap-2 border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition text-gray-700 font-medium">
          MORE COLLECTION <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Trending Banners */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Top Pink Banner */}
          <div className="bg-gradient-to-b from-pink-400 to-pink-600 rounded-2xl text-white relative overflow-hidden h-64">
            {/* Background Model Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Fashion Model" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-pink-400/70 to-pink-600/70"></div>
            </div>
            
            {/* Text Content Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center relative z-10">
              <h3 className="text-white font-bold mb-3 leading-tight">
                Trending Now Only This Weekend!
              </h3>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition border border-white/30 text-sm mx-auto">
                SHOP NOW <ArrowRight size={14} />
              </button>
            </div>
          </div>
          
          {/* Bottom Pink Banner */}
          <div className="bg-gradient-to-b from-pink-400 to-pink-600 rounded-2xl text-white relative overflow-hidden h-64">
            {/* Background Model Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Fashion Model" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-pink-400/70 to-pink-600/70"></div>
            </div>
            
            {/* Text Content Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center relative z-10">
              <h3 className="text-white font-bold mb-3 leading-tight">
                Trending Now Only This Weekend!
              </h3>
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition border border-white/30 text-sm mx-auto">
                SHOP NOW <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Product Grid */}
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-gray-600">Loading products...</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.slice(0, 6).map((item) => (
                <div key={item._id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition relative">
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    25% OFF
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-56 object-cover rounded-t-2xl"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x224/f0f0f0/666666?text=No+Image';
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="text-lg font-bold text-gray-900">${item.price}</div>
                    <div className="text-sm font-semibold text-gray-800 mt-1">{item.name}</div>
                    <div className="text-xs text-pink-500 uppercase tracking-wider font-medium mt-1">
                      {item.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
