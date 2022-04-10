// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp_a_VIyVqIIW5oO7DrFf86ofbh_RfQkU",
  authDomain: "fir-auth-ae66e.firebaseapp.com",
  projectId: "fir-auth-ae66e",
  storageBucket: "fir-auth-ae66e.appspot.com",
  messagingSenderId: "538973721866",
  appId: "1:538973721866:web:ac5ad62b805dfcb4cfd6f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;