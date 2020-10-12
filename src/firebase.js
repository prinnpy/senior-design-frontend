import * as firebase from "firebase";
import "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5erpfmU0cnflYMkw0j291vXGf5GSS8hg",
    authDomain: "api-builder-71719.firebaseapp.com",
    databaseURL: "https://api-builder-71719.firebaseio.com",
    projectId: "api-builder-71719",
    storageBucket: "api-builder-71719.appspot.com",
    messagingSenderId: "335460859453",
    appId: "1:335460859453:web:3fce84827476a4c1987454",
    measurementId: "G-KNT28M5Z58"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();