// grid interlocking cards

import { type FC } from "react"

const testSrc = "https://images.unsplash.com/photo-1682685795579-37e731bfefab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"

const testSrc_1 = "https://images.unsplash.com/photo-1705002455875-29da8631d626?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"

const testSrc_2 = "https://plus.unsplash.com/premium_photo-1666256629479-d049bc3cf40b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"

const testSrc_3 = "https://images.unsplash.com/photo-1703866772340-048b3877605d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
export const GridCard:FC = () => {
    return (
        <section id="grid-card">
            <Card image={testSrc} name="Vacation Expert" />
            <Card description="Term and Services Specialist" />
            <Card image={testSrc_3} name="Social Media Expert" description="Help you manage and develop your social media brand and reach more customers" />
            <Card fontSize="0.6em" description='"Only those who will risk going too far can find out how possibly one can go"' italic={true}/>
            <Card description="Master any subject with the Quiz Expert"/>
            <Card name="LangFriend" description="Learn any new languague through friendly interactions" image={testSrc_1}/>
            <Card name="Grocery" description="Manage your grocery list, your receipts and your shopping habit with the Grocery Expert" image={testSrc_2} />
            <Card description='"The best way to predict the future is to create it"' italic={true}/>
        </section>
    )
}


interface CardProps {
    name? : string ,
    description? : string,
    image? : string  ,
    fontSize? : string,
    italic? : boolean,
}

const Card:FC<CardProps> = ({image=null, name=null, description=null, fontSize=null, italic=false}) => {

    const inStyle : React.CSSProperties = image ? {
        backgroundImage : `url("${image}")`
    } : {}

    const h2Style : React.CSSProperties = fontSize ? {
        fontSize : fontSize
    } : {}
    
    return (
        <div style={inStyle}>
            {name && 
            <h2>{name}</h2>
            }

            {description && 
            <h3 style={h2Style}>{
                italic ? <i>{description}</i> : description
            }</h3>
            }
        </div>
    )
}

