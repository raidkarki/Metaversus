'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';

const InsightCard = ({ index, imgUrl, title, subtitle }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.2, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25 }}
    className="flex md:flex-row flex-col group content-center justify-center  md:justify-between gap-5 "
  >
    <img src={imgUrl} alt={title} className=" w-[270px] h-[250px] rounded-[24px] mx-auto  object-cover" />

    <div className={`w-full  flex justify-between ${styles.flexCenter} `}>
      <div className="flex-1 group:order-1 md:ml-[62px]  flex  flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px]  text-white">{title}</h4>
        <p className="mt-[16px]   font-normal lg:text-[14px] text-[14px] text-secondary-white ">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full
        bg-transparent border-[1px] border-white "
      >
        <img src="/arrow.svg" alt="arrow"
          className=" w-[40%] h-[40%] object-contain "
        />
      </div>
    </div>

  </motion.div>
);

export default InsightCard;
