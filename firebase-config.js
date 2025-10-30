// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA94U05B6YxILn1bQ4K4dMcZf2cYfN_OHw",
  authDomain: "khongorzulnews.firebaseapp.com",
  projectId: "khongorzulnews",
  storageBucket: "khongorzulnews.firebasestorage.app",
  messagingSenderId: "672558083185",
  appId: "1:672558083185:web:cb264df4102c2013ccffd0",
  measurementId: "G-Q4RRR6KH65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Function to add a new news item to Firestore
export async function addNews(news) {
  try {
    const docRef = await addDoc(collection(db, "news"), {
      title: news.title,
      description: news.description,
      imageUrl: news.imageUrl,
      date: new Date(),
    });
    console.log("News added with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding news: ", e);
  }
}
