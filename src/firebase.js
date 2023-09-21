import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8babuBxKboYBzwxg1EB5vrlvMmVHO4iA",
  authDomain: "image-gallery-dc38b.firebaseapp.com",
  projectId: "image-gallery-dc38b",
  storageBucket: "image-gallery-dc38b.appspot.com",
  messagingSenderId: "1007991337480",
  appId: "1:1007991337480:web:4c1ee5a444536503b8d7bd",
  measurementId: "G-KZNNDKT5C3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
