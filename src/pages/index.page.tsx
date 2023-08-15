import Image from 'next/image'
import styles from 'styles/index.module.scss'
import { Layout } from '~/components/layout/layout'
import { Maps } from '~/components/maps/maps'
import { InvitingForm } from '~/components/inviting_form/inviting_form'

export default function Home() {
  return (
    <Layout>
      <h3 className="text-center">
        {' '}
        Пробная тренировка - <span className="text-red">Бесплатно</span>!
      </h3>
      <p className="text-center">
        Место, где <span className="text-red">каждый</span> ребенок или
        подросток сможет получить <span className="text-red">качественное</span>{' '}
        обучение <span className="text-red">танцевальному искусству</span>
      </p>

      <hr />

      <h1 className="page-header-text">Почему</h1>
      <h1 className="page-header-text">
        <span className="text-red">‌Вам нужно в KOD</span>?
      </h1>

      <p className="text-justify">
        Мы <span className="text-red">гарантируем</span> профессиональный и
        грамотный подход к <span className="text-red">каждому </span>
        ученику и <span className="text-red">рост</span> в танцевальных
        направлениях
        <br />
        <br />
        Нас ждут множество мероприятий, конкурсов, фестивалей, мастер-классов и
        насыщенных занятий
        <br />
        <br />В нашей <span className="text-red">команде</span> есть место тем,
        кто разделяет нашу <span className="text-red">любовь</span> к танцам и
        готов отдаться этому <span className="text-red">искусству</span>
        <br />
        <br />С <span className="text-red font-caveat fs-20">KOD</span> путь к
        большой сцене будет насыщенным и очень интересным
      </p>

      <div>
        <h1 className="page-header-text">
          Стань частью нашего <span className="text-red">Комьюнити</span>
        </h1>
        <div className="carousel-container">
          <div className="carousel">
            <Image
              className="kod-photo"
              src="/us_1.jpg"
              width={800}
              height={534}
              alt="Dance KOD коллектив. Школа танцев. Дети"
            />
            <Image
              className="kod-photo"
              src="/us_2.jpg"
              width={800}
              height={534}
              alt="Dance KOD коллектив. Школа танцев. Дети"
            />
            <Image
              className="kod-photo"
              src="/us_3.jpg"
              width={800}
              height={534}
              alt="Dance KOD коллектив. Школа танцев. Дети"
            />
            <Image
              className="kod-photo"
              src="/us_4.jpg"
              width={800}
              height={534}
              alt="Dance KOD коллектив. Школа танцев. Дети"
            />
          </div>
        </div>
      </div>

      <InvitingForm />

      <hr />

      <h1 className="page-header-text">
        <span className="text-red">Основные</span> направления
      </h1>

      <ul className="ul-2-cols">
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
            Общая физическая подготовка
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
            Специальная физическая подготовка
          </div>
        </li>
      </ul>

      <hr />

      <Maps />

      <span className="text-center">
        <h1 className="page-header-text">Стань частью нашего</h1>
        <h1 className="page-header-text">
          <span className="text-red">Комьюнити</span>
        </h1>
        <ul>
          Звоните:
          <li>‌‌+7 (918) 571 26 89</li>
          <li>‌+7 (919) 873 93 65</li>
        </ul>
      </span>

      <div className="call-button-container">
        <button className="call-button">
          <p>+7 (918) 571 26 89</p>
          <p>Татьяна</p>
        </button>

        <br />

        <button className="call-button">
          <p>‌+7 (919) 873 93 65</p>
          <p>Анастасия</p>
        </button>
      </div>
    </Layout>
  )
}
