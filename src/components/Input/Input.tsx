import { useId, useRef, useState, useEffect } from "react";
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
    isDirty,
  } = props;

  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [hasValue, setHasValue] = useState(!!defaultValue);
  const { onChange, onBlur, ref, name: fieldName } = register(name);

  useEffect(() => {
    if (inputRef.current) {
      setHasValue(!!inputRef.current.value);
    }
  }, [defaultValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!event.target.value);
    onChange(event);
  };

  const handleFocus = () => {
    setIsFocus(true);

    if (inputRef.current) setHasValue(!!inputRef.current.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur(event);
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onReset?.(name);
    setHasValue(false);
    inputRef.current?.focus();
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>
        {title}
      </label>
      <input
        id={id}
        name={fieldName}
        type={type}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={(event) => {
          ref(event);
          inputRef.current = event;
        }}
        className={`
          ${styles.input}
          ${error ? styles.errorInput : ""}
          ${isDirty ? styles.dirtyInput : ""}
        `}
      />
      {isFocus && hasValue && (
        <button
          type="button"
          className={styles.btn_reset}
          onMouseDown={handleReset}
        />
      )}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default Input;
