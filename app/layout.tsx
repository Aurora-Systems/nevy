import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coach Nevy Milazi',
  description: 'Master Your Swing with PGA Certified Coach Nevy Milazi',
  generator: 'https://aurorasystems.co.zw',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
