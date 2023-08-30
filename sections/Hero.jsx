'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPadding} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
    // viewport mean that the element only animate once
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}

    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div variants={textVariant(1.3)} className="flex flex-row  justify-center items-center">
          {/* {socials.map((social, index) => (
            <button>
              <img src={social.url} alt={social.name} />
            </button>

          ))

          } */}
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient
        rounded-tl-[140px] z-10 -top-[30px]"
        />
        <img
          src="/cover.png"
          className="w-full sm:h-[400px] h-[350px] object-cover
          rounded-tl-[140px] z-10 relative
          " alt="cover"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] z-10 relative">
            <img src="/stamp.png" alt="stamp"
              className="sm:w-[155px] sm:h-[155px] w-[100px]  h-[100px] object-contain"
            />
          </div>
        </a>

      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
