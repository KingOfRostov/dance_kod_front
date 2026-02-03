import 'styles/globals.scss'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Analytics } from '~/components/analytics/analytics'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <NextSeo
        title="Школа танцев для детей в Ростове-на-Дону | Dance KOD"
        description="Детская школа танцев в Ростове-на-Дону. Профессиональное обучение хореографии, акробатике, джазу, модерну для детей. Бесплатная пробная тренировка. Адреса: Днепропетровская 27, Ольховский 71."
        canonical="https://dance-kod.ru"
        openGraph={{
          url: 'https://dance-kod.ru',
          title: 'Школа танцев для детей в Ростове-на-Дону | Dance KOD',
          description:
            'Детская школа танцев в Ростове-на-Дону. Профессиональное обучение хореографии, акробатике, джазу, модерну для детей. Бесплатная пробная тренировка.',
          siteName: 'Dance KOD',
          locale: 'ru_RU',
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'школа танцев ростов, школа танцев для детей ростов, школа танцев для детей ростов на дону, детская школа танцев ростов, танцы для детей ростов, хореография ростов, акробатика ростов',
          },
          {
            name: 'geo.region',
            content: 'RU-ROS',
          },
          {
            name: 'geo.placename',
            content: 'Ростов-на-Дону',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
