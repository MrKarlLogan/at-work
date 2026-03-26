import styles from "./SkeletonEditPage.module.scss";

const SkeletonEditPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonBack}></div>
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <div className={styles.skeletonAvatar}></div>
          <div className={styles.profile_data}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonMenuItem}></div>
            <div className={styles.skeletonMenuItem}></div>
            <div className={styles.skeletonMenuItem}></div>
          </div>
        </div>
        <div className={styles.descriptionBox}>
          <div className={styles.skeletonSectionTitle}></div>
          <div className={styles.input_section}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className={styles.skeletonInput}>
                <div className={styles.skeletonLabel}></div>
                <div className={styles.skeletonField}></div>
              </div>
            ))}
          </div>
          <div className={styles.skeletonButton}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonEditPage;