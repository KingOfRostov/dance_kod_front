import Image from 'next/image'
import styles from "./kids_carousel.module.scss";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const KidsCarousel = () => {
  return (
    <div className={styles.carousel_container}>
      <Carousel
        autoFocus={true}
        centerMode={true}
        showArrows={false}
        autoPlay={true}
        interval={2500}
        transitionTime={1000}
        infiniteLoop={true}
        showThumbs={false}
      >
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
      </Carousel>
    </div >

  );
};
