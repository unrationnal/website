import type { FC } from "react"


interface BlogProps {
    imgUrl : string,
    alt : string,
    caption? : string,
}

const BlogImage:FC<BlogProps> = ({ imgUrl, alt, caption}) => (
    <figure>
        <img src={imgUrl} alt={alt} />
        <figcaption>{caption ? caption : ""}</figcaption>
    </figure>
)

export default BlogImage