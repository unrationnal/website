
// component for the sharing icon

import type { FC } from "react"

const BASE_URL = import.meta.env.BASE_URL

interface Props {
    title : string,
    url : string
}

const ShareOnSocialMedia:FC<Props> = ({title, url}) => {
    return (
        <div className="share-social">

            <Social baseURL="http://twitter.com/share" icon="fa-brands fa-square-x-twitter" title={title} url={url} />

            <DefaultShareButton baseURL={BASE_URL} icon="fa-brands fa-square-whatsapp" title={title} url={url} />

            <DefaultShareButton baseURL={BASE_URL} icon="fa-brands fa-square-reddit" title={title} url={url} />

            <DefaultShareButton baseURL={BASE_URL} icon="fa-brands fa-square-facebook" title={title} url={url} />
        </div>
    )
}

interface SocialProps {
    baseURL : string
    title : string
    url : string
    icon : string
}

const Social:FC<SocialProps> = ({ baseURL, title, url, icon }) =>{
    
    const shareLink = `${baseURL}?text=${title}&url=${url}`

    return (
        <a href={shareLink}>
            <i className={icon} ></i>
        </a>
    )
}

const DefaultShareButton:FC<SocialProps> = ({ baseURL, title, url, icon }) => {
    const share = () =>{
        navigator.share({
            title : title,
            url : `${baseURL}/${url}`
        })
    }

    return (
        <a onClick={()=>share()}>
            <i className={icon} ></i>
        </a>
    )
}

export default ShareOnSocialMedia