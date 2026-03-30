'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function StudyBoxPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#050816] relative overflow-hidden">
      <Navbar />
      
      {/* Particules de fond animées */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero Section - Design futuriste avec effet de profondeur */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Effet de lumière dynamique suivant la souris */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 transition-all duration-1000 ease-out pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(59,130,246,0.3) 50%, transparent 100%)',
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
        
        {/* Rayons lumineux en arrière-plan */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Cercles concentriques animés */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] border border-blue-500/10 rounded-full animate-ping-slow"></div>
          <div className="absolute inset-0 w-[600px] h-[600px] m-auto border border-cyan-500/10 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 w-[400px] h-[400px] m-auto border border-purple-500/10 rounded-full animate-ping-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Contenu principal - Layout centré innovant */}
        <div className="relative z-10 w-full px-6 py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge flottant */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 px-6 py-3 rounded-full mb-8 shadow-lg shadow-cyan-500/20">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-bold tracking-widest">LA NOUVELLE GÉNÉRATION</span>
            </div>
            
            {/* Titre spectaculaire */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span className="block text-white">StudyBox</span>
            </h1>
            
            {/* Sous-titre avec effet de typing */}
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-bold mb-6">
              Transformez votre façon d'étudier avec l'intelligence artificielle
            </p>
            
            {/* Description courte */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Un parcours personnalisé, des résultats mesurables, une réussite garantie
            </p>
            
            {/* CTA avec effet néon */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link 
                href="#discover" 
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl font-bold text-lg text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Découvrir
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
            
            {/* Stats en ligne */}
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#050816] bg-gradient-to-br ${i === 0 ? 'from-cyan-400 to-blue-500' : i === 1 ? 'from-blue-400 to-purple-500' : 'from-purple-400 to-pink-500'}`}></div>
                  ))}
                </div>
                <span className="text-white font-semibold">+1k étudiants actifs</span>
              </div>
              
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white font-semibold ml-2">4.8/5</span>
                <span className="text-gray-500 text-sm">(975 avis)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator animé */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mx-auto animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Section: Rencontrez Boosty - Notre Mascotte */}
      <section id="discover" className="relative py-32 px-6 bg-gradient-to-b from-[#050816] to-[#0a0e27] overflow-hidden">
        {/* Effet de grille en fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Colonne gauche - Mascotte avec effets */}
            <div className="relative">
              {/* Cercle lumineux derrière */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Container mascotte */}
              <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-12 shadow-2xl">
                {/* Mascotte Boosty */}
                <div className="relative aspect-square flex items-center justify-center">
                  <Image
                    src="/images/macottediplome.png"
                    alt="Boosty - Mascotte StudyBox"
                    width={500}
                    height={500}
                    className="animate-float-slow object-contain"
                    priority
                  />
                  
                  {/* Particules autour de la mascotte */}
                  <div className="absolute top-10 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/2 right-5 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Badge "IA Active" flottant */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full shadow-lg shadow-green-500/50 animate-bounce-slow">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm">IA Active</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonne droite - Présentation */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 px-4 py-2 rounded-full mb-6">
                  <span className="text-purple-300 text-sm font-bold">👋 RENCONTREZ</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                  Voici Boosty
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Votre compagnon d'études intelligent qui vous accompagne 24/7 dans votre réussite académique !
                </p>
              </div>
              
              {/* Caractéristiques de Boosty */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Intelligence Artificielle</h3>
                    <p className="text-gray-400 text-sm">Boosty utilise sa propre IA pour comprendre vos besoins et s'adapter à votre style d'apprentissage</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Toujours disponible</h3>
                    <p className="text-gray-400 text-sm">Posez vos questions à tout moment, Boosty est là pour vous aider jour et nuit</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Personnalisé pour vous</h3>
                    <p className="text-gray-400 text-sm">Chaque étudiant est unique, Buddy adapte ses conseils à votre profil</p>
                  </div>
                </div>
              </div>
              
              {/* Stats de Buddy */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                  <div className="text-3xl font-black text-cyan-400 mb-1">1k+</div>
                  <div className="text-xs text-gray-400">Étudiants aidés</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-black text-blue-400 mb-1">+45%</div>
                  <div className="text-xs text-gray-400">Amélioration moyenne</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <div className="text-3xl font-black text-purple-400 mb-1">96%</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pour qui ? */}
      <section id="pour-qui" className="relative py-32 px-6 bg-gradient-to-b from-[#0a0e27] to-[#050816] overflow-hidden">
        {/* Effet de lumière en fond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[150px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 px-6 py-3 rounded-full mb-8 shadow-lg shadow-cyan-500/20">
              <span className="text-cyan-300 text-sm font-bold tracking-widest">🎯 POUR QUI ?</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Conçu pour tous les étudiants
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Que vous soyez au lycée, à l'université ou en formation, StudyBox s'adapte à vos besoins
            </p>
          </div>

          {/* Grille de profils avec animations au scroll */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Profil 1 - Élèves du secondaire */}
            <div 
              className="group relative bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:scale-105 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              style={{
                opacity: scrollY > 800 ? 1 : 0,
                transform: scrollY > 800 ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out'
              }}
            >
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl group-hover:bg-cyan-500/50 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-cyan-500/50">
                  <span className="text-4xl">🎓</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4">Lycéens</h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Préparez le CE1D, le CESS ou vos évaluations avec des synthèses claires, des quiz adaptatifs et un planning intelligent pour gérer toutes vos matières.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-cyan-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Préparation Bac optimisée
                  </li>
                  <li className="flex items-center gap-2 text-cyan-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Toutes les matières
                  </li>
                </ul>
              </div>
            </div>

            {/* Profil 2 - Étudiants Université/Étudiants Haute-École */}
            <div 
              className="group relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:scale-105 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
              style={{
                opacity: scrollY > 850 ? 1 : 0,
                transform: scrollY > 850 ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl group-hover:bg-blue-500/50 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-blue-500/50">
                  <span className="text-4xl">📚</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4">Étudiants Université/Étudiants Haute-École</h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Gérez vos cours complexes avec l'IA qui génère des synthèses, mindmaps et flashcards automatiquement.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-blue-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Synthèses avancées
                  </li>
                  <li className="flex items-center gap-2 text-blue-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Organisation multi-cours
                  </li>
                </ul>
              </div>
            </div>

            {/* Profil 3 - Étudiants en Formation */}
            <div 
              className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:scale-105 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
              style={{
                opacity: scrollY > 900 ? 1 : 0,
                transform: scrollY > 900 ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl group-hover:bg-purple-500/50 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-purple-500/50">
                  <span className="text-4xl">💼</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4">Formations Pro</h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Révisez efficacement entre vos sessions avec des podcasts audio et des flashcards pour mémoriser rapidement.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-purple-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Révision rapide
                  </li>
                  <li className="flex items-center gap-2 text-purple-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Apprentissage mobile
                  </li>
                </ul>
              </div>
            </div>

            {/* Profil 4 - Prépa */}
            <div 
              className="group relative bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 hover:scale-105 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
              style={{
                opacity: scrollY > 950 ? 1 : 0,
                transform: scrollY > 950 ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/30 rounded-full blur-3xl group-hover:bg-orange-500/50 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-orange-500/50">
                  <span className="text-4xl">🚀</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4">Classes Prépa</h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Optimisez votre temps avec des outils ultra-performants pour gérer la charge de travail intensive.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-orange-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Gestion intensive
                  </li>
                  <li className="flex items-center gap-2 text-orange-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Performance maximale
                  </li>
                </ul>
              </div>
            </div>

            {/* Profil 5 - Examens & Concours */}
            <div 
              className="group relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 hover:scale-105 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: scrollY > 1000 ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 0.8s'
              }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl group-hover:bg-emerald-500/50 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-emerald-500/50">
                  <span className="text-4xl">🏆</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4">Examens & Concours</h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Préparez vos examens avec des quiz ciblés et un système de répétition espacée scientifiquement prouvé.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-emerald-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quiz adaptatifs
                  </li>
                  <li className="flex items-center gap-2 text-emerald-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Méthode scientifique
                  </li>
                </ul>
              </div>
            </div>

            {/* Profil 6 - Apprentissage Continu */}
            <div 
              className="group relative bg-gradient-to-br from-indigo-900/30 to-violet-900/30 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-8 hover:scale-105 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden"
              style={{
                opacity: scrollY > 1050 ? 1 : 0,
                transform: scrollY > 1050 ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out 1s'
              }}
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl group-hover:bg-indigo-500/50 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-indigo-500/50">
                  <span className="text-4xl">🌟</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4">Apprentissage Continu</h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Développez vos compétences à votre rythme avec des outils flexibles adaptés à l'auto-formation.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-indigo-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Rythme personnalisé
                  </li>
                  <li className="flex items-center gap-2 text-indigo-300 text-sm">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Flexibilité totale
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA en bas de section */}
          <div className="text-center mt-20">
            <p className="text-gray-400 mb-8 text-lg">
              Quel que soit votre profil, StudyBox s'adapte à vous
            </p>
            <Link 
              href="/application" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-cyan-500/50"
            >
              Commencer gratuitement
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Fonctionnalités avec tabs interactifs */}
      <section className="relative py-32 px-6 bg-[#050816] overflow-hidden">
        {/* Rayons de lumière */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-bold">⚡ FONCTIONNALITÉS</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Tout ce dont vous avez besoin
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Une application complète pour transformer votre façon d'étudier
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Import', 'Synthèses', 'Quiz', 'Planning', 'Podcast', 'Flashcard', 'Mindmap'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-xl font-bold transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Contenu des tabs */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-12">
            {activeTab === 0 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6">Import intelligent</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Importez vos cours en PDF, photos ou documents. L'IA analyse automatiquement le contenu pour créer vos supports de révision.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      PDF, images, documents Word
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Reconnaissance automatique du contenu
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Organisation automatique par matière
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">📚</span>
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6">Synthèses IA</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Générez des synthèses et résumés de cours en quelques secondes. L'IA extrait les points clés et les organise de manière claire.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Résumés structurés et clairs
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Points clés mis en évidence
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Format optimisé pour la révision
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">✨</span>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6">Quiz adaptatifs</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Testez vos connaissances avec des quiz générés automatiquement. L'IA s'adapte à votre niveau et cible vos points faibles.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Questions personnalisées
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Difficulté adaptative
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Feedback instantané
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">🎯</span>
                </div>
              </div>
            )}
            
            {activeTab === 3 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6">Planning intelligent</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Organisez vos révisions avec un planning intelligent qui s'adapte à vos examens et à votre rythme d'apprentissage.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Calendrier personnalisé
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Rappels automatiques
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Optimisation du temps
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">📅</span>
                </div>
              </div>
            )}
            
            {activeTab === 4 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6">Podcast de révision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Transformez vos cours en podcasts audio pour réviser en déplacement. L'IA génère des contenus audio optimisés pour la mémorisation.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Conversion automatique en audio
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Voix naturelle et claire
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Écoute hors ligne
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">🎙️</span>
                </div>
              </div>
            )}
            
            {activeTab === 5 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6">Flashcards intelligentes</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Créez automatiquement des flashcards à partir de vos cours. Système de répétition espacée pour une mémorisation optimale.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Génération automatique
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Répétition espacée (Anki)
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Suivi de progression
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">🃏</span>
                </div>
              </div>
            )}
            
            {activeTab === 6 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6">Mind Maps visuelles</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Visualisez vos cours sous forme de cartes mentales interactives. L'IA structure automatiquement les concepts et leurs relations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Création automatique
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Visualisation interactive
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Export et partage
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-square bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">🧩</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section: Tarifs - Offre Limitée */}
      <section id="prix" className="relative py-32 px-6 bg-gradient-to-b from-[#050816] via-[#0a0e27] to-[#050816] overflow-hidden">
        {/* Grille de fond animée */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Orbes lumineux flottants */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full blur-[120px] animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-20">
            {/* Badge animé */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-xl border border-amber-500/20 px-6 py-3 rounded-full mb-8 group hover:border-amber-500/40 transition-all duration-500">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
              <span className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase">Offre de Lancement</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
              <span className="block">Tarif</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                Exceptionnel
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Une opportunité unique réservée aux premiers utilisateurs
            </p>
          </div>

          {/* Carte de tarif principale */}
          <div className="relative max-w-4xl mx-auto">
            {/* Effet de brillance animé en arrière-plan */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
            
            {/* Carte */}
            <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden group hover:border-amber-500/30 transition-all duration-700">
              {/* Effet de lumière qui traverse */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer"></div>
              </div>

              {/* Contenu */}
              <div className="relative p-8 md:p-12 lg:p-16">
                {/* Grille de 2 colonnes pour desktop */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  {/* Colonne gauche - Prix */}
                  <div className="text-center lg:text-left space-y-6">
                    {/* Badge premium */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 rounded-xl shadow-lg shadow-amber-500/30">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white font-black text-xs uppercase tracking-wider">Offre Premium</span>
                    </div>
                    
                    {/* Prix */}
                    <div>
                      <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-3">
                        <span className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 leading-none">
                          10€
                        </span>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Accès à vie
                      </p>
                      <p className="text-lg text-gray-400">
                        Un seul paiement • Aucun abonnement
                      </p>
                    </div>

                    {/* Économies */}
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-emerald-400 font-semibold text-sm">Économisez 80% sur le long terme</span>
                    </div>
                  </div>

                  {/* Colonne droite - Alerte temporelle */}
                  <div className="space-y-6">
                    {/* Compte à rebours visuel */}
                    <div className="relative bg-gradient-to-br from-rose-500/10 to-orange-500/10 backdrop-blur-sm border border-rose-500/20 rounded-2xl p-8 overflow-hidden group/timer hover:border-rose-500/40 transition-all duration-500">
                      {/* Effet de pulse */}
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-orange-500/5 animate-pulse"></div>
                      
                      <div className="relative space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <svg className="w-10 h-10 text-rose-400 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div>
                            <p className="text-rose-300 font-black text-xl uppercase tracking-wider">Offre limitée</p>
                            <p className="text-gray-400 text-sm">Se termine bientôt</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-3xl font-black text-white">
                            Jusqu'au 1<sup className="text-lg">er</sup> juin 2026
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            Tous les achats avant cette date bénéficient du tarif unique de <span className="font-bold text-amber-400">10€ à vie</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Info après la date */}
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                      <p className="text-gray-400 text-sm mb-2">Après le 1er juin 2026</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-gray-300">4,99€</span>
                        <span className="text-gray-500 font-medium">/mois</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">Abonnement mensuel</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative my-12">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700/50"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-gray-900 px-4 text-gray-500 text-sm uppercase tracking-wider">Inclus</span>
                  </div>
                </div>

                {/* Avantages en grille */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: '✨', title: 'Toutes les fonctionnalités', desc: 'Accès complet et illimité' },
                    { icon: '🔄', title: 'Mises à jour gratuites', desc: 'Toutes les nouvelles features' },
                    { icon: '⚡', title: 'Support prioritaire', desc: 'Réponse rapide garantie' },
                    { icon: '🔒', title: 'Aucun frais caché', desc: 'Prix fixe, transparent' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-500 group/item"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-500">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center space-y-6">
                  <Link 
                    href="/commander" 
                    className="group/btn relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-2xl text-white font-black text-lg overflow-hidden hover:scale-105 transition-all duration-500 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center gap-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Profiter de l'offre maintenant
                      <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  
                  <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Paiement sécurisé • Satisfaction garantie
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Note explicative */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="relative bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 overflow-hidden group/note hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-blue-400 font-bold text-lg mb-2">Pourquoi cette offre exceptionnelle ?</h4>
                  <p className="text-gray-300 leading-relaxed">
                    À l'origine, StudyBox est un projet de mini-entreprise. Pour remercier nos premiers utilisateurs qui nous soutiennent dès cette phase de lancement, nous proposons un tarif unique. 
                    Après le <span className="font-semibold text-white">1er juin 2026</span>, StudyBox évoluera en entreprise à part entière et passera à un modèle d'abonnement mensuel à <span className="font-semibold text-white">4,99€/mois</span>. 
                    C'est votre chance unique d'obtenir un accès à vie à un prix exceptionnel !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0e27] to-[#050816] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Prêt à transformer vos études ?
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Rejoignez plus de 1000 étudiants qui utilisent déjà StudyBox
          </p>
          
          <Link 
            href="/application" 
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl text-white font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-cyan-500/50"
          >
            Acheter l'application
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
