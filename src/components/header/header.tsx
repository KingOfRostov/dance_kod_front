import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        Dance <span className='red'> KOD </span>{" "}
      </h1>
      <h2 className={styles.subTitle}>
        <span className='red'>К</span>омьюнити{" "}
        <span className='red'>О</span>даренных{" "}
        <span className='red'>Д</span>етей
      </h2>
      <h2 className={styles.subTitle}>Школа танцев</h2>

      <hr />
    </div>
  );
};
