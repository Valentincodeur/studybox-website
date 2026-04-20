'use client'

import Navbar from './Navbar'
import Footer from './Footer'

export default function LayoutContent({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
