
import { type FC } from "react"

import "./decoration.scss"

const getRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Background = () => {

    const Blobs = []
    
    for (let index = 0; index < 10; index++) {
        Blobs.push([
            getRandomNumber(45, 55), getRandomNumber(45, 55)
        ]) 
    }

    


    return (
        <section id="bg">
            {Blobs.map((blob, i) => {
                return <Blob key={i} x={blob[0]} y={blob[1]}/>
            })}
        </section>
    )
}

interface BlobProps {
    x : number,
    y : number,
}

const Blob:FC<BlobProps> = ({ x, y }) => {
    const color_theme = [
        "#430d4b", "#5D3FD3", "5a5a5a",
    ]

    const color = color_theme[Math.floor(getRandomNumber(0, color_theme.length))]

    // const width = getRandomNumber(800, 1200)
    const width = getRandomNumber(100, 200)
    const inStyle : React.CSSProperties = {
        left : x + "%",
        top : y + "%",
        width : width + "px",
    }
    return (
        <div style={inStyle}></div>
    )
}
