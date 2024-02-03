import type { FC } from "react";

interface BlogProps {
    author : string,
    ressources? : string[],
    finalMessage? : string,
    newArticle?: [string, string],
}


const BlogFooter:FC<BlogProps> = ({ author, ressources=null, finalMessage=null, newArticle=null }) => {
    return (
        <>


        <div className="blog-footer">
            
            <hr></hr>

            {finalMessage &&
            <p>{finalMessage}</p>
            }

            {newArticle && 
            <a href={newArticle[0]}><span>{newArticle[1]}</span></a>
            }

            <p>{author}</p>

            {ressources &&
            
            <div>
                {ressources.map((res, i)=>{
                    return <h4 key={i}>{res}</h4>
                })}
            </div>
            }
        </div>
        </>

    )
}

export default BlogFooter