// src/pages/Shirts.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Shirts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchShirtProducts = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('category', '==', 'Shirts')
        );
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.error('Error fetching shirts:', error);
      }
    };

    fetchShirtProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">👔 Shirts Collection</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No shirts available right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt="Product"
                className="w-full h-80 object-cover rounded mb-3"
              />
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shirts;
