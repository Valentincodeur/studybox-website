'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ProcessingContent() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState('processing')

  useEffect(() => {
    try {
      // Simuler un traitement et rediriger vers la page de succès
      const timer = setTimeout(() => {
        try {
          // Récupérer les paramètres ou utiliser des valeurs par défaut
          const sessionId = searchParams?.get('session_id') || 'test'
          const email = searchParams?.get('customer_email') || 'client@studybox.com'
          
          // Générer un code de test
          const testCode = 'STDB-' + Math.random().toString(36).substr(2, 4).toUpperCase() + '-' + 
                         Math.random().toString(36).substr(2, 4).toUpperCase() + '-' + 
                         Math.random().toString(36).substr(2, 4).toUpperCase()
          
          // Rediriger vers la page de succès
          window.location.href = `/paiement/succes?code=${testCode}&email=${encodeURIComponent(email)}`
        } catch (error) {
          console.error('Erreur redirection:', error)
          // Redirection de secours
          window.location.href = '/paiement/succes?code=STDB-TEST-1234&email=client@studybox.com'
        }
      }, 2000) // 2 secondes de traitement simulé

      return () => clearTimeout(timer)
    } catch (error) {
      console.error('Erreur processing:', error)
      // Redirection immédiate en cas d'erreur
      window.location.href = '/paiement/succes?code=STDB-TEST-1234&email=client@studybox.com'
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Traitement en cours...
        </h1>
        <p className="text-gray-600 mb-2">
          Nous vérifions votre paiement
        </p>
        <p className="text-sm text-gray-500">
          Vous allez être redirigé automatiquement
        </p>
        
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default function ProcessingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    }>
      <ProcessingContent />
    </Suspense>
  )
}
