import 'styles/globals.scss'
import React from 'react'
import { NextSeo } from 'next-seo'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo title="Dance KOD" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
