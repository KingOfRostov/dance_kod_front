import Image from 'next/image'
import styles from "./main_directions.module.scss";

export const MainDirections = () => {
  return (
    <div>
      <h1 className="page-header-text">
        <span className='red'>Основные</span> направления
      </h1>

      <ul className={styles.ul_2_cols}>
        <li>
          <div>
            <Image
              src="/choreography.png"
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
              src="/classical_dance.png"
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
              src="/stretching.png"
              width={60}
              height={60}
              alt="Стретчинг"
            />
            Стретчинг
          </div>
        </li>
        <li>
          <div>
            <Image src="/modern.png" width={60} height={60} alt="Модерн" />
            Модерн
          </div>
        </li>
        <li>
          <div>
            <Image src="/jazz.png" width={60} height={60} alt="Джаз" />
            Джаз
          </div>
        </li>
        <li>
          <div>
            <Image
              src="/acrobatic.png"
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
              src="/common_fp.png"
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
              src="/special_fp.png"
              width={60}
              height={60}
              alt="Специальная физическая подготовка"
            />
            Специальная физ. подготовка
          </div>
        </li>
      </ul>
    </div>

  );
};
