'use client'

import { useLanguage } from '../../../context/LanguageContext'
import AnimatedSection from '../../../components/AnimatedSection'
import Link from 'next/link'

export default function OrganisationPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Dossiers par matière' : 'Folders by subject',
      description: language === 'fr' 
        ? 'Organisez vos cours par matière, semestre ou année. Créez une structure claire et logique.' 
        : 'Organize your courses by subject, semester or year. Create a clear and logical structure.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: language === 'fr' ? 'Tags et étiquettes' : 'Tags and labels',
      description: language === 'fr' 
        ? 'Ajoutez des tags colorés pour retrouver rapidement vos documents importants.' 
        : 'Add colored tags to quickly find your important documents.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Recherche intelligente' : 'Smart search',
      description: language === 'fr' 
        ? 'Trouvez n\'importe quel document en quelques secondes grâce à notre moteur de recherche.' 
        : 'Find any document in seconds with our search engine.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: language === 'fr' ? 'Glisser-déposer' : 'Drag and drop',
      description: language === 'fr' 
        ? 'Réorganisez vos fichiers facilement en les glissant d\'un dossier à l\'autre.' 
        : 'Easily reorganize your files by dragging them from one folder to another.',
    },
  ]

  const benefits = [
    {
      number: '01',
      title: language === 'fr' ? 'Gagnez du temps' : 'Save time',
      description: language === 'fr' 
        ? 'Ne perdez plus de temps à chercher vos cours. Tout est organisé et accessible en un clic.' 
        : 'Stop wasting time looking for your courses. Everything is organized and accessible in one click.',
    },
    {
      number: '02',
      title: language === 'fr' ? 'Restez concentré' : 'Stay focused',
      description: language === 'fr' 
        ? 'Une organisation claire vous permet de vous concentrer sur l\'essentiel : vos études.' 
        : 'A clear organization allows you to focus on what matters: your studies.',
    },
    {
      number: '03',
      title: language === 'fr' ? 'Réduisez le stress' : 'Reduce stress',
      description: language === 'fr' 
        ? 'Fini le stress de ne pas retrouver un document important avant un examen.' 
        : 'No more stress of not finding an important document before an exam.',
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              {language === 'fr' ? 'Fonctionnalité' : 'Feature'}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Organisation des cours' : 'Course Organization'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Structurez vos cours et documents de manière intuitive et efficace' 
                : 'Structure your courses and documents intuitively and efficiently'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Fonctionnalités clés' : 'Key features'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Tout ce dont vous avez besoin pour organiser vos études' 
                : 'Everything you need to organize your studies'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-studybox-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-studybox-blue">
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

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              {language === 'fr' ? 'Pourquoi s\'organiser ?' : 'Why get organized?'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-6xl font-bold text-studybox-blue/20 mb-4">{benefit.number}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 font-light">{benefit.description}</p>
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
              {language === 'fr' ? 'Prêt à vous organiser ?' : 'Ready to get organized?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Téléchargez l\'application et commencez à organiser vos cours' 
                : 'Download the app and start organizing your courses'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/application/ios"
                className="inline-flex items-center justify-center gap-3 bg-white text-studybox-blue px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
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
