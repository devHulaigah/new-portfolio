// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCka02RRwRs7y3QM2yqnxyTFyESp-1Oxng",
  authDomain: "portfolio-projects-1b35e.firebaseapp.com",
  projectId: "portfolio-projects-1b35e",
  storageBucket: "portfolio-projects-1b35e.firebasestorage.app",
  messagingSenderId: "834900787253",
  appId: "1:834900787253:web:77ced909483ed4055ef17c",
  measurementId: "G-DH62GNZNY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);