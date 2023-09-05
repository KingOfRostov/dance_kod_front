import Image from 'next/image'
import Anastasia from '/public/anastasia-empty.png'
import Tatiana from '/public/tatiana-empty.png'
import Victoria from '/public/victoria-empty.png'
import Luba from '/public/luba-empty-2.png'

import styles from './teachers.module.scss'

export const Teachers = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.main_header}> Наш преподавательский состав</h1>
        <p className={styles.subtitle_header}>
          Преданные, страстные и опытные профессионалы,
        </p>
        <p className={styles.subtitle_header}>
          посвятившие себя вдохновению будущих танцевальных звезд.
        </p>

        <div className={styles.teacher_card}>
          <Image
            style={{ position: 'relative', top: '-70px' }}
            height={440}
            src={Anastasia}
            alt="Анастасия Михайлец. Руководитель школы танцев КОД (KOD) Ростов-на-Дону"
          />
          <div>
            <p className={styles.teacher_name}>Анастасия Михайлец</p>
            <p className={styles.teacher_info}>Художественный руководитель
              <br />
              <span className={styles.dance_kod}>Dance KOD</span></p>
          </div>
        </div>

        <div className={styles.teacher_card}>
          <div>
            <p className={styles.teacher_name}>Татьяна Данченко</p>
            <p className={styles.teacher_info}>Художественный руководитель
              <br />
              <span className={styles.dance_kod}>Dance KOD</span></p>
          </div>
          <Image
            style={{ position: 'relative', top: '-95px' }}
            height={485}
            src={Tatiana}
            alt="Татьяна Данченко. Руководитель школы танцев КОД (KOD) Ростов-на-Дону"
          />
        </div>

        <div className={styles.teacher_card}>
          <Image
            style={{ position: 'relative', top: '-50px' }}
            height={400}
            src={Victoria}
            alt="Виктория Михайлец. Хореограф-постановщик школы танцев КОД (KOD) Ростов-на-Дону"
          />
          <div>
            <p className={styles.teacher_name}>Виктория Михайлец</p>
            <p className={styles.teacher_info}>Хореограф постановщик
              <br />
              <span className={styles.dance_kod}>Dance KOD</span></p>
          </div>
        </div>

        <div className={styles.teacher_card}>
          <div>
            <p className={styles.teacher_name}>Любовь Ерицьян</p>
            <p className={styles.teacher_info}>Тренер по акробатике
              <br />
              <span className={styles.dance_kod}>Dance KOD</span></p>
          </div>
          <Image
            style={{ position: 'relative', top: '-46px', right: '-100px' }}
            height={440}
            src={Luba}
            alt="Любовь Ерицьян. Тренер по акробатике в школе танцев КОД (KOD) Ростов-на-Дону"
          />
        </div>
      </div>
    </div>
  )
}
