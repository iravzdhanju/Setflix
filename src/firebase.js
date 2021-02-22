import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDbiHAz0kf4_kAQ0ipGBHrp8AzsuXi2p2w",
  authDomain: "setflix-e997f.firebaseapp.com",
  projectId: "setflix-e997f",
  storageBucket: "setflix-e997f.appspot.com",
  messagingSenderId: "1029315627569",
  appId: "1:1029315627569:web:a519fe797128b5b2306310",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
