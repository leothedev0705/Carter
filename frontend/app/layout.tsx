import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Carter Chaos - Premium Streetwear',
    template: '%s | Carter Chaos'
  },
  description: 'Discover the chaos. Premium streetwear for the new generation. Bold designs, quality craftsmanship, and urban style that defines the streets.',
  keywords: ['streetwear', 'fashion', 'clothing', 'urban', 'style', 'carter chaos', 'premium'],
  authors: [{ name: 'Carter Chaos' }],
  creator: 'Carter Chaos',
  publisher: 'Carter Chaos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carterchaos.com',
    title: 'Carter Chaos - Premium Streetwear',
    description: 'Discover the chaos. Premium streetwear for the new generation.',
    siteName: 'Carter Chaos',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carter Chaos - Premium Streetwear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carter Chaos - Premium Streetwear',
    description: 'Discover the chaos. Premium streetwear for the new generation.',
    images: ['/og-image.jpg'],
    creator: '@carterchaos',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#F4E9D8',
    'color-scheme': 'light',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-screen bg-beige text-charcoal antialiased">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#FFFFFF',
                color: '#2C2C2C',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(44, 44, 44, 0.1)',
              },
              success: {
                iconTheme: {
                  primary: '#C46A3E',
                  secondary: '#FFFFFF',
                },
              },
              error: {
                iconTheme: {
                  primary: '#C46A3E',
                  secondary: '#FFFFFF',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
} 