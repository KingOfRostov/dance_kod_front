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
      <Html>
        <meta
          name="description"
          content="Школа танцев в Ростове-на-Дону. Школа танцев Ростов-на-Дону. КОД - комьюнити одаренных детей. Хореография|Акробатика|Танцы дети|Танцы для детей|Джаз|Гимнастика|Школа танцев для детей. Днепропетровская/Ольховски, Орджоникидзе/Северный"
        />
        <Head><link rel="icon" href="/favicon.png" /></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
