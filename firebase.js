// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrPFMoHgwDJoquaoHpfL5Dee9NRRuo32c",
  authDomain: "inventory-management-ae3f3.firebaseapp.com",
  projectId: "inventory-management-ae3f3",
  storageBucket: "inventory-management-ae3f3.appspot.com",
  messagingSenderId: "431781097578",
  appId: "1:431781097578:web:5160761729bfae511b1a13",
  measurementId: "G-299XB2SXEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}