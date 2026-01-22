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
      title: language === 'fr' ? 'Prix accessible' : 'Affordable price',
      description: language === 'fr' 
        ? 'Seulement 15€ pour une box complète remplie de produits essentiels pour vos études. Un investissement malin pour votre réussite.' 
        : 'Only €15 for a complete box filled with essential products for your studies. A smart investment for your success.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Produits sélectionnés' : 'Selected products',
      description: language === 'fr' 
        ? 'Chaque produit est soigneusement choisi pour sa qualité et son utilité. Nous testons tout avant de l\'inclure dans nos box.' 
        : 'Each product is carefully chosen for its quality and usefulness. We test everything before including it in our boxes.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Partenaires locaux' : 'Local partners',
      description: language === 'fr' 
        ? 'Nous collaborons avec des entreprises belges pour soutenir l\'économie locale et vous offrir des produits de qualité.' 
        : 'We collaborate with Belgian companies to support the local economy and offer you quality products.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: language === 'fr' ? 'Livraison rapide' : 'Fast delivery',
      description: language === 'fr' 
        ? 'Recevez votre StudyBox en 3-5 jours ouvrables. Livraison gratuite dès 3 box commandées !' 
        : 'Receive your StudyBox in 3-5 business days. Free shipping from 3 boxes ordered!',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Satisfait ou remboursé' : 'Satisfied or refunded',
      description: language === 'fr' 
        ? '14 jours pour changer d\'avis. Si vous n\'êtes pas satisfait, nous vous remboursons intégralement.' 
        : '14 days to change your mind. If you are not satisfied, we will refund you in full.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Support réactif' : 'Responsive support',
      description: language === 'fr' 
        ? 'Une question ? Notre équipe vous répond sous 48h par email ou via nos réseaux sociaux.' 
        : 'Any question? Our team responds within 48 hours by email or via our social networks.',
    },
  ]

  const stats = [
    { value: '95%', label: language === 'fr' ? 'Clients satisfaits' : 'Satisfied customers' },
    { value: '100+', label: language === 'fr' ? 'Étudiants satisfaits' : 'Satisfied students' },
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
                ? 'Découvrez pourquoi des milliers d\'étudiants nous font confiance' 
                : 'Discover why thousands of students trust us'}
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
                ? 'Tout ce dont vous avez besoin pour réussir vos études' 
                : 'Everything you need to succeed in your studies'}
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
                ? 'Rejoignez des milliers d\'étudiants qui ont déjà adopté StudyBox' 
                : 'Join thousands of students who have already adopted StudyBox'}
            </p>
            <a 
              href="/commander" 
              className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {language === 'fr' ? 'Commander ma StudyBox' : 'Order my StudyBox'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
