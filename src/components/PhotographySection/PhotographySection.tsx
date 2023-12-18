// PhotographySection.tsx

import React from "react";
import { italyData } from "./PhotoData/italyData";
import { brazilData } from "./PhotoData/brazilData";
import { indiaData } from "./PhotoData/indiaData";
import { australiaData } from "./PhotoData/australiaData";
import { Photos } from "./Photos/Photos";
import styles from "./PhotographySection.module.scss";
import { motion } from "framer-motion";

export const PhotographySection = () => {
  const [data, setData] = React.useState(italyData);
  const [selectedCountry, setSelectedCountry] = React.useState('italy');
  const onClickHandler = (value: string) => {
    switch (value) {
      case "italy":
        setData(italyData);
        break;
      case "australia":
        setData(australiaData);
        break;
      case "india":
        setData(indiaData);
        break;
      case "brazil":
        setData(brazilData);
        break;
      default:
        setData(italyData);
        break;
    }
    setSelectedCountry(value);
  };

  return (
    <section>
      <h2>Photography</h2>
      <p>
        Here is a collection of my best travel pictures that I took while
        travelling places all around the world.
      </p>
      <div className={styles.btn__Container}>
        <button
          style={{
            backgroundColor:
              selectedCountry === "italy" ? "#5221E6" : "inherit",
          }}
          className={styles.button}
          onClick={() => onClickHandler("italy")}
        >
          Italy
        </button>
        <button
        style={{
            backgroundColor:
              selectedCountry === "australia" ? "#5221E6" : "inherit",
          }}
          className={styles.button}
          onClick={() => onClickHandler("australia")}
        >
          Australia
        </button>
        <button
        style={{
            backgroundColor:
              selectedCountry === "india" ? "#5221E6" : "inherit",
          }}
          className={styles.button}
          onClick={() => onClickHandler("india")}
        >
          India
        </button>
        <button
        style={{
            backgroundColor:
              selectedCountry === "brazil" ? "#5221E6" : "inherit",
          }}
          className={styles.button}
          onClick={() => onClickHandler("brazil")}
        >
          Brazil
        </button>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Photos
          image1={data.image1}
          image2={data.image2}
          image3={data.image3}
          image4={data.image4}
        />
      </motion.div>
    </section>
  );
};
