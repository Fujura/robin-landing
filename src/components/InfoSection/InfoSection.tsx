import { FC } from "react";
import styles from "./InfoSection.module.scss";
import { Iinfo } from "@/interfaces/Iinfo";

export const InfoSection: FC<Iinfo> = ({title, text, textInfo, bgColor, img}) => {
  return (
    <section className={`${styles.box}`} style={{backgroundColor: bgColor}}>
      <div className={styles.text__Container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>
         {text}
        </p>
        <a href="#">
          <p className={styles.text__info}>{textInfo}</p>
        </a>
        <div className={styles.line} />
      </div>
      <div className={styles.img__Container}>
        <img src={img} alt="" className={styles.img}/>
      </div>
    </section>
  );
};
