import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config

const firebaseConfig = {
    apiKey: "AIzaSyAX_OLa2WT60zV_Ev_OLbqsfecuTd_vhVA",
    authDomain: "lets-chat-615a0.firebaseapp.com",
    projectId: "lets-chat-615a0",
    storageBucket: "lets-chat-615a0.appspot.com",
    messagingSenderId: "756266082763",
    appId: "1:756266082763:web:514445e199cc022cdbd64e",
    measurementId: "G-KP14TKW8Z9"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;