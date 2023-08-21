import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9zIDevoJysX5lXm0VauRxT0fZb37AGYI",
  authDomain: "libreria-2a6a0.firebaseapp.com",
  projectId: "libreria-2a6a0",
  storageBucket: "libreria-2a6a0.appspot.com",
  messagingSenderId: "727083417997",
  appId: "1:727083417997:web:c2b87f11449e254a23fdc4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);