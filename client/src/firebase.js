// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Configuration de Firebase avec des variables d'environnement
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-test-b5af1.firebaseapp.com",
  projectId: "blog-test-b5af1",
  storageBucket: "blog-test-b5af1.appspot.com",
  messagingSenderId: "951991948046",
  appId: "1:951991948046:web:59e2f04bf3582501ae3d5f",
  measurementId: "G-DCTWHGDTTE",
};

// Initialiser Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
