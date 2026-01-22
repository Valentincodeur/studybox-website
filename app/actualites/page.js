'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ActualitesPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black">
            Actualités
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Restez informé des dernières nouveautés, conseils et événements StudyBox
          </p>
        </div>
      </section>

      {/* Section: Blog & Articles */}
      <section id="blog" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Blog & Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos derniers articles pour optimiser vos études
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 - Conseils pour étudier */}
            <div id="conseils-etudes" className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="p-8">
                <div className="text-sm text-blue-600 font-semibold mb-3">CONSEILS</div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">
                  10 techniques pour mieux étudier
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Découvrez les méthodes scientifiquement prouvées pour améliorer votre concentration et votre mémorisation.
                </p>
                <Link href="/techniques-etude" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                  Lire l'article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 2 - Organisation */}
            <div id="organisation" className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="p-8">
                <div className="text-sm text-purple-600 font-semibold mb-3">ORGANISATION</div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-purple-600 transition-colors">
                  Planifier sa semaine efficacement
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Apprenez à organiser votre temps pour maximiser votre productivité sans stress.
                </p>
                <Link href="/planifier-semaine" className="text-purple-600 font-semibold hover:underline inline-flex items-center">
                  Lire l'article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 3 - Vie étudiante */}
            <div id="vie-etudiante" className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-8">
                <div className="text-sm text-green-600 font-semibold mb-3">VIE ÉTUDIANTE</div>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-green-600 transition-colors">
                  Équilibrer études et vie sociale
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Conseils pour maintenir un bon équilibre entre vos études et votre vie personnelle.
                </p>
                <Link href="/equilibrer-etudes-vie-sociale" className="text-green-600 font-semibold hover:underline inline-flex items-center">
                  Lire l'article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Prochains Événements */}
      <section id="evenements" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Prochains Événements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retrouvez-nous lors de nos prochains événements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Événement Futur 1 - Vente de L'Esplanade */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-2">À VENIR</div>
                  <div className="text-sm text-green-600 font-semibold mb-2">31 janvier 2026</div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Vente de L'Esplanade</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Pl.+de+l'Accueil+10,+1348+Ottignies-Louvain-la-Neuve" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mb-3 text-gray-600 hover:text-green-600 transition-colors group"
                  >
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm hover:underline">Pl. de l'Accueil 10, 1348 Ottignies-Louvain-la-Neuve</span>
                  </a>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Retrouvez-nous à la vente de L'Esplanade de Louvain-la-Neuve. Plus d'informations bientôt !
                  </p>
                  <a href="#" className="text-green-600 font-semibold hover:underline">En savoir plus →</a>
                </div>
              </div>
            </div>

            {/* Événement Futur 2 - Congrès des Minis entreprises */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="ml-6">
                  <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2">À VENIR</div>
                  <div className="text-sm text-blue-600 font-semibold mb-2">07 février 2026</div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Congrès des Minis entreprises</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Stade+Roi+Baudouin,+Marathonlaan+135/2,+1020+Brussel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mb-3 text-gray-600 hover:text-blue-600 transition-colors group"
                  >
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm hover:underline">Stade Roi Baudouin, Marathonlaan 135/2, 1020 Brussel</span>
                  </a>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Venez découvrir StudyBox au Congrès des Minis entreprises.
                  </p>
                  <a href="https://www.lje.be/fr/news/congres_des_mini_entreprises" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">En savoir plus →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Événements Passés */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Événements Passés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Retour sur nos derniers événements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Événement Passé 1 - Le Passage Wellington */}
            <div className="bg-gray-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-90">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <div className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-2">TERMINÉ</div>
                  <div className="text-sm text-gray-500 font-semibold mb-2">06 DÉCEMBRE 2025</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-700">Le Passage Wellington</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Merci à tous ceux qui sont venus nous rencontrer au Passage Wellington !
                  </p>
                </div>
              </div>
            </div>

            {/* Événement Passé 2 - Marché de Noël du Rouge Cloitre */}
            <div className="bg-gray-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-90">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <div className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-2">TERMINÉ</div>
                  <div className="text-sm text-gray-500 font-semibold mb-2">13-14 DÉCEMBRE 2025</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-700">Marché de Noël du Rouge Cloitre</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Une belle expérience au Marché de Noël du Rouge Cloitre. Merci pour votre présence !
                  </p>
                </div>
              </div>
            </div>

            {/* Événement Passé 3 - Marché de Noël de l'ARCrommelynck */}
            <div className="bg-gray-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-90">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <div className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-2">TERMINÉ</div>
                  <div className="text-sm text-gray-500 font-semibold mb-2">18 DÉCEMBRE 2025</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-700">Marché de Noël de l'ARCrommelynck</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Merci à tous les visiteurs du Marché de Noël de l'ARCrommelynck !
                  </p>
                </div>
              </div>
            </div>

            {/* Événement Passé 4 - Village de Noël du CCJB */}
            <div className="bg-gray-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-90">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <div className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full mb-2">TERMINÉ</div>
                  <div className="text-sm text-gray-500 font-semibold mb-2">19-20-21 DÉCEMBRE 2025</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-700">Village de Noël du CCJB</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Un grand merci pour votre visite au Village de Noël du CCJB !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nouveautés */}
      <section id="nouveautes" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Nouveautés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les dernières actualités de StudyBox
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Nouveauté 1 - Nouveaux produits */}
            <div id="nouveaux-produits" className="bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="ml-8 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-blue-600 font-semibold">NOUVEAU PRODUIT</div>
                    <div className="text-sm text-gray-500">Il y a 2 jours</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-black">
                    Nouvelle collection StudyBox Premium
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Découvrez notre nouvelle gamme de produits premium avec des matériaux encore plus qualitatifs et un design repensé pour une expérience d'étude optimale.
                  </p>
                  <Link href="/premium" className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200">
                    Découvrir la collection
                  </Link>
                </div>
              </div>
            </div>

            {/* Nouveauté 2 - Mises à jour app */}
            <div id="mises-a-jour-app" className="bg-gradient-to-r from-green-50 to-teal-50 p-10 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-8 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-green-600 font-semibold">MISE À JOUR</div>
                    <div className="text-sm text-gray-500">Il y a 1 semaine</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-black">
                    Application v2.0 bientôt disponible
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Nouvelle interface, mode sombre, synchronisation cloud et bien plus encore. Découvrez toutes les nouveautés qui arrivent très bientôt.
                  </p>
                  <Link href="/mise-a-jour-v2" className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200">
                    Découvrir la mise à jour
                  </Link>
                </div>
              </div>
            </div>

            {/* Nouveauté 3 - Partenariats */}
            <div id="partenariats" className="bg-gradient-to-r from-orange-50 to-red-50 p-10 rounded-3xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="ml-8 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-orange-600 font-semibold">PARTENARIAT</div>
                    <div className="text-sm text-gray-500">Il y a 2 semaines</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-black">
                    Nouveaux partenaires : Commerces & Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    StudyBox s'associe avec de nombreux restaurants, clubs de sports et services étudiants pour offrir des réductions exclusives. Découvrez tous nos partenaires dès maintenant.
                  </p>
                  <Link href="/partenaires" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200">
                    Découvrir nos partenaires
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Restez informé
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Inscrivez-vous à notre newsletter pour recevoir toutes nos actualités
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button 
              onClick={() => {
                const subject = encodeURIComponent('Inscription à la newsletter StudyBox')
                const body = encodeURIComponent(`Bonjour,\n\nJe souhaite m'inscrire à la newsletter StudyBox pour recevoir toutes les actualités.\n\nMon adresse email : ${newsletterEmail}\n\nCordialement`)
                window.location.href = `mailto:studybox.lje@gmail.com?subject=${subject}&body=${body}`
              }}
              className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-2xl"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
