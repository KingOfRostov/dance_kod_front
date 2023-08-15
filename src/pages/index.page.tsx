import Image from 'next/image'
import styles from 'styles/index.module.scss'
import { Layout } from '~/components/layout/layout'
import { Maps } from '~/components/maps/maps'
import { InvitingForm } from '~/components/inviting_form/inviting_form'
import { MainDirections } from '~/components/main_directions/main_directions'
import { KidsCarousel } from '~/components/kids_carousel/kids_carousel'
import { PhoneButton } from '~/components/phone_button/phone_button'
import { Garanties } from '~/components/garanties/garanties'
import { Introduction } from '~/components/introduction/introduction'

export default function Home() {
  const TatianaPhoneNumber: string = '+7 (918) 571 26 89';
  const TatianaName: string = 'Татьяна';
  const AnastasiaPhoneNumber: string = '‌+7 (919) 873 93 65';
  const AnastasiaName: string = 'Анастасия';

  return (
    <Layout>

      <Introduction />

      <hr />

      <Garanties />

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
