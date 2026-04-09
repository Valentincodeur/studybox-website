'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const [code, setCode] = useState('STDB-4821-7395-1048')
  const [email, setEmail] = useState('test@studybox.com')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      const codeFromUrl = searchParams.get('code')
      const emailFromUrl = searchParams.get('email')
      
      if (codeFromUrl) {
        setCode(codeFromUrl)
        setEmail(emailFromUrl || 'test@studybox.com')
      }
    } catch (error) {
      console.error('Erreur:', error)
      // Garder les valeurs par défaut si erreur
    }
  }, [searchParams])

  const copyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="min-h-screen flex items-center justify-center p-6 py-12">
        <div className="max-w-4xl w-full">
          {/* Titre principal */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 animate-pulse">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Paiement réussi !
            </h1>
            <p className="text-xl text-blue-200">
              Bienvenue dans StudyBox 🎉
            </p>
          </div>

          {/* Carte code */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 mb-6 border border-white/20 shadow-2xl">
            <div className="text-center mb-6">
              <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">Votre code d'accès unique</p>
              <div className="bg-white rounded-2xl p-8 mb-6 shadow-xl">
                <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wider font-mono">
                  {code || 'STDB-XXXX-XXXX-XXXX'}
                </p>
              </div>
              <button
                onClick={copyCode}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-105"
              >
                {copied ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copié !
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copier le code
                  </>
                )}
              </button>
            </div>

            {/* Email confirmation */}
            <div className="bg-green-500/20 border-2 border-green-400/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2 text-lg">Email envoyé !</h3>
                  <p className="text-blue-100 text-sm">
                    Un email de confirmation contenant votre code a été envoyé à <span className="font-bold text-white">{email}</span>
                  </p>
                  <p className="text-blue-200 text-xs mt-2">
                    💡 Pensez à vérifier vos spams
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center font-black text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Téléchargez l'app</h4>
                  <p className="text-blue-200 text-sm">Disponible sur iOS et Android</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-xl flex items-center justify-center font-black text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Créez votre compte</h4>
                  <p className="text-blue-200 text-sm">Avec l'email : {email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-xl flex items-center justify-center font-black text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Entrez votre code</h4>
                  <p className="text-blue-200 text-sm">Collez le code lors de l'inscription</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center font-black text-lg">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">C'est parti !</h4>
                  <p className="text-blue-200 text-sm">Profitez de toutes les fonctionnalités</p>
                </div>
              </div>
            </div>
          </div>

          {/* Boutons téléchargement */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link 
              href="/application/ios"
              className="flex-1 bg-white text-gray-900 px-8 py-5 rounded-2xl font-bold text-center hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Télécharger sur iOS
            </Link>
            
            <Link 
              href="/application/android"
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-5 rounded-2xl font-bold text-center hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Télécharger sur Android
            </Link>
          </div>
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
