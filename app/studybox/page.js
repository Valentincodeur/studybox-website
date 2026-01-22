'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link';

export default function StudyBoxPage() {
  useEffect(() => {
    // Gestion du scroll vers les sections via les ancres
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-studybox-blue overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-apple-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-apple-glow animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-apple-glow animation-delay-500"></div>
        </div>

        {/* Decorative Icons Background */}
        <div className="absolute inset-0">
          {/* Book Icon - Top Left */}
          <svg className="absolute top-20 left-10 w-24 h-24 text-white/40 animate-apple-icon animation-delay-300 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>

          {/* Star Icon - Top Center */}
          <svg className="absolute top-24 left-1/3 w-16 h-16 text-white/25 animate-apple-icon animation-delay-400 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>

          {/* Star Icon - Top Right */}
          <svg className="absolute top-32 right-20 w-20 h-20 text-white/30 animate-apple-icon animation-delay-500 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>

          {/* Light Bulb - Top Right Corner */}
          <svg className="absolute top-16 right-1/4 w-22 h-22 text-white/20 animate-apple-icon animation-delay-600 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>

          {/* Calendar - Middle Left */}
          <svg className="absolute top-1/2 left-12 w-20 h-20 text-white/30 animate-apple-icon animation-delay-800 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>

          {/* Gear - Middle Right */}
          <svg className="absolute top-1/2 right-16 w-24 h-24 text-white/25 animate-apple-icon animation-delay-1000 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          {/* Light Bulb - Bottom Left */}
          <svg className="absolute bottom-20 left-16 w-28 h-28 text-white/35 animate-apple-icon animation-delay-700 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>

          {/* Pencil - Bottom Right */}
          <svg className="absolute bottom-24 right-16 w-24 h-24 text-white/25 rotate-45 animate-apple-icon animation-delay-900 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>

          {/* Document - Bottom Center */}
          <svg className="absolute bottom-16 left-1/3 w-18 h-18 text-white/20 animate-apple-icon animation-delay-1100 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>

          {/* Trophy - Bottom Right Area */}
          <svg className="absolute bottom-32 right-1/4 w-20 h-20 text-white/25 animate-apple-icon animation-delay-1200 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>

          {/* Book - Middle Center Left */}
          <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-white/20 -rotate-12 animate-apple-icon animation-delay-1300 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>

          {/* Star - Middle Center Right */}
          <svg className="absolute top-2/3 right-1/3 w-14 h-14 text-white/25 animate-apple-icon animation-delay-1400 animate-apple-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-apple-title">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              La StudyBox
            </h1>
          </div>
          <div className="animate-apple-subtitle animation-delay-400">
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Tout ce dont vous avez besoin pour réussir vos études, 
              organisé dans une box élégante et pratique.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Que contient la box ? */}
      <section id="contenu" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Que contient la box ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez tous les éléments soigneusement sélectionnés pour optimiser votre expérience d'étude
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Canette Buddy Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Boisson énergisante 100% naturelle spécialement conçue pour les étudiants, pour rester concentré pendant les révisions. 100% bio et bonne pour la santé. 
              </p>
            </div>

            {/* Item 2 */}
            <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Partenaires locaux</h3>
              <p className="text-gray-600 leading-relaxed">
                Produits sélectionnés auprès de nos partenaires belges de qualité pour soutenir l'économie locale
              </p>
            </div>

            {/* Item 3 */}
            <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Planificateur</h3>
              <p className="text-gray-600 leading-relaxed">
                Organisez votre semaine avec notre planificateur hebdomadaire et mensuel. Calendrier 100% intelligent. 
              </p>
            </div>

            {/* Item 4 */}
            <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Post-it & marque-pages</h3>
              <p className="text-gray-600 leading-relaxed">
                Assortiment de post-it colorés et marque-pages pour organiser vos révisions
              </p>
            </div>

            {/* Item 5 */}
            <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Fiches de révision</h3>
              <p className="text-gray-600 leading-relaxed">
                Pack de fiches bristol de différentes couleurs pour vos résumés de cours
              </p>
            </div>

            {/* Item 6 */}
            <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">Accès application</h3>
              <p className="text-gray-600 leading-relaxed">
                Code d'accès premium à notre application mobile d'organisation et de révision. Une application complète et 100% intelligente. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pour qui ? */}
      <section id="pour-qui" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Pour qui ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La StudyBox s'adapte à tous les profils d'étudiants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Profil 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center text-black">Étudiants du secondaire </h3>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                Préparez le CE1D ou le CESS avec tous les outils nécessaires pour organiser vos révisions et réussir vos examens
              </p>
            </div>

            {/* Profil 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center text-black">Étudiants du supérieur  </h3>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                Université, haute école, prépa... Optimisez votre organisation et gagnez en efficacité dans vos études
              </p>
            </div>

            {/* Profil 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center text-black">Professionnels</h3>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                Formation continue, reconversion... Restez organisé pendant votre parcours d'apprentissage
              </p>
            </div>

            {/* Profil 4 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center text-black">Autodidactes</h3>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                Apprentissage en ligne, cours particuliers... Structurez votre apprentissage personnel
              </p>
            </div>

            {/* Profil 5 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center text-black">Élèves du primaire</h3>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                5e et 6e primaire : préparez le CEB avec des outils adaptés pour bien démarrer vos habitudes d'étude
              </p>
            </div>

            {/* Profil 6 */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center text-black">Parents</h3>
              <p className="text-gray-600 text-center leading-relaxed text-lg">
                Offrez à vos enfants les meilleurs outils pour réussir leur parcours scolaire et développer de bonnes habitudes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Tarifs */}
      <section id="prix" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Tarifs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la formule qui vous correspond
            </p>
            
            {/* Mention légale importante */}
            <div className="mt-8 bg-studybox-blue/10 border-2 border-studybox-blue/30 rounded-2xl px-6 py-4 max-w-3xl mx-auto">
              <p className="text-gray-800 text-sm leading-relaxed">
                <span className="font-semibold text-studybox-blue">StudyBox est un projet de mini-entreprise pédagogique.</span><br />
                L'achat est réservé aux personnes majeures ou représentants légaux.<br />
                Le produit est destiné aux élèves du secondaire et aux étudiants.
              </p>
            </div>
            
            {/* Informations de livraison */}
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 max-w-3xl mx-auto">
              <p className="text-gray-800 text-sm leading-relaxed">
                <span className="font-semibold">📦 Livraison :</span> Belgique uniquement • Délai : 5 à 7 jours ouvrables<br />
                <span className="font-semibold">🎁 Livraison gratuite</span> dès 3 StudyBox commandées
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Badge vide pour Essentiel */}
              <div></div>
              
              {/* Badge POPULAIRE */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-black px-8 py-3 rounded-full text-base font-black shadow-2xl animate-bounce">
                  ⭐ POPULAIRE ⭐
                </div>
              </div>
              
              {/* Badge PREMIUM */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full text-base font-black shadow-2xl">
                  👑 PREMIUM 👑
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto items-stretch">
            {/* Formule Essentiel - Simple et discret */}
            <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1 text-gray-700">Essentiel</h3>
                <p className="text-sm text-gray-500 mb-4">Pour bien démarrer</p>
                <div className="text-4xl font-bold text-studybox-blue mb-1">15€</div>
                <p className="text-xs text-gray-400">Paiement unique</p>
              </div>
              <ul className="space-y-2.5 mb-6 text-sm flex-grow">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Accès à l'application 100% intelligente</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Assortiment de post-it transparents et marque-pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Pack de fiches de révision (20 pcs)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Bons de réductions chez nos partenaires</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Matériel pour s'organiser et réussir ses études</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">1 canette Buddy Focus incluse</span>
                </li>
              </ul>
              <Link href="/commander" className="block w-full bg-studybox-blue text-white py-3 rounded-full text-sm font-semibold hover:bg-studybox-blue/90 transition-all duration-200 text-center mt-auto">
                Commander
              </Link>
            </div>

            {/* Formule Personnalisée - ULTRA SPECTACULAIRE */}
            <div className="relative group z-10 flex flex-col">
              {/* Halo lumineux animé */}
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-10 rounded-3xl shadow-[0_25px_90px_-15px_rgba(168,85,247,0.9)] border-[6px] border-yellow-400 overflow-hidden flex flex-col h-full">
                {/* Effet shimmer animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_3s_ease-in-out_infinite]"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black mb-2 text-white tracking-tight">Personnalisée</h3>
                    <p className="text-lg text-white/90 mb-6 font-medium">La formule avec votre touche personnelle</p>
                    <div className="text-6xl font-black text-yellow-300 mb-2 drop-shadow-[0_0_20px_rgba(253,224,71,0.9)]">25€</div>
                    <p className="text-yellow-200 font-semibold">Paiement unique</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Tout de la formule Essentiel</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Personnalisation du prénom sur la boîte</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Cahier de notes premium en plus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Fiches de révision (50 pcs)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Matériel pour s'organiser et réussir ses études</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">1 canette Buddy Focus incluse</span>
                    </li>
                  </ul>
                  
                  <Link href="/commander" className="block w-full bg-white text-purple-700 py-5 rounded-2xl text-lg font-black hover:bg-yellow-50 hover:shadow-[0_15px_50px_-10px_rgba(255,255,255,0.9)] transition-all duration-300 hover:scale-105 text-center shadow-xl mt-auto">
                    COMMANDER
                  </Link>
                </div>
              </div>
            </div>

            {/* Formule Premium - Luxe noir et or */}
            <div className="relative group flex flex-col">
              {/* Halo doré */}
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black p-9 rounded-3xl shadow-[0_25px_70px_-15px_rgba(234,179,8,0.6)] border-4 border-yellow-500 hover:border-yellow-400 hover:shadow-[0_25px_90px_-10px_rgba(234,179,8,0.9)] transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Effet radial doré */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.15),transparent_60%)]"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-black mb-2 text-white tracking-tight">Premium</h3>
                    <p className="text-lg text-gray-200 mb-6 font-medium">L'expérience complète</p>
                    <div className="text-6xl font-black text-yellow-400 mb-2 drop-shadow-[0_0_25px_rgba(250,204,21,1)]">35€</div>
                    <p className="text-yellow-300 font-semibold">Paiement unique</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Tout de la formule Personnalisée</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Accès application premium à vie</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">2 canettes Buddy Focus de goûts différents</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Fiches de révision (100 pcs)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Livraison expresse gratuite</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Support client prioritaire</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white font-bold text-base">Matériel pour s'organiser et réussir ses études</span>
                    </li>
                  </ul>
                  
                  <Link href="/commander" className="block w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black py-5 rounded-2xl text-lg font-black hover:from-yellow-300 hover:to-yellow-500 shadow-[0_15px_40px_-10px_rgba(234,179,8,0.9)] hover:shadow-[0_15px_60px_-5px_rgba(234,179,8,1)] transition-all duration-300 hover:scale-105 text-center mt-auto">
                    COMMANDER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pensée pour les étudiants */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Pensée pour les étudiants
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Élégante. Utile. Essentielle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Photo 1 - Gauche */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square relative flex items-center justify-center p-4">
                <img 
                  src="/images/photoboitediagonale.png" 
                  alt="StudyBox vue diagonale"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Photo 2 - Milieu */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square relative flex items-center justify-center p-4">
                <img 
                  src="/images/photodessusboite.png" 
                  alt="StudyBox vue de dessus"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Photo 3 - Droite */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square relative flex items-center justify-center p-4">
                <img 
                  src="/images/photoboiteouverte.png" 
                  alt="StudyBox ouverte"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Prêt à transformer vos études ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Rejoignez des centaines d'étudiants qui ont déjà choisi la StudyBox pour réussir
          </p>
          <Link href="/commander" className="bg-white text-purple-600 px-12 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl inline-block">
            Commander maintenant
          </Link>
        </div>
      </section>
    </div>
  )
}
