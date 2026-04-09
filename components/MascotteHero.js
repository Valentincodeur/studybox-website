'use client'

import { useRef } from 'react'

export default function MascotteHero() {
  const mascotRef = useRef(null)

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Mascotte principale avec animation de flottement */}
      <div className="relative z-20 animate-float">
        {/* Fond opaque derrière le robot */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-full blur-2xl opacity-80 scale-75"></div>
        
        <img 
          src="/images/mascotte.png" 
          alt="Mascotte StudyBox" 
          className="relative z-10 w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl"
        />
        
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
        
        
        {/* Cercles cyan lumineux - bulles décoratives qui flottent */}
        <div 
          className="absolute top-16 md:top-24 lg:top-32 left-20 md:left-28 lg:left-36 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full opacity-60 animate-float-slow"
          style={{ 
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)',
            filter: 'blur(1px)'
          }}
        />
        <div 
          className="absolute top-16 md:top-24 lg:top-32 right-20 md:right-28 lg:right-36 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full opacity-60 animate-float-slow-reverse"
          style={{ 
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)',
            filter: 'blur(1px)'
          }}
        />

        {/* Cercles décoratifs statiques */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-float-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-float-medium-reverse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-30 animate-float-medium"></div>
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-white rounded-full opacity-60 animate-float-pulse"></div>
          <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-white rounded-full opacity-50 animate-float-pulse-reverse"></div>
          <div className="absolute bottom-2/5 left-2/5 w-1 h-1 bg-white rounded-full opacity-40 animate-float-pulse"></div>
          <div className="absolute bottom-1/5 right-2/5 w-1 h-1 bg-white rounded-full opacity-30 animate-float-pulse-reverse"></div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-15px) translateX(5px); }
          }
          
          @keyframes float-slow-reverse {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-15px) translateX(-5px); }
          }
          
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(3px); }
          }
          
          @keyframes float-medium-reverse {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(-3px); }
          }
          
          @keyframes float-pulse {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
            50% { transform: translateY(-8px) scale(1.2); opacity: 0.8; }
          }
          
          @keyframes float-pulse-reverse {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
            50% { transform: translateY(-8px) scale(1.2); opacity: 0.7; }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
          }
          
          .animate-float-slow-reverse {
            animation: float-slow-reverse 4s ease-in-out infinite;
          }
          
          .animate-float-medium {
            animation: float-medium 3.5s ease-in-out infinite;
          }
          
          .animate-float-medium-reverse {
            animation: float-medium-reverse 3.5s ease-in-out infinite;
          }
          
          .animate-float-pulse {
            animation: float-pulse 2.5s ease-in-out infinite;
          }
          
          .animate-float-pulse-reverse {
            animation: float-pulse-reverse 2.5s ease-in-out infinite;
          }
        `}</style>

        {/* Téléphone statique */}
        <div className="absolute bottom-16 md:bottom-24 lg:bottom-32 left-12 md:left-16 lg:left-20">
          <div className="w-8 h-14 md:w-10 md:h-16 bg-black/90 rounded-lg border-2 border-cyan-400/80 backdrop-blur-sm shadow-xl shadow-cyan-400/50">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-lg"></div>
            <div className="absolute inset-2 bg-black/90 rounded flex flex-col gap-1 p-1">
              <div className="w-full h-1 bg-cyan-400/60 rounded"></div>
              <div className="w-3/4 h-1 bg-blue-400/60 rounded"></div>
              <div className="w-1/2 h-1 bg-purple-400/60 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Halo lumineux principal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Cercles décoratifs statiques */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-30"></div>
      </div>

      {/* Effet de lumière statique */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-blue-500/20 to-cyan-500/0"></div>
      </div>
    </div>
  )
}
