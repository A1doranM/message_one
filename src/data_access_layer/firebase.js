// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getFirestore,} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKBaXzvchVcv-Tztu1rDsxjNT-slMES5s",
    authDomain: "message-one-9290b.firebaseapp.com",
    projectId: "message-one-9290b",
    storageBucket: "message-one-9290b.appspot.com",
    messagingSenderId: "771787583189",
    appId: "1:771787583189:web:851e9fdc22f5bbc95a7c5c",
    measurementId: "G-6RVF5C87DH"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {auth, provider};
export default db;