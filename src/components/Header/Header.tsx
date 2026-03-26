import FavoriteSVG from "@assets/svg/FavoriteSvg";
import NotificationSVG from "@assets/svg/NotificationSvg";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import defaultImg from "@assets/defaultImg.webp";

const mockUser = {
  //Я ни на что не намекаю, но... :)
  name: "Mr.Offer",
  img: defaultImg,
};

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <Logo />
      <div className={styles.icons}>
        <FavoriteSVG />
        <NotificationSVG />
      </div>
      <div className={styles.user}>
        <img src={mockUser.img} alt="Ваш аватар" className={styles.avatar} />
        <span className={styles.name}>{mockUser.name}</span>
      </div>
    </div>
  </header>
);

export default Header;
