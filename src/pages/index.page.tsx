import Image from 'next/image'
import styles from 'styles/index.module.scss'
import { Layout } from '~/components/layout/layout'
import { Maps } from '~/components/maps/maps'
import { InvitingForm } from '~/components/inviting_form/inviting_form'
import { MainDirections } from '~/components/main_directions/main_directions'
import { KidsCarousel } from '~/components/kids_carousel/kids_carousel'
import { PhoneButton } from '~/components/phone_button/phone_button'

export default function Home() {
  const TatianaPhoneNumber: string = '+7 (918) 571 26 89';
  const TatianaName: string = 'Татьяна';
  const AnastasiaPhoneNumber: string = '‌+7 (919) 873 93 65';
  const AnastasiaName: string = 'Анастасия';

  return (
    <Layout>
      <h3 className="text-center">
        Пробная тренировка - <span className="red">Бесплатно</span>!
      </h3>
      <p className="text-center">
        Место, где <span className="red">каждый</span> ребенок или
        подросток сможет получить <span className="red">качественное</span>
        обучение танцевальному искусству
      </p>

      <hr />

      <h1 className="page-header-text">Почему</h1>
      <h1 className="page-header-text">
        <span className="red">‌Вам нужно в KOD</span>?
      </h1>

      <p className="text-justify">
        Мы <span className="red">гарантируем</span> профессиональный и
        грамотный подход к <span className="red">каждому </span>
        ученику и <span className="red">рост</span> в танцевальных
        направлениях
        <br />
        <br />
        Нас ждут множество мероприятий, конкурсов, фестивалей, мастер-классов и
        насыщенных занятий
        <br />
        <br />В нашей <span className="red">команде</span> есть место тем,
        кто разделяет нашу <span className="red">любовь</span> к танцам и
        готов отдаться этому <span className="red">искусству</span>
        <br />
        <br />С <span className="red font-caveat fs-20">KOD</span> путь к
        большой сцене будет насыщенным и очень интересным
      </p>

      <div>
        <h1 className="page-header-text">
          Стань частью нашего <span className="red">Комьюнити</span>
        </h1>
        <KidsCarousel />
      </div>

      <InvitingForm />

      <hr />

      <MainDirections />

      <hr />

      <Maps />

      <span className="text-center">
        <h1 className="page-header-text">Стань частью нашего</h1>
        <h1 className="page-header-text">
          <span className="red">Комьюнити</span>
        </h1>
        <ul>
          Звоните:
          <li>{TatianaPhoneNumber}</li>
          <li>‌{AnastasiaPhoneNumber}</li>
        </ul>
      </span>

      <div className={styles.call_button_container}>
        <PhoneButton phoneNumber={TatianaPhoneNumber} name={TatianaName} />
        <br />
        <PhoneButton phoneNumber={AnastasiaPhoneNumber} name={AnastasiaName} />
      </div>
    </Layout>
  )
}
