import "./formulaire.scss"

import {type FC } from "react"

password : String;
email : String;

export const Formulaire:FC = () => {

    return (
        <>
        <section id="formulaire">
        <form>
            <h1>Tu attends Unrationnal ?</h1>
            <p>
                Nous sommes en plein dans le processus de développement de nos nouvelles applications qui vont révolutionner ton quotidien..🤔<br/><br/> <br/>
                Laisse-nous simplement ton adresse e-mail ci-dessous, et tu seras parmi les premiers à recevoir un accès anticipé dès que tout sera prêt. 🚀✨
                
            </p><br/>

            <label>
            <input type="text" placeholder="Laisse ton adresse email ici" name="email"/> <button type="submit">Obtenir le privilège</button>
            </label>   
            
        </form>   

        <div className="animation">

        </div>         
        </section>
        </>
    )
}