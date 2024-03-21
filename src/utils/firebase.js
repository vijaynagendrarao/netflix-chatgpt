// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDBoa1oLy0T29d0bSaYBZYb65l1d3jWdI",
    authDomain: "netflixgpt-71cbd.firebaseapp.com",
    projectId: "netflixgpt-71cbd",
    storageBucket: "netflixgpt-71cbd.appspot.com",
    messagingSenderId: "403467821485",
    appId: "1:403467821485:web:09ab9f5405ef4d530b8124",
    measurementId: "G-NC83CVV128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
