import Image from 'next/image'
import ImageChoreography from '/public/choreography.png'
import ImageClassicalDance from '/public/classical_dance.png'
import ImageStretching from '/public/stretching.png'
import ImageModern from '/public/modern.png'
import ImageJazz from '/public/jazz.png'
import ImageAcrobatic from '/public/acrobatic.png'
import ImageCommonFp from '/public/common_fp.png'
import ImageSpecialFp from '/public/special_fp.png'

import styles from './main_directions.module.scss'

export const MainDirections = () => {
  return (
    <div className={styles.root}>
      <h1 className="page-header-text">
        <span className="red">Основные</span> направления
      </h1>

      <ul className={styles.ul_2_cols}>
        <li>
          <div>
            <Image
              src={ImageChoreography}
              width={60}
              height={60}
              alt="Современная хореография"
            />
            Современная хореография
          </div>
        </li>
        <li>
          <div>
            <Image
              src={ImageClassicalDance}
              width={60}
              height={60}
              alt="Классический танец"
            />
            ‌Классический танец
          </div>
        </li>
        <li>
          <div>
            <Image
              src={ImageStretching}
              width={60}
              height={60}
              alt="Стретчинг"
            />
            Стретчинг
          </div>
        </li>
        <li>
          <div>
            <Image src={ImageModern} width={60} height={60} alt="Модерн" />
            Модерн
          </div>
        </li>
        <li>
          <div>
            <Image src={ImageJazz} width={60} height={60} alt="Джаз" />
            Джаз
          </div>
        </li>
        <li>
          <div>
            <Image
              src={ImageAcrobatic}
              width={60}
              height={60}
              alt="Акробатика"
            />
            Акробатика
          </div>
        </li>
        <li>
          <div>
            <Image
              src={ImageCommonFp}
              width={60}
              height={60}
              alt="Общая физическая подготовка"
            />
            Общая физ. подготовка
          </div>
        </li>
        <li>
          <div>
            <Image
              src={ImageSpecialFp}
              width={60}
              height={60}
              alt="Специальная физическая подготовка"
            />
            Специальная физ. подготовка
          </div>
        </li>
      </ul>
    </div>
  )
}
