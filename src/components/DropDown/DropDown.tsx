import styles from "./DropDown.module.scss";

const DropDown = (props: { type: "one" | "two" }) => {
  const { type = "one" } = props;

  return (
    <div className={styles.dropdown}>
      {type === "one" ? (
        <>
          <button type="button" className={styles.btn}>
            Редактировать
          </button>
          <button type="button" className={styles.btn}>
            Архивировать
          </button>
          <button type="button" className={styles.btn}>
            Скрыть
          </button>
        </>
      ) : (
        <button type="button" className={styles.btn}>
          Активировать
        </button>
      )}
    </div>
  );
};

export default DropDown;
