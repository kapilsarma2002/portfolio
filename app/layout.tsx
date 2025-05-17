import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kapil Sarma | Portfolio',
  description: 'Full Stack Developer & Web Development Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
