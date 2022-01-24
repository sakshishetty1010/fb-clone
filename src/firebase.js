// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDy5WkYd2d7VUelcEiaU7Kop4uOBL8r9hc",
    authDomain: "facebook-clone-3a9fb.firebaseapp.com",
    projectId: "facebook-clone-3a9fb",
    storageBucket: "facebook-clone-3a9fb.appspot.com",
    messagingSenderId: "660598990784",
    appId: "1:660598990784:web:b12abc9101092c8d4f4a25",
    measurementId: "${config.measurementId}"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;