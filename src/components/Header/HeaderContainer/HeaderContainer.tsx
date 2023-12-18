import styles from "./HeaderContainer.module.scss";
export const HeaderContainer = () => {
  return (
    <div className={styles.container}>
      <div className={`flex  ${styles.box} items-center`}>
        <div className={styles.header__img} />
        <div className={styles.title__container}>
          <h1 className={`text-white font-bold ${styles.title}`}>
            I’m Robin Williams. 
            <br />
            A Product Designer
            <br />
            <span className={styles.text__gray}>based in Italy.</span>
          </h1>
          <p className={`text-white ${styles.title__text}`}>
            I’m probably the most passionate designer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>
      </div>
    </div>
  );
};
