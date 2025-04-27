// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVyFJyNKYzKLjjoNa6sb8IkZRjWcxKS3E",
  authDomain: "info-442-1ecfa.firebaseapp.com",
  databaseURL: "https://info-442-1ecfa-default-rtdb.firebaseio.com",
  projectId: "info-442-1ecfa",
  storageBucket: "info-442-1ecfa.firebasestorage.app",
  messagingSenderId: "155372170129",
  appId: "1:155372170129:web:354f8adbfb5b8d0e0c8830",
  measurementId: "G-G4ZPFVCC24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export { auth };