import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdddoXbfO6KILbGA-t2W38vlI-sXMl9So",
  authDomain: "ecommerce-store-dd781.firebaseapp.com",
  projectId: "ecommerce-store-dd781",
  storageBucket: "ecommerce-store-dd781.firebasestorage.app",
  messagingSenderId: "102084321489",
  appId: "1:102084321489:web:102ab5bcab4dc1628c25f0",
  measurementId: "G-2CPDW88XL1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
