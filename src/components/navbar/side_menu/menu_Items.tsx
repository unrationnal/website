import { type FC } from "react";
import { motion } from "framer-motion";

const variants = {
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
      y: { stiffness: 1000 }
    }
  }
};


interface Props {
  i : number,
  title : string,
  link : string,
  icon : string,
}

export const MenuItem:FC<Props> = ({ i, title, link, icon }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  const style = {}
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      
      <ItemIcon icon={icon} style={style} />

      <ItemText text={title} link={link} style={style} />


    </motion.li>
  );
};

interface Text {
  style : React.CSSProperties,
  text : string,
  link : string,
}

const ItemText:FC<Text> = ({style, text, link}) => {
  return (
    <div className="text-placeholder" style={style}>
        <a href={link}><h3>{text}</h3></a>
    </div>
  )
}

interface Icon {
  style : React.CSSProperties,
  icon : string
}

const ItemIcon:FC<Icon> = ({style, icon}) => {
  return (
    <div className="icon-placeholder" style={style}>
        <i className={icon}></i>
    </div>
  )
}
