import { User } from "@/types/user";
import styles from "./Section.module.scss";
import Card from "../Card/Card";

interface ISection {
  title: string;
  items?: User[];
}

const Section = (props: ISection) => {
  const { title, items } = props;
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items &&
          items
            .slice(0, 6)
            .map((card: User, index) => <Card data={card} index={index} />)}
      </ul>
    </section>
  );
};

export default Section;
