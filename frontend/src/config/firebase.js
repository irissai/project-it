import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_fEpGR83CLeYOzn-UiVQcfipx-wtMQZY",
  authDomain: "project-it-410215.firebaseapp.com",
  databaseURL: "https://project-it-410215-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-it-410215",
  storageBucket: "project-it-410215.appspot.com",
  messagingSenderId: "466628742236",
  appId: "1:466628742236:web:be9892ea1c5f5b2ec12a99",
  measurementId: "G-X6JJL1HF6W"
};

// สร้าง Firebase App โดยใช้ initializeApp และ Firebase config
const app = initializeApp(firebaseConfig);

// สร้าง Firebase Storage โดยใช้ Firebase App ที่สร้างขึ้น
const storage = getStorage(app);

export { storage };
