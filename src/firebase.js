import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCJD350WwRkZV1_zUQRAcsL3tUDZg7JMcg",
  authDomain: "disney-clone-2df52.firebaseapp.com",
  projectId: "disney-clone-2df52",
  storageBucket: "disney-clone-2df52.appspot.com",
  messagingSenderId: "594311213323",
  appId: "1:594311213323:web:209c3300a51ded18f8720e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
