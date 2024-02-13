import Head from 'next/head'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import Navbar from '../components/navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Checkout',
  description: 'Seamless Shopify Checkout Experience',
  metadataBase: new URL('https://nextjs-shopify-checkout.vercel.app/'),
  alternates: {
    canonical: 'https://nextjs-shopify-checkout.vercel.app/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Shopify Checkout',
    description: 'Seamless Shopify Checkout Experience',
    url: 'https://nextjs-shopify-checkout.vercel.app/',
    siteName: 'Shopify Checkout',
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Shopify Checkout Banner"
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Checkout",
    description:
      "Seamless Shopify Checkout Experience",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Shopify Checkout Banner"
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
}

export const viewport: Viewport = {
  themeColor: '#5E8E3D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  )
}
