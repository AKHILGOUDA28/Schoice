// src/pages/AdminPanel.jsx
import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const AdminPanel = () => {
  const [product, setProduct] = useState({
    image: '',
    link: '',
    category: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !product.image ||
      !product.link ||
      !product.category
    ) {
      setMessage('❌ Please fill all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'products'), {
        ...product,
        createdAt: Timestamp.now(),
      });
      setMessage('✅ Product uploaded successfully!');
      setProduct({
        image: '',
        link: '',
        category: '',
      });
    } catch (error) {
      console.error('Error uploading product:', error);
      setMessage('❌ Failed to upload product.');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">🛠️ Admin Panel - Upload Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <input
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          name="link"
          placeholder="Product URL (Buy Now)"
          value={product.link}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Shirts">Shirts</option>
          <option value="Jeans">Jeans</option>
          <option value="Electronics">Electronics</option>
          <option value="WomenWear">WomenWear</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Upload Product
        </button>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default AdminPanel;
