import { Space_Grotesk, Manrope } from 'next/font/google'
import './globals.css'
import ThemeSwitcher from '@/components/ThemeSwitcher'
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
    default: 'AdTech Dynamics — Precision Programmatic Advertising',
    template: '%s | AdTech Dynamics'
  },
  description:
    'Engineering the future of programmatic advertising. Data-driven precision, high-velocity bidding, and ethical performance marketing.',
  keywords:
    'programmatic advertising, adtech, data science, performance marketing, real-time bidding, digital advertising',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body suppressHydrationWarning>
        <CursorTrail />
        <AnimatedDots />
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  )
}
