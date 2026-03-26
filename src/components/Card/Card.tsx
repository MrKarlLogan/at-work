import styles from "./Card.module.scss";
import DropDownSvg from "./DropDownSvg/DropDownSvg";
import DropDown from "../DropDown/DropDown";
import { useState, useRef, useEffect } from "react";
import defaultImg from "@assets/defaultImg.webp";
import { useNavigate } from "react-router-dom";
import { CardProps } from "@/types/card";

const Card = (props: CardProps) => {
  const { data, onArchive, onHide, onUnarchive, type } = props;
  const navigate = useNavigate();
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
      )
        setShowDropDown(false);
    };

    if (showDropDown)
      document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropDown]);

  const handleAction = (action: string) => {
    setShowDropDown(false);
    switch (action) {
      case "edit":
        navigate(`/edit/${data.id}`);
        break;
      case "archive":
        onArchive?.(data.id);
        break;
      case "hide":
        onHide?.(data.id);
        break;
      case "unarchive":
        onUnarchive?.(data.id);
        break;
    }
  };

  return (
    <div className={styles.card}>
      <img
        src={defaultImg}
        alt={`Аватар пользователя ${data.name}`}
        className={`${styles.img} ${type === "archived" ? styles.archive_img : ""}`}
      />
      <div className={styles.description}>
        <div className={styles.title_box}>
          <h3
            className={`${styles.name} ${type === "archived" ? styles.archive_name : ""}`}
          >
            {data.name}
          </h3>
          <button
            ref={buttonRef}
            className={styles.btnDropDown}
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <DropDownSvg />
          </button>
          {showDropDown && (
            <div ref={dropdownRef} className={styles.dropdownWrapper}>
              <DropDown
                type={type === "active" ? "one" : "two"}
                onAction={handleAction}
              />
            </div>
          )}
        </div>
        <span
          className={`${styles.company} ${type === "archived" ? styles.archive_company : ""}`}
        >
          {data.company.name}
        </span>
        <span
          className={`${styles.city} ${styles.name} ${type === "archived" ? styles.archive_city : ""}`}
        >
          {data.address.city}
        </span>
      </div>
    </div>
  );
};

export default Card;
