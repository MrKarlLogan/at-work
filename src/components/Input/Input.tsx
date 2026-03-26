import { useId } from "react";
import styles from "./Input.module.scss";
import { IInput } from "@/types/input";

const Input = (props: IInput) => {
  const { title, name, type = "text", register, error, defaultValue } = props;
  const id = useId();

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>
        {title}
      </label>
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
      />
      <button className={styles.btn_reset}></button>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default Input;
