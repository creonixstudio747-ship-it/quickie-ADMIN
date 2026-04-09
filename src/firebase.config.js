import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwNtWqhOxn0dKWbbAQDSTzfvD7sZ4tBtc",
  authDomain: "quickie-delivery-app.firebaseapp.com",
  databaseURL: "https://quickie-delivery-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quickie-delivery-app",
  storageBucket: "quickie-delivery-app.firebasestorage.app",
  messagingSenderId: "580927020728",
  appId: "1:580927020728:web:5f960ea5b1edc7c62ade4d",
  measurementId: "G-QCN9MN3CYB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
