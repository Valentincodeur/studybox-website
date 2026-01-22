'use client'

import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'

export default function LaisserAvisPage() {
  const { language } = useLanguage()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Créer le contenu de l'email
    const emailSubject = `Nouvel avis StudyBox - ${formData.firstName} ${formData.lastName}`
    const emailBody = `
Nouvel avis StudyBox
====================

Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Statut: ${formData.role}
Note: ${rating}/5 étoiles

Témoignage:
${formData.message}

---
Envoyé depuis le formulaire d'avis StudyBox
    `.trim()
    
    // Créer le lien mailto
    const mailtoLink = `mailto:studybox.lje@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    // Ouvrir le client email
    window.location.href = mailtoLink
    
    // Afficher le message de succès après un court délai
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      // Réinitialiser le formulaire
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        message: ''
      })
      setRating(0)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Partagez votre expérience' : 'Share your experience'}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'fr' 
                ? 'Votre avis compte ! Aidez d\'autres étudiants à découvrir StudyBox'
                : 'Your opinion matters! Help other students discover StudyBox'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Formulaire */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === 'fr' ? 'Merci pour votre avis !' : 'Thank you for your review!'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {language === 'fr' 
                      ? 'Votre témoignage a été envoyé avec succès. Il sera publié après validation.'
                      : 'Your testimonial has been sent successfully. It will be published after validation.'}
                  </p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="bg-[#0A0E4A] text-white px-6 py-3 rounded-full hover:bg-[#1a1f6a] transition-colors"
                  >
                    {language === 'fr' ? 'Laisser un autre avis' : 'Leave another review'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Note avec étoiles */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-semibold mb-3">
                      {language === 'fr' ? 'Votre note *' : 'Your rating *'}
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <svg
                            className={`w-10 h-10 ${
                              star <= (hoveredRating || rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-none text-gray-300'
                            }`}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Prénom et Nom */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {language === 'fr' ? 'Prénom *' : 'First Name *'}
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0E4A] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        {language === 'fr' ? 'Nom *' : 'Last Name *'}
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder={language === 'fr' ? 'Votre nom' : 'Your last name'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0E4A] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0E4A] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Rôle/Statut */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">
                      {language === 'fr' ? 'Votre statut *' : 'Your status *'}
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      placeholder={language === 'fr' ? 'Ex: Étudiant en médecine, ULB' : 'Ex: Medical student, ULB'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0E4A] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-semibold mb-2">
                      {language === 'fr' ? 'Votre témoignage *' : 'Your testimonial *'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={language === 'fr' 
                        ? 'Partagez votre expérience avec StudyBox...'
                        : 'Share your experience with StudyBox...'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0E4A] focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Bouton Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || rating === 0}
                    className="w-full bg-[#0A0E4A] text-white py-4 rounded-full font-semibold hover:bg-[#1a1f6a] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        {language === 'fr' ? 'Envoyer mon avis' : 'Send my review'}
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    {language === 'fr' 
                      ? '* Champs obligatoires. Votre avis sera publié après validation.'
                      : '* Required fields. Your review will be published after validation.'}
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Section informative */}
          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? 'Pourquoi laisser un avis ?' : 'Why leave a review?'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#0A0E4A] mt-1">✓</span>
                  <span>
                    {language === 'fr' 
                      ? 'Aidez d\'autres étudiants à découvrir StudyBox'
                      : 'Help other students discover StudyBox'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0A0E4A] mt-1">✓</span>
                  <span>
                    {language === 'fr' 
                      ? 'Partagez vos conseils et astuces d\'utilisation'
                      : 'Share your tips and tricks'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0A0E4A] mt-1">✓</span>
                  <span>
                    {language === 'fr' 
                      ? 'Contribuez à améliorer notre produit'
                      : 'Help us improve our product'}
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
