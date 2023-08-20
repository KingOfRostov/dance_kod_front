import Image from 'next/image'
import styles from 'styles/index.module.scss'
import { Layout } from '~/components/layout/layout'
import { Guaranties } from '~/components/main_page/guaranties/guaranties'
import { Introduction } from '~/components/main_page/introduction/introduction'
import { InvitingForm } from '~/components/main_page/inviting_form/inviting_form'
import { KidsCarousel } from '~/components/main_page/kids_carousel/kids_carousel'
import { MainDirections } from '~/components/main_page/main_directions/main_directions'
import { Maps } from '~/components/main_page/maps/maps'
import { PhoneButton } from '~/components/phone_button/phone_button'

export default function Home() {
  const TatianaPhoneNumber: string = '+7 (918) 571 26 89'
  const TatianaName: string = 'Татьяна'
  const AnastasiaPhoneNumber: string = '‌+7 (919) 873 93 65'
  const AnastasiaName: string = 'Анастасия'

  return (
    <Layout>
      <Introduction />
      <hr />
      <Guaranties />
      <hr />
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
        <ul className="phone_numbers_ul">
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
