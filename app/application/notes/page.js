'use client'

import { useLanguage } from '../../../context/LanguageContext'
import AnimatedSection from '../../../components/AnimatedSection'
import Link from 'next/link'

export default function NotesPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: language === 'fr' ? 'Éditeur riche' : 'Rich editor',
      description: language === 'fr' 
        ? 'Formatez vos notes avec des titres, listes, images et bien plus encore.' 
        : 'Format your notes with titles, lists, images and much more.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: language === 'fr' ? 'Surlignage coloré' : 'Color highlighting',
      description: language === 'fr' 
        ? 'Mettez en évidence les informations importantes avec des couleurs personnalisées.' 
        : 'Highlight important information with custom colors.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Templates de notes' : 'Note templates',
      description: language === 'fr' 
        ? 'Utilisez des modèles prédéfinis pour structurer vos notes rapidement.' 
        : 'Use predefined templates to structure your notes quickly.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: language === 'fr' ? 'Notes vocales' : 'Voice notes',
      description: language === 'fr' 
        ? 'Enregistrez vos cours et convertissez-les automatiquement en texte.' 
        : 'Record your courses and automatically convert them to text.',
    },
  ]

  const noteTypes = [
    {
      icon: '📝',
      title: language === 'fr' ? 'Notes de cours' : 'Course notes',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: '📋',
      title: language === 'fr' ? 'Fiches de révision' : 'Revision cards',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: '💡',
      title: language === 'fr' ? 'Idées & brainstorm' : 'Ideas & brainstorm',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: '📊',
      title: language === 'fr' ? 'Résumés' : 'Summaries',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-600 to-orange-500 pt-32 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {language === 'fr' ? 'Fonctionnalité' : 'Feature'}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Prise de notes' : 'Note Taking'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Capturez vos idées et organisez vos connaissances efficacement' 
                : 'Capture your ideas and organize your knowledge efficiently'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Note Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {noteTypes.map((type, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`${type.color} rounded-2xl p-6 text-center`}>
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <h3 className="font-semibold text-sm">{type.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Outils de prise de notes' : 'Note-taking tools'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Des fonctionnalités puissantes pour capturer vos connaissances' 
                : 'Powerful features to capture your knowledge'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-600">
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
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Commencez à prendre des notes' : 'Start taking notes'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Téléchargez l\'app et capturez vos premières notes' 
                : 'Download the app and capture your first notes'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/application/ios"
                className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
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
