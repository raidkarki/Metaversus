'use client';
import { motion } from "framer-motion";
import styles from '../styles'
import {fadeIn} from '../utils/motion'


const ExploreCard = ({world,index,active,handelClick}) => {
  const {id,imgUrl,title} = world;

return (
  
  <motion.div
  variants={fadeIn('right','spring',index*0.2,1)}
  className={`relative 
  ${active===id ?'lg:flex-[3.5] flex-[6] ':'lg:flex-[0.5] flex-[2] '}
  flex items-center justify-center
   cursor-pointer 
  min-w-[170px] h-[700px] 
  transition-[flex] duration-[0.7s]'}`
  
  }
  onClick={()=>handelClick(id)}
  
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full rounded-[24px] object-cover " />
    {active!==id ? (
      <h3 className="
      font-semibold sm-text-[26px] text-[18px]
       text-white absolute z-0 
      lg:bottom-20 lg:rotate-[-90deg] 
      lg:origin-[0,0]">
        {title}
      </h3> ):
      (
      <div className="absolute bottom-0 p-8 justify-start flex
      w-full lg:flex-col flex-row bg-[rgba(50,72,106,0.5)] rounded-[24px] sm:items-center gap-2
      ">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px]
       glassmorphism mb-[16px]`}>
        <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain"  />
        </div>
        <p className="font-normal text-[16px] text-white leading-[20px] uppercase ">
        {title}
        </p>
        

      </div>)}
  </motion.div>
);}

export default ExploreCard;
