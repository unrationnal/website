
// tilting card with different applications passing through

import { motion } from "framer-motion"
import { useState } from "react"


const ExploreCard = () => {
    // mobile then avoid all the javascript function
    let rotateStyle : React.CSSProperties
    if (window.innerWidth < 800 && window.innerHeight > 600){
        rotateStyle = {}
    }

    else {

        const [x, setX] = useState(0)
        const [y, setY] = useState(0)
        const range = 20
        
        
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        
        document.onmousemove = (e : MouseEvent) => {
            const {clientX, clientY} = e
            const newX = ((clientX - centerX) / centerX) * range
            const newY = ((centerY - clientY) / centerY) * range
            setX(newY)
            setY(newX)       
        }
        
        rotateStyle  = {
        transform : `
        perspective(100vw)
        rotateX(${x}deg)
        rotateY(${y}deg)`,
    }
}
    
    return (
        <motion.div id="explore-card"
        style={rotateStyle}
        transition={{duration : 1}}
        >

        </motion.div>
    )
}


export default ExploreCard