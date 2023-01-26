import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCuFXYYPlfwuYwnQ2d0ESwQgwYW-q0A5VE",
    authDomain: "clone-290d0.firebaseapp.com",
    projectId: "clone-290d0",
    storageBucket: "clone-290d0.appspot.com",
    messagingSenderId: "428026409357",
    appId: "1:428026409357:web:fe14b6e12cb8428ee90dc4",
    measurementId: "G-NPTF6WXV9B"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };