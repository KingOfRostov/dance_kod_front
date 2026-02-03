import Image from 'next/image'
import Head from 'next/head'
import styles from 'styles/index.module.scss'
import { Layout } from '~/components/layout/layout'
import { Guaranties } from '~/components/main_page/guaranties/guaranties'
import { Introduction } from '~/components/main_page/introduction/introduction'
import { InvitingForm } from '~/components/main_page/inviting_form/inviting_form'
import { KidsCarousel } from '~/components/main_page/kids_carousel/kids_carousel'
import { MainDirections } from '~/components/main_page/main_directions/main_directions'
import { Maps } from '~/components/main_page/maps/maps'
import { Agreements } from '~/components/main_page/agreements/agreements'
import { PhoneButton } from '~/components/phone_button/phone_button'

export default function Home() {
  const TatianaPhoneNumber: string = '+7 (918) 571 26 89'
  const TatianaName: string = 'Татьяна'
  const AnastasiaPhoneNumber: string = '‌+7 (919) 873 93 65'
  const AnastasiaName: string = 'Анастасия'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DanceSchool',
    name: 'Dance KOD - Школа танцев для детей',
    alternateName: 'КОД - Комьюнити Одаренных Детей',
    description:
      'Детская школа танцев в Ростове-на-Дону. Профессиональное обучение хореографии, акробатике, джазу, модерну для детей.',
    url: 'https://dance-kod.ru',
    telephone: ['+7 (918) 571 26 89', '+7 (919) 873 93 65'],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'ул. Днепропетровская, 27',
        addressLocality: 'Ростов-на-Дону',
        addressRegion: 'Ростовская область',
        postalCode: '344020',
        addressCountry: 'RU',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'пер. Ольховский, 71',
        addressLocality: 'Ростов-на-Дону',
        addressRegion: 'Ростовская область',
        postalCode: '344068',
        addressCountry: 'RU',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '47.2705',
      longitude: '39.7870',
    },
    areaServed: {
      '@type': 'City',
      name: 'Ростов-на-Дону',
    },
    offers: {
      '@type': 'Offer',
      description: 'Бесплатная пробная тренировка',
      price: '0',
      priceCurrency: 'RUB',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Направления обучения',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Современная хореография',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Классический танец',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Стретчинг',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Модерн',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Джаз',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Акробатика',
          },
        },
      ],
    },
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
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
      <hr />
      <Agreements />
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
    </>
  )
}
