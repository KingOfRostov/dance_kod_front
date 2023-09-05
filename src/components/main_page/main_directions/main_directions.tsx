import Image from 'next/image'
import ImageChoreography from '/public/modern-f.jpg'
import ImageClassicalDance from '/public/ballet.jpg'
import ImageStretching from '/public/stretching-photo.png'
import ImageJazz from '/public/jazz-d.jpeg'
import ImageAcrobatic from '/public/acro.png'
import ImageCommonFp from '/public/sport.jpg'

import styles from './main_directions.module.scss'

export const MainDirections = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className="page-header-text">
          Основные направления
        </h1>

        <ul className={styles.ul_2_cols}>
          <li>
            <div>
              <Image
                src={ImageChoreography}
                className={styles.direction_image_block}
                width={307}
                height={307}
                alt="Современная хореография"
              />
            </div>
            <p className={styles.direction_title}>
              Современная хореография
            </p>
            <p className={styles.direction_description}>
              Псс... Мы обучаем танцевальным движениям, которые пригодятся вам под быстрые мелодии сегодняшних дней!
            </p>
          </li>
          <li>
            <div>
              <Image
                src={ImageClassicalDance}
                className={styles.direction_image_block}
                width={307}
                height={307}
                alt="Классический танец"
              />
            </div>
            <p className={styles.direction_title}>
              ‌Классический танец
            </p>
            <p className={styles.direction_description}>Куда же без классики.</p>
          </li>
          <li>
            <div>
              <Image
                src={ImageStretching}
                className={styles.direction_image_block}
                width={307}
                height={307}
                alt="Стретчинг"
              />
            </div>
            <p className={styles.direction_title}>
              Стретчинг
            </p>
            <p className={styles.direction_description}>Будет больно, но гибкость лишней не бывает!</p>
          </li>
          <li>
            <div>
              <Image src={ImageJazz} className={styles.direction_image_block} width={307} height={307} alt="Джаз" />
            </div>
            <p className={styles.direction_title}>
              Джаз
            </p>
            <p className={styles.direction_description}>Учим двигаться под заразительные ритмы джазовой музыки.</p>
          </li>
          <li>
            <div >
              <Image
                src={ImageAcrobatic}
                className={styles.direction_image_block}
                width={307}
                height={307}
                alt="Акробатика"
              />
            </div>
            <p className={styles.direction_title}>
              Акробатика
            </p>
            <p className={styles.direction_description}>Крутим-вертим демонстрируя грациозное преодоление гравитации.</p>
          </li>
          <li>
            <div>
              <Image
                src={ImageCommonFp}
                className={styles.direction_image_block}
                width={307}
                height={307}
                alt="Общая физическая подготовка"
              />

            </div>
            <p className={styles.direction_title}>
              Физическая подготовка
            </p>
            <p className={styles.direction_description}>Будешь сильным и выносливым, как Геркулес!</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
