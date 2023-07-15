import './globals.css'

export const metadata = {
  title: 'Kapil Sarma',
  description: 'Personal portfolio of kapil sarma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
