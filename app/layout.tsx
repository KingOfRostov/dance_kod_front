import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';


export const metadata: Metadata = {
  title: 'Dance KOD',
  description: 'Комьюнити Одаренных Детей. Школа Танцев.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='container'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
