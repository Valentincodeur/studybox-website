'use client'

import { useLanguage } from '../../../context/LanguageContext'
import AnimatedSection from '../../../components/AnimatedSection'
import Link from 'next/link'

export default function AndroidPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Material Design' : 'Material Design',
      description: language === 'fr' 
        ? 'Une interface moderne suivant les guidelines Material Design de Google.' 
        : 'A modern interface following Google\'s Material Design guidelines.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: language === 'fr' ? 'Notifications intelligentes' : 'Smart notifications',
      description: language === 'fr' 
        ? 'Des rappels personnalisés pour ne jamais oublier vos révisions.' 
        : 'Personalized reminders so you never forget your revisions.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: language === 'fr' ? 'Mode hors ligne' : 'Offline mode',
      description: language === 'fr' 
        ? 'Accédez à vos cours et fiches même sans connexion internet.' 
        : 'Access your courses and cards even without internet connection.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: language === 'fr' ? 'Sync Google Drive' : 'Google Drive sync',
      description: language === 'fr' 
        ? 'Sauvegardez automatiquement vos données sur Google Drive.' 
        : 'Automatically backup your data to Google Drive.',
    },
  ]

  const requirements = [
    { label: 'Android', value: '8.0+' },
    { label: language === 'fr' ? 'Taille' : 'Size', value: '35 MB' },
    { label: language === 'fr' ? 'Langues' : 'Languages', value: 'FR, EN, NL' },
    { label: language === 'fr' ? 'Prix' : 'Price', value: language === 'fr' ? 'Gratuit' : 'Free' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-900 to-green-800 pt-32 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  {language === 'fr' ? 'Disponible sur Google Play' : 'Available on Google Play'}
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                  StudyBox
                  <span className="block text-3xl sm:text-4xl font-light mt-2 text-white/80">
                    {language === 'fr' ? 'pour Android' : 'for Android'}
                  </span>
                </h1>
                <p className="text-xl text-white/70 mb-10 font-light max-w-lg">
                  {language === 'fr' 
                    ? 'L\'application parfaite pour organiser vos études sur votre smartphone ou tablette Android.' 
                    : 'The perfect app to organize your studies on your Android smartphone or tablet.'}
                </p>
                <a 
                  href="https://play.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">{language === 'fr' ? 'Télécharger sur' : 'Get it on'}</div>
                    <div className="text-xl font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative mx-auto max-w-xs">
                <div className="aspect-[9/19] bg-gradient-to-br from-green-600 to-green-800 rounded-[2rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[1.5rem] flex items-center justify-center">
                    <div className="text-center text-white/50">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <p className="text-sm">Android Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-green-600">{req.value}</div>
                <div className="text-gray-500 text-sm">{req.label}</div>
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
              {language === 'fr' ? 'Optimisé pour Android' : 'Optimized for Android'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Profitez d\'une expérience native sur votre appareil Android' 
                : 'Enjoy a native experience on your Android device'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6">
                  <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-white">
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
      <section className="py-20 bg-green-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Téléchargez maintenant' : 'Download now'}
            </h2>
            <p className="text-xl text-white/70 mb-10 font-light">
              {language === 'fr' 
                ? 'Rejoignez des milliers d\'étudiants sur Android' 
                : 'Join thousands of students on Android'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://play.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
              <Link 
                href="/application/ios"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {language === 'fr' ? 'Voir iOS' : 'See iOS'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
