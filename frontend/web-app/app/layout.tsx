import './globals.css'
import Navbar from './nav/Navbar'
import SignalRProvider from './providers/SignalRProvider'
import ToasterProvider from './providers/ToasterProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          <SignalRProvider>
            {children}
          </SignalRProvider>
        </main>
      </body>
    </html>
  )
}
