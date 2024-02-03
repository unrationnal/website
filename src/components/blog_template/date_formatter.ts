

// format date in a readable format
const formatFullDate = (date:Date, lang:string) => {
    let lang_format = "en-US"

    if (lang === "fr"){
        lang_format = "fr-FR"
    }

    return date.toLocaleDateString(lang_format, {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2023"
        month: 'long',   // "January"
        day: 'numeric'   // "1"
    });
}

const getTextDateWBy = (date:Date, lang:string, updated:boolean=false) : string => {
    const dateText = formatFullDate(date, lang)
    let prefix = ""
    let suffix = ""

    if (lang === "en"){
        prefix = !updated ? "Published on " : "Updated on"  
        suffix = " by"
    }
    
    else if (lang === "fr"){
        prefix = !updated ? "Publié " : "Mis à jour"
        suffix = " par"
    }

    return prefix + dateText + suffix + " "
}

export default getTextDateWBy