// card component containing information about a project

import {type FC, useState, useEffect} from "react"

const fillerText = "Figured out my problem. Having typescript installed locally, but was running the globally installed and older version typescript. When I ran tsc via npm scripts it compiles with the following command"

export const ProjectCard:FC = () => {
    const [appeared, setAppeared] = useState(false)
    
    const inStyle : React.CSSProperties = appeared ? {
        animation : "appear 800ms 200ms ease-in both"
    } : {}

    useEffect(() => {
        setAppeared(true)
    }, [])

    return (
        <div className="project-card" style={inStyle}>
            <div>
                <h2>Project Name</h2>
                <h4>{fillerText}</h4>

                <Blob />
            </div>
        </div>
    )
}

const Blob = () => {
    const getRandomNumber = (min:number, max:number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    const x = getRandomNumber(0, 80)
    const y = getRandomNumber(0, 80)

    const rotation = getRandomNumber(0, 180) 

    console.log(x, y)

    const inStyle: React.CSSProperties = {
        top : x + "%",
        left : y + "%",
        rotate : rotation + "deg",
    }

    return (
        <div className="blob" style={inStyle} />
    )
}