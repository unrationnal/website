
// tilting card with different applications passing through

import { motion } from "framer-motion"
import { useState } from "react"

const testSrc = "https://images.unsplash.com/photo-1682685795579-37e731bfefab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"

const testSrc_1 = "https://images.unsplash.com/photo-1705002455875-29da8631d626?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"

const testSrc_2 = "https://plus.unsplash.com/premium_photo-1666256629479-d049bc3cf40b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"

const testSrc_3 = "https://images.unsplash.com/photo-1703866772340-048b3877605d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"

const testSrc_4 = "https://images.unsplash.com/photo-1704895390342-b52a2f45786c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"

const testSrc_5 = "https://images.unsplash.com/photo-1704937197276-0094595fef4c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D"

import Logo from "../../../../assets/vortex_logo.png"

const ExploreCard = () => {
    // mobile then avoid all the javascript function
    let rotateStyle : React.CSSProperties
    if (window.innerWidth < 800 && window.innerHeight > 600){
        const x = 0
        const y = 0
        rotateStyle = {}
    }

    else {

        const [x, setX] = useState(0)
        const [y, setY] = useState(0)
        const range = 20
        
        const Services = [testSrc, testSrc_1, testSrc_2, testSrc_3, testSrc_4, testSrc_5]
        for (let index = 0; index < Services.length; index++) {
            const url = Services[index];
            Services[index] = `url("${url}")`
        }
        
        
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
        initial={{backgroundImage : "none"}}
        animate={{backgroundImage : `url("${Logo.src}")`}}
        transition={{duration : 1}}
        >

        </motion.div>
    )
}


export default ExploreCard