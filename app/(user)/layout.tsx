import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* { Header } */}
      {/* { Banner } */}

      <body>{children}</body>
    </html>
  )
}
