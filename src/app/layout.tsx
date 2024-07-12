import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
