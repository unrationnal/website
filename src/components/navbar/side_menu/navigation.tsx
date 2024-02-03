import { motion } from "framer-motion";
import { MenuItem } from "./menu_Items";
import type { FC } from "react";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

interface Props {
  isOpen : boolean
}

export const Navigation:FC<Props> = ({ isOpen }) => (
  <div id="inner-menu" style={{ pointerEvents : isOpen ? "auto" : "none" }}>
    <motion.ul variants={variants}>
      
      <MenuItem title="Home" link="/" icon="fa-solid fa-house" i={0}/>
      <MenuItem title="Blog" link="/blog" icon="fa-brands fa-blogger-b" i={1}/>
      <MenuItem title="Contact" link="mailto:unrationnal@gmail.com" icon="fa-solid fa-envelope" i={2}/>
      <MenuItem title="Home" link="/" icon="fa-solid fa-house" i={3}/>

    </motion.ul>

    <TrialButton />

  </div>
);



const variantsButton = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    }
  }
};


const TrialButton = () => (
    <motion.button variants={variantsButton} >
        <a href="/formulaire"><h2>Join Waitlist</h2></a>
        <i className="fa-solid fa-chevron-right" />
    </motion.button>
      
)