import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        Dance <span className={styles.red}> KOD </span>{" "}
      </h1>
      <h2 className={styles.subTitle}>
        <span className={styles.red}>К</span>омьюнити{" "}
        <span className={styles.red}>О</span>даренных{" "}
        <span className={styles.red}>Д</span>етей
      </h2>
      <h2 className={styles.subTitle}>Школа танцев</h2>

      <hr />
    </div>
  );
};
