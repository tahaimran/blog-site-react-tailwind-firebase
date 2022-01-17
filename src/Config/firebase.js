import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA2UlzWeevZVf6D4lSRCZcC9gIpMhURAP0",
    authDomain: "fir-react-blog-6ebe7.firebaseapp.com",
    projectId: "fir-react-blog-6ebe7",
    storageBucket: "fir-react-blog-6ebe7.appspot.com",
    messagingSenderId: "630404355677",
    appId: "1:630404355677:web:b9e31195b7d4ca3e655fb4",
    measurementId: "G-TLJBYYFJ6B"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);