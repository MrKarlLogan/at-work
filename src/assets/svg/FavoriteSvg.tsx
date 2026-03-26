import styles from "./Svg.module.scss";

const FavoriteSVG = () => (
  <div className={styles.svgWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={styles.svg}
    >
      <path
        stroke="#595959"
        strokeWidth="1.2"
        d="M10.88 2.728c1.64 0 2.92 1.28 2.92 2.92 0 1.012-.45 1.978-1.364 3.096-.921 1.127-2.251 2.334-3.911 3.839h-.001l-.527.479-.523-.474c-1.66-1.508-2.988-2.716-3.91-3.843C2.65 7.626 2.2 6.66 2.2 5.647c0-1.639 1.28-2.92 2.92-2.92.931 0 1.836.438 2.423 1.127L8 4.391l.456-.537a3.23 3.23 0 0 1 2.424-1.126Z"
      />
    </svg>
  </div>
);

export default FavoriteSVG;
