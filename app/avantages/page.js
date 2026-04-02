'use client'

import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'

export default function AvantagesPage() {
  const { language } = useLanguage()

  const advantages = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Prix unique' : 'One-time price',
      description: language === 'fr' 
        ? 'Seulement 10€ pour un accès à vie à StudyBox. Plus d\'abonnements, pas de frais cachés. Un investissement intelligent pour votre avenir académique.' 
        : 'Only €10 for lifetime access to StudyBox. No subscriptions, no hidden fees. A smart investment for your academic future.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: language === 'fr' ? 'Intelligence Artificielle' : 'Artificial Intelligence',
      description: language === 'fr' 
        ? 'Synthèses automatiques, quiz adaptatifs, et révisions personnalisées grâce à notre IA avancée qui apprend de votre style d\'apprentissage.' 
        : 'Automatic summaries, adaptive quizzes, and personalized revisions thanks to our advanced AI that learns from your learning style.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12l-4.5-4.5M12 16.5l4.5-4.5M12 7.5V16.5" />
        </svg>
      ),
      title: language === 'fr' ? 'Import automatique' : 'Automatic import',
      description: language === 'fr' 
        ? 'Importez vos cours, PDFs et notes en un clic. StudyBox organise automatiquement tout votre contenu de manière structurée.' 
        : 'Import your courses, PDFs and notes in one click. StudyBox automatically organizes all your content in a structured way.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Multilingue' : 'Multilingual',
      description: language === 'fr' 
        ? 'Disponible en français, anglais, néerlandais, italien, espagnol, polonais et portugais. StudyBox s\'adapte parfaitement aux étudiants internationaux.' 
        : 'Available in French, English, Dutch, Italian, Spanish, Polish and Portuguese. StudyBox adapts perfectly to international students.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Satisfait ou remboursé' : 'Satisfied or refunded',
      description: language === 'fr' 
        ? '14 jours pour changer d\'avis. Si vous n\'êtes pas satisfait de StudyBox, nous vous remboursons intégralement.' 
        : '14 days to change your mind. If you are not satisfied with StudyBox, we will refund you in full.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: language === 'fr' ? 'Accès instantané' : 'Instant access',
      description: language === 'fr' 
        ? 'Pas de livraison, pas d\'attente. Accédez à StudyBox immédiatement après paiement sur tous vos appareils.' 
        : 'No delivery, no waiting. Access StudyBox immediately after payment on all your devices.',
    },
  ]

  const stats = [
    { value: '95%', label: language === 'fr' ? 'Clients satisfaits' : 'Satisfied customers' },
    { value: '1,5k+', label: language === 'fr' ? 'Étudiants satisfaits' : 'Satisfied students' },
    { value: '48h', label: language === 'fr' ? 'Temps de réponse' : 'Response time' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Nos avantages' : 'Our Advantages'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Découvrez pourquoi des milliers d\'étudiants ont adopté StudyBox' 
                : 'Discover why thousands of students have adopted StudyBox'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-studybox-blue mb-2">{stat.value}</div>
                  <p className="text-gray-600 font-light">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Pourquoi choisir StudyBox ?' : 'Why choose StudyBox?'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'L\'application digitale qui transforme votre façon d\'étudier' 
                : 'The digital app that transforms the way you study'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mb-6 text-studybox-blue">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 font-light">{advantage.description}</p>
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
              {language === 'fr' ? 'Convaincu ?' : 'Convinced?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Rejoignez la révolution digitale des études' 
                : 'Join the digital revolution in education'}
            </p>
            <a 
              href="/commander" 
              className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {language === 'fr' ? 'Obtenir StudyBox' : 'Get StudyBox'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
