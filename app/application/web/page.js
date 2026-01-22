'use client'

import { useLanguage } from '../../../context/LanguageContext'
import AnimatedSection from '../../../components/AnimatedSection'
import Link from 'next/link'

export default function WebPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: language === 'fr' ? 'Accessible partout' : 'Accessible anywhere',
      description: language === 'fr' 
        ? 'Utilisez StudyBox depuis n\'importe quel navigateur, sur n\'importe quel appareil.' 
        : 'Use StudyBox from any browser, on any device.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: language === 'fr' ? 'Synchronisation temps réel' : 'Real-time sync',
      description: language === 'fr' 
        ? 'Vos modifications sont synchronisées instantanément sur tous vos appareils.' 
        : 'Your changes are instantly synced across all your devices.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Grand écran' : 'Big screen',
      description: language === 'fr' 
        ? 'Profitez d\'une interface optimisée pour les grands écrans d\'ordinateur.' 
        : 'Enjoy an interface optimized for large computer screens.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: language === 'fr' ? 'Sécurisé' : 'Secure',
      description: language === 'fr' 
        ? 'Connexion sécurisée et données protégées par cryptage SSL.' 
        : 'Secure connection and data protected by SSL encryption.',
    },
  ]

  const browsers = [
    { name: 'Chrome', icon: '🌐' },
    { name: 'Firefox', icon: '🦊' },
    { name: 'Safari', icon: '🧭' },
    { name: 'Edge', icon: '🔷' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  {language === 'fr' ? 'Application Web' : 'Web Application'}
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                  StudyBox
                  <span className="block text-3xl sm:text-4xl font-light mt-2 text-white/80">
                    {language === 'fr' ? 'Version Web' : 'Web Version'}
                  </span>
                </h1>
                <p className="text-xl text-white/70 mb-10 font-light max-w-lg">
                  {language === 'fr' 
                    ? 'Accédez à StudyBox directement depuis votre navigateur, sans installation.' 
                    : 'Access StudyBox directly from your browser, no installation required.'}
                </p>
                <a 
                  href="https://app.studybox.be" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-studybox-blue px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {language === 'fr' ? 'Ouvrir l\'application' : 'Open the app'}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative mx-auto max-w-md">
                <div className="aspect-[16/10] bg-gray-800 rounded-xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-studybox-blue/20 to-blue-900/20 rounded-lg flex items-center justify-center border border-white/10">
                    <div className="text-center text-white/50">
                      <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">Web App Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Browsers */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-6">
            {language === 'fr' ? 'Compatible avec tous les navigateurs' : 'Compatible with all browsers'}
          </p>
          <div className="flex justify-center gap-8">
            {browsers.map((browser, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{browser.icon}</div>
                <div className="text-sm text-gray-600">{browser.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Pourquoi la version web ?' : 'Why the web version?'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Tous les avantages de StudyBox, directement dans votre navigateur' 
                : 'All the benefits of StudyBox, directly in your browser'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6">
                  <div className="w-14 h-14 bg-studybox-blue rounded-2xl flex items-center justify-center flex-shrink-0 text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 font-light">{feature.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-studybox-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Commencez maintenant' : 'Start now'}
            </h2>
            <p className="text-xl text-white/70 mb-10 font-light">
              {language === 'fr' 
                ? 'Aucune installation requise, commencez à organiser vos études en quelques secondes' 
                : 'No installation required, start organizing your studies in seconds'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.studybox.be" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-studybox-blue px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {language === 'fr' ? 'Lancer l\'app' : 'Launch app'}
              </a>
              <Link 
                href="/application"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {language === 'fr' ? 'Voir les apps mobiles' : 'See mobile apps'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
