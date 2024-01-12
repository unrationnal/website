
import { type FC } from "react"

import { Logo } from "./logo"

import "./navbar.scss"

export const NavBar:FC = () => {
    
    return (
        <nav>
            <section>
                <Logo />
                <Option title="Home" link=""/>
                <Option title="Blog" link=""/>
                <Option title="Catalague" link=""/>
                <Option title="Pricing" link=""/>
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
        <a href={link}>
            {title}
        </a>
    )
}