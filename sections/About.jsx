'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} z-10 relative  `}>
    <div className="gradient-02 z-0" />
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto ${styles.flexCenter}  flex-col`}
    >
      <TypingText title="about Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px]
              text-center text-secondary-white"
      >

        <span className="font-extrabold text-white">Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like
        it's really real, you can feel what you feel in this metaverse world, because this is really the <span>metaverse </span>
        <span className="font-extrabold text-white">madness of the metaverse</span>  of today, using only <span className="text-extrabold text-white">VR </span> devices you can easily explore the
        world you want, turn your dreams into reality.
        Let's explore the madness of the <span className="font-extrabold text-white">metaverse</span> by scrolling down
      </motion.p>
      <motion.img
        className="self-center"
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
      />
    </motion.div>

  </section>
);

export default About;
