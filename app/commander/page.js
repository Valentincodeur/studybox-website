'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function CommanderPage() {
  const STUDYBOX_PRICE = 10
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: STUDYBOX_PRICE,
          customerEmail: formData.email,
          customerName: `${formData.firstName} ${formData.lastName}`,
          productName: 'StudyBox - Accès à vie'
        })
      })

      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Erreur lors de la création de la session de paiement')
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full mb-6 animate-pulse">
            🎉 OFFRE LIMITÉE - Jusqu au 1er juin 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Accédez à StudyBox
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            L application complète pour révolutionner vos études
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Paiement unique • Accès à vie • Toutes les fonctionnalités
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-4 border-transparent bg-clip-padding">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-lg font-black px-8 py-3 rounded-full shadow-xl">
                ⚡ ACCÈS À VIE
              </div>
              
              <div className="text-center pt-6 mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h2 className="text-4xl font-black text-gray-900 mb-3">
                  StudyBox Premium
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Toutes les fonctionnalités incluses
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-7xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      10
                    </span>
                    <span className="text-4xl font-bold text-gray-600">€</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700">Paiement unique</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-gray-900 text-lg mb-4">✨ Tout ce dont vous avez besoin :</h3>
                {[
                  'Import de cours automatique',
                  'Synthèses IA personnalisées',
                  'Quiz adaptatifs intelligents',
                  'Planning & rappels',
                  'Podcasts de révision',
                  'Flashcards interactives',
                  'Interface intuitive et moderne',
                  'Stockage de données écologique',
                  'Support multilingue (FR, EN, NL, IT, ES, PL, PT)',
                  'Synchronisation cloud',
                  'Mises à jour gratuites à vie'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <p className="text-xs text-gray-600 font-semibold">Paiement sécurisé</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <p className="text-xs text-gray-600 font-semibold">Accès immédiat</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">💯</div>
                  <p className="text-xs text-gray-600 font-semibold">Satisfait ou remboursé</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Commandez maintenant
            </h2>
            <p className="text-gray-600 mb-8">
              Remplissez vos informations pour accéder à StudyBox
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg"
                  placeholder="Votre prénom"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg"
                  placeholder="votre@email.com"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Vos identifiants de connexion seront envoyés à cette adresse
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border-2 border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700 font-semibold">StudyBox - Accès à vie</span>
                  <span className="text-2xl font-black text-gray-900">10€</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t-2 border-blue-200">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    10€
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xl font-bold py-6 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Payer 10€ maintenant
              </button>

              <Link
                href="/paiement/succes?code=STDB-4821-7395-1048&email=test@studybox.com"
                className="w-full bg-gray-100 text-gray-700 text-sm font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Prévisualiser la page après paiement
              </Link>

              <p className="text-center text-sm text-gray-500">
                En commandant, vous acceptez nos conditions générales
              </p>
            </form>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-10 border-2 border-amber-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              ⏰ Pourquoi cette offre exceptionnelle ?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              À l origine, StudyBox est un projet de mini-entreprise. Pour remercier nos premiers utilisateurs qui nous soutiennent dès cette phase de lancement, nous proposons un <span className="font-bold text-amber-600">tarif unique de 10€</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Après le <span className="font-bold text-orange-600">1er juin 2026</span>, StudyBox évoluera en entreprise à part entière et passera à un modèle d abonnement mensuel à <span className="font-bold text-orange-600">4,99€/mois</span>. C est votre chance unique d obtenir un accès à vie à un prix exceptionnel !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
