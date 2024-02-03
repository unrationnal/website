import type { FC } from "react";

interface BlogProps {
    title? : string,
    content : string,
}

const BlogText:FC<BlogProps> = ({title=null, content}) => {
    return (
        <div className="blog-text">
            
            {title &&
            <h3>{title}</h3>
            }

            <p>{content}</p>

        </div>
    )
}

export default BlogText