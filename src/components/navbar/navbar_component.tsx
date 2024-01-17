
import { type FC } from "react"

import { Logo } from "./logo"

import "./navbar.scss"

export const NavBar:FC = () => {
    
    return (
        <nav>
            <section>
                <Logo />

                <ul>
                    <Option title="Home" link=""/>
                    <Option title="Blog" link=""/>
                    <Option title="Catalague" link=""/>
                    <Option title="Pricing" link=""/>
                </ul>

                <TrialButton />
            </section>
        </nav>
    )
}

interface OptionProps {
    title : string,
    link : string,
}

const Option:FC<OptionProps> = ({title, link}) => {
    return (
        <li>
            <a href={link}>
                {title}
            </a>
        </li>
    )
}

const TrialButton = () => {
    return (
        <>
        <button>
            <h2>Join Waitlist</h2>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
        </>
    )
}