import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNKFBePjlBgzCfzJbVMhKj2WVO9A3cjM0",
  authDomain: "galaxyblog-9cf38.firebaseapp.com",
  projectId: "galaxyblog-9cf38",
  storageBucket: "galaxyblog-9cf38.appspot.com",
  messagingSenderId: "294840898857",
  appId: "1:294840898857:web:0de3acb092006f20a05338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };