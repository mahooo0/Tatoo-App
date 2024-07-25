// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApNEQfaN3Y0ucsv_S_Bdo_2zjYjwUZbhc",
  authDomain: "tatoo-app-8aeba.firebaseapp.com",
  projectId: "tatoo-app-8aeba",
  storageBucket: "tatoo-app-8aeba.appspot.com",
  messagingSenderId: "704389370334",
  appId: "1:704389370334:web:1cdacd816e880323894d4f",
  measurementId: "G-130KWYTX20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };