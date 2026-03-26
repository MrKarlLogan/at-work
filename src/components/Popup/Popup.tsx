import { useEffect } from "react";
import styles from "./Popup.module.scss";
import CloseSVG from "./svg/CloseSVG";
import PopupSVG from "./svg/PopupSvg";
import { IPopup } from "./types";

const Popup = ({ title, onClose }: IPopup) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          <CloseSVG />
        </button>
        <PopupSVG />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Popup;
