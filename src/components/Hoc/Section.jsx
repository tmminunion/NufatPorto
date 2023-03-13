import { motion } from "framer-motion";

import { styles } from "../Hero/styles";
import { staggerContainer } from "./Motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

       
      </motion.section>
    );
  };

export default StarWrapper;
