import styles from "../styles";

const StartSteps = ({number,text}) => (
  <div className={`${styles.flexCenter } flex-row gap-3`}>
    <div className={` ${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    
      <p className="flex-1 text-gray-500 leading-8 ml-8 text-[18px] font-semibold">{text}</p>
   
  </div>
);

export default StartSteps;
