import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC18crdN4_bl8WB4O1dAFqqWPGAPraurRg",
  authDomain: "ignian.firebaseapp.com",
  projectId: "ignian",
  storageBucket: "ignian.appspot.com",
  messagingSenderId: "632292873047",
  appId: "1:632292873047:web:c880faac9b14857e81a412",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
