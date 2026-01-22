'use client'

import { useLanguage } from '../../../context/LanguageContext'
import AnimatedSection from '../../../components/AnimatedSection'
import Link from 'next/link'

export default function PlanningPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Calendrier intégré' : 'Integrated calendar',
      description: language === 'fr' 
        ? 'Visualisez tous vos événements, examens et deadlines dans un calendrier clair et intuitif.' 
        : 'View all your events, exams and deadlines in a clear and intuitive calendar.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: language === 'fr' ? 'Rappels intelligents' : 'Smart reminders',
      description: language === 'fr' 
        ? 'Recevez des notifications personnalisées pour ne jamais oublier une révision ou un examen.' 
        : 'Receive personalized notifications to never forget a revision or exam.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Planification automatique' : 'Automatic planning',
      description: language === 'fr' 
        ? 'L\'app suggère des créneaux de révision optimaux basés sur vos habitudes d\'étude.' 
        : 'The app suggests optimal revision slots based on your study habits.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: language === 'fr' ? 'Liste de tâches' : 'Task list',
      description: language === 'fr' 
        ? 'Créez des to-do lists pour chaque matière et suivez votre progression.' 
        : 'Create to-do lists for each subject and track your progress.',
    },
  ]

  const reminderTypes = [
    {
      icon: '📚',
      title: language === 'fr' ? 'Révisions' : 'Revisions',
      description: language === 'fr' ? 'Rappels pour vos sessions de révision' : 'Reminders for your revision sessions',
    },
    {
      icon: '📝',
      title: language === 'fr' ? 'Examens' : 'Exams',
      description: language === 'fr' ? 'Alertes avant vos examens importants' : 'Alerts before your important exams',
    },
    {
      icon: '📅',
      title: language === 'fr' ? 'Deadlines' : 'Deadlines',
      description: language === 'fr' ? 'Ne manquez jamais une date limite' : 'Never miss a deadline',
    },
    {
      icon: '🎯',
      title: language === 'fr' ? 'Objectifs' : 'Goals',
      description: language === 'fr' ? 'Suivez vos objectifs quotidiens' : 'Track your daily goals',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-900 to-purple-800 pt-32 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {language === 'fr' ? 'Fonctionnalité' : 'Feature'}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Planning & Rappels' : 'Planning & Reminders'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Ne manquez plus jamais une deadline ou une session de révision' 
                : 'Never miss a deadline or revision session again'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Planifiez efficacement' : 'Plan efficiently'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Des outils puissants pour gérer votre temps d\'étude' 
                : 'Powerful tools to manage your study time'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-purple-600">
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

      {/* Reminder Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              {language === 'fr' ? 'Types de rappels' : 'Reminder types'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reminderTypes.map((type, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-bold text-black mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Optimisez votre temps' : 'Optimize your time'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Commencez à planifier vos révisions dès maintenant' 
                : 'Start planning your revisions now'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/application/ios"
                className="inline-flex items-center justify-center gap-3 bg-white text-purple-900 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                {language === 'fr' ? 'Télécharger l\'app' : 'Download the app'}
              </Link>
              <Link 
                href="/application/guide"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {language === 'fr' ? 'Guide de démarrage' : 'Getting started guide'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
