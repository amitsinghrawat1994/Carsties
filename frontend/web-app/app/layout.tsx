import './globals.css'
import Navbar from './nav/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  console.log('Server component')
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          {children}
        </main>
      </body>
    </html>
  )
}
