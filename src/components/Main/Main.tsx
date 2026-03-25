import styles from "./Main.module.scss";

const Main = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return <main className={styles.main}>{children}</main>;
};

export default Main;
