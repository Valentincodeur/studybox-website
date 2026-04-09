'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const [code, setCode] = useState(null)
  const [email, setEmail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Récupérer le code depuis l'URL
    const codeFromUrl = searchParams.get('code')
    const emailFromUrl = searchParams.get('email')
    
    if (codeFromUrl) {
      setCode(codeFromUrl)
      setEmail(emailFromUrl)
    }
    
    setLoading(false)
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Animation de succès */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-3">
            🎉 Paiement réussi !
          </h1>
          <p className="text-xl text-gray-600">
            Bienvenue dans la famille StudyBox
          </p>
        </div>

        {/* Carte principale avec le code */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border-2 border-blue-100">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <span className="text-2xl">🔑</span>
              <span className="text-blue-700 font-semibold">Votre code d'accès</span>
            </div>
          </div>

          {/* Code d'accès */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10 text-center">
              <p className="text-white/80 text-sm font-medium mb-3">Votre code unique :</p>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border-2 border-white/30">
                <p className="text-4xl md:text-5xl font-black text-white tracking-wider font-mono">
                  {code || 'STDB-XXXX-XXXX-XXXX'}
                </p>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(code)
                  alert('Code copié !')
                }}
                className="mt-4 bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                📋 Copier le code
              </button>
            </div>
          </div>

          {/* Email de confirmation */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-900 mb-2">Email de confirmation envoyé</h3>
                <p className="text-green-700 text-sm">
                  Un email contenant votre code d'accès a été envoyé à <strong>{email || 'votre adresse email'}</strong>
                </p>
                <p className="text-green-600 text-xs mt-2">
                  💡 Vérifiez vos spams si vous ne le recevez pas dans les 5 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg mb-4">📱 Prochaines étapes :</h3>
            
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Téléchargez l'application</h4>
                <p className="text-gray-600 text-sm">Disponible sur iOS et Android</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Créez votre compte</h4>
                <p className="text-gray-600 text-sm">Utilisez l'email : <strong>{email}</strong></p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Entrez votre code</h4>
                <p className="text-gray-600 text-sm">Collez le code ci-dessus lors de l'inscription</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Commencez à étudier !</h4>
                <p className="text-gray-600 text-sm">Profitez de toutes les fonctionnalités premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/application/ios"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Télécharger iOS
            </div>
          </Link>
          
          <Link 
            href="/application/android"
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Télécharger Android
            </div>
          </Link>
        </div>

        {/* Support */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-2">Besoin d'aide ?</p>
          <Link 
            href="/contact/support"
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
          >
            Contactez notre support →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  )
}
