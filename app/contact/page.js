'use client'

import { useState } from 'react'
import AnimatedSection from '../../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    autreSujet: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Préparer le sujet de l'email
    const sujetEmail = formData.sujet === 'autre' ? formData.autreSujet : formData.sujet
    const sujetLabels = {
      'question': 'Question générale',
      'commande': 'Suivi de commande',
      'sav': 'SAV & garantie',
      'partenariat': 'Partenariat',
      'presse': 'Contact presse',
      'autre': formData.autreSujet
    }
    
    // Construire le corps de l'email
    const emailBody = `
Nouveau message de contact StudyBox
=====================================

Nom: ${formData.nom}
Prénom: ${formData.prenom}
Email: ${formData.email}
Téléphone: ${formData.telephone || 'Non renseigné'}

Sujet: ${sujetLabels[formData.sujet] || formData.sujet}

Message:
${formData.message}

-------------------------------------
Envoyé depuis le formulaire de contact StudyBox
    `.trim()
    
    // Créer le lien mailto
    const mailtoLink = `mailto:studybox.lje@gmail.com?subject=${encodeURIComponent('Contact StudyBox - ' + (sujetLabels[formData.sujet] || formData.sujet))}&body=${encodeURIComponent(emailBody)}`
    
    // Ouvrir le client email
    window.location.href = mailtoLink
    
    // Afficher le message de confirmation
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    
    // Réinitialiser le formulaire
    setTimeout(() => {
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        autreSujet: '',
        message: ''
      })
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-studybox-blue pt-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-20 left-10 w-24 h-24 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <svg className="absolute top-32 right-20 w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
              Contactez-nous
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-2xl sm:text-3xl text-white/90 mb-4 max-w-4xl mx-auto font-light">
              Nous sommes là pour vous aider
            </p>
            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Une question ? Une suggestion ? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
                Comment nous contacter ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Choisissez le moyen de communication qui vous convient le mieux.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Email */}
            <AnimatedSection delay={100}>
              <div className="text-center p-10 bg-gradient-to-br from-studybox-gray to-white rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-studybox-blue to-studybox-blue/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Par email</h3>
                <p className="text-gray-500 mb-5 text-sm">Réponse sous 24-48h</p>
                <a href="mailto:studybox.lje@gmail.com" className="text-studybox-blue hover:text-studybox-blue/80 font-semibold text-lg transition-colors inline-block">
                  studybox.lje@gmail.com
                </a>
              </div>
            </AnimatedSection>

            {/* Réseaux sociaux */}
            <AnimatedSection delay={200}>
              <div className="text-center p-10 bg-gradient-to-br from-studybox-gray to-white rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-studybox-blue to-studybox-blue/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Réseaux sociaux</h3>
                <p className="text-gray-500 mb-6 text-sm">Rejoignez notre communauté</p>
                <div className="flex justify-center gap-5">
                  <a href="https://www.facebook.com/profile.php?id=61582850077069" target="_blank" rel="noopener noreferrer" className="text-studybox-blue hover:scale-110 transition-transform duration-200" title="Facebook">
                    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/studybox.lje/" target="_blank" rel="noopener noreferrer" className="text-studybox-blue hover:scale-110 transition-transform duration-200" title="Instagram">
                    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@studyboxlje" target="_blank" rel="noopener noreferrer" className="text-studybox-blue hover:scale-110 transition-transform duration-200" title="TikTok">
                    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/study-box-1b0aa5398/" target="_blank" rel="noopener noreferrer" className="text-studybox-blue hover:scale-110 transition-transform duration-200" title="LinkedIn">
                    <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-studybox-gray py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
                Formulaire de contact
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl animate-fade-in-up">
                  <p className="font-medium">✓ Message envoyé avec succès !</p>
                  <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent transition-all"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="question">Question générale</option>
                    <option value="commande">Suivi de commande</option>
                    <option value="sav">SAV & garantie</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="presse">Contact presse</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Champ conditionnel pour "Autre" */}
                {formData.sujet === 'autre' && (
                  <div className="animate-fade-in-up">
                    <label htmlFor="autreSujet" className="block text-sm font-medium text-gray-700 mb-2">
                      Précisez le sujet de votre demande *
                    </label>
                    <input
                      type="text"
                      id="autreSujet"
                      name="autreSujet"
                      required
                      value={formData.autreSujet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent transition-all"
                      placeholder="Décrivez brièvement le sujet de votre demande"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-studybox-blue text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-studybox-blue/90 hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
                Besoin d'aide ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Consultez nos ressources d'aide ou contactez notre équipe support.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={100}>
              <a href="/support" className="block p-6 bg-studybox-gray rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-studybox-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Service client</h3>
                <p className="text-gray-600 text-sm">Assistance personnalisée</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <a href="/livraison" className="block p-6 bg-studybox-gray rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-studybox-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">SAV & garantie</h3>
                <p className="text-gray-600 text-sm">Retours et garanties</p>
              </a>
            </AnimatedSection>

            
            <AnimatedSection delay={250}>
              <a href="/faq" className="block p-6 bg-studybox-gray rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-studybox-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                <p className="text-gray-600 text-sm">Questions fréquentes</p>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
