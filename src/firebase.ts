import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

let config = {
  apiKey: "AIzaSyChqz25SAOa58piLJJJ6XAU9Z-jzDOs68k",
  authDomain: "dcardfollowertrack.firebaseapp.com",
  databaseURL: "https://dcardfollowertrack-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dcardfollowertrack",
  storageBucket: "dcardfollowertrack.appspot.com",
  messagingSenderId: "53595794088",
  appId: "1:53595794088:web:7b4746acfbd70ecaa9b09d",
  measurementId: "G-9RYEVGL4N7",
};

firebase.initializeApp(config);

export default firebase.database();