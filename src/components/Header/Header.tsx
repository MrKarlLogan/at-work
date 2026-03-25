import FavoriteSVG from "@/assets/svg/FavoriteSvg";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import NotificationSVG from "@/assets/svg/NotificationSvg";
import { imgs } from "@/assets/img";

const mockUser = {
  name: "Mr.Offer",
  img: imgs[0],
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.icons}>
          <FavoriteSVG />
          <NotificationSVG />
        </div>
        <div className={styles.user}>
          <img src={mockUser.img} alt="Ваш аватар" className={styles.avatar} />
          <span>{mockUser.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
