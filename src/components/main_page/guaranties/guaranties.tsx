import styles from './guaranties.module.scss'

export const Guaranties = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <h1 className="page-header-text">
        Почему <span className="pink">‌Вам нужно в <b>KOD</b></span>?
      </h1>
      <div className={styles.timeline}>
        <div className={styles.outer}>

          <div className={styles.card}>
            <div className={styles.info}>
              <p className={styles.guaranty_text}>
                <span className="pink">Мы гарантируем</span> профессиональный и грамотный
                подход к <span className="pink">каждому </span>
                ученику и <span className="pink">рост</span> в танцевальных направлениях
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.info}>
              <p className={styles.guaranty_text}>
                <span className="pink">Нас ждет множество</span> мероприятий, конкурсов, фестивалей, мастер-классов и
                <span className="pink"> насыщенных занятий </span>
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.info}>
              <p className={styles.guaranty_text}>
                <span className="pink">В нашей команде есть</span> место тем, кто
                разделяет нашу <span className="pink">любовь к</span> танцам и готов
                отдаться этому <span className="pink">искусству</span>
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.info}>
              <p className={styles.guaranty_text}>
                <span className='pink'>С</span> <span className="pink font-caveat fs-30">KOD</span> пробиваться к большой сцене
                <span className='pink'> будет насыщенно и</span> очень <span className='pink'>интересно</span>
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

)
