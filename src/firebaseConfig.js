import { initializeApp } from "firebase/app";
require("dotenv").config({ path: "./.env" });

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.SENDERID,
  appId: process.env.APPID,
};

const app = initializeApp(firebaseConfig);


