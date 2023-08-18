const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  images: {
    domains: ['dance-kod.ru', 'www.dance-kod.ru'],
    path: '/_next/image'
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      oneOf: [
        {
          use: ['@svgr/webpack']
        }
      ]
    })
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
