// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'products'),
      orderBy('createdAt', 'desc'),
      limit(15)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productData);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Latest 15 Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt="Product"
              className="w-full h-80 object-cover rounded"
            />
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">
                {product.category}
              </span>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
