// Premier element de la page d'accueil

import "./home.scss"

import {type FC } from "react"

const DescriptiveMessage = "Explore our catalogue of elegant and innovative solutions to your everyday problems through the use of AI and the latest tech"

export const Home:FC = () => {


    return (
        <>

        <div className="msg_home">
            <div>
                <h1>Finding rationnal solutions for this world's problems</h1>
                <p>{DescriptiveMessage}</p>
            </div>
                
        </div>
        
        </>
    )
}

