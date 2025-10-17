import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Layer Up - Custom 3D Printing',
  description: 'Upload your design for a free quote. Professional 3D printing services.',
  keywords: ['3D printing', 'custom printing', 'prototyping', 'manufacturing'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

