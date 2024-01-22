import "./formulaire.scss"

import {type FC, useState } from "react"

const english_msg = "While we are designing, refining and curating our products, just leave us your address email and you'll be among the first to laverage our incredible set of tools. "
const english_title = ""

const french_title = "Tu attends Unrationnal ?"
const french_msg = `Nous sommes en plein dans le processus de développement de nos nouvelles applications qui vont révolutionner ton quotidien..🤔<br/><br/> <br/>
Laisse-nous simplement ton adresse e-mail ci-dessous, et tu seras parmi les premiers à recevoir un accès anticipé dès que tout sera prêt. 🚀✨`

const repeatMSG ="THANKSFORVISITING THANSKFORVISITING"


export const Formulaire:FC = () => {
    const [email, setEmail] = useState<string>("")

    const changeValue = (evt : React.ChangeEvent<HTMLInputElement> ) => {
        const newValue =  evt.target.value
        setEmail(newValue)
    }

    const userLangage = "en"

    const Message = traduction[userLangage]

    return (
        <>
        <section id="formulaire">
        <section>
            <h1>{english_title}</h1>

            <Message/>

            <div className="input-box">
                <input type="email" placeholder="youremail@email.com" name="email" value={email} onChange={(evt)=>changeValue(evt)}/>
                <button onClick={()=>console.log("the email is : ", email)}>Submit</button>
            </div>
            
        </section>   

        <div className="animation">
                {Array(15).fill(0).map((x, i) => {
                    const marginLeft = - (Math.random() * 80)
                    return <h1 key={i} style={{
                        marginLeft : marginLeft + "%"
                    }}>{repeatMSG}</h1>
                })}
        </div>         
        </section>
        </>
    )
}

const English_msg = () => {
    return(
        <p>
            While we are <span>designing</span>, <span>refining</span> and <span>curating</span> our products, just leave us your address email and you'll be among the first to laverage our incredible set of tools.
        </p>
    )
}

const French_msg = () => {
    return(
        <p>
            Pendant que nous <span>concevons</span>, <span>affinons</span> et <span>conservons</span> nos produits, laissez-nous votre adresse e-mail et vous serez parmi les premiers à profiter de notre incroyable ensemble d'outils.
        </p>
    )
}

const traduction = {"en": English_msg, "fr" : French_msg }