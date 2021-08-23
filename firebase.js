import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1FyRNfhf0veqypBrBDxhfxEAFKhqdL8k",
  authDomain: "disneyclone-37438.firebaseapp.com",
  projectId: "disneyclone-37438",
  storageBucket: "disneyclone-37438.appspot.com",
  messagingSenderId: "932523049633",
  appId: "1:932523049633:web:c2e08d2209a4c18e4026e0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export { db };
  