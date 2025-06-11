import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDI9r6htJkhDgDRleTHFU98eHL4bmF5_1U",
  authDomain: "gardengrowgame.firebaseapp.com",
  projectId: "gardengrowgame",
  storageBucket: "gardengrowgame.appspot.com",
  messagingSenderId: "783159654950",
  appId: "1:783159654950:web:347771d162e21bd2b584e7",
  measurementId: "G-E6PPW8K3HN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
