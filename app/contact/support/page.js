'use client'

import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'

export default function SupportPage() {
  const { language } = useLanguage()

  const supportOptions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      description: language === 'fr' ? 'Contactez-nous par email' : 'Contact us by email',
      contact: 'studybox.lje@gmail.com',
      link: 'mailto:studybox.lje@gmail.com',
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Questions fréquentes' : 'FAQ',
      description: language === 'fr' ? 'Trouvez des réponses rapides' : 'Find quick answers',
      contact: language === 'fr' ? 'Voir la FAQ' : 'View FAQ',
      link: '/faq',
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Formulaire de contact' : 'Contact form',
      description: language === 'fr' ? 'Envoyez-nous un message détaillé' : 'Send us a detailed message',
      contact: language === 'fr' ? 'Remplir le formulaire' : 'Fill the form',
      link: '/contact/formulaire',
      color: 'pink'
    }
  ]

  const faqCategories = [
    {
      title: language === 'fr' ? 'Commandes & Livraison' : 'Orders & Delivery',
      questions: [
        language === 'fr' ? 'Comment passer commande ?' : 'How to place an order?',
        language === 'fr' ? 'Quels sont les délais de livraison ?' : 'What are the delivery times?',
        language === 'fr' ? 'Comment suivre ma commande ?' : 'How to track my order?'
      ]
    },
    {
      title: language === 'fr' ? 'Produits' : 'Products',
      questions: [
        language === 'fr' ? 'Que contient la StudyBox ?' : 'What does the StudyBox contain?',
        language === 'fr' ? 'Les produits sont-ils de qualité ?' : 'Are the products quality?',
        language === 'fr' ? 'Puis-je personnaliser ma box ?' : 'Can I customize my box?'
      ]
    },
    {
      title: language === 'fr' ? 'Paiement & Remboursement' : 'Payment & Refund',
      questions: [
        language === 'fr' ? 'Quels moyens de paiement acceptez-vous ?' : 'What payment methods do you accept?',
        language === 'fr' ? 'Comment obtenir un remboursement ?' : 'How to get a refund?',
        language === 'fr' ? 'Les paiements sont-ils sécurisés ?' : 'Are payments secure?'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Support & SAV
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Notre équipe est là pour vous aider' 
              : 'Our team is here to help you'}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              {language === 'fr' ? 'Comment pouvons-nous vous aider ?' : 'How can we help you?'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr' 
                ? 'Choisissez le moyen de contact qui vous convient le mieux' 
                : 'Choose the contact method that suits you best'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {supportOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-${option.color}-100 rounded-2xl flex items-center justify-center mb-6 text-${option.color}-600 group-hover:scale-110 transition-transform`}>
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>{option.contact}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* FAQ Preview */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-black">
                {language === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-gray-600">
                {language === 'fr' 
                  ? 'Consultez nos réponses aux questions les plus courantes' 
                  : 'Check our answers to the most common questions'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {faqCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.questions.map((question, qIndex) => (
                      <li key={qIndex} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm">{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="/faq" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                {language === 'fr' ? 'Voir toutes les questions' : 'View all questions'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {language === 'fr' ? 'Temps de réponse' : 'Response time'}
                </h3>
                <p className="text-gray-600">
                  {language === 'fr' 
                    ? 'Nous nous engageons à vous répondre dans les 24 heures ouvrables. Pour les demandes urgentes, contactez-nous par email.' 
                    : 'We commit to responding within 24 business hours. For urgent requests, contact us by email.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
