import '../styles/globals.css'


// export const metadata = {
//   title: 'Jordan Porter | Blog',
//   description: 'A blog of personal experiences and thoughts.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
