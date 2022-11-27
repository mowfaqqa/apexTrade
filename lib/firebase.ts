import { useState } from 'react';
// Import the functions you need from the SDKs you need
import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import 'firebase/auth'
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDi0QRZY1_96PDFKLJDxtagvWZxsOhG1ww",
  authDomain:"apextrade-project.firebaseapp.com",
  databaseURL: "https://apextrade-project-default-rtdb.firebaseio.com",
  projectId: "apextrade-project",
  storageBucket: "apextrade-project.appspot.com",
  messagingSenderId:  "542566459712",
  appId: "1:542566459712:web:201200c1149f48988972a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)

export const db = getFirestore(app)
export const auth = getAuth(app)
