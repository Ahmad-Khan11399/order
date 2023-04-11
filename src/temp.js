// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMCttTw60oZplUMve071KIdviQLsE--6o",
  authDomain: "skii-assignment.firebaseapp.com",
  projectId: "skii-assignment",
  storageBucket: "skii-assignment.appspot.com",
  messagingSenderId: "13368828150",
  appId: "1:13368828150:web:a9d3d8e3baa71a95d74cd7",
  measurementId: "G-PL60YY77QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
