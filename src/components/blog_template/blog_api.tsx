
import BlogHeader from "./micro_components/blog_header";
import BlogFooter from "./micro_components/blog_footer";
import BlogImage from "./micro_components/blog_img";
import BlogBulletPoints from "./micro_components/blog_bullet_point";
import BlogText from "./micro_components/blog_text";
import type { FC } from "react";


interface BlogTemplate {
    // header
    title? : string,
    author? : string,
    published? : Date,

    // text
    content? : string,

    //bullet points
    preText? : string,
    points : string[],
    postText? : string,

    // image
    imgUrl? : string,
    webp? : string,

    // footer
    ressources? : string[],
    finalMessage? : string,
    newArticle?: [string, string],
}


const BlogInterface: FC<BlogTemplate> = ({
    title, author, published, content, preText, points, postText, imgUrl, webp, ressources, finalMessage, newArticle
}) => {
    let Template = null;
    let props = {};

    console.log("creating : ", imgUrl)

    // Header
    if (title && author && published) {
        Template = BlogHeader;
        props = { title, author, published };
    }
    // Image
    else if (imgUrl || webp) {
        Template = BlogImage;
        props = { imgUrl, webp };
    }
    // Text
    else if (content) {
        Template = BlogText;
        props = { title, content };
    }
    // Bullet Points
    else if (points){
        Template = BlogBulletPoints
        props = { preText, points, postText }
    }

    // Footer
    else if (ressources || finalMessage || newArticle) {
        Template = BlogFooter;
        props = { ressources, finalMessage, newArticle, author };
    }
    

    // Fallback or default case if needed
    if (!Template) {
        return <div>No content available</div>;
    }

    return <Template {...props as any} />;
};

export default BlogInterface;