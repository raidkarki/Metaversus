'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[1] flex justify-center flex-col "
      >
        <TypingText title="|whats new" />
        <TitleText title={<>What's new about metaversus</>} />
        <div className={`flex lg:flex-row gap-5 justify-between ${styles.topPaddings}`}>
          {newFeatures.map((newfeature, index) => (
            <div key={index} className="flex flex-col">
              <div className={`w-[80px] h-[80px] rounded-[24px]  bg-[#323f5d] ${styles.flexCenter}`}>
                <img src={newfeature.imgUrl} className="w-[40%]" alt={newfeature.title} />
              </div>
              <h3 className="text-white text-bold leading-6 text-[24px] mt-6">{newfeature.title}</h3>
              <p className="text-gray-300 text-[18px] mt-6 ">{newfeature.subtitle}</p>
            </div>
          )) }

        </div>

      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
        viewport={{ once: 'false', amount: 0.25 }}
      >
        <img src="/whats-new.png" alt="planet" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
    </motion.div>

  </section>
);

export default WhatsNew;
