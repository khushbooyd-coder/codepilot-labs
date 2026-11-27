import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'CodePilot Labs — Websites, e-commerce, plugins and AI automation',
  description: 'CodePilot Labs, Nagpur: 7+ years building custom websites, Shopify and WooCommerce stores, 30+ WordPress plugins, and AI-powered products and automation.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'CodePilot Labs',
    description: 'Custom websites, Shopify & WooCommerce, WordPress plugins, and AI automation.',
    type: 'website',
    url: 'https://www.codepilot-labs.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
