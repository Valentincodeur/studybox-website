'use client'

import { useEffect, useRef, useState } from 'react'
import AutoplayVideo from '../../components/AutoplayVideo'
import { useLanguage } from '../../context/LanguageContext'

export default function ApplicationPage() {
  const { t } = useLanguage()
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef(null)
  const feature1Ref = useRef(null)
  const feature2Ref = useRef(null)
  const feature3Ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Intersection Observer pour les animations au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    // Observer tous les éléments avec la classe scroll-reveal
    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-studybox-blue transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section avec parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-studybox-blue overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-shift" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-none">
              {t('app.heroTitle')}
            </h1>
            <p className="text-3xl sm:text-4xl text-white/90 mb-6 font-light tracking-tight">
              {t('app.heroSubtitle')}
            </p>
            <p className="text-xl sm:text-2xl text-white/60 mb-16 max-w-3xl mx-auto font-light">
              {t('app.heroDesc')}
            </p>
          </div>
          
          <div className="animate-fade-in-up animation-delay-400">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-black px-12 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3">
                <span>{t('app.download')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                onClick={() => {
                  const featuresSection = document.querySelector('#features')
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="px-12 py-5 rounded-full text-lg font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                {t('app.learnMore')}
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Feature 1 - Scroll Reveal avec image */}
      <section 
        id="features"
        ref={feature1Ref}
        className="min-h-screen flex items-center bg-white py-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 scroll-reveal">
              <div className="relative aspect-[9/16] max-w-sm mx-auto">
                {/* Phone mockup avec vidéo */}
                <div className="absolute inset-0 bg-gradient-to-br from-studybox-blue to-blue-900 rounded-[3rem] shadow-2xl p-3">
                  <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                    {/* Indication pour l'utilisateur (overlay très visible) */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-2 text-xs sm:text-sm text-black shadow-xl border border-studybox-blue/40">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-studybox-blue text-white animate-bounce">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 4V20M12 20L8 16M12 20L16 16"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-medium">
                        {t('app.scrollDemo')}
                      </span>
                    </div>

                    {/* Vidéo de l'application */}
                    <AutoplayVideo 
                      src="/videos/ScreenRecording_12-05-2025 09-21-25_1.mov"
                      className="w-full h-full object-cover"
                      poster="/images/app-poster.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 scroll-reveal">
              <h2 className="text-6xl sm:text-7xl font-bold text-black mb-8 tracking-tight leading-none">
                {t('app.organizeTitle')}
              </h2>
              <p className="text-2xl text-gray-600 mb-8 font-light leading-relaxed">
                {t('app.organizeDesc')}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-studybox-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('app.smartPlanning')}</h3>
                    <p className="text-gray-600 font-light">{t('app.smartPlanningDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-studybox-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('app.progressTracking')}</h3>
                    <p className="text-gray-600 font-light">{t('app.progressTrackingDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-studybox-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('app.customReminders')}</h3>
                    <p className="text-gray-600 font-light">{t('app.customRemindersDesc')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 - Dark section avec animation */}
      <section 
        ref={feature2Ref}
        className="min-h-screen flex items-center bg-studybox-blue py-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="scroll-reveal">
              <h2 className="text-6xl sm:text-7xl font-bold text-white mb-8 tracking-tight leading-none">
                {t('app.reviseTitle')}
              </h2>
              <p className="text-2xl text-white/80 mb-8 font-light leading-relaxed">
                {t('app.reviseDesc')}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{t('app.flashcards')}</h3>
                    <p className="text-white/70 font-light">{t('app.flashcardsDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{t('app.quizzes')}</h3>
                    <p className="text-white/70 font-light">{t('app.quizzesDesc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{t('app.offlineMode')}</h3>
                    <p className="text-white/70 font-light">{t('app.offlineModeDesc')}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="scroll-reveal">
              <div className="relative aspect-[9/16] max-w-sm mx-auto">
                {/* Phone mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl p-3">
                  <div className="w-full h-full bg-studybox-blue rounded-[2.5rem] overflow-hidden">
                    {/* Screenshot de l'app mobile */}
                    <img 
                      src="/images/app-screenshot-home.png" 
                      alt="Interface de l'application StudyBox"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 - Stats section */}
      <section 
        ref={feature3Ref}
        className="min-h-screen flex items-center bg-white py-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-6xl sm:text-7xl font-bold text-black mb-8 tracking-tight">
                {t('app.successTitle')}
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                {t('app.successDesc')}
              </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="text-center scroll-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="text-6xl font-bold text-studybox-blue mb-4">98%</div>
              <p className="text-xl text-gray-600 font-light">{t('app.satisfaction')}</p>
            </div>
            <div className="text-center scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl font-bold text-studybox-blue mb-4">200+</div>
              <p className="text-xl text-gray-600 font-light">{t('app.activeStudents')}</p>
            </div>
            <div className="text-center scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="text-6xl font-bold text-studybox-blue mb-4">4.9★</div>
              <p className="text-xl text-gray-600 font-light">{t('app.avgRating')}</p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 scroll-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-studybox-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('app.ultraFast')}</h3>
              <p className="text-gray-600 font-light">{t('app.ultraFastDesc')}</p>
            </div>

            <div className="text-center p-8 scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-studybox-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('app.secure')}</h3>
              <p className="text-gray-600 font-light">{t('app.secureDesc')}</p>
            </div>

            <div className="text-center p-8 scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-studybox-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('app.customizable')}</h3>
              <p className="text-gray-600 font-light">{t('app.customizableDesc')}</p>
            </div>

            <div className="text-center p-8 scroll-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-studybox-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('app.sync')}</h3>
              <p className="text-gray-600 font-light">{t('app.syncDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-studybox-blue via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-gradient-shift" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="scroll-reveal">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
              {t('app.ctaTitle')}
            </h2>
            <p className="text-2xl sm:text-3xl text-white/80 mb-16 font-light">
              {t('app.ctaDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-white text-studybox-blue px-14 py-6 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>App Store</span>
              </button>
              <button className="group bg-white text-studybox-blue px-14 py-6 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Google Play</span>
              </button>
            </div>

            <p className="text-white/60 text-lg font-light">
              {t('app.availableOn')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
