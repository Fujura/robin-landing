import React from "react";
import styles from "./FormContent.module.scss";
interface Idata {
  name: string;
  email: string;
  message: string;
}
export const FormContent = () => {
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [data, setData] = React.useState<Idata>({
    name: "",
    email: "",
    message: "",
  });
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    if (!data.message || !data.email) {
      setIsSubmit(false)
      alert('Введите все данные в форму')
      return;
    }
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false)  
    }, 3000);
    setData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <form className={styles.form__Container} onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        autoComplete="name"
        id="name"
        name="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <label htmlFor="email">Email</label>
      <input
        autoComplete="email"
        id="email"
        type="email"
        name="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        value={data.message}
        id="message"
        onChange={(e) => setData({ ...data, message: e.target.value })}
        maxLength={1000}
        className={styles.textarea}
      />
      {isSubmit ? <p>Submited!</p> : <p></p>}
      <button className={styles.button}>Let’s get started</button>
    </form>
  );
};
