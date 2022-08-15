import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaPU2bSWJzesZ7X-vbt-n-YbyiORcrJgY",
  authDomain: "auth-7feb5.firebaseapp.com",
  projectId: "auth-7feb5",
  storageBucket: "auth-7feb5.appspot.com",
  messagingSenderId: "246264899050",
  appId: "1:246264899050:web:acc024e8fb14f0b452fe93",
  measurementId: "G-8F5K6VFX0H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);