// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyMrun0yZBTrNtOdoHPbqXI0BOzthEV00",
  authDomain: "magictouch-98c4b.firebaseapp.com",
  projectId: "magictouch-98c4b",
  storageBucket: "magictouch-98c4b.appspot.com",
  messagingSenderId: "708378262678",
  appId: "1:708378262678:web:7aae2351c4d66a357456b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);