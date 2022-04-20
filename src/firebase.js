// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNj1Ke1frXf-uRlbARVMsGPAsTfn_gCmY",
  authDomain: "ecommerce-celulares.firebaseapp.com",
  projectId: "ecommerce-celulares",
  storageBucket: "ecommerce-celulares.appspot.com",
  messagingSenderId: "796395340380",
  appId: "1:796395340380:web:0e2790aac97f0caa7f1c99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;