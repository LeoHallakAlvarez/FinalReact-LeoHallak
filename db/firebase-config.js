import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2_3XP7QROM6KZ4MXwr8VnfBKVvZdhL-I",
  authDomain: "proyectoreactkempel.firebaseapp.com",
  projectId: "proyectoreactkempel",
  storageBucket: "proyectoreactkempel.appspot.com",
  messagingSenderId: "1093975734578",
  appId: "1:1093975734578:web:77cf38b8cc742ad51d3f2b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);