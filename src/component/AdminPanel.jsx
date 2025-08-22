import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    description: ''
  });

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://ecomm-backend-9ygz.onrender.com/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ecomm-backend-9ygz.onrender.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newProduct,
          price: parseFloat(newProduct.price)
        }),
      });
      
      if (response.ok) {
        const addedProduct = await response.json();
        setProducts([...products, addedProduct]);
        setNewProduct({ name: '', category: '', price: '', image: '', description: '' });
        setShowAddForm(false);
        alert('Product added successfully!');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    }
  };

  // Update product
  const handleUpdateProduct = async (id, updatedData) => {
    try {
      const response = await fetch(`https://ecomm-backend-9ygz.onrender.com/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...updatedData,
          price: parseFloat(updatedData.price)
        }),
      });
      
      if (response.ok) {
        const updatedProduct = await response.json();
        setProducts(products.map(p => p._id === id ? updatedProduct : p));
        setEditingProduct(null);
        alert('Product updated successfully!');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`https://ecomm-backend-9ygz.onrender.com/api/products/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setProducts(products.filter(p => p._id !== id));
          alert('Product deleted successfully!');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
      }
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <Plus size={16} />
              Add Product
            </button>
          </div>

          {/* Add Product Form */}
          {showAddForm && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-4">Add New Product</h3>
              <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                  className="border rounded px-3 py-2"
                />
                <textarea
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  className="border rounded px-3 py-2 col-span-2"
                  rows="3"
                />
                <div className="col-span-2 flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border-b">
                    <td className="px-4 py-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/64x64/cccccc/ffffff?text=No+Image';
                        }}
                      />
                    </td>
                    <td className="px-4 py-2">
                      {editingProduct === product._id ? (
                        <input
                          type="text"
                          defaultValue={product.name}
                          className="border rounded px-2 py-1 w-full"
                          onBlur={(e) => handleUpdateProduct(product._id, {...product, name: e.target.value})}
                        />
                      ) : (
                        product.name
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {editingProduct === product._id ? (
                        <input
                          type="text"
                          defaultValue={product.category}
                          className="border rounded px-2 py-1 w-full"
                          onBlur={(e) => handleUpdateProduct(product._id, {...product, category: e.target.value})}
                        />
                      ) : (
                        product.category
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {editingProduct === product._id ? (
                        <input
                          type="number"
                          defaultValue={product.price}
                          className="border rounded px-2 py-1 w-full"
                          onBlur={(e) => handleUpdateProduct(product._id, {...product, price: e.target.value})}
                        />
                      ) : (
                        `$${product.price}`
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        {editingProduct === product._id ? (
                          <button
                            onClick={() => setEditingProduct(null)}
                            className="text-green-600 hover:text-green-800"
                          >
                            <Save size={16} />
                          </button>
                        ) : (
                          <button
                            onClick={() => setEditingProduct(product._id)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit2 size={16} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
