'use client'

import { lazy, Suspense } from 'react'
import Navbar from './Navbar'

const Footer = lazy(() => import('./Footer'))

export default function LayoutContent({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Suspense fallback={<div className="h-20 bg-gray-900" />}>
        <Footer />
      </Suspense>
    </>
  )
}
