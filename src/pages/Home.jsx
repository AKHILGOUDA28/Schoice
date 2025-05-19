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
      limit(50)
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
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to <span className="text-blue-700">Schoice</span> – Discover the Smartest Choices Online!
      </h1>

      <p className="text-center text-gray-600 mb-4">
        At <strong>Schoice</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
            <img
              src={product.image}
              alt="Product"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 truncate">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded">
                {product.category}
              </span>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-8 text-sm text-gray-500">
        💡 Powered by <strong>Schoice</strong> – Your go-to affiliate marketplace.
      </p>
    </div>
  );
};

export default Home;
