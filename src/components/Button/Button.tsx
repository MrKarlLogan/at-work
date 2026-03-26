import { IButton } from "@/types/button";
import styles from "./Button.module.scss";

const Button = (props: IButton) => {
  const { title, type = "button", disabled = false } = props;

  return (
    <button className={styles.btn} type={type} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
