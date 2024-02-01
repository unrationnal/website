// settings for firebase

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.PUBLIC_APIKEY,
    authDomain: import.meta.env.PUBLIC_AUTHDOMAIN,
    projectId: import.meta.env.PUBLIC_PROJECTID,
    storageBucket: import.meta.env.PUBLIC_STORAGEBUCKET,
    messagingSenderId: import.meta.env.PUBLIC_MESSAGINGSENDERID,
    appId: import.meta.env.PUBLIC_APPID,
    measurementId: import.meta.env.PUBLIC_MEASUREMENTID,
};

console.log("the var : ", firebaseConfig)


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getDB = () => {
    return db
}

export default getDB