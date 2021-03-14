import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBHrag1wN1DCNWMObsljGr4bF4yH0k21oQ",
  authDomain: "whatsupp-web.firebaseapp.com",
  projectId: "whatsupp-web",
  storageBucket: "whatsupp-web.appspot.com",
  messagingSenderId: "704776331346",
  appId: "1:704776331346:web:39676af3f04785c6e5ff8b",
  measurementId: "G-5K586KV4FZ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
