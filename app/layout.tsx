import './globals.css'
import type { Metadata } from 'next'
import { myFont } from '@/utils/font'
import Head from 'next/head'
import FooterComponent from '@/components/FooterComponent/FooterComponent'

export const metadata: Metadata = {
  title: 'SANTA PIPA',
  description: 'Tienda de ropa',
  applicationName: 'Santa Pipa',
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'light',
  themeColor: '#FFFFFF',
  authors: {
    name: 'Tomás Di Bacco',
    url: 'https://www.linkedin.com/in/tomas-di-bacco/'
  },
  icons: {
    icon: '/favicon.ico'
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="copyright" content="© Copyright Santa Pipa 2023 - Todos los derechos reservados" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <body className={myFont.className}>
        <main id="top">
          {children}
          <FooterComponent />
        </main>
      </body>
    </html>
  )
}
