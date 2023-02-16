import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAn5bjIOOYXaYlWwwDUUXvgOx941zHLvas",
  authDomain: "maltimart-e685f.firebaseapp.com",
  projectId: "maltimart-e685f",
  storageBucket: "maltimart-e685f.appspot.com",
  messagingSenderId: "119797748045",
  appId: "1:119797748045:web:9fcc19e354198ef827e704",
};

// Initialize Firebase (34:39)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
