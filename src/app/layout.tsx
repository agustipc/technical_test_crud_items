import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin']

})

export const metadata: Metadata = {
  title: 'Technical Test CRUD - Next.js',
  description: 'Technical Test of a CRUD application using NextJS and TailwindCSS'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
