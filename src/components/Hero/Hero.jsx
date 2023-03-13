import { motion } from "framer-motion";

import { styles } from "./styles";
import { ComputersCanvas } from "./Computer";

const Hero = () => {
  return (

    <section className={`relative mx-auto h-screen w-full bg-hero-pattern bg-cover bg-center bg-no-repeat`}>
      <div
        className={`absolute inset-0 top-[120px]  mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-[#915EFF]' />
          <div className='violet-gradient h-40 w-1 sm:h-80' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hai, My Name is  <span className='text-[#915EFF]'>Kafhaya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='hidden sm:block' />
            interfaces and web applications
          </p>
        </div>
      </div>



      <div className='absolute bottom-60 flex w-full items-center justify-center xs:bottom-60'>
        <a href='/word'>
          <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='mb-1 h-3 w-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
      </section>
     
  );
};

export default Hero;
