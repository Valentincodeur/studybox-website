'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function EcolesPage() {
  const [studentCount, setStudentCount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [showCalculator, setShowCalculator] = useState(false)
  const [boxType, setBoxType] = useState('standard')
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    email: '',
    phone: '',
    studentCount: '',
    message: '',
    boxType: 'standard'
  })

  useEffect(() => {
    if (studentCount >= 450) {
      setDiscount(20)
    } else if (studentCount > 0) {
      setDiscount(15)
    } else {
      setDiscount(0)
    }
  }, [studentCount])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = boxType === 'personalized' ? '🎨 Demande StudyBox Personnalisée - École' : '🏫 Demande de partenariat - École'
    const body = `Nom de l'établissement: ${formData.schoolName}\nNom du contact: ${formData.contactName}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nNombre d'élèves: ${formData.studentCount}\nType de boîte: ${boxType === 'personalized' ? 'Personnalisée (logo + nom école)' : 'Standard'}\n\nMessage:\n${formData.message}\n\n---\nEnvoyé depuis le site StudyBox`
    
    const mailtoLink = `mailto:studybox.lje@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handlePersonalizedContact = () => {
    const subject = '🎨 Demande d\'informations - StudyBox Personnalisée'
    const body = `Bonjour,\n\nJe souhaite obtenir plus d'informations sur les StudyBox personnalisées avec le logo et le nom de notre établissement.\n\nCordialement`
    const mailtoLink = `mailto:studybox.lje@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const calculateSavings = (students) => {
    const pricePerBox = 15.00
    const discountRate = students >= 450 ? 0.20 : 0.15
    const discountedPrice = pricePerBox * (1 - discountRate)
    const totalSavings = (pricePerBox - discountedPrice) * students
    return {
      originalPrice: (pricePerBox * students).toFixed(2),
      discountedPrice: (discountedPrice * students).toFixed(2),
      savings: totalSavings.toFixed(2),
      pricePerBox: discountedPrice.toFixed(2)
    }
  }

  const savings = studentCount > 0 ? calculateSavings(studentCount) : null

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold">
                🏫 Offre Établissements Scolaires
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black">
              Équipez votre école avec StudyBox
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Des réductions exclusives pour les établissements scolaires. Plus vous êtes nombreux, plus vous économisez !
            </p>
          </div>

          {/* Discount Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-black">Petits établissements</h3>
                <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold text-2xl">
                  -15%
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Pour les écoles de moins de 450 élèves
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Réduction immédiate de 15%</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Support dédié</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Livraison groupée gratuite</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-purple-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-6 py-2 rounded-bl-3xl font-bold">
                ⭐ MEILLEURE OFFRE
              </div>
              <div className="flex items-center justify-between mb-6 mt-8">
                <h3 className="text-3xl font-bold text-white">Grands établissements</h3>
                <div className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold text-2xl">
                  -20%
                </div>
              </div>
              <p className="text-white text-lg mb-4">
                Pour les écoles de 450 élèves et plus
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold">Réduction exceptionnelle de 20%</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold">Support prioritaire 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold">Livraison express gratuite</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold">Gestionnaire de compte dédié</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Box Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                🎨 NOUVEAU - Édition Personnalisée
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-black">
              StudyBox à votre image
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Créez une StudyBox unique avec le logo et le nom de votre établissement
            </p>
          </div>

          {/* Box Type Selector */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <button
              onClick={() => setBoxType('standard')}
              className={`relative p-8 rounded-3xl border-4 transition-all duration-300 hover:scale-105 ${
                boxType === 'standard' 
                  ? 'border-blue-500 bg-blue-50 shadow-2xl' 
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              {boxType === 'standard' && (
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
              )}
              <div className="text-center">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-3xl font-bold mb-3 text-black">StudyBox Standard</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">15€</div>
                <p className="text-gray-600 mb-6">
                  La StudyBox classique avec tous les accessoires essentiels pour réviser
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Design StudyBox original</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Tous les accessoires inclus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Livraison rapide</span>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setBoxType('personalized')}
              className={`relative p-8 rounded-3xl border-4 transition-all duration-300 hover:scale-105 ${
                boxType === 'personalized' 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl' 
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              {boxType === 'personalized' && (
                <div className="absolute -top-4 -right-4 bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
              )}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                POPULAIRE
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-3xl font-bold mb-3 text-black">StudyBox Personnalisée</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">20€</div>
                <p className="text-gray-600 mb-6">
                  Votre StudyBox unique avec le logo et le nom de votre école
                </p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-semibold">Logo de votre école (autocollant)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-semibold">Nom de l'établissement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Tous les accessoires inclus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Design exclusif</span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Personalized Box Details */}
          {boxType === 'personalized' && (
            <div className="max-w-5xl mx-auto animate-[fadeInUp_0.5s_ease-out]">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="text-center mb-10">
                  <h3 className="text-4xl font-bold mb-4 text-black">
                    Comment ça marche ?
                  </h3>
                  <p className="text-xl text-gray-700">
                    Créez une StudyBox unique qui représente votre établissement
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-purple-600">1</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-center text-black">Contactez-nous</h4>
                    <p className="text-gray-600 text-center">
                      Envoyez-nous votre demande avec les informations de votre école
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-pink-600">2</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-center text-black">Envoyez votre logo</h4>
                    <p className="text-gray-600 text-center">
                      Transmettez-nous votre logo par email (format PNG, SVG ou JPG)
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-blue-600">3</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-center text-black">Recevez vos box</h4>
                    <p className="text-gray-600 text-center">
                      Nous créons vos StudyBox personnalisées et les livrons à votre école
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 mb-8">
                  <h4 className="text-2xl font-bold mb-6 text-center text-black">
                    Ce qui est inclus dans la personnalisation
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2 text-black">Logo en autocollant</h5>
                        <p className="text-gray-600">
                          Votre logo imprimé en haute qualité sur un autocollant résistant
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2 text-black">Nom personnalisé</h5>
                        <p className="text-gray-600">
                          Le nom de votre établissement élégamment intégré sur la boîte
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2 text-black">Qualité premium</h5>
                        <p className="text-gray-600">
                          Impression haute définition et matériaux durables
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2 text-black">Délai rapide</h5>
                        <p className="text-gray-600">
                          Production et livraison en 2-3 semaines maximum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={handlePersonalizedContact}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Demander un devis
                  </button>

                  <button
                    onClick={() => {
                      const subject = '📋 Demande d\'échantillon - StudyBox Personnalisée'
                      const body = 'Bonjour,\\n\\nJe souhaite recevoir un échantillon de StudyBox personnalisée pour évaluer la qualité avant de passer commande.\\n\\nCordialement'
                      window.location.href = `mailto:studybox.lje@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    }}
                    className="bg-white border-2 border-purple-600 text-purple-600 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Voir un échantillon
                  </button>

                  <button
                    onClick={() => {
                      const subject = '❓ Questions - StudyBox Personnalisée'
                      const body = 'Bonjour,\\n\\nJ\'ai quelques questions concernant les StudyBox personnalisées :\\n\\n1. \\n2. \\n3. \\n\\nMerci d\'avance pour vos réponses.\\n\\nCordialement'
                      window.location.href = `mailto:studybox.lje@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                    }}
                    className="bg-white border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Poser une question
                  </button>
                </div>

                <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💡</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2 text-yellow-800">Astuce</h5>
                      <p className="text-yellow-700">
                        Pour les commandes de plus de 100 StudyBox personnalisées, contactez-nous pour obtenir une réduction supplémentaire et des options de personnalisation avancées !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-black">
              Calculez vos économies
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez combien votre établissement peut économiser avec StudyBox
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="mb-8">
              <label className="block text-2xl font-bold text-black mb-4">
                Nombre d'élèves dans votre établissement
              </label>
              <input
                type="number"
                value={studentCount || ''}
                onChange={(e) => setStudentCount(parseInt(e.target.value) || 0)}
                placeholder="Ex: 500"
                className="w-full px-6 py-4 text-2xl border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
              />
            </div>

            {studentCount > 0 && savings && (
              <div className="space-y-6 animate-[fadeInUp_0.5s_ease-out]">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg text-gray-600">Votre réduction :</span>
                    <span className="text-4xl font-bold text-purple-600">-{discount}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                      style={{ width: `${discount * 5}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-sm text-gray-500 mb-2">Prix par StudyBox</div>
                    <div className="text-3xl font-bold text-black mb-1">{savings.pricePerBox}€</div>
                    <div className="text-sm text-gray-500 line-through">39.99€</div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-sm text-gray-500 mb-2">Économies totales</div>
                    <div className="text-3xl font-bold text-green-600">{savings.savings}€</div>
                    <div className="text-sm text-gray-500">pour {studentCount} élèves</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm opacity-90 mb-1">Prix total avec réduction</div>
                      <div className="text-4xl font-bold">{savings.discountedPrice}€</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-90 mb-1">Au lieu de</div>
                      <div className="text-2xl line-through opacity-75">{savings.originalPrice}€</div>
                    </div>
                  </div>
                </div>

                {studentCount >= 450 && (
                  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🎉</div>
                      <div>
                        <div className="text-xl font-bold text-yellow-800 mb-2">
                          Félicitations ! Vous bénéficiez de la réduction maximale !
                        </div>
                        <p className="text-yellow-700">
                          Avec {studentCount} élèves, vous économisez {savings.savings}€ grâce à notre offre -20% pour les grands établissements.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-black">
              Pourquoi choisir StudyBox pour votre école ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Économies garanties</h3>
              <p className="text-gray-600 leading-relaxed">
                Réduisez vos coûts tout en offrant le meilleur à vos élèves. Plus vous commandez, plus vous économisez.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Qualité certifiée</h3>
              <p className="text-gray-600 leading-relaxed">
                Des produits testés et approuvés par des milliers d'étudiants. Qualité premium garantie.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Support dédié</h3>
              <p className="text-gray-600 leading-relaxed">
                Un gestionnaire de compte personnel pour vous accompagner à chaque étape de votre commande.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-black">
              Demandez votre devis personnalisé
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire et nous vous contacterons dans les 24h
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom de l'établissement *
                </label>
                <input
                  type="text"
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="École Primaire..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom du contact *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="Jean Dupont"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="contact@ecole.fr"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="+32 123 45 67 89"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre d'élèves *
              </label>
              <input
                type="number"
                required
                value={formData.studentCount}
                onChange={(e) => setFormData({...formData, studentCount: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                placeholder="500"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                placeholder="Parlez-nous de votre projet..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Demander un devis gratuit
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Prêt à équiper votre école ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Rejoignez les centaines d'établissements qui font confiance à StudyBox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('input[type="number"]').focus()
              }}
              className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-2xl inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Calculer mes économies
            </a>
            <a
              href="mailto:studybox.lje@gmail.com"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
