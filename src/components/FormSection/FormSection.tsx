import { FormContent } from "./FormContent/FormContent";
import styles from './FormSection.module.scss'
export const FormSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text__Container}>
        <h2 className={styles.title}>Let’s get started</h2>
        <p className={styles.text}>
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </p>
      </div>
        <FormContent />
    </section>
  );
};
