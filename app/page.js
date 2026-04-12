'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import MascotteHero from '../components/MascotteHero'

function FeatureCard({ feature, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Déconnecter l'observer après la première apparition pour économiser les ressources
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 50}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      <div 
        className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl transition-opacity duration-300`}
        style={{
          opacity: isHovered ? 0.6 : 0.2
        }}
      />
      <div 
        className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 transition-all duration-300"
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
        }}
      >
        <div 
          className="text-5xl mb-4 transition-all duration-200"
          style={{
            transform: isHovered ? 'scale(1.1) rotate(3deg)' : 'scale(1) rotate(0deg)'
          }}
        >
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed transition-colors duration-300">
          {feature.desc}
        </p>
      </div>
    </div>
  )
}

function TimelineStep({ children, index, side = 'left' }) {
  const [isVisible, setIsVisible] = useState(false)
  const stepRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animation dans les deux sens
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.3 }
    )

    if (stepRef.current) {
      observer.observe(stepRef.current)
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={stepRef}
      className={`relative mb-24 transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(0)' 
          : side === 'left' 
            ? 'translateX(-8rem)' 
            : 'translateX(8rem)',
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const { language } = useLanguage()
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <>
      {/* Hero Section - Mascotte en bas à droite */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-black overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        
        {/* Effet de lumière à gauche */}
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-[150px]"></div>
        
        {/* Effet de lumière à droite pour la mascotte */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-[120px]"></div>
        
        {/* Contenu principal */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
              
              {/* Colonne gauche - Texte et CTA */}
              <div className="text-left pt-20 lg:pt-0">
                <div ref={titleRef}>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/30 px-6 py-3 rounded-full mb-8">
                    <span className="relative flex h-3 w-3">
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                    </span>
                    <span className="text-white font-bold text-sm tracking-wider uppercase">
                      {language === 'fr' ? 'IA NOUVELLE GÉNÉRATION' : 'NEXT-GEN AI'}
                    </span>
                  </div>
                  
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-tight">
                    <span className="text-white">Study</span>
                    <span className="text-white">Box</span>
                  </h1>
                  
                  <p className="text-2xl sm:text-3xl text-white font-normal max-w-xl mb-4">
                    {language === 'fr' 
                      ? 'Transformez votre façon d\'étudier avec l\'intelligence artificielle'
                      : 'Transform the way you study with artificial intelligence'}
                  </p>
                  
                  <p className="text-lg text-white font-normal max-w-lg mb-10">
                    {language === 'fr' 
                      ? 'Un parcours personnalisé, des résultats mesurables, une réussite garantie'
                      : 'A personalized journey, measurable results, guaranteed success'}
                  </p>
                </div>
                
                {/* Boutons CTA */}
                <div ref={ctaRef} className="mb-10">
                  <Link 
                    href="/studybox" 
                    className="inline-flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl shadow-cyan-500/50"
                  >
                    {language === 'fr' ? 'Découvrir' : 'Discover'}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-black"></div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-black"></div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-black"></div>
                    </div>
                    <span className="text-white text-base font-medium">+1,5k étudiants actifs</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white text-base font-medium">4.8/5 (975 avis)</span>
                  </div>
                </div>
              </div>
              
              {/* Colonne droite - Vide sur desktop, mascotte en position absolue */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
          
          {/* Mascotte en position absolue - bas droite */}
          <div className="absolute bottom-0 right-0 lg:right-8 xl:right-16">
            <div className="relative">
              <MascotteHero />
              
              {/* Badges autour de la mascotte - Réduit à 3 badges essentiels */}
              {/* Badge IA Active - en haut */}
              <div className="absolute -top-8 -left-16 bg-gray-900 border-2 border-white/40 rounded-2xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white text-base font-bold">IA Active</span>
                </div>
              </div>
              
              {/* Badge +45% - gauche */}
              <div className="absolute top-1/3 -left-24 bg-gray-900 border-2 border-white/40 rounded-2xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-white text-base font-bold">+45%</span>
                </div>
              </div>
              
              {/* Badge 1k+ étudiants - gauche bas */}
              <div className="absolute bottom-1/3 -left-20 bg-gray-900 border-2 border-white/40 rounded-2xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎓</span>
                  <span className="text-white text-base font-bold">1,5k+ étudiants</span>
                </div>
              </div>
              
              {/* Badge 96% taux satisfaction - droite bas */}
              <div className="absolute bottom-1/3 -right-24 bg-gray-900 border-2 border-white/40 rounded-2xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  <span className="text-white text-base font-bold">96% étudiants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:left-1/4">
          <span className="text-white text-base font-medium">{language === 'fr' ? 'Découvrir' : 'Discover'}</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {/* Styles CSS */}
        <style jsx>{`
        `}</style>
      </section>

      {/* Section Statistiques */}
      <section className="relative bg-gradient-to-b from-black to-gray-950 py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-6">
              <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
                {language === 'fr' ? '📊 Nos Chiffres Clés' : '📊 Our Key Numbers'}
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              {language === 'fr' ? 'Des résultats qui parlent' : 'Results that speak'}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Découvrez l\'impact de StudyBox sur des milliers d\'étudiants'
                : 'Discover the impact of StudyBox on thousands of students'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">1,5k+</div>
                <div className="text-white font-bold text-lg mb-2">{language === 'fr' ? 'Étudiants Actifs' : 'Active Students'}</div>
                <div className="text-gray-400 text-sm">{language === 'fr' ? 'Rejoignez notre communauté' : 'Join our community'}</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">96%</div>
                <div className="text-white font-bold text-lg mb-2">{language === 'fr' ? 'Taux de Satisfaction' : 'Satisfaction Rate'}</div>
                <div className="text-gray-400 text-sm">{language === 'fr' ? 'Étudiants satisfaits' : 'Happy students'}</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">+45%</div>
                <div className="text-white font-bold text-lg mb-2">{language === 'fr' ? 'Amélioration' : 'Improvement'}</div>
                <div className="text-gray-400 text-sm">{language === 'fr' ? 'Augmentation des notes' : 'Grade increase'}</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-3">24/7</div>
                <div className="text-white font-bold text-lg mb-2">{language === 'fr' ? 'Support Disponible' : 'Support Available'}</div>
                <div className="text-gray-400 text-sm">{language === 'fr' ? 'Aide continue' : 'Continuous help'}</div>
              </div>
            </div>
          </div>

                  </div>
      </section>

      {/* Timeline Section - Votre Parcours */}
      <section className="relative bg-black py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-6">
              <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
                {language === 'fr' ? '🎯 Votre Parcours' : '🎯 Your Journey'}
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              {language === 'fr' ? 'Comment ça fonctionne ?' : 'How does it work?'}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Un parcours en 6 étapes pour transformer votre apprentissage'
                : 'A 6-step journey to transform your learning'}
            </p>
          </div>

          {/* Timeline verticale */}
          <div className="relative max-w-5xl mx-auto">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden lg:block"></div>
            
            {/* Étape 1 */}
            <TimelineStep index={0} side="left">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-16">
                  <div className="inline-block backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4 lg:justify-end">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-cyan-500/50">
                        1
                      </div>
                      <h3 className="text-3xl font-black text-white">
                        {language === 'fr' ? 'Inscription' : 'Sign Up'}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {language === 'fr' 
                        ? 'Créez votre compte en quelques secondes. Aucune carte bancaire requise pour commencer.'
                        : 'Create your account in seconds. No credit card required to start.'}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2 lg:justify-end">
                        <svg className="w-5 h-5 text-cyan-400 lg:order-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Retour possible sous 14 jours' : 'Returns accepted within 14 days'}</span>
                      </li>
                      <li className="flex items-center gap-2 lg:justify-end">
                        <svg className="w-5 h-5 text-cyan-400 lg:order-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Créer ta propre session' : 'Create your session'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-black hidden lg:block"></div>
            </TimelineStep>

            {/* Étape 2 */}
            <TimelineStep index={1} side="right">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div className="lg:pl-16">
                  <div className="inline-block backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-blue-500/50">
                        2
                      </div>
                      <h3 className="text-3xl font-black text-white">
                        {language === 'fr' ? 'Profil Personnalisé' : 'Personalized Profile'}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {language === 'fr' 
                        ? 'Renseignez vos objectifs, votre niveau actuel et vos disponibilités. L\'IA analyse tout pour créer votre plan.'
                        : 'Enter your goals, current level and availability. AI analyzes everything to create your plan.'}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Questionnaire intelligent' : 'Smart questionnaire'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Analyse de vos besoins' : 'Needs analysis'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-black hidden lg:block"></div>
            </TimelineStep>

            {/* Étape 3 */}
            <TimelineStep index={2} side="left">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-16">
                  <div className="inline-block backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4 lg:justify-end">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-purple-500/50">
                        3
                      </div>
                      <h3 className="text-3xl font-black text-white">
                        {language === 'fr' ? 'Plan IA Généré' : 'AI-Generated Plan'}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {language === 'fr' 
                        ? 'Recevez instantanément votre planning personnalisé avec des objectifs quotidiens et hebdomadaires.'
                        : 'Instantly receive your personalized schedule with daily and weekly goals.'}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2 lg:justify-end">
                        <svg className="w-5 h-5 text-purple-400 lg:order-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Planning adaptatif' : 'Adaptive planning'}</span>
                      </li>
                      <li className="flex items-center gap-2 lg:justify-end">
                        <svg className="w-5 h-5 text-purple-400 lg:order-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Objectifs mesurables' : 'Measurable goals'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-black hidden lg:block"></div>
            </TimelineStep>

            {/* Étape 4 */}
            <TimelineStep index={3} side="right">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div className="lg:pl-16">
                  <div className="inline-block backdrop-blur-xl bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-pink-500/50">
                        4
                      </div>
                      <h3 className="text-3xl font-black text-white">
                        {language === 'fr' ? 'Apprentissage Actif' : 'Active Learning'}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {language === 'fr' 
                        ? 'Étudiez avec des contenus interactifs, des quiz adaptatifs et des exercices personnalisés.'
                        : 'Study with interactive content, adaptive quizzes and personalized exercises.'}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Quiz intelligents' : 'Smart quizzes'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Exercices ciblés' : 'Targeted exercises'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-black hidden lg:block"></div>
            </TimelineStep>

            {/* Étape 5 */}
            <TimelineStep index={4} side="left">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right lg:pr-16">
                  <div className="inline-block backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4 lg:justify-end">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-green-500/50">
                        5
                      </div>
                      <h3 className="text-3xl font-black text-white">
                        {language === 'fr' ? 'Suivi en Temps Réel' : 'Real-time Tracking'}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {language === 'fr' 
                        ? 'Visualisez votre progression avec des statistiques détaillées et des graphiques interactifs.'
                        : 'Visualize your progress with detailed statistics and interactive charts.'}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2 lg:justify-end">
                        <svg className="w-5 h-5 text-green-400 lg:order-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Tableaux de bord' : 'Dashboards'}</span>
                      </li>
                      <li className="flex items-center gap-2 lg:justify-end">
                        <svg className="w-5 h-5 text-green-400 lg:order-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Rapports détaillés' : 'Detailed reports'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-black hidden lg:block"></div>
            </TimelineStep>

            {/* Étape 6 */}
            <TimelineStep index={5} side="right">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:block"></div>
                <div className="lg:pl-16">
                  <div className="inline-block backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-yellow-500/50">
                        6
                      </div>
                      <h3 className="text-3xl font-black text-white">
                        {language === 'fr' ? 'Générez vos synthèses' : 'Generate your summaries'}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {language === 'fr' 
                        ? 'Importez simplement vos cours et générez automatiquement des synthèses, fiches de révision et exercices personnalisés.'
                        : 'Simply import your courses and automatically generate summaries, revision sheets and personalized exercises.'}
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Suivis personnalisés' : 'Success certificates'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{language === 'fr' ? 'Support 24/7' : '24/7 Support'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-black hidden lg:block"></div>
            </TimelineStep>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités Détaillées */}
      <section className="relative bg-gradient-to-b from-black to-gray-950 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-6">
              <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
                {language === 'fr' ? '⚡ Fonctionnalités' : '⚡ Features'}
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              {language === 'fr' ? 'Tout ce dont vous avez besoin' : 'Everything you need'}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Des outils puissants pour maximiser votre apprentissage'
                : 'Powerful tools to maximize your learning'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🧠',
                title: language === 'fr' ? 'IA Avancée' : 'Advanced AI',
                desc: language === 'fr' ? 'Algorithmes d\'apprentissage automatique pour personnaliser votre parcours' : 'Machine learning algorithms to personalize your journey',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: '📊',
                title: language === 'fr' ? 'Analytics' : 'Analytics',
                desc: language === 'fr' ? 'Tableaux de bord détaillés pour suivre chaque aspect de votre progression' : 'Detailed dashboards to track every aspect of your progress',
                color: 'from-blue-500 to-purple-500'
              },
              {
                icon: '🎯',
                title: language === 'fr' ? 'Objectifs' : 'Goals',
                desc: language === 'fr' ? 'Définissez et atteignez vos objectifs avec un système de suivi intelligent' : 'Set and achieve your goals with a smart tracking system',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '📱',
                title: language === 'fr' ? 'Mobile' : 'Mobile',
                desc: language === 'fr' ? 'Étudiez partout avec nos apps iOS et Android' : 'Study anywhere with our iOS and Android apps',
                color: 'from-pink-500 to-red-500'
              },
              {
                icon: '🔔',
                title: language === 'fr' ? 'Notifications' : 'Notifications',
                desc: language === 'fr' ? 'Rappels intelligents pour rester sur la bonne voie' : 'Smart reminders to stay on track',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: '👥',
                title: language === 'fr' ? 'Communauté' : 'Community',
                desc: language === 'fr' ? 'Rejoignez des milliers d\'étudiants motivés' : 'Join thousands of motivated students',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((feature, i) => (
              <FeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="relative bg-black py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-6 py-3 rounded-full mb-6">
              <span className="text-purple-400 font-bold text-sm tracking-wider uppercase">
                {language === 'fr' ? '💬 Témoignages' : '💬 Testimonials'}
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              {language === 'fr' ? 'Ils ont réussi avec StudyBox' : 'They succeeded with StudyBox'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Yasmine Benali',
                role: language === 'fr' ? 'Étudiante universitaire' : 'University student',
                text: language === 'fr' ? '"StudyBox a transformé ma façon d\'étudier. Je peux importer mes cours PDF et générer des fiches de révision en quelques minutes. C\'est comme avoir un tuteur personnel 24/7 !"' : '"StudyBox transformed my study method. I can import my PDF courses and generate revision sheets in minutes. It\'s like having a personal tutor 24/7!"',
                rating: 5
              },
              {
                name: 'Claude Dubois',
                role: language === 'fr' ? 'Mère de famille' : 'Mother',
                text: language === 'fr' ? '"J\'ai offert StudyBox à mes enfants pour Noël. Ils adorent l\'interface et leurs notes ont vraiment amélioré. Je suis rassurée de voir qu\'ils étudient intelligemment."' : '"I gave StudyBox to my children for Christmas. They love the interface and their grades have really improved. I\'m reassured to see them studying intelligently."',
                rating: 5
              },
              {
                name: 'Marco Rossi',
                role: language === 'fr' ? 'Étudiant secondaire' : 'High school student',
                text: language === 'fr' ? '"Les synthèses automatiques sont incroyables ! Je prends une photo de mes notes et StudyBox me crée des résumés parfaits pour mes examens. Plus besoin de passer des heures à réécrire."' : '"The automatic summaries are incredible! I take a photo of my notes and StudyBox creates perfect summaries for my exams. No more hours spent rewriting."',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">{testimonial.text}</p>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="relative bg-gradient-to-b from-black to-gray-950 py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[200px]"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl sm:text-7xl font-black text-white mb-8">
            {language === 'fr' ? 'Prêt à transformer votre apprentissage ?' : 'Ready to transform your learning?'}
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Rejoignez des milliers d\'étudiants qui ont déjà amélioré leurs résultats avec StudyBox'
              : 'Join thousands of students who have already improved their results with StudyBox'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/studybox" 
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              {language === 'fr' ? 'Découvrir' : 'Discover'}
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/20 transition-all duration-300">
                {language === 'fr' ? 'Parler à un conseiller' : 'Talk to an advisor'}
              </button>
            </Link>
          </div>
          
                  </div>
      </section>
    </>
  )
}
