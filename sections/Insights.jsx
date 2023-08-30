'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} ${styles.flexCenter} flex-col relative z-10`}>
    <TypingText title="|Insight" />
    <TitleText title="Insight about metaverse" />
    <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: 'false', amount: 0.25 }}
      className="flex flex-col gap-4 mt-[60px] "

    >
      {
        insights.map((insight, index) => <InsightCard key={index} index={index} {...insight} />)
      }

    </motion.div>

  </section>
);

export default Insights;
