import Image from 'next/image'
import ImageUs1 from '/public/us_1.jpg'
import ImageUs2 from '/public/us_2.jpg'
import ImageUs3 from '/public/us_3.jpg'
import ImageUs4 from '/public/us_4.jpg'
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
          src={ImageUs1}
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
        <Image
          className={styles.carousel_photo}
          src={ImageUs2}
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
        <Image
          className={styles.carousel_photo}
          src={ImageUs3}
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
        <Image
          className={styles.carousel_photo}
          src={ImageUs4}
          width={800}
          height={534}
          alt="Dance KOD коллектив. Школа танцев. Дети"
        />
      </Carousel>
    </div >

  );
};
