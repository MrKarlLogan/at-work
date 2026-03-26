import styles from "./Button.module.scss";
import { IButton } from "./types";

const Button = ({
  title,
  type = "button",
  disabled = false,
  ...otherProps
}: IButton) => {
  return (
    <button
      className={styles.btn}
      type={type}
      disabled={disabled}
      {...otherProps}
    >
      {title}
    </button>
  );
};

export default Button;
