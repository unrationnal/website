// message with animation before displaying catalogue

import { motion } from "framer-motion"

const DescriptiveMessage = "Explore our catalogue of elegant and innovative solutions to your everyday problems through the use of AI and the latest tech"

const IntroMsgCatalogue = () => {
    const variant = {
        hidden : { opacity : 0, scale : 0.8, transform : "translateY(100px)"},
        visible : { opacity : 1, scale : 1, transform : "translateY(0px)"},
    }

    const variantReveal = {
        hidden : {clipPath : "inset(0 0 100% 0)", transform : "translateY(110px)"} , 
        visible : {clipPath : "inset(0 0 0 0)", transform : "translateY(0px)"},
    }
    return (
        <motion.div id="intro-message"
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{duration : 0.5, ease : "easeIn"}}
        viewport={{once : true}}
        >
            <h2>Explore our catalogue of <span>elegant</span> and <span>innovative</span> solutions to your everyday problems through the use of <span>AI</span> and the latest tech</h2>
        </motion.div>
    )
}

export default IntroMsgCatalogue