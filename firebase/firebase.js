import { initializeApp } from "firebase/app";
 
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDhmhE-uUH5z14cP9YPssQzDIS-cXzTCc",
  authDomain: "fir-chat-app-d8d9c.firebaseapp.com",
  projectId: "fir-chat-app-d8d9c",
  storageBucket: "fir-chat-app-d8d9c.appspot.com",
  messagingSenderId: "822242191881",
  appId: "1:822242191881:web:6b1d688a93a1e87b8ba6d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);