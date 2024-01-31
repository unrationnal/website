// line that turn purple as you scroll down

import { useRef, useState } from "react"


export const ScrollLine = () => {
    const ref = useRef<HTMLDivElement>(null)

    const [greenPercent, setGreenPercent] = useState(0)
    
    document.addEventListener("scroll",  () => {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        const greenPercentage = Math.min(scrollPercentage, 100);
        setGreenPercent(greenPercentage)
        // const gradientColor = `linear-gradient(to bottom, gray 0%, green ${greenPercentage}%)`;
    }
    )

    // console.log(greenPercent)
    // const inStyle : React.CSSProperties = {
    //     backgroundImage : `linear-gradient(to bottom,  green ${greenPercent}%, gray)`
    // }

    return (
        <div id="scroll-line" ref={ref}  />
    )
}