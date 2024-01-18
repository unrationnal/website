// Premier element de la page d'accueil

import "./home.scss"

import {type FC, type ReactNode } from "react"


interface Props {
    children : ReactNode
}

export const Home:FC<Props> = ({ children }) => {


    return (
        <>

        <header>
            <div id="msg-home">
                <div>
                    <h1>Finding <span>innovative</span> <span>elegant</span> and <span>rationnal</span> solutions your problems</h1>
                </div>

                {children}
            </div>
                
        </header>
        
        </>
    )
}
