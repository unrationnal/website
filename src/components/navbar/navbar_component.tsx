
import { type FC } from "react"

import { Logo } from "./logo"
import TrialButton from "./trail_buttons"

import "./navbar.scss"

interface Props {
    hide? : boolean
}

export const NavBar:FC<Props> = ({ hide=false }) => {
    
    return (
        <nav>
            <section>
                <a href="/">
                <Logo />
                </a>

                {/* <ul>
                    <Option title="Home" link="formulaire"/>
                    <Option title="Blog" link="formulaire"/>
                    <Option title="Catalague" link="formulaire"/>
                    <Option title="Pricing" link="formulaire"/>
                </ul> */}

                <TrialButton hide={hide} />
            </section>
        </nav>
    )
}

// interface OptionProps {
//     title : string,
//     link : string,
// }

// const Option:FC<OptionProps> = ({title, link}) => {
//     return (
//         <li>
//             <a href={link}>
//                 {title}
//             </a>
//         </li>
//     )
// }

