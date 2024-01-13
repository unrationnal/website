import "./formulaire.scss"

import {type FC } from "react"

password : String;
email : String;

export const Formulaire:FC = () => {

    return (
        <>
        <section id="formulaire">
        <form>
            <h1>Unrationnal</h1>
            <label>
            <input type="text" placeholder="email" name="email"/>
            </label>
            <br/>   
            <button type="submit">Submit</button>
        </form>   

        <div className="animation">

        </div>         
        </section>
        </>
    )
}