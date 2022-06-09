// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS58_rNAZti1p7IRBmgSC51xmh4fc14mQ",
    authDomain: "courses-b1ad1.firebaseapp.com",
    projectId: "courses-b1ad1",
    storageBucket: "courses-b1ad1.appspot.com",
    messagingSenderId: "545239626621",
    appId: "1:545239626621:web:3e2e1fff6deb131b621214"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;