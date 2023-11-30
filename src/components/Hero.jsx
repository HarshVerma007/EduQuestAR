import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {EarthCanvas} from "./canvas";
import { slideIn } from "../utils/motion";
const Hero = () => {
  return (
   <>
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4db9ef]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-10`}>
          Welcome to 
          <h2 className='text-[#4db9ef] text-5xl'>EduQuest AR</h2>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          where learning takes on a revolutionary dimension! Our cutting-edge platform seamlessly blends playfulness and enrichment, <br className='sm:block hidden' />
          introducing a new era in education.
          </p>
        </div>
        
        {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:h-[550px] w-full md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}
     
      </div>
     
     
      
     

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            
          </div>
        </a>
      </div> */}
    </section>
    <div className="relative h-42 w-102">
    <div className="absolute inset-x-0 bottom-0 h-46"> 
    <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:h-[550px] w-full md:h-[550px] h-[350px] '
        >
          <EarthCanvas />
        </motion.div>
        </div>
  </div></>
  );
};

export default Hero;
