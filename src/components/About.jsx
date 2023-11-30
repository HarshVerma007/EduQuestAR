import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} >About</p>
        <h2 className={`${styles.sectionHeadText} text-[#4db9ef]`}>EduQuest AR</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Rooted in a commitment to revolutionize education, our platform envisions a future where learning is not just informative but a thrilling adventure. Learn how EduQuest AR enhances traditional learning methods by offering immersive experiences that turn abstract concepts into engaging activities. With a focus on users, especially children, our platform facilitates interaction with educational content through AR, fostering a deeper understanding in a fun and interactive manner. Meet the minds behind EduQuest AR and explore the journey of transforming education into an exciting exploration for young minds.
      </motion.p>

    
    </>
  );
};

export default SectionWrapper(About, "about");
