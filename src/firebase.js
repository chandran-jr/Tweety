
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBR1oJhcX9sumG6ytShtvIKzYXdMYFzg-8",
    authDomain: "tweety-e5e48.firebaseapp.com",
    projectId: "tweety-e5e48",
    storageBucket: "tweety-e5e48.appspot.com",
    messagingSenderId: "803754162193",
    appId: "1:803754162193:web:0d5a4c962f9145fc5159b0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;



  