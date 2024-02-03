

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

    const text_1 = {
        title : null,
        content :  "You've probably heard of ChatGPT - it would be surprising if you hadn't. Indeed, Openai's little gem shook the world by demonstrating the extraordinary intelligence that computers could be capable of. Whether in terms of reasoning or global knowledge, ChatGPT has set the bar so high in so many areas that even the most skeptical are worried."
    
    }

    const text_2 = {
        title : null,
        content : "It's in this spirit of innovation that openai, the creators of ChatGPT, have decided to raise the bar even higher by extending the capabilities of their little marvel. ChatGPT, despite its extensive knowledge, has until now been limited to simple chat interactions, but all that can now change, thanks to custom GPTS. Openai has decided to provide its users with the tools to give ChatGPT new capabilities. These tools can range from a simple response capability in a specific format such as a famous author, to the use of advanced tools to build advanced templates for you."
    }

    const text_3 = {
        title : "What are OpenAi custom GPTs even capable of ? ",
        content : `Have you ever been amazed by the conversations and the ability to think on your feet when chatting or researching? Well, gpts allow you to apply these qualities directly to your life.
    
        The main strength of GPTS is the community aspect, enabling anyone to contribute to a larger whole. So it's very likely that someone has come up with the idea of using a gpt to resolve a problem or inconvenience you've encountered. If you're having trouble choosing a dish for the evening, the GPT sous-chef can look in your fridge and suggest balanced dishes to suit your dietary needs. You've got countless excel documents to analyze for an important job, use the GPT data analyst to give you a complete and detailed analysis, all in less than 15 minutes.`
    }

    const image_2 = {
        imgUrl : "https://yourgpt.ai/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fassets.yourgpt.ai%2Fcontent%2Fuploads%2F2023%2F11%2F06194100%2Fintroducing-gpts.png&w=3840&q=75",
        title : "Gpt carousel"
    }

    const text_4 = {
        title : null,
        content : "The solutions to your small problems are innumerable, and ChatGPT, thanks to its vast range of knowledge, often comes up with solutions you couldn't even imagine. But that's just one of ChatGPT's capabilities, as another feature has been added to extend its potential even further."
    }

    const image_3 = {
        imgUrl : "https://domore.ai/sites/default/files/2023-11/customizing-chatgpt.jpg",
        title : "GPT icon"
    }


    const text_5 = {
        title : null,
        content : "APIs, are you familiar with this term, it is in fact a protocol highlighting the functionalities of an application or a service in a form that can be easily used from the internet. To simplify, suppose you invented a perfect mathematical formula for calculating integrals from a computer, but this formula requires a lot of power from your computer so most people cannot take advantage of it. So to deal with this, you have established an API and so people will only have to send you their data through the web and you will calculate it at home before sending them the result back, all in an easy-to-use format. understand and use. It turns out that openai has enabled the use of ChatGPT APIS."
    }
    const text_6 = {
        title : null,
        content : "From now on, ChatGPT can have access to external services to help it with its tasks, which makes it even more efficient. Let's say you want to travel to an exotic destination but you don't know the points of interest there, very simply ask Voyager GPT who will use the APIs of travel sites to organize a travel schedule for you. more interesting. Let's take a look at Canva, a service for creating professional designs. With access to their API, chatGPT can leverage the full capabilities of their services to help you create the perfect design. All this is just a growing trend, because all the major companies will soon make their service available to chatGPT which will be able to extend the possibilities for users more and more."
    }
    const text_7 = {
        title : null,
        content : "With all these possibilities, the capabilities of GPTS are only limited by the imagination of the community, and given the growing numbers, we should expect to see more and more interesting ones."
    }
    
    
    const footer = {
        newArticle : ["/blogs/how-to-create-a-custom-gpt", "Check out our article on how to create a custom GPT"],
        author : author,
    }


    return  [header, introImage, text_1, text_2, text_3, image_2, text_4, image_3, text_5, text_6, text_7, footer]
    

}



// french translation
const french = (title:string, author:string, published:Date, img:introImage) => {
    const header = {
        title : title,
        author : author,
        published : published
    }

    const introImage = img

    const text_1 = {
        title : null,
        content :  "You've probably heard of ChatGPT - it would be surprising if you hadn't. Indeed, Openai's little gem shook the world by demonstrating the extraordinary intelligence that computers could be capable of. Whether in terms of reasoning or global knowledge, ChatGPT has set the bar so high in so many areas that even the most skeptical are worried."
    
    }

    const text_2 = {
        title : null,
        content : "It's in this spirit of innovation that openai, the creators of ChatGPT, have decided to raise the bar even higher by extending the capabilities of their little marvel. ChatGPT, despite its extensive knowledge, has until now been limited to simple chat interactions, but all that can now change, thanks to custom GPTS. Openai has decided to provide its users with the tools to give ChatGPT new capabilities. These tools can range from a simple response capability in a specific format such as a famous author, to the use of advanced tools to build advanced templates for you."
    }

    const text_3 = {
        title : "What are OpenAi custom GPTs even capable of ? ",
        content : `Have you ever been amazed by the conversations and the ability to think on your feet when chatting or researching? Well, gpts allow you to apply these qualities directly to your life.
    
        The main strength of GPTS is the community aspect, enabling anyone to contribute to a larger whole. So it's very likely that someone has come up with the idea of using a gpt to resolve a problem or inconvenience you've encountered. If you're having trouble choosing a dish for the evening, the GPT sous-chef can look in your fridge and suggest balanced dishes to suit your dietary needs. You've got countless excel documents to analyze for an important job, use the GPT data analyst to give you a complete and detailed analysis, all in less than 15 minutes.`
    }

    const image_2 = {
        imgUrl : "https://yourgpt.ai/_next/image?url=https%3A%2F%2Fs3.us-east-2.amazonaws.com%2Fassets.yourgpt.ai%2Fcontent%2Fuploads%2F2023%2F11%2F06194100%2Fintroducing-gpts.png&w=3840&q=75",
        title : "Gpt carousel"
    }

    return [header, introImage, text_1, text_2, text_3, image_2]

}












// global information
const What_are_custom_gpts = (lang: "en" | "fr") => {
    // global data
    const title = "Everything to know about OpenAI's Custom GPTS"
    const author = "Cheick Diallo"
    const published = new Date("2024-2-01")
    const tags = ["ChatGPT", "AI"]
    const pageLink = lang + "/" +  "open-ai-custom-gpts-what-are-they-how-to-use-them"

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

