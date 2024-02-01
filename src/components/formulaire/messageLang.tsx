
// messages
export const english_msg = "While we are designing, refining and curating our products, just leave us your address email and you'll be among the first to laverage our incredible set of tools. "
export const english_title = ""

export const french_title = "Tu attends Unrationnal ?"
export const french_msg = `Nous sommes en plein dans le processus de développement de nos nouvelles applications qui vont révolutionner ton quotidien..🤔<br/><br/> <br/>
Laisse-nous simplement ton adresse e-mail ci-dessous, et tu seras parmi les premiers à recevoir un accès anticipé dès que tout sera prêt. 🚀✨`

export const repeatMSG ="THANKSFORVISITING THANSKFORVISITING"

// traduction 
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

export const FormTraduction = {"en": English_msg, "fr" : French_msg }