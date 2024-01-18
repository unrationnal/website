// message with animation before displaying catalogue

import { motion } from "framer-motion"

const DescriptiveMessage = "Explore our catalogue of elegant and innovative solutions to your everyday problems through the use of AI and the latest tech"

const IntroMsgCatalogue = () => {
    return (
        <motion.div id="intro-message"
        // initial={{clipPath : "inset(0 0 100% 0)", y : 100}}
        // whileInView={{clipPath : "inset(0 0 0 0)", y : 0}}
        // transition={{duration : 1.5, ease : "linear", delay : 0.5}}
        // viewport={{once : true}}
        >
            <h2>Explore our catalogue of <span>elegant</span> and <span>innovative</span> solutions to your everyday problems through the use of <span>AI</span> and the latest tech</h2>
        </motion.div>
    )
}

export default IntroMsgCatalogue