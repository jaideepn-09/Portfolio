import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCspTVRZbw9QK-TuuOdHYmJ7utqv2wBSA0",
    authDomain: "portfolio-web-e1a3f.firebaseapp.com",
    projectId: "portfolio-web-e1a3f",
    storageBucket: "portfolio-web-e1a3f.firebasestorage.app",
    messagingSenderId: "749656774360",
    appId: "1:749656774360:web:a387ecf86bba78bd5c29ad"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };