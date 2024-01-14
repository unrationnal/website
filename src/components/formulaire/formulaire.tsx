import "./formulaire.scss"

import {type FC, useState } from "react"


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
            <h1>Tu attends Unrationnal ?</h1>
            <p>
                Nous sommes en plein dans le processus de développement de nos nouvelles applications qui vont révolutionner ton quotidien..🤔<br/><br/> <br/>
                Laisse-nous simplement ton adresse e-mail ci-dessous, et tu seras parmi les premiers à recevoir un accès anticipé dès que tout sera prêt. 🚀✨
            </p>

            <div>
                <input type="text" placeholder="Laisse ton adresse email ici" name="email" value={email} onChange={(evt)=>changeValue(evt)}/>
                <button onClick={()=>console.log("the email is : ", email)}>Obtenir le privilège</button>
            </div>
            
        </section>   

        <div className="animation">

        </div>         
        </section>
        </>
    )
}