
import { type FC } from "react";


interface Card {
    title : string,
    image : string,
    published : string,
    tags? : string[],
    url : string,
}

const BlogCard:FC<Card> = ({ title, image, published, tags, url }) => (
        <div className="blog-card">
            <CardImage imgUrl={image} alt={title} />
            <CardDetails title={title} tags={tags} published={published} url={url} />
        </div>
)
    




interface imgProps {
    imgUrl : string,
    alt : string,
}

const CardImage:FC<imgProps> = ({ imgUrl, alt }) => (            
    <picture>
        <source srcSet={imgUrl} type="image/webp" />
        <img  src={imgUrl} alt={alt} loading='eager'/>
    </picture>
)

interface DetailProps {
    title : string,
    tags? : string[],
    published : string,
    url : string
}

const CardDetails:FC<DetailProps> = ({ title, tags=[], published, url }) => {
    const actualTags = tags.length === 0 ? ["General"] : tags
    
    return (
        <div className="card-details">

            <div>
            {actualTags.map((tag, i) => {
                return <span key={i}>{tag}</span>
            })}
            </div>

            <a href={url}>
                <h2>{title}</h2>
            </a>
            <hr></hr>

            <h4>{published}</h4>

        </div>
    )
}


export default BlogCard