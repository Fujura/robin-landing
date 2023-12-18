import { FC } from "react";
import { ISkillSection } from "@/interfaces/IskillSection";
import styles from './SkillItem.module.scss'
export const SkillItem: FC<ISkillSection> = ({ img, text, title }) => {
  return (
    <li className={styles.item__Container}>
      <img src={img} alt="icon" />
      <h4 className={styles.title}>{title}</h4>
      <p>{text}</p>
    </li>
  );
};
