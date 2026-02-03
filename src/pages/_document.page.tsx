import React from 'react'

import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  Head
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Школа танцев для детей в Ростове-на-Дону. Детская школа танцев Ростов. Профессиональное обучение хореографии, акробатике, джазу, модерну. Бесплатная пробная тренировка. Адреса: Днепропетровская 27 (Орджоникидзе), Ольховский 71 (Северный)."
          />
          <meta
            name="keywords"
            content="школа танцев ростов, школа танцев для детей ростов, школа танцев для детей ростов на дону, детская школа танцев ростов, танцы для детей ростов, хореография ростов, акробатика ростов, джаз ростов, модерн ростов, стретчинг ростов"
          />
          <meta name="author" content="Dance KOD" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="yandex" content="index, follow" />
          <link rel="canonical" href="https://dance-kod.ru" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
