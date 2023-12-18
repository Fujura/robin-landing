import  { FC } from "react";
import { skillItems } from "./SkillItem/data/SkillItemData";
import { SkillItem } from "./SkillItem/SkillItem";
import styles from './SkillsSection.module.scss'
import SliderSwiper from "./SliderSwiper/SliderSwiper";

export const SkillsSection: FC = () => {
  return (
    <section >
       <div className={styles.container}>
        <div className={styles.text__Container}>
        <h2 className={styles.title}>Skillset</h2>
        <p className={styles.text}>
          With skills in over 4 different fields of design, I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </p>
      </div>
      <ul className={styles.list__Container}>
        {skillItems.map(item =>(
            <SkillItem key={item.id} img={item.img} title={item.title} text={item.text} />
        ))}
      </ul>
       </div>
       <SliderSwiper />
    </section>
  );
};
