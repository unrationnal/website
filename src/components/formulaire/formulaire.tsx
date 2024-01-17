import "./formulaire.scss"

import {type FC, useState } from "react"

const english_msg = "While we are designing, refining and curating our products, just leave us your address email and you'll be among the first to laverage our incredible set of tools. "
const english_title = ""

const french_title = "Tu attends Unrationnal ?"
const french_msg = `Nous sommes en plein dans le processus de développement de nos nouvelles applications qui vont révolutionner ton quotidien..🤔<br/><br/> <br/>
Laisse-nous simplement ton adresse e-mail ci-dessous, et tu seras parmi les premiers à recevoir un accès anticipé dès que tout sera prêt. 🚀✨`
export const Formulaire:FC = () => {
    const [email, setEmail] = useState<string>("")

    const changeValue = (evt : React.ChangeEvent<HTMLInputElement> ) => {
        const newValue =  evt.target.value
        setEmail(newValue)
    }

    

    return (
        <>
        <section id="formulaire">
        <section>
            <h1>{english_title}</h1>
            <p>
                {english_msg}
            </p>

            <div className="input-box">
                <input type="text" placeholder="youremail@email.com" name="email" value={email} onChange={(evt)=>changeValue(evt)}/>
                <button onClick={()=>console.log("the email is : ", email)}>Submit</button>
            </div>
            
        </section>   

        <div className="animation">

        </div>         
        </section>
        </>
    )
}