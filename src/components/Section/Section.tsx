import styles from "./Section.module.scss";
import { ISection } from "./types";

const Section = ({ title, children }: ISection) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

export default Section;
