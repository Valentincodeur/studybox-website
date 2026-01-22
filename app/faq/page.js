'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'

export default function FAQPage() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  const categories = [
    {
      title: language === 'fr' ? 'La StudyBox' : 'The StudyBox',
      icon: '📦',
      questions: [
        {
          q: language === 'fr' ? 'Qu\'est-ce que la StudyBox ?' : 'What is the StudyBox?',
          a: language === 'fr' 
            ? 'La StudyBox est un kit complet pour étudiants contenant tout le nécessaire pour réussir vos études : fournitures, snacks énergétiques, et accès à notre application de gestion des études.' 
            : 'The StudyBox is a complete kit for students containing everything you need to succeed in your studies: supplies, energy snacks, and access to our study management app.',
        },
        {
          q: language === 'fr' ? 'Que contient la StudyBox ?' : 'What does the StudyBox contain?',
          a: language === 'fr' 
            ? 'Chaque StudyBox contient des fournitures scolaires de qualité, des snacks et boissons énergétiques, des goodies exclusifs, et un code d\'accès premium à notre application.' 
            : 'Each StudyBox contains quality school supplies, energy snacks and drinks, exclusive goodies, and a premium access code to our app.',
        },
        {
          q: language === 'fr' ? 'À qui s\'adresse la StudyBox ?' : 'Who is the StudyBox for?',
          a: language === 'fr' 
            ? 'La StudyBox est conçue pour tous les étudiants : primaire, secondaire, étudiants en prépa ou en école supérieure. Elle s\'adapte à tous les besoins.' 
            : 'The StudyBox is designed for all students: high school, university, prep school or higher education students. It adapts to all needs.',
        },
        {
          q: language === 'fr' ? 'Puis-je personnaliser ma StudyBox ?' : 'Can I customize my StudyBox?',
          a: language === 'fr' 
            ? 'Oui ! Lors de votre commande, vous pouvez choisir certaines options pour personnaliser le contenu selon vos préférences et besoins spécifiques.' 
            : 'Yes! When ordering, you can choose certain options to customize the content according to your specific preferences and needs.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'Commande & Paiement' : 'Order & Payment',
      icon: '💳',
      questions: [
        {
          q: language === 'fr' ? 'Comment passer commande ?' : 'How do I place an order?',
          a: language === 'fr' 
            ? 'Rendez-vous sur notre page Commander, sélectionnez votre StudyBox, remplissez vos informations de livraison et procédez au paiement sécurisé.' 
            : 'Go to our Order page, select your StudyBox, fill in your delivery information and proceed to secure payment.',
        },
        {
          q: language === 'fr' ? 'Quels moyens de paiement acceptez-vous ?' : 'What payment methods do you accept?',
          a: language === 'fr' 
            ? 'Nous acceptons les cartes bancaires (Visa, Mastercard, Bancontact), PayPal, Apple Pay, Google Pay, et tous les paiements sécurisés via Stripe. Stripe garantit la sécurité de vos transactions.' 
            : 'We accept credit cards (Visa, Mastercard, Bancontact), PayPal, Apple Pay, Google Pay, and all secure payments via Stripe. Stripe guarantees the security of your transactions.',
        },
        {
          q: language === 'fr' ? 'Le paiement est-il sécurisé ?' : 'Is the payment secure?',
          a: language === 'fr' 
            ? 'Absolument ! Tous nos paiements sont sécurisés par cryptage SSL via Stripe, et nous ne stockons jamais vos données bancaires.' 
            : 'Absolutely! All our payments are secured by SSL encryption via Stripe, and we never store your banking data.',
        },
        {
          q: language === 'fr' ? 'Puis-je annuler ma commande ?' : 'Can I cancel my order?',
          a: language === 'fr' 
            ? 'Vous pouvez annuler votre commande dans les 24h suivant la confirmation, tant qu\'elle n\'a pas été expédiée. Contactez notre support.' 
            : 'You can cancel your order within 24 hours of confirmation, as long as it has not been shipped. Contact our support.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'Livraison' : 'Delivery',
      icon: '🚚',
      questions: [
        {
          q: language === 'fr' ? 'Quels sont les délais de livraison ?' : 'What are the delivery times?',
          a: language === 'fr' 
            ? 'La livraison standard prend 3-5 jours ouvrables. La livraison express est disponible en 1-2 jours ouvrables moyennant un supplément.' 
            : 'Standard delivery takes 3-5 business days. Express delivery is available in 1-2 business days for an additional fee.',
        },
        {
          q: language === 'fr' ? 'Livrez-vous en dehors de la Belgique ?' : 'Do you deliver outside Belgium?',
          a: language === 'fr' 
            ? 'Oui, nous livrons dans toute l\'Europe. Les frais et délais varient selon le pays de destination.' 
            : 'Yes, we deliver throughout Europe. Fees and times vary depending on the destination country.',
        },
        {
          q: language === 'fr' ? 'Comment suivre ma commande ?' : 'How do I track my order?',
          a: language === 'fr' 
            ? 'Dès l\'expédition, vous recevrez un email avec un numéro de suivi pour suivre votre colis en temps réel.' 
            : 'Upon shipment, you will receive an email with a tracking number to track your package in real time.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'L\'Application' : 'The App',
      icon: '📱',
      questions: [
        {
          q: language === 'fr' ? 'L\'application est-elle gratuite ?' : 'Is the app free?',
          a: language === 'fr' 
            ? 'L\'application est accessible uniquement après l\'achat d\'une StudyBox, ce qui vous donne accès à toutes les fonctionnalités.' 
            : 'The application is only accessible after purchasing a StudyBox, which gives you access to all features.',
        },
        {
          q: language === 'fr' ? 'Sur quels appareils fonctionne l\'app ?' : 'On which devices does the app work?',
          a: language === 'fr' 
            ? 'L\'application est disponible sur iOS (iPhone/iPad), Android, et en version web accessible depuis n\'importe quel navigateur.' 
            : 'The app is available on iOS (iPhone/iPad), Android, and as a web version accessible from any browser.',
        },
        {
          q: language === 'fr' ? 'Mes données sont-elles synchronisées ?' : 'Is my data synchronized?',
          a: language === 'fr' 
            ? 'Oui, toutes vos données sont synchronisées automatiquement sur tous vos appareils connectés à votre compte.' 
            : 'Yes, all your data is automatically synchronized across all your devices connected to your account.',
        },
        {
          q: language === 'fr' ? 'Comment récupérer mon code premium ?' : 'How do I get my premium code?',
          a: language === 'fr' 
            ? 'Votre code premium se trouve dans votre StudyBox. Entrez-le dans l\'application pour activer les fonctionnalités premium.' 
            : 'Your premium code is in your StudyBox. Enter it in the app to activate premium features.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'Retours & Remboursements' : 'Returns & Refunds',
      icon: '↩️',
      questions: [
        {
          q: language === 'fr' ? 'Quelle est votre politique de retour ?' : 'What is your return policy?',
          a: language === 'fr' 
            ? 'Vous disposez de 14 jours après réception pour retourner votre StudyBox non ouverte. Les frais de retour sont à votre charge.' 
            : 'You have 14 days after receipt to return your unopened StudyBox. Return costs are at your expense.',
        },
        {
          q: language === 'fr' ? 'Comment effectuer un retour ?' : 'How do I make a return?',
          a: language === 'fr' 
            ? 'Contactez notre support pour obtenir une autorisation de retour et l\'adresse d\'envoi. Emballez soigneusement le produit.' 
            : 'Contact our support to get a return authorization and shipping address. Pack the product carefully.',
        },
        {
          q: language === 'fr' ? 'Quand serai-je remboursé ?' : 'When will I be refunded?',
          a: language === 'fr' 
            ? 'Le remboursement est effectué sous 5-10 jours ouvrables après réception et vérification du retour.' 
            : 'The refund is made within 5-10 business days after receipt and verification of the return.',
        },
      ],
    },
  ]

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Trouvez rapidement les réponses à vos questions' 
                : 'Quickly find answers to your questions'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {categories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.1}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-black">{category.title}</h2>
                </div>
                <div className="space-y-3">
                  {category.questions.map((item, questionIndex) => {
                    const isOpen = openIndex === `${categoryIndex}-${questionIndex}`
                    return (
                      <div 
                        key={questionIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-black pr-4">{item.q}</span>
                          <svg 
                            className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 text-gray-600 font-light border-t border-gray-100 pt-4">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-black mb-4">
              {language === 'fr' ? 'Vous n\'avez pas trouvé votre réponse ?' : 'Didn\'t find your answer?'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              {language === 'fr' 
                ? 'Notre équipe support est là pour vous aider' 
                : 'Our support team is here to help you'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/support"
                className="inline-flex items-center justify-center gap-3 bg-studybox-blue text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {language === 'fr' ? 'Contacter le support' : 'Contact support'}
              </Link>
              <a 
                href="mailto:studybox.lje@gmail.com"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 border border-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
