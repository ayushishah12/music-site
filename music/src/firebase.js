// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUBzLACjaSO5aa_rolMM8GnYmst1jnme4",
  authDomain: "soundscape-69144.firebaseapp.com",
  projectId: "soundscape-69144",
  storageBucket: "soundscape-69144.firebasestorage.app",
  messagingSenderId: "711381343649",
  appId: "1:711381343649:web:2ce5dfbef81724afa5bfe0",
  measurementId: "G-D2SHBYW0Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;