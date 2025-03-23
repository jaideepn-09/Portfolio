import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCspTVRZbw9QK-TuuOdHYmJ7utqv2wBSA0",
  authDomain: "portfolio-web-e1a3f.firebaseapp.com",
  projectId: "portfolio-web-e1a3f",
  storageBucket: "portfolio-web-e1a3f.firebasestorage.app",
  messagingSenderId: "749656774360",
  appId: "1:749656774360:web:a387ecf86bba78bd5c29ad"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };