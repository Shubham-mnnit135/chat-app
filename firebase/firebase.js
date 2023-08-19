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


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDoT8V_6x6G_8BLJJAMNE-fiGOAuf6leEw",
//   authDomain: "chat-app-ef5c7.firebaseapp.com",
//   projectId: "chat-app-ef5c7",
//   storageBucket: "chat-app-ef5c7.appspot.com",
//   messagingSenderId: "299273477661",
//   appId: "1:299273477661:web:16bf17c2bfc67ae25db0f4"
// };


// const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);