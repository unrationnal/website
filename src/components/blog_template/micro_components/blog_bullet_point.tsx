import type { FC } from "react"


interface BlogProps {
    preText? : string,
    points : string[],
    postText? : string
}

const BlogBulletPoints:FC<BlogProps> = ({ preText=null, points, postText=null}) => {
    return (
        <div className="blog-buller-points">
            {preText &&
            <p>{preText}</p>
            }

            <ul>
                {points.map((point, i) => {
                    return <li key={i} >{point}</li>
                })}
            </ul>

            {postText &&
            <p>{postText}</p>
            }

        </div>
    )
}

export default BlogBulletPoints