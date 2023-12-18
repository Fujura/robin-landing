// Photos.tsx

import { Iphotos } from "@/interfaces/Iphotos";
import{ FC, useEffect } from "react";
import styles from "./Photos.module.scss";
import { motion, useAnimation } from "framer-motion";

export const Photos: FC<Iphotos> = ({ image1, image2, image3, image4 }) => {
  const containerAnimation = useAnimation();

  // Preload images when the component mounts
  useEffect(() => {
    const preloadImages = [image1, image2, image3, image4];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [image1, image2, image3, image4]);

  // Animation to trigger when the country changes
  const animateContainer = async () => {
    await containerAnimation.start({ scale: 0, opacity: 0 });
    containerAnimation.start({
      rotate: 0,
      scale: 1,
      opacity: 1,
    });
  };

  // Run the animation when the component mounts or when the country changes
  useEffect(() => {
    animateContainer();
  }, [image1, image2, image3, image4]);

  return (
    <div className={styles.img__Container}>
      <motion.div animate={containerAnimation} className={styles.div__Animation}>
        <img className={styles.img} src={image1} alt="image 1" />
      </motion.div>

      <motion.div animate={containerAnimation} className={styles.div__Animation}>
        <img className={styles.img} src={image2} alt="image 2" />
      </motion.div>

      <motion.div animate={containerAnimation} className={styles.div__Animation}>
        <img className={styles.img} src={image3} alt="image 3" />
      </motion.div>

      <motion.div animate={containerAnimation} className={styles.div__Animation}>
        <img className={styles.img} src={image4} alt="image 4" />
      </motion.div>
    </div>
  );
};