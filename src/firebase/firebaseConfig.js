import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-Kt_EaUYUpBAks-Dzll4nKtZaEZX-LsM",
  authDomain: "fir-authuntication-487d0.firebaseapp.com",
  databaseURL: "https://fir-authuntication-487d0-default-rtdb.firebaseio.com",
  projectId: "fir-authuntication-487d0",
  storageBucket: "fir-authuntication-487d0.firebasestorage.app",
  messagingSenderId: "472152628124",
  appId: "1:472152628124:web:982f3ddd08830747aec659"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); // Google Auth Provider
export default app;

