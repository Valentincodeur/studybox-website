'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function OptimizedLink({ href, children, className, ...props }) {
  const router = useRouter()
  const linkRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Prefetch la page quand le lien devient visible
            router.prefetch(href)
          }
        })
      },
      { rootMargin: '50px' }
    )

    if (linkRef.current) {
      observer.observe(linkRef.current)
    }

    return () => {
      if (linkRef.current) {
        observer.unobserve(linkRef.current)
      }
    }
  }, [href, router])

  return (
    <Link 
      ref={linkRef}
      href={href} 
      className={className}
      prefetch={true}
      {...props}
    >
      {children}
    </Link>
  )
}
