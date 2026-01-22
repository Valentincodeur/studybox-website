'use client'

import { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import Navbar from '../../../components/Navbar'

export default function SignalerProblemePage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = '🔴 Signalement de problème - Application StudyBox'
    const body = `Email de l'utilisateur: ${formData.email}

Message:
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('feedback.reportProblemTitle')}</h1>
            <p className="text-lg text-gray-600">{t('feedback.reportProblemDesc')}</p>
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
                  {t('feedback.problemLabel')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1089e6] focus:border-transparent transition-all resize-none text-gray-900"
                  placeholder={t('feedback.problemPlaceholder')}
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
