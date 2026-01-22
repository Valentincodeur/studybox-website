'use client'

import { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import Navbar from '../../../components/Navbar'

export default function SuggererFonctionnalitePage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = '💡 Suggestion de fonctionnalité - Application StudyBox'
    const body = `Email de l'utilisateur: ${formData.email}

Suggestion:
${formData.message}

---
Envoyé depuis le site StudyBox`
    
    const mailtoLink = `mailto:studybox.lje@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('feedback.suggestFeatureTitle')}</h1>
            <p className="text-lg text-gray-600">{t('feedback.suggestFeatureDesc')}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('feedback.emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1089e6] focus:border-transparent transition-all text-gray-900"
                  placeholder={t('feedback.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('feedback.suggestionLabel')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1089e6] focus:border-transparent transition-all resize-none text-gray-900"
                  placeholder={t('feedback.suggestionPlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1089e6] text-white py-4 rounded-xl font-semibold hover:bg-[#0d6ebd] transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Ouvrir le client mail
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
