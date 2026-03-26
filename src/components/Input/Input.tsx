import { useId, useRef, useState } from "react";
import styles from "./Input.module.scss";
import { IInput } from "@/types/input";

const Input = (props: IInput) => {
  const {
    title,
    name,
    type = "text",
    register,
    error,
    defaultValue,
    onReset,
  } = props;
  const id = useId();
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { onBlur, ref } = register(name);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur(event);
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onReset?.(name);
    inputRef.current?.focus();
  };

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
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={(evet) => {
          ref(evet);
          inputRef.current = evet;
        }}
      />
      {isFocus && (
        <button
          type="button"
          className={styles.btn_reset}
          onMouseDown={handleReset}
        ></button>
      )}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default Input;
