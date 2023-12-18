import { FC } from "react";
import { IexperinceSection } from "@/interfaces/IexperienceSection";
import styles from "./PostItem.module.scss";
export const PostItem: FC<IexperinceSection> = ({ id, title, text, titleColor }) => {
  return (
    <li className={styles.box}>
      <div className={styles.text__Container}>
        <h4 className={styles.titleNum}>0{id}</h4>
        <h6 className={`${styles.title} ${titleColor}`}>{title}</h6>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
};
