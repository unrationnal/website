import "./formulaire.scss"

import {type FC, useState } from "react"

import SideAnimation from "./side_animation"

// messages import
import { english_msg, english_title, french_msg, french_title, repeatMSG, FormTraduction } from "./messageLang"

// function to store email address
import { RegisterEmail, checkMailValidity, emailInputBorderColor, MailLogMessage } from "./mail_functions"


interface Log {
    color: string;
    text: string;
}

export const Formulaire:FC = () => {
    const [email, setEmail] = useState<string>("")
    const [log, setLog] = useState<Log>({color : "white", text : ""})

    // intro message
    const userLangage = "en"
    const Message = FormTraduction[userLangage]

    const changeValue = (evt : React.ChangeEvent<HTMLInputElement> ) => {
        const newValue =  evt.target.value
        setEmail(newValue)
    }

    
    // email
    const isValid = checkMailValidity(email)
    const inputBorderColor = emailInputBorderColor(isValid, email)
    
    const SaveUserEmail = () => {
        if(!isValid){
            setLog({color : 'red', text : "The email is not valid"})
            return
        }

        // if email is valid
        setLog({color : "white", text : 'loading'})

        RegisterEmail(email).then(result => {
            if (result === true){
                // if saved successfully, display the log then go to home page
                setLog({color : "lime", text : "Thank you !"})
                setTimeout(() => {
                    window.location.href = "/"
                }, 1000);
            }
            else {
                // error in the process
                setLog({text : "It seems there is an error, please try again or contact the support team", color : "white"})
            }
        })
    }

    const EnterFunc = (evt : React.KeyboardEvent) => {
        if (evt.key === "Enter"){
            SaveUserEmail()
        }
    }

    return (
        <>
        <section id="formulaire">
        <section>
            <h1>{english_title}</h1>

            <Message/>

            <div className="input-box">
                <input type="email" style={inputBorderColor} placeholder="youremail@email.com" name="email" value={email} onKeyDown={(event)=>{EnterFunc(event)}} onChange={(evt)=>changeValue(evt)}/>
                <button onClick={()=>SaveUserEmail()}>Submit</button>

                <MailLogMessage log={log} />
            </div>
            
        </section>       
        <SideAnimation repeatMSG={repeatMSG}/>         
        </section>
        </>
    )
}