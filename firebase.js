import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA2fG7CSosCz-LaaxYMw6_LDoL42Ug6q1Q",
  authDomain: "facebook-clone-d6f88.firebaseapp.com",
  projectId: "facebook-clone-d6f88",
  storageBucket: "facebook-clone-d6f88.appspot.com",
  messagingSenderId: "797104138736",
  appId: "1:797104138736:web:2b87af39a0bd4500709535"
};

const app = initializeApp(firebaseConfig)
const storage = getStorage(app);
const db = getFirestore()


export { app, db, storage }