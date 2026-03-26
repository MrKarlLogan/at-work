import { ISection } from "@/types/section";
import styles from "./Section.module.scss";

const Section = (props: ISection) => {
  const { title, children } = props;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
