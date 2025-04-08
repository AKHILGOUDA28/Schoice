// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYcRouxt6IDe8FuvfGc3hSS-cGbuKZxM",
  authDomain: "affiliate-store-17ee1.firebaseapp.com",
  projectId: "affiliate-store-17ee1",
  storageBucket: "affiliate-store-17ee1.appspot.com",
  messagingSenderId: "360254536868",
  appId: "1:360254536868:web:b698dde7f9c9b669a9fa31",
  measurementId: "G-VKJK9BTWKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Optional: Initialize Analytics only if supported
let analytics = null;
isAnalyticsSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { app, db, auth, analytics };
