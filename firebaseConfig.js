import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQk5l18uNphmNvN-6qm4965mL-_9ubhJ8",
    authDomain: "newsletter-a0a25.firebaseapp.com",
    projectId: "newsletter-a0a25",
    storageBucket: "newsletter-a0a25.appspot.com",
    messagingSenderId: "542825783180",
    appId: "1:542825783180:web:5ce9a69830c131825b00a9"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { app, firestore };