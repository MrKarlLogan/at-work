import { imgs } from "@/assets/img";
import { User } from "@/types/user";
import styles from "./Card.module.scss";
import DropDownSvg from "./DropDownSvg/DropDownSvg";
import DropDown from "../DropDown/DropDown";
import { useState, useRef, useEffect } from "react";

const Card = (props: { data: User; index: number }) => {
  const { data, index } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <div className={styles.card}>
      <img
        src={imgs[index]}
        alt={`Аватар пользователя с ником ${data.name}`}
        className={styles.img}
      />
      <div className={styles.description}>
        <div className={styles.title_box}>
          <h3 className={styles.name}>{data.name}</h3>
          <button
            ref={buttonRef}
            className={styles.btnDropDown}
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <DropDownSvg />
          </button>
          {showDropDown && (
            <div ref={dropdownRef} className={styles.dropdownWrapper}>
              <DropDown type="one" />
            </div>
          )}
        </div>
        <span className={styles.company}>{data.company.name}</span>
        <span className={styles.city}>{data.address.city}</span>
      </div>
    </div>
  );
};

export default Card;
