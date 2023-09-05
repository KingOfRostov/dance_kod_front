import Image from 'next/image'
import Gain from '/public/dance.gif'
import Trophy from '/public/trophy.gif'
import LoveDance from '/public/love.gif'
import WayUp from '/public/team.gif'
import styles from './guaranties.module.scss'

export const Guaranties = () => (
  <div className={styles.root}>
    <h1 className="page-header-text">
      Почему <span className="pink">‌Вам нужно в <b>KOD</b></span>?
    </h1>

    <div className={styles.guaranties_block}>
      <div className={styles.guaranty_block}>
        <Image
          className={styles.guaranty_image}
          width={377}
          height={377}
          src={Gain}
          alt="Dance KOD. Школа танцев КОД. Ростов-на-Дону школа танцев для детей."
        />
        <p className={styles.guaranty_text}>
          <span className="pink">Мы гарантируем</span> профессиональный и грамотный
          подход к <span className="pink">каждому </span>
          ученику и <span className="pink">рост</span> в танцевальных направлениях
        </p>
      </div>


      <div className={styles.guaranty_block}>
        <p className={styles.guaranty_text}>
          <span className="pink">Нас ждет множество</span> мероприятий, конкурсов, фестивалей, мастер-классов и
          <span className="pink"> насыщенных занятий </span>
        </p>
        <Image
          className={styles.guaranty_image}
          width={377}
          height={377}
          src={Trophy}
          alt="Dance KOD. Школа танцев КОД. Ростов-на-Дону школа танцев для детей."
        />
      </div>


      <div className={styles.guaranty_block}>
        <Image
          className={styles.guaranty_image}
          width={377}
          height={377}
          src={LoveDance}
          alt="Dance KOD. Школа танцев КОД. Ростов-на-Дону школа танцев для детей."
        />
        <p className={styles.guaranty_text}>
          <span className="pink">В нашей команде есть</span> место тем, кто
          разделяет нашу <span className="pink">любовь к</span> танцам и готов
          отдаться этому <span className="pink">искусству</span>
        </p>
      </div>


      <div className={styles.guaranty_block}>
        <p className={styles.guaranty_text}>
          <span className='pink'>С</span> <span className="pink font-caveat fs-30">KOD</span> пробиваться к большой сцене
          <span className='pink'> будет насыщенно и</span> очень <span className='pink'>интересно</span>
        </p>
        <Image
          className={styles.guaranty_image}
          width={377}
          height={377}
          src={WayUp}
          alt="Dance KOD. Школа танцев КОД. Ростов-на-Дону школа танцев для детей."
        />
      </div>


    </div>
  </div>

)
