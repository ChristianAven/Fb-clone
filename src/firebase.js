import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAJnjkoNzdNS_I6lfDSnnO3XMGwCiKdsgg",
    authDomain: "facebook-clone-958ba.firebaseapp.com",
    projectId: "facebook-clone-958ba",
    storageBucket: "facebook-clone-958ba.appspot.com",
    messagingSenderId: "297632662777",
    appId: "1:297632662777:web:6736428a7c662ef32c4e28",
    measurementId: "G-W4KR74ZSCH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;