import { useRef } from "react";
import { motion,  useCycle } from "framer-motion";
import { useDimensions } from "./use_dimension";
import { MenuToggle } from "./menu_toggle";
import { Navigation } from "./navigation";

import "./side_menu.scss"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      style={{ width : isOpen ? "300px" : "0px" }}
      custom={height}
      ref={containerRef}
      >
      <motion.div className="background" variants={sidebar} style={{ pointerEvents : isOpen ? "auto" : "none" }} />
      <Navigation isOpen={isOpen} />
      
      <MenuToggle toggle={() => toggleOpen()} />
    
    </motion.nav>
    
    </>
  );
};

export default SideMenu
