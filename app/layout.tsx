import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'


const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'E-commerce shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
