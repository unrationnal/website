// settings for firebase

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey : import.meta.env.PUBLIC_apiKey ,
    authDomain : import.meta.env.PUBLIC_authDomain ,
    projectId : import.meta.env.PUBLIC_projectId ,
    storageBucket : import.meta.env.PUBLIC_storageBucket ,
    messagingSenderId :import.meta.env.PUBLIC_messagingSenderId ,
    appId : import.meta.env.PUBLIC_appId ,
    measurementId : import.meta.env.PUBLIC_measurementId ,
}

console.log("the var : ", firebaseConfig)


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getDB = () => {
    return db
}

export default getDB