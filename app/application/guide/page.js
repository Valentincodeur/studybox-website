'use client'

import { useLanguage } from '../../../context/LanguageContext'
import AnimatedSection from '../../../components/AnimatedSection'
import Link from 'next/link'

export default function GuidePage() {
  const { language } = useLanguage()

  const steps = [
    {
      number: 1,
      title: language === 'fr' ? 'Téléchargez l\'application' : 'Download the app',
      description: language === 'fr' 
        ? 'Rendez-vous sur l\'App Store (iOS) ou Google Play (Android) et recherchez "StudyBox". Téléchargez gratuitement l\'application.' 
        : 'Go to the App Store (iOS) or Google Play (Android) and search for "StudyBox". Download the app for free.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      color: 'bg-blue-500',
    },
    {
      number: 2,
      title: language === 'fr' ? 'Créez votre compte' : 'Create your account',
      description: language === 'fr' 
        ? 'Inscrivez-vous avec votre email ou connectez-vous via Google/Apple. Renseignez votre établissement et votre année d\'études.' 
        : 'Sign up with your email or log in via Google/Apple. Enter your institution and year of study.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'bg-green-500',
    },
    {
      number: 3,
      title: language === 'fr' ? 'Configurez vos matières' : 'Set up your subjects',
      description: language === 'fr' 
        ? 'Ajoutez vos matières et créez des dossiers pour chaque cours. Personnalisez les couleurs et icônes selon vos préférences.' 
        : 'Add your subjects and create folders for each course. Customize colors and icons according to your preferences.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      color: 'bg-purple-500',
    },
    {
      number: 4,
      title: language === 'fr' ? 'Importez vos documents' : 'Import your documents',
      description: language === 'fr' 
        ? 'Importez vos cours existants (PDF, Word, images) ou commencez à prendre des notes directement dans l\'application.' 
        : 'Import your existing courses (PDF, Word, images) or start taking notes directly in the app.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      color: 'bg-orange-500',
    },
    {
      number: 5,
      title: language === 'fr' ? 'Planifiez vos révisions' : 'Plan your revisions',
      description: language === 'fr' 
        ? 'Ajoutez vos examens au calendrier et laissez l\'app vous suggérer un planning de révision optimal.' 
        : 'Add your exams to the calendar and let the app suggest an optimal revision schedule.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-pink-500',
    },
    {
      number: 6,
      title: language === 'fr' ? 'Activez les notifications' : 'Enable notifications',
      description: language === 'fr' 
        ? 'Autorisez les notifications pour recevoir des rappels de révision et ne jamais manquer une deadline.' 
        : 'Allow notifications to receive revision reminders and never miss a deadline.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      color: 'bg-red-500',
    },
  ]

  const tips = [
    {
      icon: '💡',
      title: language === 'fr' ? 'Utilisez les tags' : 'Use tags',
      description: language === 'fr' 
        ? 'Ajoutez des tags à vos notes pour les retrouver facilement plus tard.' 
        : 'Add tags to your notes to find them easily later.',
    },
    {
      icon: '🎯',
      title: language === 'fr' ? 'Fixez des objectifs' : 'Set goals',
      description: language === 'fr' 
        ? 'Définissez des objectifs quotidiens pour rester motivé.' 
        : 'Set daily goals to stay motivated.',
    },
    {
      icon: '📊',
      title: language === 'fr' ? 'Suivez vos stats' : 'Track your stats',
      description: language === 'fr' 
        ? 'Consultez vos statistiques pour voir votre progression.' 
        : 'Check your statistics to see your progress.',
    },
    {
      icon: '🔄',
      title: language === 'fr' ? 'Synchronisez' : 'Sync',
      description: language === 'fr' 
        ? 'Activez la sync pour accéder à vos notes sur tous vos appareils.' 
        : 'Enable sync to access your notes on all your devices.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {language === 'fr' ? 'Tutoriel' : 'Tutorial'}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Guide de démarrage' : 'Getting Started Guide'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Apprenez à utiliser StudyBox en quelques minutes' 
                : 'Learn to use StudyBox in just a few minutes'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? '6 étapes pour commencer' : '6 steps to get started'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Suivez ce guide étape par étape pour configurer votre compte' 
                : 'Follow this step-by-step guide to set up your account'}
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-gray-400">ÉTAPE {step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                    <p className="text-gray-600 font-light">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="ml-8 border-l-2 border-gray-200 h-8"></div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              {language === 'fr' ? 'Conseils pour bien démarrer' : 'Tips for a good start'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-lg font-bold text-black mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{tip.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorial Placeholder */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-8">
              {language === 'fr' ? 'Tutoriel vidéo' : 'Video tutorial'}
            </h2>
            <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                  <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/70">{language === 'fr' ? 'Vidéo bientôt disponible' : 'Video coming soon'}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-studybox-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Prêt à commencer ?' : 'Ready to start?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Téléchargez l\'application et suivez ce guide' 
                : 'Download the app and follow this guide'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/application/ios"
                className="inline-flex items-center justify-center gap-3 bg-white text-studybox-blue px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iOS
              </Link>
              <Link 
                href="/application/android"
                className="inline-flex items-center justify-center gap-3 bg-white text-studybox-blue px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Android
              </Link>
              <Link 
                href="/application/web"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {language === 'fr' ? 'Version Web' : 'Web Version'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
