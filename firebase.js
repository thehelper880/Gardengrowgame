import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "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",
  authDomain: "gardengrowgame.firebaseapp.com",
  projectId: "gardengrowgame",
  storageBucket: "gardengrowgame.appspot.com",
  messagingSenderId: "783159654950",
  appId: "1:783159654950:web:347771d162e21bd2b584e7",
  measurementId: "G-E6PPW8K3HN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
