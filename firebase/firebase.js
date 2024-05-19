// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getMessaging } from "firebase/messaging";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDkjCiCOkvCZGaIV9lVqd9zOYqFZhdvVms",
  authDomain: "driversonline-ge.firebaseapp.com",
  projectId: "driversonline-ge",
  storageBucket: "driversonline-ge.appspot.com",
  messagingSenderId: "816707320377",
  appId: "1:816707320377:web:b749f63e1467e21ff22be8",
  measurementId: "G-6E6GSQF4G4"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);  
export const fireStore = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
// export const messaging = getMessaging(app);


