// header part of the blog
import { type FC } from "react"

interface BlogProps {
    title : string,
    author : string,
    published : string,    
    // published : Date,    
}

const BlogHeader: FC<BlogProps> = ({ title,  published}) => {
    return (
        <header>
            <h1>{title}</h1>
            <h2>{published}</h2>
            {/* <h2>{formatDate(published)}</h2> */}

            <hr />
        </header>
    )
}

const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // JS months are 0-based
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`; // Returns date in YYYY-MM-DD format
};

export default BlogHeader