import { initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCGsBFkRvusFfUB2mReK1GQmmDcd2yV6QE",
  authDomain: "noteapp-bc7a7.firebaseapp.com",
  projectId: "noteapp-bc7a7",
  storageBucket: "noteapp-bc7a7.appspot.com",
  messagingSenderId: "173030455611",
  appId: "1:173030455611:web:7aa498065676a4cf7bdf1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);