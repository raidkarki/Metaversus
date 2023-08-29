'use client';
import { motion } from "framer-motion";
import styles from '../styles'
import {fadeIn,planetVariants,staggerContainer} from '../utils/motion'
import { TitleText,TypingText ,} from "../components";
import {  newFeatures } from "../constants";
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:'false' ,amount:0.25}}
    className={`${styles.flexCenter} mx-auto flex lg:flex-col flex-col `}
    >
      <TypingText title="| People on the world " textStyles="text-center"></TypingText>
      <TitleText title={<>Track freinds around you and invite them to play together in the same worls</>}
       textStyles="text-center" >

      </TitleText>
      <motion.div variants={fadeIn("up","tween",0.3,1)} className="relative mt-[68px] flex w-full h0 z-10">
        <img src="/map.png" className="w-full h-full object-cover" alt="map"  />
        <div className="absolute bottom-10 right-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
         <div className="absolute top-10 left-28 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
         <div className="absolute bottom-[50%] right-[50%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
