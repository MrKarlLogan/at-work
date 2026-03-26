import styles from "./DropDown.module.scss";
import { DropDownProps } from "./types";

const DropDown = ({ type, onAction }: DropDownProps) => (
  <div className={styles.dropdown}>
    {type === "one" ? (
      <>
        <button
          type="button"
          className={styles.btn}
          onClick={() => onAction("edit")}
        >
          Редактировать
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => onAction("archive")}
        >
          Архивировать
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => onAction("hide")}
        >
          Скрыть
        </button>
      </>
    ) : (
      <button
        type="button"
        className={styles.btn}
        onClick={() => onAction("unarchive")}
      >
        Активировать
      </button>
    )}
  </div>
);

export default DropDown;
