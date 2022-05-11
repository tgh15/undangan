import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGmiclSNheVG37qN1BGarw3B7lpyF-co0",
  authDomain: "project-baru-157e0.firebaseapp.com",
  databaseURL: "https://project-baru-157e0.firebaseio.com",
  projectId: "project-baru-157e0",
  storageBucket: "project-baru-157e0.appspot.com",
  messagingSenderId: "780419695029",
  appId: "1:780419695029:web:797193d054b3b7550b19fc",
  measurementId: "G-RS1NWDM246",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
