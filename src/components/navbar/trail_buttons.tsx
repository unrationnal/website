
import { type FC } from "react";

interface Props {
    hide? : boolean
}

const TrialButton:FC<Props> = ({ hide }) => {
    return (
        <>
        <button style={hide ? {opacity : 0} : {}}>
            <a href="/formulaire"><h2>Join Waitlist</h2></a>
            <i className="fa-solid fa-chevron-right" />
        </button>
        </>
    )
}


export default TrialButton