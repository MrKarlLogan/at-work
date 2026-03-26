import styles from "./SkeletonCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImg}></div>
      <div className={styles.skeletonDescription}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonCompany}></div>
        <div className={styles.skeletonCity}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
