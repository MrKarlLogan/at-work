import { useEffect } from "react";
import styles from "./Popup.module.scss";
import CloseSVG from "./svg/CloseSVG";
import PopupSVG from "./svg/PopupSvg";

const Popup = (props: { title: string; onClose: () => void }) => {
  const { title, onClose } = props;

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
