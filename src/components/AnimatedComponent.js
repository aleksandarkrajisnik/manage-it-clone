import { motion } from "framer-motion";

function AnimatedComponent({children}) {

    const animations = {
        initial: {
          opacity: 0,
          y:100
         
        },
        animate: {
          opacity: 1,
          y:0
        },
        exit: {
          opacity: 0,
          y:-100
        },
      };    

    return ( 
        <motion.div transition={{duration: 0.5}} variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
     );
}

export default AnimatedComponent;