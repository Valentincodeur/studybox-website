'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'

export default function MiseAJourV2Page() {
  const { language } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: language === 'fr' ? 'Nouvelle interface' : 'New interface',
      description: language === 'fr' 
        ? 'Design moderne et épuré pour une expérience utilisateur optimale. Navigation intuitive et fluide.'
        : 'Modern and clean design for optimal user experience. Intuitive and smooth navigation.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      title: language === 'fr' ? 'Mode sombre' : 'Dark mode',
      description: language === 'fr' 
        ? 'Protégez vos yeux lors des sessions d\'étude nocturnes avec le nouveau mode sombre élégant.'
        : 'Protect your eyes during night study sessions with the new elegant dark mode.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: language === 'fr' ? 'Synchronisation cloud' : 'Cloud sync',
      description: language === 'fr' 
        ? 'Vos données synchronisées automatiquement sur tous vos appareils. Travaillez partout, tout le temps.'
        : 'Your data automatically synced across all your devices. Work anywhere, anytime.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Statistiques avancées' : 'Advanced statistics',
      description: language === 'fr' 
        ? 'Suivez votre progression avec des graphiques détaillés et des analyses personnalisées.'
        : 'Track your progress with detailed graphs and personalized analytics.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: language === 'fr' ? 'Notifications intelligentes' : 'Smart notifications',
      description: language === 'fr' 
        ? 'Rappels personnalisés pour vos sessions d\'étude et vos objectifs. Ne manquez plus rien.'
        : 'Personalized reminders for your study sessions and goals. Never miss anything.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: language === 'fr' ? 'Personnalisation avancée' : 'Advanced customization',
      description: language === 'fr' 
        ? 'Adaptez l\'application à vos besoins avec des options de personnalisation étendues.'
        : 'Adapt the app to your needs with extensive customization options.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                {language === 'fr' ? 'MISE À JOUR' : 'UPDATE'}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {language === 'fr' ? 'Application v2.0' : 'Application v2.0'}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-8">
                {language === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'fr' 
                  ? 'Nouvelle interface, mode sombre, synchronisation cloud et bien plus encore. Mettez à jour dès maintenant pour profiter de toutes les nouveautés.'
                  : 'New interface, dark mode, cloud sync and much more. Update now to enjoy all the new features.'}
              </p>
            </div>
          </AnimatedSection>

          {/* Countdown Timer */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto border-4 border-green-500 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {language === 'fr' ? 'Disponible très bientôt' : 'Available very soon'}
                </h3>
                <div className="flex justify-center gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6 min-w-[100px]">
                    <div className="text-4xl font-bold text-green-600 mb-2">🚀</div>
                    <p className="text-sm text-gray-600">{language === 'fr' ? 'En développement' : 'In development'}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6 min-w-[100px]">
                    <div className="text-4xl font-bold text-green-600 mb-2">✨</div>
                    <p className="text-sm text-gray-600">{language === 'fr' ? 'Tests finaux' : 'Final tests'}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6 min-w-[100px]">
                    <div className="text-4xl font-bold text-green-600 mb-2">🎉</div>
                    <p className="text-sm text-gray-600">{language === 'fr' ? 'Lancement proche' : 'Launch soon'}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {language === 'fr' 
                    ? 'Inscrivez-vous pour être notifié du lancement'
                    : 'Sign up to be notified of the launch'}
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {language === 'fr' ? 'Me tenir informé' : 'Keep me informed'}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black">
              {language === 'fr' ? 'Nouvelles fonctionnalités' : 'New features'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Découvrez tout ce qui arrive avec la version 2.0 de l\'application StudyBox'
                : 'Discover everything coming with version 2.0 of the StudyBox app'}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-green-100 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                {language === 'fr' ? 'Une expérience repensée' : 'A redesigned experience'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'fr' 
                  ? 'Nous avons écouté vos retours et créé une application encore plus performante et agréable à utiliser.'
                  : 'We listened to your feedback and created an even more powerful and enjoyable app.'}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'fr' ? 'Plus rapide' : 'Faster'}
                </h3>
                <p className="text-gray-600">
                  {language === 'fr' 
                    ? 'Performances optimisées pour une navigation ultra-fluide et des temps de chargement réduits.'
                    : 'Optimized performance for ultra-smooth navigation and reduced loading times.'}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'fr' ? 'Plus belle' : 'More beautiful'}
                </h3>
                <p className="text-gray-600">
                  {language === 'fr' 
                    ? 'Design moderne et épuré qui met en valeur votre contenu et facilite la concentration.'
                    : 'Modern and clean design that highlights your content and facilitates concentration.'}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'fr' ? 'Plus puissante' : 'More powerful'}
                </h3>
                <p className="text-gray-600">
                  {language === 'fr' 
                    ? 'Nouvelles fonctionnalités pour vous aider à mieux organiser vos études et atteindre vos objectifs.'
                    : 'New features to help you better organize your studies and achieve your goals.'}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.5}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {language === 'fr' ? 'Plus intelligente' : 'Smarter'}
                </h3>
                <p className="text-gray-600">
                  {language === 'fr' 
                    ? 'Suggestions personnalisées et analyses pour optimiser votre temps d\'étude et vos résultats.'
                    : 'Personalized suggestions and analytics to optimize your study time and results.'}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Prêt pour la v2.0 ?' : 'Ready for v2.0?'}
            </h2>
            <p className="text-xl text-green-100 mb-10">
              {language === 'fr' 
                ? 'Soyez parmi les premiers à découvrir la nouvelle version'
                : 'Be among the first to discover the new version'}
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-green-600 px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              {language === 'fr' ? 'Me notifier du lancement' : 'Notify me of the launch'}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
