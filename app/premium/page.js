'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'

export default function PremiumPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: language === 'fr' ? 'Tout de la formule Personnalisée' : 'Everything from the Personalized formula',
      description: language === 'fr' ? 'Application intelligente, post-its transparents, 8 cartes de méthodologie, bons de réduction partenaires, canette Buddy' : 'Smart app, transparent post-its, 8 methodology cards, partner discount vouchers, Buddy can',
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Accès application premium à VIE' : 'LIFETIME premium app access',
      description: language === 'fr' ? 'Débloquez toutes les fonctionnalités avancées : statistiques détaillées, objectifs personnalisés, mode focus, et bien plus !' : 'Unlock all advanced features: detailed statistics, custom goals, focus mode, and more!',
      highlight: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? '🎁 Bons de réduction SUPPLÉMENTAIRES' : '🎁 EXTRA discount vouchers',
      description: language === 'fr' ? 'Recevez des bons exclusifs pour encore plus de restaurants, commerces et activités partenaires !' : 'Receive exclusive vouchers for even more partner restaurants, shops and activities!',
      highlight: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: language === 'fr' ? '🎁 Base de données CONCOURS avancée' : '🎁 Advanced EXAM database',
      description: language === 'fr' ? 'Accès exclusif à notre base de questions et exercices pour préparer vos concours et examens d\'entrée !' : 'Exclusive access to our question and exercise database to prepare for your competitive exams!',
      highlight: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: language === 'fr' ? '2 canettes Buddy Focus (goûts différents)' : '2 Buddy Focus cans (different flavors)',
      description: language === 'fr' ? 'Boissons énergisantes saines avec vitamines et minéraux, spécialement formulées pour la concentration' : 'Healthy energy drinks with vitamins and minerals, specially formulated for concentration',
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: language === 'fr' ? '100 fiches de révision premium' : '100 premium revision cards',
      description: language === 'fr' ? 'Fiches de haute qualité, format optimal pour vos synthèses et mémorisation' : 'High quality cards, optimal format for your summaries and memorization',
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: language === 'fr' ? 'Livraison expresse GRATUITE' : 'FREE express delivery',
      description: language === 'fr' ? 'Recevez votre StudyBox Premium en 24-48h partout en Belgique (valeur 9.95€)' : 'Receive your StudyBox Premium in 24-48h anywhere in Belgium (value 9.95€)',
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Support client VIP prioritaire' : 'VIP priority customer support',
      description: language === 'fr' ? 'Ligne directe avec notre équipe, réponse garantie en moins de 2h' : 'Direct line with our team, guaranteed response in less than 2h',
      highlight: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                {language === 'fr' ? 'NOUVEAU PRODUIT' : 'NEW PRODUCT'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                StudyBox Premium
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-4">
                {language === 'fr' ? 'L\'expérience complète' : 'The complete experience'}
              </p>
            </div>
          </AnimatedSection>

          {/* Prix */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto border-4 border-gradient-to-r from-blue-500 to-purple-500">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-bold text-black mb-4">35€</div>
                <p className="text-xl text-gray-600 mb-2">
                  {language === 'fr' ? 'Paiement unique' : 'One-time payment'}
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  {language === 'fr' ? 'Valeur réelle : 60€+ (économisez 25€)' : 'Real value: 60€+ (save 25€)'}
                </p>
                <Link 
                  href="/commander"
                  className="inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {language === 'fr' ? 'Commander maintenant' : 'Order now'}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Cadeaux Exclusifs */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-block bg-white text-orange-600 text-sm font-bold px-6 py-2 rounded-full mb-4 shadow-lg">
                {language === 'fr' ? '🎁 OFFRE EXCLUSIVE' : '🎁 EXCLUSIVE OFFER'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {language === 'fr' ? 'Cadeaux Supplémentaires Inclus !' : 'Extra Gifts Included!'}
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {language === 'fr' 
                  ? 'En plus de tout ce que contient la formule standard, recevez ces bonus exclusifs'
                  : 'In addition to everything in the standard formula, receive these exclusive bonuses'}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-4 mx-auto">
                  🎁
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-orange-900">
                  {language === 'fr' ? 'Bons de Réduction Supplémentaires' : 'Extra Discount Vouchers'}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {language === 'fr' 
                    ? 'Des bons exclusifs pour encore plus de restaurants, commerces et activités partenaires. Profitez de réductions supplémentaires !'
                    : 'Exclusive vouchers for even more partner restaurants, shops and activities. Enjoy additional discounts!'}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-4 mx-auto">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-orange-900">
                  {language === 'fr' ? 'Base de Données Concours' : 'Exam Database'}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {language === 'fr' 
                    ? 'Accès exclusif à notre base avancée de questions et exercices pour préparer vos concours et examens d\'entrée !'
                    : 'Exclusive access to our advanced database of questions and exercises to prepare for your competitive exams!'}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-4 mx-auto">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-orange-900">
                  {language === 'fr' ? 'Application Premium à Vie' : 'Lifetime Premium App'}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {language === 'fr' 
                    ? 'Débloquez toutes les fonctionnalités avancées pour toujours : statistiques, objectifs personnalisés, mode focus et plus !'
                    : 'Unlock all advanced features forever: statistics, custom goals, focus mode and more!'}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
              {language === 'fr' ? 'Tout ce qui est inclus' : 'Everything included'}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
                <div className={`p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 ${
                  feature.highlight 
                    ? 'bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-2 border-yellow-400 shadow-lg relative overflow-hidden' 
                    : 'bg-gradient-to-br from-gray-50 to-white border border-gray-100'
                }`}>
                  {feature.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                      {language === 'fr' ? 'CADEAU' : 'GIFT'}
                    </div>
                  )}
                  <div className="flex items-start gap-4 mt-2">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 ${
                      feature.highlight 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-600 shadow-lg' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        feature.highlight ? 'text-orange-900' : 'text-black'
                      }`}>{feature.title}</h3>
                      <p className={feature.highlight ? 'text-orange-800 font-medium' : 'text-gray-600'}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
              {language === 'fr' ? 'Pourquoi choisir Premium ?' : 'Why choose Premium?'}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formule Standard */}
            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-700">
                  {language === 'fr' ? 'Formule Standard' : 'Standard Formula'}
                </h3>
                <div className="text-4xl font-bold mb-6 text-gray-600">25€</div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{language === 'fr' ? 'Accès application de base' : 'Basic app access'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{language === 'fr' ? 'Post-its transparents' : 'Transparent post-its'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{language === 'fr' ? 'Cartes de méthodologie' : 'Methodology cards'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{language === 'fr' ? 'Bons de réduction partenaires' : 'Partner discount vouchers'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-400">{language === 'fr' ? 'Livraison standard (4.95€)' : 'Standard delivery (4.95€)'}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Formule Premium */}
            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {language === 'fr' ? 'RECOMMANDÉ' : 'RECOMMENDED'}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {language === 'fr' ? 'Formule Premium' : 'Premium Formula'}
                </h3>
                <div className="text-4xl font-bold mb-6 text-white">35€</div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-semibold">{language === 'fr' ? 'Tout de la formule Standard' : 'Everything from Standard'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-semibold">{language === 'fr' ? 'Application premium à vie' : 'Lifetime premium app'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-semibold">{language === 'fr' ? '2 canettes Buddy Focus' : '2 Buddy Focus cans'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-semibold">{language === 'fr' ? '100 fiches de révision' : '100 revision cards'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-semibold">{language === 'fr' ? 'Livraison expresse GRATUITE' : 'FREE express delivery'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-semibold">{language === 'fr' ? 'Support prioritaire' : 'Priority support'}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Prêt à passer au niveau supérieur ?' : 'Ready to level up?'}
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              {language === 'fr' 
                ? 'Rejoignez les étudiants qui ont choisi l\'excellence avec StudyBox Premium'
                : 'Join students who chose excellence with StudyBox Premium'}
            </p>
            <Link 
              href="/commander"
              className="inline-block bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              {language === 'fr' ? 'Commander maintenant - 35€' : 'Order now - 35€'}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
