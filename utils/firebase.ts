// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8EzoAPxboxv8Sb8CQCQ_CwhU-cC9sx2s",
  authDomain: "prestany-e9c71.firebaseapp.com",
  projectId: "prestany-e9c71",
  storageBucket: "prestany-e9c71.appspot.com",
  messagingSenderId: "27014632331",
  appId: "1:27014632331:web:b9ad332d067473032c958e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

