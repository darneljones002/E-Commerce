import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrx6YRnECLoBO-QeyEXU2Sql4zzMYhNFs",
  authDomain: "e-commerce-203c7.firebaseapp.com",
  projectId: "e-commerce-203c7",
  storageBucket: "e-commerce-203c7.firebasestorage.app",
  messagingSenderId: "523813610293",
  appId: "1:523813610293:web:088fc8b800c67d7c74627c",
  measurementId: "G-0Z6XCL0SY3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
