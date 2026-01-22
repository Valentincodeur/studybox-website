'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(false)
  const [appOpen, setAppOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [newsOpen, setNewsOpen] = useState(false)
  const [studyboxOpen, setStudyboxOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style when scrolling past the hero section (approximately)
      setScrolled(window.scrollY > window.innerHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-200/95 shadow-sm' 
          : 'bg-black/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo à gauche */}
          <a href="#" className="flex items-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="StudyBox Logo" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
          </a>

          {/* Menu au centre */}
          <div className="flex items-center space-x-10">
            <a 
              href="#" 
              className={`text-sm font-medium hover:opacity-70 transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Accueil
            </a>
            {/* StudyBox avec mega menu */}
            <div className="relative">
              <a 
                href="#" 
                className={`text-sm font-medium hover:opacity-70 transition-all duration-300 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
                onMouseEnter={() => {
                  setStudyboxOpen(true)
                  setNewsOpen(false)
                  setFaqOpen(false)
                  setAppOpen(false)
                  setAboutOpen(false)
                  setContactOpen(false)
                }}
              >
                StudyBox
              </a>
              
              {/* Mega Menu */}
              {studyboxOpen && (
                <div 
                  className="fixed left-0 right-0 top-16 z-40"
                  onMouseEnter={() => setStudyboxOpen(true)}
                  onMouseLeave={() => setStudyboxOpen(false)}
                >
                  <div className={`w-full transition-all duration-300 ${
                    scrolled ? 'bg-gray-100/98' : 'bg-black/95'
                  } backdrop-blur-xl shadow-2xl`}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
                      <div className="grid grid-cols-3 gap-12">
                        {/* Colonne 1 : Découvrir */}
                        <div>
                          <h3 className={`text-xs font-semibold mb-4 ${
                            scrolled ? 'text-gray-500' : 'text-white/60'
                          }`}>Découvrir la StudyBox</h3>
                          <ul className="space-y-3">
                            <li>
                              <a href="/studybox/decouvrir" className={`text-2xl font-semibold hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Découvrir tous les produits
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/box-complete" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                StudyBox Complète
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/box-essentielle" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                StudyBox Essentielle
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/box-personnalisee" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                StudyBox Personnalisée
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/accessoires" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Accessoires
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Colonne 2 : Acheter */}
                        <div>
                          <h3 className={`text-xs font-semibold mb-4 ${
                            scrolled ? 'text-gray-500' : 'text-white/60'
                          }`}>Acheter</h3>
                          <ul className="space-y-3">
                            <li>
                              <a href="/studybox/acheter" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Acheter une StudyBox
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/offres" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Offres spéciales
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/abonnement" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Abonnement mensuel
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Colonne 3 : En savoir plus */}
                        <div>
                          <h3 className={`text-xs font-semibold mb-4 ${
                            scrolled ? 'text-gray-500' : 'text-white/60'
                          }`}>En savoir plus</h3>
                          <ul className="space-y-3">
                            <li>
                              <a href="/studybox/contenu" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Contenu de la box
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/qualite" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Qualité & durabilité
                              </a>
                            </li>
                            <li>
                              <a href="/studybox/temoignages" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Témoignages
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a 
              href="#" 
              className={`text-sm font-medium hover:opacity-70 transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
            >
              Nos partenaires
            </a>
            
            {/* Actualités avec mega menu */}
            <div className="relative">
              <a 
                href="#" 
                className={`text-sm font-medium hover:opacity-70 transition-all duration-300 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
                onMouseEnter={() => {
                  setNewsOpen(true)
                  setStudyboxOpen(false)
                  setFaqOpen(false)
                  setAppOpen(false)
                  setAboutOpen(false)
                  setContactOpen(false)
                }}
              >
                Actualités
              </a>
              
              {/* Mega Menu */}
              {newsOpen && (
                <div 
                  className="fixed left-0 right-0 top-16 z-40"
                  onMouseEnter={() => setNewsOpen(true)}
                  onMouseLeave={() => setNewsOpen(false)}
                >
                  <div className={`w-full transition-all duration-300 ${
                    scrolled ? 'bg-gray-100/98' : 'bg-black/95'
                  } backdrop-blur-xl shadow-2xl`}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
                      <div className="grid grid-cols-3 gap-12">
                        <div>
                          <ul className="space-y-3">
                            <li>
                              <a href="/actualites/blog" className={`text-2xl font-semibold hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Articles / blog
                              </a>
                            </li>
                            <li>
                              <a href="/actualites/evenements" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Événements à venir
                              </a>
                            </li>
                            <li>
                              <a href="/actualites/mises-a-jour" className={`text-base hover:opacity-70 transition-opacity ${
                                scrolled ? 'text-black' : 'text-white'
                              }`}>
                                Mises à jour de l'application
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* FAQ avec menu déroulant */}
            <div className="relative">
              <a 
                href="#" 
                className={`text-sm font-medium hover:opacity-70 transition-all duration-300 flex items-center gap-1 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
                onMouseEnter={() => {
                  setFaqOpen(true)
                  setAppOpen(false)
                  setAboutOpen(false)
                  setContactOpen(false)
                  setNewsOpen(false)
                }}
              >
                FAQ
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Menu déroulant */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-top ${
                  faqOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                } ${
                  scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'
                }`}
                onMouseEnter={() => {
                  setFaqOpen(true)
                  setAppOpen(false)
                  setAboutOpen(false)
                  setContactOpen(false)
                  setNewsOpen(false)
                }}
                onMouseLeave={() => setFaqOpen(false)}
              >
                  <a
                    href="/faq/box"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur la box
                  </a>
                  <a
                    href="/faq/livraisons"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur les livraisons
                  </a>
                  <a
                    href="/faq/application"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur l'application
                  </a>
                  <a
                    href="/faq/partenaires"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur les partenaires
                  </a>
              </div>
            </div>
            
            {/* Application avec menu déroulant */}
            <div className="relative">
              <a 
                href="#" 
                className={`text-sm font-medium hover:opacity-70 transition-all duration-300 flex items-center gap-1 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
                onMouseEnter={() => {
                  setAppOpen(true)
                  setFaqOpen(false)
                  setAboutOpen(false)
                  setContactOpen(false)
                  setNewsOpen(false)
                }}
              >
                Application
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Menu déroulant */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-top ${
                  appOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                } ${
                  scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'
                }`}
                onMouseEnter={() => {
                  setAppOpen(true)
                  setFaqOpen(false)
                  setAboutOpen(false)
                  setContactOpen(false)
                  setNewsOpen(false)
                }}
                onMouseLeave={() => setAppOpen(false)}
              >
                  <a
                    href="/application/box"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur la box
                  </a>
                  <a
                    href="/application/livraisons"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur les livraisons
                  </a>
                  <a
                    href="/application/application"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur l'application
                  </a>
                  <a
                    href="/application/partenaires"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Questions sur les partenaires
                  </a>
              </div>
            </div>
            
            {/* À propos avec menu déroulant */}
            <div className="relative">
              <a 
                href="#" 
                className={`text-sm font-medium hover:opacity-70 transition-all duration-300 flex items-center gap-1 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
                onMouseEnter={() => {
                  setAboutOpen(true)
                  setFaqOpen(false)
                  setAppOpen(false)
                  setContactOpen(false)
                  setNewsOpen(false)
                }}
              >
                À propos
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Menu déroulant */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-top ${
                  aboutOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                } ${
                  scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'
                }`}
                onMouseEnter={() => {
                  setAboutOpen(true)
                  setFaqOpen(false)
                  setAppOpen(false)
                  setContactOpen(false)
                  setNewsOpen(false)
                }}
                onMouseLeave={() => setAboutOpen(false)}
              >
                  <a
                    href="/about/histoire"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Notre histoire
                  </a>
                  <a
                    href="/about/equipe"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Notre équipe
                  </a>
                  <a
                    href="/about/valeurs"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Nos valeurs
                  </a>
                  <a
                    href="/about/mission"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Notre mission
                  </a>
                  <a
                    href="/about/engagements"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Nos engagements
                  </a>
              </div>
            </div>
            
            {/* Contact avec menu déroulant */}
            <div className="relative">
              <a 
                href="#" 
                className={`text-sm font-medium hover:opacity-70 transition-all duration-300 flex items-center gap-1 ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
                onMouseEnter={() => {
                  setContactOpen(true)
                  setFaqOpen(false)
                  setAppOpen(false)
                  setAboutOpen(false)
                  setNewsOpen(false)
                }}
              >
                Contact
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Menu déroulant */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50 transition-all duration-300 origin-top ${
                  contactOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                } ${
                  scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'
                }`}
                onMouseEnter={() => {
                  setContactOpen(true)
                  setFaqOpen(false)
                  setAppOpen(false)
                  setAboutOpen(false)
                  setNewsOpen(false)
                }}
                onMouseLeave={() => setContactOpen(false)}
              >
                  <a
                    href="/contact/formulaire"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Formulaire de contact
                  </a>
                  <a
                    href="/contact/support"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Support client
                  </a>
                  <a
                    href="/contact/partenariat"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Collaboration / partenariat
                  </a>
                  <a
                    href="/contact/localisation"
                    className={`block px-6 py-3 text-sm transition-all duration-200 ${
                      scrolled 
                        ? 'text-black hover:bg-gray-100' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Localisation / horaires
                  </a>
              </div>
            </div>
          </div>

          {/* Actions à droite : Recherche + Langue + Bouton Acheter */}
          <div className="flex items-center space-x-4">
            {/* Bouton Recherche */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-lg hover:bg-white/10 transition-all duration-200 ${
                scrolled ? 'text-black hover:bg-black/5' : 'text-white'
              }`}
              aria-label="Rechercher"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sélecteur de langue */}
            <div className="relative">
              <select
                className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 appearance-none pr-8 ${
                  scrolled 
                    ? 'bg-white/50 text-black hover:bg-white/70' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                defaultValue="fr"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="de">DE</option>
              </select>
              <svg 
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                  scrolled ? 'text-black' : 'text-white'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Bouton Acheter */}
            <a
              href="#"
              className="bg-[#1089e6] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1089e6]/90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Acheter
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
