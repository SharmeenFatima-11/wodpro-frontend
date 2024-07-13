// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEwtJ8en6KBWdcQnKC3k0j0AW8lH5pCjg",
  authDomain: "wod-pro-league.firebaseapp.com",
  projectId: "wod-pro-league",
  storageBucket: "wod-pro-league.appspot.com",
  messagingSenderId: "464406792772",
  appId: "1:464406792772:web:6e2edc9333a761b5ac8a11",
  measurementId: "G-W40X0L8YWF"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase
