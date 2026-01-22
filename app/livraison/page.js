'use client'

import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'

export default function LivraisonPage() {
  const { language } = useLanguage()

  const deliveryOptions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      title: language === 'fr' ? 'Livraison Standard' : 'Standard Delivery',
      delay: language === 'fr' ? '3-5 jours ouvrables' : '3-5 business days',
      price: '4.95€',
      description: language === 'fr' 
        ? 'Livraison à domicile par Bpost' 
        : 'Home delivery by Bpost',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: language === 'fr' ? 'Livraison Express' : 'Express Delivery',
      delay: language === 'fr' ? '1-2 jours ouvrables' : '1-2 business days',
      price: '9.95€',
      description: language === 'fr' 
        ? 'Livraison prioritaire à domicile' 
        : 'Priority home delivery',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Point Relais' : 'Pickup Point',
      delay: language === 'fr' ? '3-5 jours ouvrables' : '3-5 business days',
      price: '3.95€',
      description: language === 'fr' 
        ? 'Retrait dans un point relais proche de chez vous' 
        : 'Pickup at a collection point near you',
    },
  ]

  const returnSteps = [
    {
      step: 1,
      title: language === 'fr' ? 'Contactez-nous' : 'Contact us',
      description: language === 'fr' 
        ? 'Envoyez-nous un email à retours@studybox.be dans les 14 jours suivant la réception' 
        : 'Send us an email at returns@studybox.be within 14 days of receipt',
    },
    {
      step: 2,
      title: language === 'fr' ? 'Préparez votre colis' : 'Prepare your package',
      description: language === 'fr' 
        ? 'Emballez soigneusement les articles dans leur emballage d\'origine si possible' 
        : 'Carefully pack the items in their original packaging if possible',
    },
    {
      step: 3,
      title: language === 'fr' ? 'Envoyez le retour' : 'Send the return',
      description: language === 'fr' 
        ? 'Utilisez l\'étiquette de retour prépayée que nous vous enverrons par email' 
        : 'Use the prepaid return label we will send you by email',
    },
    {
      step: 4,
      title: language === 'fr' ? 'Remboursement' : 'Refund',
      description: language === 'fr' 
        ? 'Recevez votre remboursement sous 5-7 jours ouvrables après réception du retour' 
        : 'Receive your refund within 5-7 business days after we receive the return',
    },
  ]

  const faqs = [
    {
      question: language === 'fr' ? 'Dans quels pays livrez-vous ?' : 'Which countries do you deliver to?',
      answer: language === 'fr' 
        ? 'Nous livrons actuellement en Belgique, France, Luxembourg, Pays-Bas et Allemagne.' 
        : 'We currently deliver to Belgium, France, Luxembourg, Netherlands and Germany.',
    },
    {
      question: language === 'fr' ? 'Comment suivre ma commande ?' : 'How can I track my order?',
      answer: language === 'fr' 
        ? 'Vous recevrez un email avec un numéro de suivi dès que votre commande sera expédiée. Vous pourrez suivre votre colis en temps réel.' 
        : 'You will receive an email with a tracking number as soon as your order is shipped. You can track your package in real time.',
    },
    {
      question: language === 'fr' ? 'Puis-je modifier mon adresse de livraison ?' : 'Can I change my delivery address?',
      answer: language === 'fr' 
        ? 'Oui, tant que votre commande n\'a pas été expédiée. Contactez-nous rapidement par email.' 
        : 'Yes, as long as your order has not been shipped. Contact us quickly by email.',
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
              {language === 'fr' ? 'Livraison & Retours' : 'Delivery & Returns'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Tout ce que vous devez savoir sur la livraison et les retours' 
                : 'Everything you need to know about delivery and returns'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="bg-green-50 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-green-800">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg font-semibold">
              {language === 'fr' 
                ? '🎉 Livraison GRATUITE dès 3 StudyBox commandées !' 
                : '🎉 FREE shipping from 3 StudyBox ordered!'}
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Options de livraison' : 'Delivery Options'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Choisissez le mode de livraison qui vous convient' 
                : 'Choose the delivery method that suits you'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col text-center">
                  <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-studybox-blue">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{option.title}</h3>
                  <p className="text-studybox-blue font-semibold mb-2">{option.delay}</p>
                  <p className="text-gray-600 mb-4 flex-grow">{option.description}</p>
                  <div className="bg-gray-50 rounded-xl py-3 px-4">
                    <span className="text-2xl font-bold text-black">{option.price}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Returns Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Politique de retour' : 'Return Policy'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-6 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Satisfait ou remboursé pendant 14 jours' 
                : 'Satisfied or refunded for 14 days'}
            </p>
            <div className="flex justify-center mb-16">
              <div className="inline-flex items-center gap-2 bg-studybox-blue/10 text-studybox-blue px-6 py-3 rounded-full font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {language === 'fr' ? 'Retours gratuits' : 'Free returns'}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnSteps.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-studybox-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600 font-light">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-studybox-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Une question ?' : 'Any question?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Notre équipe est là pour vous aider' 
                : 'Our team is here to help you'}
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
