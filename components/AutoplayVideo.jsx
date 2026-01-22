'use client'

import { useEffect, useRef, useState } from 'react'

export default function AutoplayVideo({ src, className = '', poster = '' }) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [videoFinished, setVideoFinished] = useState(false)

  // Détecte le type MIME selon l'extension
  const getVideoType = (src) => {
    if (src.endsWith('.mp4')) return 'video/mp4'
    if (src.endsWith('.mov')) return 'video/quicktime'
    if (src.endsWith('.webm')) return 'video/webm'
    return 'video/mp4' // fallback
  }

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    // Force la vidéo en muet
    video.muted = true

    // Observer pour savoir si la section est visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    )

    observer.observe(container)

    // Fonction pour faire avancer/reculer la vidéo avec la molette
    const handleWheel = (e) => {
      if (!isInView || !video.duration) return

      // Si la vidéo est terminée et qu'on scrolle vers le bas, on laisse passer
      if (videoFinished && e.deltaY > 0) {
        return // Ne bloque pas le scroll, laisse descendre
      }

      // Empêche le comportement par défaut seulement si la vidéo n'est pas finie
      e.preventDefault()

      // deltaY > 0 = scroll vers le bas (avancer la vidéo)
      // deltaY < 0 = scroll vers le haut (reculer la vidéo)
      const scrollSpeed = 0.05 // Ajuste la sensibilité (plus petit = plus lent)
      const direction = e.deltaY > 0 ? 1 : -1
      
      // Calcule le nouveau temps
      const newTime = video.currentTime + (direction * scrollSpeed)
      
      // S'assure qu'on reste dans les limites de la vidéo
      const clampedTime = Math.max(0, Math.min(newTime, video.duration))
      video.currentTime = clampedTime

      // Si on recule depuis la fin, on réactive le blocage
      if (videoFinished && direction < 0) {
        setVideoFinished(false)
      }

      // Vérifie si on a atteint la fin de la vidéo
      if (clampedTime >= video.duration - 0.1) {
        setVideoFinished(true)
      }
    }

    // Écoute la molette uniquement quand la section est visible
    if (isInView) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      observer.unobserve(container)
      container.removeEventListener('wheel', handleWheel)
    }
  }, [isInView, videoFinished])

  return (
    <div ref={containerRef} className="w-full h-full">
      <video
        ref={videoRef}
        className={className}
        muted
        playsInline
        poster={poster}
        preload="auto"
      >
        <source src={src} type={getVideoType(src)} />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  )
}
