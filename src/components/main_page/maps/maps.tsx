import styles from './maps.module.scss'

export const Maps = () => (
  <div>
    <h1 className="page-header-text">Адреса</h1>
    <div className={styles.maps_container}>
      <div className={styles.map}>
        <h3 className={styles.map_header_text}>ул. Днепропетровская 27</h3>
        <h5 className={styles.map_header_subtext}>2-й пос. Орджоникидзе</h5>
        <iframe
          className={styles.map_iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.2415846124986!2d39.78696977704579!3d47.270531811123355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b7136cd31dc9%3A0xc5932a89450ac1cc!2z0YPQuy4g0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8sIDI3LCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMzQ0MDIw!5e0!3m2!1sru!2sru!4v1692049563874!5m2!1sru!2sru"
        ></iframe>
      </div>
      <div className={styles.map}>
        <h3 className={styles.map_header_text}>пер. Ольховский 71</h3>
        <h5 className={styles.map_header_subtext}>Северный</h5>
        <iframe
          className={styles.map_iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.1169047116414!2d39.717179977045824!3d47.272969210956006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b81f8ab782b9%3A0xf0db6e4238163699!2z0J7Qu9GM0YXQvtCy0YHQutC40Lkg0L_QtdGALiwgNzEsINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCAzNDQwNjg!5e0!3m2!1sru!2sru!4v1692049911084!5m2!1sru!2sru"
        ></iframe>
      </div>
    </div>
  </div>
)
