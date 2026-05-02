import { Space_Grotesk, Manrope } from 'next/font/google'
import './globals.css'
import AnimatedDots from '@/components/AnimatedDots'
import CursorTrail from '@/components/CursorTrail'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Adzapster — Precision Programmatic Advertising',
    template: '%s | Adzapster'
  },
  description:
    'Engineering the future of programmatic advertising. Data-driven precision, high-velocity bidding, and ethical performance marketing.',
  keywords:
    'programmatic advertising, adtech, data science, performance marketing, real-time bidding, digital advertising',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body suppressHydrationWarning>
        <CursorTrail />
        <AnimatedDots />
        {children}
      </body>
    </html>
  )
}
