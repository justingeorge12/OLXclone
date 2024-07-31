
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPISJrNgl1MIbXWbOlXPLTWGNQCcnR1-s",
    authDomain: "olx-9a025.firebaseapp.com",
    projectId: "olx-9a025",
    storageBucket: "olx-9a025.appspot.com",
    messagingSenderId: "240629427602",
    appId: "1:240629427602:web:29c8c6ab1f577b89e2e54b",
    measurementId: "G-V0JNR3C2V2"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and Firestore
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  
  export { firebaseApp, auth, firestore };
  