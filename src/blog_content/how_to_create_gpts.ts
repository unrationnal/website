
interface introImage {
    imgUrl : string,
    title : string
}


const english = (title:string, author:string, published:Date, img:introImage) => {
    const header = {
        title : title,
        author : author,
        published : published
    }

    const introImage = img
    








}



const french = (title:string, author:string, published:Date, img:introImage) => {
    const header = {
        title : title,
        author : author,
        published : published
    }

}


// global information
const What_are_custom_gpts = (lang: "en" | "fr") => {
    // global data
    const title = "How to create an openai's custom GPT from scratch"
    const author = "Cheick Diallo"
    const published = new Date("2024-2-02")
    const tags = ["ChatGPT", "AI"]
    const pageLink = lang + "/" +  "how-to-create-your-own-openai-custom-gpt"

    const imageIntro = {
        title : "Custom GPTS presentation" ,
        imgUrl : "https://www.unite.ai/wp-content/uploads/2023/11/F-RU_sTaMAAj2Dd-1.jpeg"
    }




    const langMap = {
        "en" : english,
        "fr" : french
    }

    const data = langMap[lang](title, author, published, imageIntro)


    const formatFullDate = (date:Date, lang: "en"|"fr") => {

        const langmap = {
            "en" : "en-US", "fr" : "fr-FR"
        }

        return date.toLocaleDateString(langmap[lang], {
            weekday: 'long', // "Monday"
            year: 'numeric', // "2023"
            month: 'long',   // "January"
            day: 'numeric'   // "1"
        });
    }
    
    return {
        metadata : {
            title : title,
            img : imageIntro.imgUrl,
            published : formatFullDate(published, lang),
            tags : tags,
            pageLink : pageLink
        },

        data : data
    }
}

export default What_are_custom_gpts