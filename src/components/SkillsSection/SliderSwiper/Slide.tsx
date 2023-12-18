import { Islide } from "@/interfaces/Islides";
import { FC } from "react";
import "swiper/css";
import styles from './Slide.module.scss'

export const Slide: FC<Islide> = ({ img }) => {
  return (
    <div className={styles.box}>
      <img src={img} alt="icon" />
    </div>
  );
};
