import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIXGYIKfPDZgBvrt7AV_o6zjUd_IglVzc",
  authDomain: "apigen-4d56d.firebaseapp.com",
  projectId: "apigen-4d56d",
  storageBucket: "apigen-4d56d.appspot.com",
  messagingSenderId: "950098139390",
  appId: "1:950098139390:web:c2ee500d026f3cb84cadaf",
  measurementId: "G-R30JMSJ4Q3",
});

const db = firebaseApp.firestore();

export default db;
