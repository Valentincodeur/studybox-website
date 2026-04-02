'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

export default function PartenairesPage() {
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black">
            Nos partenaires
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ensemble pour la réussite étudiante
          </p>
        </div>
      </section>

      {/* Section: Nos partenaires */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Tous nos partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Découvrez les établissements et entreprises qui collaborent avec StudyBox
            </p>
            
            {/* Catégories cliquables */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#restauration" className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all">
                Restauration
              </a>
              <a href="#sports" className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all">
                Sports & Loisirs
              </a>
              <a href="#services" className="px-6 py-3 bg-white border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all">
                Services étudiants
              </a>
            </div>
          </div>

          {/* Section Restauration */}
          <div id="restauration" className="scroll-mt-24 mb-16">
            <h3 className="text-3xl font-bold text-black mb-8">Restauration</h3>
          </div>

          {/* Grille de partenaires - Modifiez les informations ci-dessous */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* PARTENAIRE 1 - L'Harmony */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/logo Harmony .png" 
                  alt="L'Harmony" 
                  width={350} 
                  height={175} 
                  className="w-4/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                {/* Nom du partenaire */}
                <h3 className="text-2xl font-bold text-black mb-2">L'Harmony</h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  Restaurant partenaire offrant des services de restauration de qualité.
                </p>
                
                {/* Informations */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Rue de l'Eglise 86, 1150 Woluwe-Saint-Pierre</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">info@lharmony.be</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-600">02 772 65 25</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Restauration</span>
                  </div>
                </div>
                
                {/* Lien site web */}
                <a href="https://www.lharmony.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PARTENAIRE 2 - Pepe & Ricotta */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/Logo Pepe & ricotta.jpeg" 
                  alt="Pepe & Ricotta" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">Pepe & Ricotta</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Traiteur-épicerie italienne proposant des plats faits maison de qualité.
                </p>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Stockel Square Shopping Center, 1150 Woluwe-Saint-Pierre</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-600">0489 87 27 85</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">info@pepericotta.com</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Restauration</span>
                  </div>
                </div>
                
                <a href="https://pepericotta.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PARTENAIRE 3 - SunRice Poke */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/Logo sunrice poke.jpeg" 
                  alt="SunRice Poke" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">SunRice Poke</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Restaurant de poke bowls frais et savoureux.
                </p>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Pl. Jean-Baptiste Carnoy 23, 1200 Woluwe-Saint-Lambert</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-600">0493 70 70 79</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">sunricepoke.belgium@gmail.com</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Restauration</span>
                  </div>
                </div>
                
                <a href="https://sunricepoke.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PARTENAIRE 4 - Éclat Cacao */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/Logo-eclat-cacao.png" 
                  alt="Éclat Cacao" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">Éclat Cacao</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Pâtisserie artisanale proposant des créations gourmandes et raffinées.
                </p>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Rue Henri Vandermaelen 77, 1150 Bruxelles</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-600">02 762 69 59</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Pâtisserie</span>
                  </div>
                </div>
                
                <a href="https://tartine-et-boterham.be/boulangerie-patisserie/eclat-cacao/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PARTENAIRE 5 - Buddy Focus */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/images Buddy.png" 
                  alt="Buddy Focus" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">Buddy Focus</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Boisson énergisante 100% naturelle et bio pour stimuler la concentration et l'énergie.
                </p>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Boulevard de l'Europe 131B, boite F1, 1300 Wavre</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">info@buddydrink.be</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Entreprise</span>
                  </div>
                </div>
                
                <a href="https://www.buddydrink.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PARTENAIRE 6 - Glacier Mouss */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/mouss-logo.png" 
                  alt="Glacier Mouss" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">Glacier Mouss</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Glacier ambulant proposant d'excellentes glaces artisanales et des gaufres fraîches dans les communes de Woluwe, Wezembeek et Kraainem.
                </p>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Woluwe, Wezembeek, Kraainem</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Glacier ambulant</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Section Sports & Loisirs */}
          <div id="sports" className="scroll-mt-24 mb-16">
            <h3 className="text-3xl font-bold text-black mb-8">Sports & Loisirs</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* PARTENAIRE 7 - Crossing Schaerbeek */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/logo crossing.jpeg" 
                  alt="Crossing Schaerbeek" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">Crossing Schaerbeek</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Club de football professionnel proposant des activités sportives et des compétitions.
                </p>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Av. du Suffrage Universel, 1030 Bruxelles</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">info@crossing-schaerbeek.be</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-600">0477 30 42 69</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Club de football</span>
                  </div>
                </div>
                
                <a href="https://crossing-schaerbeek.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* PARTENAIRE 8 - Kibubu Rugby Club */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-white flex items-center justify-center p-12">
                <Image 
                  src="/images/Kibubu logo.png" 
                  alt="Kibubu Rugby Club" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">Kibubu Rugby Club</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Club de rugby bruxellois proposant des entraînements et compétitions pour tous niveaux.
                </p>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">Rue de la Limite 100, Woluwe-Saint-Pierre</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">ecole@kibubu.be</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm text-gray-600">+32 492 77 04 93</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">Club de rugby</span>
                  </div>
                </div>
                
                <a href="https://www.kibubu.be" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">
                  Visiter le site
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            
          </div>

          {/* Section Services étudiants */}
          <div id="services" className="scroll-mt-24 mb-16">
            <h3 className="text-3xl font-bold text-black mb-8">Services étudiants</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* PARTENAIRE 10 - Génération Moove */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
              <div className="h-72 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center p-12">
                <Image 
                  src="/images/generation-moove-logo.png" 
                  alt="Génération Moove" 
                  width={350} 
                  height={175} 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">Génération Moove</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Partenaire de StudyBox.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section: Devenir partenaire */}
      <section id="devenir-partenaire" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Devenir partenaire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez notre réseau et bénéficiez d'avantages exclusifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pourquoi nous rejoindre */}
            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-black">Pourquoi nous rejoindre ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Visibilité auprès de milliers d'étudiants</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Accès à notre plateforme de communication</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Participation à nos événements exclusifs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Support marketing et communication</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Statistiques et reporting détaillés</span>
                </li>
              </ul>
            </div>

            {/* Avantages partenaires */}
            <div id="avantages" className="bg-white p-10 rounded-3xl shadow-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-black">Avantages partenaires</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Logo affiché sur notre site et app</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Tarifs préférentiels pour vos étudiants</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Co-branding sur nos produits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Mentions dans nos newsletters</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Accès prioritaire aux nouveautés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Candidature */}
      <section id="candidature" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Déposer une candidature
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous pour devenir partenaire
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom de l'établissement / entreprise *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre établissement"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Type de structure *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Restauration</option>
                    <option>Sports & Loisirs</option>
                    <option>Services étudiants</option>
                    <option>Commerce</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom du contact *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fonction *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre fonction"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email professionnel *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="contact@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre d'étudiants concernés</label>
                <input 
                  type="number" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 5000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Présentation de votre projet *</label>
                <textarea 
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Présentez-nous votre établissement et votre projet de partenariat..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Envoyer la candidature
              </button>
            </form>
          </div>
        </div>
      </section>

          </div>
  )
}
