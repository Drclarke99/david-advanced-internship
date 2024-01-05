import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/../styles/globals.css'
import '@/../styles/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Summarist Home Page',
  description: 'Created by David Clarke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./styles/style.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
