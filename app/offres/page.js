'use client'

import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'

export default function OffresPage() {
  const { t, language } = useLanguage()

  const offers = [
    {
      id: 1,
      title: language === 'fr' ? 'Offre de lancement' : 'Launch Offer',
      description: language === 'fr' 
        ? 'Profitez de -15% sur votre première StudyBox avec le code BIENVENUE15' 
        : 'Get 15% off your first StudyBox with code WELCOME15',
      code: language === 'fr' ? 'BIENVENUE15' : 'WELCOME15',
      discount: '-15%',
      validUntil: language === 'fr' ? 'Valable jusqu\'au 31 janvier 2025' : 'Valid until January 31, 2025',
      featured: true,
    },
    {
      id: 2,
      title: language === 'fr' ? 'Pack Étudiant' : 'Student Pack',
      description: language === 'fr' 
        ? 'Achetez 3 StudyBox et recevez la 4ème gratuite !' 
        : 'Buy 3 StudyBox and get the 4th one free!',
      code: 'PACK4',
      discount: language === 'fr' ? '1 gratuite' : '1 free',
      validUntil: language === 'fr' ? 'Offre permanente' : 'Permanent offer',
      featured: false,
    },
      ]

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Meilleurs prix garantis' : 'Best prices guaranteed',
      description: language === 'fr' 
        ? 'Nous vous offrons les meilleurs tarifs pour votre réussite' 
        : 'We offer you the best rates for your success',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: language === 'fr' ? 'Livraison gratuite' : 'Free shipping',
      description: language === 'fr' 
        ? 'Dès 3 StudyBox commandées, la livraison est offerte' 
        : 'From 3 StudyBox ordered, shipping is free',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Satisfait ou remboursé' : 'Satisfied or refunded',
      description: language === 'fr' 
        ? '14 jours pour changer d\'avis, remboursement intégral' 
        : '14 days to change your mind, full refund',
    },
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
              {language === 'fr' ? 'Offres & Promotions' : 'Offers & Promotions'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Profitez de nos meilleures offres pour réussir vos études' 
                : 'Take advantage of our best offers to succeed in your studies'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative bg-gradient-to-r from-studybox-blue to-blue-700 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    {language === 'fr' ? '⭐ Offre vedette' : '⭐ Featured offer'}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {offers[0].title}
                  </h2>
                  <p className="text-lg text-white/90 mb-6 max-w-lg">
                    {offers[0].description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                      <span className="text-white/70 text-sm">{language === 'fr' ? 'Code :' : 'Code:'}</span>
                      <span className="text-white font-bold text-xl ml-2">{offers[0].code}</span>
                    </div>
                    <span className="text-white/70 text-sm">{offers[0].validUntil}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl md:text-5xl font-bold text-studybox-blue">{offers[0].discount}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Offers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Toutes nos offres' : 'All our offers'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Découvrez toutes les façons d\'économiser sur votre StudyBox' 
                : 'Discover all the ways to save on your StudyBox'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {offers.map((offer, index) => (
              <AnimatedSection key={offer.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-black">{offer.title}</h3>
                    <span className="bg-studybox-blue/10 text-studybox-blue font-bold px-4 py-2 rounded-full">
                      {offer.discount}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{offer.description}</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{language === 'fr' ? 'Code' : 'Code'}</span>
                      <span className="font-mono font-bold text-studybox-blue">{offer.code}</span>
                    </div>
                    <p className="text-sm text-gray-400 text-center">{offer.validUntil}</p>
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
              {language === 'fr' ? 'Pourquoi choisir StudyBox ?' : 'Why choose StudyBox?'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-studybox-blue">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{benefit.title}</h3>
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
              {language === 'fr' ? 'Prêt à commander ?' : 'Ready to order?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Utilisez nos codes promo et économisez sur votre StudyBox' 
                : 'Use our promo codes and save on your StudyBox'}
            </p>
            <a 
              href="/commander" 
              className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {language === 'fr' ? 'Commander maintenant' : 'Order now'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
