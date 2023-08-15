import Image from 'next/image'
import styles from "./kids_carousel.module.scss";

export const KidsCarousel = () => {
  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel}>
        <Image
          className={styles.carousel_photo}
          src="/us_1.jpg"
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
        <Image
          className={styles.carousel_photo}
          src="/us_2.jpg"
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
        <Image
          className={styles.carousel_photo}
          src="/us_3.jpg"
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
        <Image
          className={styles.carousel_photo}
          src="/us_4.jpg"
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
      </div>
    </div>

  );
};
