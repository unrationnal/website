import type { FC } from "react"

import BlogCard from "./blog_card"

import "./blog_home.scss"


interface Card {
    title : string,
    image : string,
    published : string,
    tags? : string[],
    url : string,
}

interface AccueilProps{
    blogs : Card[]
}


const Header = () => (
    <header>
    <h1>Blog</h1>
    <h2>The latest articles</h2>
    </header>
)


const AccueilBlog:FC<AccueilProps> = ({ blogs }) => {
    return (
        <>
        <Header />

        {blogs.map((blog, i) => {
            return <BlogCard {...blog} key={i} />
        })}
        </>
    )
}

export default AccueilBlog
