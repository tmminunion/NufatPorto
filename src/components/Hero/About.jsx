import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { staggerContainer } from "../Hoc/Motion";
import { styles } from "./styles";

import { StarWrapper } from "../Hoc/Section";
import { fadeIn, textVariant } from "../Hoc/motion";



const services = [
  {
    title: 'Web Developer',
    icon: 'https://img.icons8.com/fluency/512/logo.png',
  },
  {
    title: 'React Native Developer',
    icon: 'https://img.icons8.com/officel/512/react.png',
  },
  {
    title: 'Backend Developer',
    icon: 'https://img.icons8.com/external-nawicon-outline-color-nawicon/512/external-welder-labour-day-nawicon-outline-color-nawicon.png',
  },
  {
    title: 'Content Creator',
    icon: 'https://img.icons8.com/clouds/512/blender-3d.png',
  },
]
const ServiceCard = ({ index, title, icon }) => (
 
  <Tilt className='w-full xs:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary py-5 px-12'
      >
        <img
          src={icon}
          alt='web-development'
          className='h-16 w-16 object-contain'
        />

        <h3 className='text-center text-[20px] font-bold text-white'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span className='hash-span' id="about">
          &nbsp;
        </span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary'
      >
     
        Three.jcalable, and user-friendly solutions that solve
        real-world problems.s work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div>
         </motion.section>
    </>
  );
};

export default About;
