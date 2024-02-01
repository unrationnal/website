
// function for handling the email manipulations

// firestore import 
import type { FC } from "react"
import getDB from "../firebase_configuration"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"


export async function RegisterEmail(emailAdress : string) : Promise<boolean> {
    // store email
    try {
        const docRef = await addDoc(collection(getDB(), "users"), {
            'email' : emailAdress,
            "createdAt" : serverTimestamp()
        })

        // return positive answer
        console.log("email added : ", emailAdress)
        return true


    }catch(e){
        console.log("error adding the email : ", e)
        return false
    }
}

export const checkMailValidity = (emailAdress : string) : boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRegex.test(emailAdress);
    return isValid
}

// console.log("the key is : ", import.meta.env.PUBLIC_TEST)

export const emailInputBorderColor = (isValid:boolean, emailAdress:string) : React.CSSProperties => {
    if (emailAdress.length <= 0){ return {} }
    
    else if (isValid){ return { borderColor : "lime" } }

    else { return {borderColor : 'red'} }
}

// log message
interface Log {
    color: string;
    text: string;
}

// Update LogProp to use the new Log interface
interface LogProp {
    log: Log;
}

export const MailLogMessage:FC<LogProp> = ({log}) => {
    if (log.text.length <= 0) {return}

    return <div id="log-message"><p style={{
        color : log.color
    }}><i>{log.text}</i></p></div>
}