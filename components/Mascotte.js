'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Mascotte() {
  const [eyeBlink, setEyeBlink] = useState(false)
  const mascotRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    // Animation de clignotement des yeux
    const blinkInterval = setInterval(() => {
      setEyeBlink(true)
      setTimeout(() => setEyeBlink(false), 150)
    }, Math.random() * 2000 + 3000)

    // Animation GSAP pour le flottement
    if (mascotRef.current) {
      gsap.to(mascotRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }

    // Animation du téléphone
    if (phoneRef.current) {
      gsap.to(phoneRef.current, {
        rotation: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center"
      })
    }

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="relative inline-block">
      {/* Mascotte principale */}
      <div ref={mascotRef} className="relative">
        <img 
          src="/images/mascotte.png" 
          alt="Mascotte StudyBox" 
          className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
        />
        
        {/* Vrais yeux - les points blancs sur la tête */}
        <div 
          className={`absolute top-8 left-20 w-2 h-2 bg-white rounded-full transition-opacity duration-150 ${eyeBlink ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            filter: 'blur(0.3px)'
          }}
        />
        <div 
          className={`absolute top-8 right-20 w-2 h-2 bg-white rounded-full transition-opacity duration-150 ${eyeBlink ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            filter: 'blur(0.3px)'
          }}
        />

        {/* Effet de brillance sur les cercles cyan (pas les yeux) */}
        <div 
          className="absolute top-12 left-16 w-3 h-3 bg-cyan-400 rounded-full opacity-80"
          style={{ 
            boxShadow: '0 0 12px rgba(34, 211, 238, 0.8)',
            filter: 'blur(0.5px)'
          }}
        />
        <div 
          className="absolute top-12 right-16 w-3 h-3 bg-cyan-400 rounded-full opacity-80"
          style={{ 
            boxShadow: '0 0 12px rgba(34, 211, 238, 0.8)',
            filter: 'blur(0.5px)'
          }}
        />

        {/* Téléphone avec animation */}
        <div ref={phoneRef} className="absolute bottom-12 left-1/2 -translate-x-1/2 transform-gpu">
          <div className="w-6 h-10 bg-black/90 rounded-lg border border-cyan-400/60 backdrop-blur-sm shadow-lg shadow-cyan-400/30">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded animate-pulse"></div>
            {/* Écran du téléphone */}
            <div className="absolute inset-1 bg-black/80 rounded flex items-center justify-center">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-0 -right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute -top-2 right-4 w-1 h-1 bg-cyan-300 rounded-full animate-bounce opacity-70"></div>

      {/* Halo lumineux */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Styles CSS supplémentaires */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 8px rgba(34, 211, 238, 0.8); }
          50% { box-shadow: 0 0 16px rgba(34, 211, 238, 1); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
          100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-particle {
          animation: particleFloat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
