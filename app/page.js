'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AnimatedSection from '../components/AnimatedSection'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/images/photoboitediagonale.png',
      alt: 'StudyBox - Design élégant',
      title: 'Design élégant',
      description: 'Une box premium qui allie style et fonctionnalité'
    },
    {
      image: '/images/photodessusboite.png',
      alt: 'StudyBox vue de dessus',
      title: 'Vue d\'ensemble',
      description: 'Tout ce dont vous avez besoin, parfaitement organisé'
    },
    {
      image: '/images/photoboiteouverte.png',
      alt: 'StudyBox ouverte',
      title: 'Contenu complet',
      description: 'Découvrez tous les outils pour réussir vos études'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-studybox-blue pt-16 overflow-hidden">
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-apple-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-apple-glow animation-delay-1000"></div>
        </div>
        {/* Decorative Icons Background */}
        <div className="absolute inset-0">
          {/* Book Icon - Top Left */}
          <svg className="absolute top-20 left-10 w-24 h-24 text-white/40 animate-apple-icon animation-delay-300 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>

          {/* Star Icon - Top Center */}
          <svg className="absolute top-32 right-1/4 w-16 h-16 text-white/30 animate-apple-icon animation-delay-500 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>

          {/* Light Bulb - Top Right */}
          <svg className="absolute top-24 right-16 w-28 h-28 text-white/35 animate-apple-icon animation-delay-700 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>

          {/* Pencil - Bottom Right */}
          <svg className="absolute bottom-32 right-20 w-32 h-32 text-white/25 rotate-45 animate-apple-icon animation-delay-900 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>

          {/* Star - Bottom Left */}
          <svg className="absolute bottom-40 left-16 w-20 h-20 text-white/30 animate-apple-icon animation-delay-1100 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>

          {/* Gear - Bottom Left */}
          <svg className="absolute bottom-20 left-32 w-24 h-24 text-white/30 animate-apple-icon animation-delay-1300 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          {/* Book - Middle Right */}
          <svg className="absolute top-1/2 right-10 w-20 h-20 text-white/25 -rotate-12 animate-apple-icon animation-delay-900 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>

          {/* Star - Middle Left */}
          <svg className="absolute top-1/2 left-20 w-14 h-14 text-white/35 animate-apple-icon animation-delay-500 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="animate-apple-title">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
              {t('hero.title')}
            </h1>
          </div>
          <div className="animate-apple-subtitle animation-delay-400">
            <p className="text-2xl sm:text-3xl text-white/90 mb-4 max-w-4xl mx-auto font-light">
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="animate-apple-subtitle animation-delay-600">
            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              {t('hero.description')}
            </p>
          </div>
          <div className="animate-apple-button animation-delay-900">
            <Link href="/studybox" className="inline-block bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-medium hover:bg-white/90 hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-white/20">
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-6xl sm:text-7xl font-bold text-black mb-6 tracking-tight">
                {t('home.productTitle')}
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {t('home.productSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Carousel */}
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 shadow-2xl">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="h-full flex items-center justify-center p-12">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="max-h-full max-w-full object-contain drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Slide Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-12">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-lg text-white/90">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-12 h-3 bg-studybox-blue'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <AnimatedSection delay={200}>
            <div className="mt-20 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white rounded-full px-10 py-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Design premium</span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Tout inclus</span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Livraison soignée</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Showcase Section - Style Apple */}
      <section className="bg-studybox-blue py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Product Image */}
              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-3xl mx-auto mb-6"></div>
                    <p className="text-white/50 font-medium">Image produit StudyBox</p>
                  </div>
                </div>
              </div>

              {/* Right: Product Details */}
              <div className="text-white">
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
                  {t('home.everythingTitle')}
                </h2>
                <p className="text-2xl text-white/80 mb-10 leading-relaxed font-light">
                  {t('home.everythingSubtitle')}
                </p>

                {/* Features List */}
                <ul className="space-y-5 mb-12">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-white mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xl text-white/90 font-light">{t('home.premiumQuality')}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-white mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xl text-white/90 font-light">{t('home.optimalOrganization')}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-white mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xl text-white/90 font-light">{t('home.modernDesign')}</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-white mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xl text-white/90 font-light">{t('home.carefulDelivery')}</span>
                  </li>
                </ul>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div>
                    <p className="text-base text-white/60 mb-2 font-light">{t('home.startingFrom')}</p>
                    <p className="text-5xl font-semibold tracking-tight">15€</p>
                  </div>
                  <a href="/commander" className="bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-2xl">
                    {t('home.buyButton')}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
                {t('home.craftedTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                {t('home.craftedSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <AnimatedSection delay={100}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('home.superiorQuality')}</h3>
                <p className="text-gray-600">{t('home.superiorQualityDesc')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('home.timeSaving')}</h3>
                <p className="text-gray-600">{t('home.timeSavingDesc')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('home.madeWithPassion')}</h3>
                <p className="text-gray-600">{t('home.madeWithPassionDesc')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
