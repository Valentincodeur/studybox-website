'use client'

import { useEffect, useState } from 'react'

export default function ScrollAnimation({ children }) {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let scrollTimeout

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Déterminer la direction du scroll
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      
      setLastScrollY(currentScrollY)
      setIsScrolling(true)

      // Arrêter l'animation après 150ms d'inactivité
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [lastScrollY])

  return (
    <div
      className={`transition-all duration-300 ${
        isScrolling && scrollDirection === 'down'
          ? 'animate-scroll-pulse'
          : ''
      }`}
    >
      {children}
    </div>
  )
}
