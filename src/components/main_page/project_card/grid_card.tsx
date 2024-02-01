// grid interlocking cards

import { type FC } from "react";

import { motion } from "framer-motion";

const testSrc = "https://images.unsplash.com/photo-1682685795579-37e731bfefab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"

const testSrc_1 = "https://images.unsplash.com/photo-1705002455875-29da8631d626?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"

const testSrc_2 = "https://plus.unsplash.com/premium_photo-1666256629479-d049bc3cf40b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"

const testSrc_3 = "https://images.unsplash.com/photo-1703866772340-048b3877605d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"

const testSrc_4 = "https://images.unsplash.com/photo-1704895390342-b52a2f45786c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"

const testSrc_5 = "https://images.unsplash.com/photo-1704937197276-0094595fef4c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D"

export const GridCard:FC = () => {
    const delay = 0.1
    return (
        <motion.section id="catalogue">

            <motion.h2 initial={{y : 50, opacity : 0}}
            whileInView={{y : 0, opacity : 1}}
            transition={{duration : 1, ease : "easeOut", delay : 0.2}}
            viewport={{once : true}}
            >
                Our Catalogue</motion.h2>

            <section id="grid-card">
                <Card image={testSrc} name="Social Media Critic" delay={delay} />
                <Card description="Term and Services Specialist" image={testSrc_5} delay={delay*2} link="https://chat.openai.com/g/g-G3nzyAZmr-terms-guide"/>
                <Card image={testSrc_3} name="Youtube New Audience" description="We'll help you extend your audience by translating your videos to popular languages" delay={delay*3} />
                <Card fontSize="0.6em" description='"Only those who will risk going too far can find out how possibly one can go"' italic={true} delay={delay*4}/>
                <Card description="Master any subject with the Quiz Expert" image={testSrc_4} delay={delay*5} link="https://chat.openai.com/g/g-FizGXCece-study-buddy" />
                <Card name="LangFriend" description="Learn any new languague through friendly interactions" image={testSrc_1} delay={delay*6}/>
                <Card name="Grocery" description="Manage your grocery list, your receipts and your shopping habit with the Grocery Expert" image={testSrc_2} delay={delay*7}/>
                <Card description='"The best way to predict the future is to create it"' italic={true} delay={delay*8} />
            </section>
        </motion.section>
    )
}


interface CardProps {
    name? : string ,
    description? : string,
    image? : string  ,
    fontSize? : string,
    italic? : boolean,
    link? : string,
    delay : number,
}

const Card:FC<CardProps> = ({delay, image=null, name=null, description=null, fontSize=null, italic=false, link=null}) => {

    image = null

    const inStyle : React.CSSProperties = image ? {
        backgroundImage : `linear-gradient(120deg, #090909 20%, transparent), linear-gradient(-10deg, #090909 20%, transparent), url("${image}")`,
        // backgroundImage : `linear-gradient(120deg, #090909 20%, transparent), linear-gradient(-10deg, #090909 20%, transparent), ${blob})`,
    } : {}

    const h2Style : React.CSSProperties = fontSize ? {
        fontSize : fontSize
    } : {}

    const variants = {
        visible : {opacity : 1, transform : "translateY(0px)" },
        hidden : { opacity : 0, transform : "translateY(100px)"}
    }

    
    const exploring = () => {
        if (!link){console.log("we are working on it");return}

        // if link exist open new page
        window.open(link, "_blank")?.focus()
    }

    
    return (
        <motion.div className="grain-bg"
        style={inStyle}
        variants={variants}
        animate={{}}
        initial="hidden"
        transition={{duration : 0.5, ease : "linear", delay : Math.pow(delay, 2)}}
        whileInView="visible"
        viewport={{once : true}}
        >   
            <div className="card-details">

                {name && 
                <h2>{name}</h2>
            }

                {description && 
                <h3 style={h2Style}>{
                    italic ? <i>{description}</i> : description
                }</h3>
            }

                {(image || name) &&
                <button onClick={()=>exploring()}>
                    <h4>Explore</h4>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
                }
            </div>
        </motion.div>
    )
}