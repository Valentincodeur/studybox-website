'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'

export default function SupportPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(language === 'fr' ? 'Message envoyé ! Nous vous répondrons sous 24-48h.' : 'Message sent! We will respond within 24-48 hours.')
  }

  const supportOptions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: language === 'fr' ? 'Email' : 'Email',
      description: 'studybox.lje@gmail.com',
      action: 'mailto:studybox.lje@gmail.com',
      color: 'bg-blue-100 text-blue-600',
    },
  ]

  const subjects = [
    { value: 'order', label: language === 'fr' ? 'Ma commande' : 'My order' },
    { value: 'delivery', label: language === 'fr' ? 'Livraison' : 'Delivery' },
    { value: 'return', label: language === 'fr' ? 'Retour / Remboursement' : 'Return / Refund' },
    { value: 'product', label: language === 'fr' ? 'Produit défectueux' : 'Defective product' },
    { value: 'app', label: language === 'fr' ? 'Application' : 'App' },
    { value: 'other', label: language === 'fr' ? 'Autre' : 'Other' },
  ]

  const faqs = [
    {
      q: language === 'fr' ? 'Quel est le délai de réponse ?' : 'What is the response time?',
      a: language === 'fr' ? 'Nous répondons généralement sous 24-48h ouvrables.' : 'We usually respond within 24-48 business hours.',
    },
    {
      q: language === 'fr' ? 'Comment suivre ma demande ?' : 'How do I track my request?',
      a: language === 'fr' ? 'Vous recevrez un email de confirmation avec un numéro de ticket.' : 'You will receive a confirmation email with a ticket number.',
    },
    {
      q: language === 'fr' ? 'Puis-je modifier ma commande ?' : 'Can I modify my order?',
      a: language === 'fr' ? 'Oui, si elle n\'a pas encore été expédiée. Contactez-nous rapidement.' : 'Yes, if it has not been shipped yet. Contact us quickly.',
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {language === 'fr' ? 'Support' : 'Support'}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Support & SAV' : 'Support & Customer Service'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Notre équipe est là pour vous aider' 
                : 'Our team is here to help you'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {supportOptions.map((option, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <a 
                  href={option.action}
                  className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-1">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-black mb-4">
                {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
              </h2>
              <p className="text-gray-600 mb-8 font-light">
                {language === 'fr' 
                  ? 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.' 
                  : 'Fill out the form below and we will get back to you as soon as possible.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'fr' ? 'Nom complet' : 'Full name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                      placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                      placeholder="email@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'fr' ? 'N° de commande' : 'Order number'}
                    </label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({...formData, orderNumber: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                      placeholder="SB-XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'fr' ? 'Sujet' : 'Subject'} *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">{language === 'fr' ? 'Sélectionnez...' : 'Select...'}</option>
                      {subjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>{subject.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'fr' ? 'Message' : 'Message'} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                    placeholder={language === 'fr' ? 'Décrivez votre problème en détail...' : 'Describe your issue in detail...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
                >
                  {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-black mb-6">
                  {language === 'fr' ? 'Questions rapides' : 'Quick questions'}
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-black mb-2">{faq.q}</h4>
                      <p className="text-gray-600 text-sm font-light">{faq.a}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">
                    {language === 'fr' ? 'Horaires du support' : 'Support hours'}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>{language === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}</span>
                      <span className="font-medium">9h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'fr' ? 'Samedi' : 'Saturday'}</span>
                      <span className="font-medium">10h - 14h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'fr' ? 'Dimanche' : 'Sunday'}</span>
                      <span className="font-medium text-red-500">{language === 'fr' ? 'Fermé' : 'Closed'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link 
                    href="/faq"
                    className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
                  >
                    {language === 'fr' ? 'Voir toutes les FAQ' : 'See all FAQs'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

          </main>
  )
}
