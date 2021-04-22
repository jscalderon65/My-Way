import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBmk-qD50wyUVEsDVjjKuAqtlzrBqzgUoE",
    authDomain: "my-way-e0196.firebaseapp.com",
    databaseURL: "https://my-way-e0196.firebaseio.com",
    projectId: "my-way-e0196",
    storageBucket: "my-way-e0196.appspot.com",
    messagingSenderId: "62012419339",
    appId: "1:62012419339:web:3b432c2b3f4be6eee3060e",
    measurementId: "G-WQKQ7J6GN0"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {firebase, db};