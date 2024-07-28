// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyApNEQfaN3Y0ucsv_S_Bdo_2zjYjwUZbhc",
    authDomain: "tatoo-app-8aeba.firebaseapp.com",
    projectId: "tatoo-app-8aeba",
    storageBucket: "tatoo-app-8aeba.appspot.com",
    messagingSenderId: "704389370334",
    appId: "1:704389370334:web:1cdacd816e880323894d4f",
    measurementId: "G-130KWYTX20"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);
export { app, auth, db, storage ,database};
