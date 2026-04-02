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
      title: language === 'fr' ? 'L\'Application StudyBox' : 'The StudyBox App',
      icon: '📱',
      questions: [
        {
          q: language === 'fr' ? 'Qu\'est-ce que StudyBox ?' : 'What is StudyBox?',
          a: language === 'fr' 
            ? 'StudyBox est une application mobile complète pour étudiants qui vous aide à organiser vos cours, créer des fiches de révision, générer des quiz avec l\'IA, et gérer votre planning d\'études de manière efficace.' 
            : 'StudyBox is a comprehensive mobile app for students that helps you organize your courses, create revision cards, generate AI-powered quizzes, and manage your study schedule efficiently.',
        },
        {
          q: language === 'fr' ? 'Quelles sont les fonctionnalités principales ?' : 'What are the main features?',
          a: language === 'fr' 
            ? 'StudyBox propose : organisation des cours, planning et rappels, prise de notes, fiches de révision intelligentes, quiz générés par IA, synthèses automatiques, import de documents, et bien plus encore.' 
            : 'StudyBox offers: course organization, planning and reminders, note-taking, smart revision cards, AI-generated quizzes, automatic summaries, document import, and much more.',
        },
        {
          q: language === 'fr' ? 'À qui s\'adresse StudyBox ?' : 'Who is StudyBox for?',
          a: language === 'fr' 
            ? 'StudyBox est conçue pour tous les étudiants : primaire, secondaire, université, grandes écoles. L\'application s\'adapte à tous les niveaux et toutes les matières.' 
            : 'StudyBox is designed for all students: elementary, high school, university, graduate schools. The app adapts to all levels and all subjects.',
        },
        {
          q: language === 'fr' ? 'Sur quels appareils fonctionne l\'app ?' : 'On which devices does the app work?',
          a: language === 'fr' 
            ? 'L\'application est disponible sur iOS (iPhone/iPad), Android, et en version web accessible depuis n\'importe quel navigateur.' 
            : 'The app is available on iOS (iPhone/iPad), Android, and as a web version accessible from any browser.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'Achat & Paiement' : 'Purchase & Payment',
      icon: '💳',
      questions: [
        {
          q: language === 'fr' ? 'Combien coûte StudyBox ?' : 'How much does StudyBox cost?',
          a: language === 'fr' 
            ? 'StudyBox est disponible pour un paiement unique de 10€, vous donnant un accès à vie à toutes les fonctionnalités de l\'application. Aucun abonnement mensuel.' 
            : 'StudyBox is available for a one-time payment of €10, giving you lifetime access to all app features. No monthly subscription.',
        },
        {
          q: language === 'fr' ? 'Comment acheter l\'accès à StudyBox ?' : 'How do I purchase access to StudyBox?',
          a: language === 'fr' 
            ? 'Rendez-vous sur notre page Commander, remplissez vos informations (nom et email) et procédez au paiement sécurisé. Vous recevrez immédiatement vos identifiants par email.' 
            : 'Go to our Order page, fill in your information (name and email) and proceed to secure payment. You will immediately receive your credentials by email.',
        },
        {
          q: language === 'fr' ? 'Quels moyens de paiement acceptez-vous ?' : 'What payment methods do you accept?',
          a: language === 'fr' 
            ? 'Nous acceptons les cartes bancaires (Visa, Mastercard, Bancontact), et tous les paiements sécurisés via Stripe. Stripe garantit la sécurité de vos transactions.' 
            : 'We accept credit cards (Visa, Mastercard, Bancontact), and all secure payments via Stripe. Stripe guarantees the security of your transactions.',
        },
        {
          q: language === 'fr' ? 'Le paiement est-il sécurisé ?' : 'Is the payment secure?',
          a: language === 'fr' 
            ? 'Absolument ! Tous nos paiements sont sécurisés par cryptage SSL via Stripe, et nous ne stockons jamais vos données bancaires.' 
            : 'Absolutely! All our payments are secured by SSL encryption via Stripe, and we never store your banking data.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'Accès & Compte' : 'Access & Account',
      icon: '🔐',
      questions: [
        {
          q: language === 'fr' ? 'Comment accéder à l\'application après l\'achat ?' : 'How do I access the app after purchase?',
          a: language === 'fr' 
            ? 'Après votre paiement, vous recevrez immédiatement un email avec vos identifiants de connexion. Téléchargez l\'app ou connectez-vous sur la version web pour commencer.' 
            : 'After your payment, you will immediately receive an email with your login credentials. Download the app or log in to the web version to get started.',
        },
        {
          q: language === 'fr' ? 'Mes données sont-elles synchronisées ?' : 'Is my data synchronized?',
          a: language === 'fr' 
            ? 'Oui, toutes vos données sont synchronisées automatiquement sur tous vos appareils connectés à votre compte StudyBox.' 
            : 'Yes, all your data is automatically synchronized across all your devices connected to your StudyBox account.',
        },
        {
          q: language === 'fr' ? 'Puis-je utiliser StudyBox sur plusieurs appareils ?' : 'Can I use StudyBox on multiple devices?',
          a: language === 'fr' 
            ? 'Oui ! Votre compte StudyBox fonctionne sur tous vos appareils : smartphone, tablette, ordinateur. Vos données restent synchronisées partout.' 
            : 'Yes! Your StudyBox account works on all your devices: smartphone, tablet, computer. Your data stays synchronized everywhere.',
        },
        {
          q: language === 'fr' ? 'Que faire si je perds mes identifiants ?' : 'What if I lose my credentials?',
          a: language === 'fr' 
            ? 'Utilisez la fonction "Mot de passe oublié" sur la page de connexion, ou contactez notre support avec l\'email utilisé lors de l\'achat.' 
            : 'Use the "Forgot password" function on the login page, or contact our support with the email used during purchase.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'Fonctionnalités' : 'Features',
      icon: '✨',
      questions: [
        {
          q: language === 'fr' ? 'Comment fonctionne l\'IA de StudyBox ?' : 'How does StudyBox AI work?',
          a: language === 'fr' 
            ? 'Notre IA analyse vos cours et documents pour générer automatiquement des synthèses, des fiches de révision et des quiz adaptés à votre niveau et vos besoins.' 
            : 'Our AI analyzes your courses and documents to automatically generate summaries, revision cards and quizzes adapted to your level and needs.',
        },
        {
          q: language === 'fr' ? 'Puis-je importer mes cours existants ?' : 'Can I import my existing courses?',
          a: language === 'fr' 
            ? 'Oui ! StudyBox permet d\'importer vos documents PDF, Word, PowerPoint et images. L\'IA les analyse pour créer du contenu d\'étude optimisé.' 
            : 'Yes! StudyBox allows you to import your PDF, Word, PowerPoint and image documents. The AI analyzes them to create optimized study content.',
        },
        {
          q: language === 'fr' ? 'L\'application fonctionne-t-elle hors ligne ?' : 'Does the app work offline?',
          a: language === 'fr' 
            ? 'Oui, vous pouvez consulter vos cours, fiches et notes hors ligne. Les fonctionnalités IA nécessitent une connexion internet.' 
            : 'Yes, you can view your courses, cards and notes offline. AI features require an internet connection.',
        },
      ],
    },
    {
      title: language === 'fr' ? 'Garantie & Remboursement' : 'Guarantee & Refund',
      icon: '✅',
      questions: [
        {
          q: language === 'fr' ? 'Proposez-vous une garantie satisfait ou remboursé ?' : 'Do you offer a money-back guarantee?',
          a: language === 'fr' 
            ? 'Oui ! Vous disposez de 14 jours après l\'achat pour tester StudyBox. Si vous n\'êtes pas satisfait, contactez notre support pour un remboursement complet.' 
            : 'Yes! You have 14 days after purchase to test StudyBox. If you are not satisfied, contact our support for a full refund.',
        },
        {
          q: language === 'fr' ? 'Comment demander un remboursement ?' : 'How do I request a refund?',
          a: language === 'fr' 
            ? 'Contactez notre support à studybox.lje@gmail.com dans les 14 jours suivant votre achat en indiquant votre email de commande.' 
            : 'Contact our support at studybox.lje@gmail.com within 14 days of your purchase with your order email.',
        },
        {
          q: language === 'fr' ? 'Quand serai-je remboursé ?' : 'When will I be refunded?',
          a: language === 'fr' 
            ? 'Le remboursement est effectué sous 5-7 jours ouvrables après validation de votre demande par notre équipe.' 
            : 'The refund is made within 5-7 business days after validation of your request by our team.',
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
