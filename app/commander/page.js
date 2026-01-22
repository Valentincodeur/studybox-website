'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import AnimatedSection from '@/components/AnimatedSection'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripePaymentForm from '@/components/StripePaymentForm'

// Initialiser Stripe avec votre clé publique
// IMPORTANT: Ajoutez votre clé Stripe publique ici: pk_test_...
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51QcVfaP0yfSMGLQDxxx')

export default function CommanderPage() {
  const [step, setStep] = useState(1)
  const [cart, setCart] = useState([])
  const [freeProducts, setFreeProducts] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [promoError, setPromoError] = useState('')
  const [productQuantities, setProductQuantities] = useState({
    essentiel: 1,
    personnalisee: 1,
    premium: 1
  })
  const [clientSecret, setClientSecret] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Adresse de livraison
    address: '',
    postalCode: '',
    city: '',
    country: 'Belgique',
    // Options de livraison
    deliveryOption: 'standard',
    // Options
    giftWrap: false,
    giftMessage: '',
    // Paiement
    paymentMethod: 'card',
  })

  const products = {
    essentiel: { name: 'Essentiel', price: 15, description: 'Pour bien démarrer' },
    personnalisee: { name: 'Personnalisée', price: 25, description: 'La formule avec votre touche personnelle' },
    premium: { name: 'Premium', price: 35, description: "L'expérience complète" }
  }

  const addToCart = (productKey, quantity = 1) => {
    const existingItem = cart.find(item => item.productKey === productKey)
    let newCart
    if (existingItem) {
      newCart = cart.map(item => 
        item.productKey === productKey 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    } else {
      newCart = [...cart, { productKey, quantity }]
    }
    setCart(newCart)
    // Vérifier si les conditions PACK4 sont toujours respectées
    checkPack4Conditions(newCart)
  }

  const updateCartQuantity = (productKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productKey)
    } else {
      const newCart = cart.map(item => 
        item.productKey === productKey 
          ? { ...item, quantity }
          : item
      )
      setCart(newCart)
      // Vérifier si les conditions PACK4 sont toujours respectées
      checkPack4Conditions(newCart)
    }
  }

  const removeFromCart = (productKey) => {
    const newCart = cart.filter(item => item.productKey !== productKey)
    setCart(newCart)
    // Vérifier si les conditions PACK4 sont toujours respectées
    checkPack4Conditions(newCart)
  }

  const checkPack4Conditions = (currentCart) => {
    const currentTotalQuantity = currentCart.reduce((sum, item) => sum + item.quantity, 0) + freeProducts.reduce((sum, item) => sum + item.quantity, 0)
    
    // Retirer les produits gratuits PACK4 si moins de 3 StudyBox au total
    if (currentTotalQuantity < 3 && freeProducts.some(item => item.promoCode === 'PACK4')) {
      setFreeProducts(freeProducts.filter(item => item.promoCode !== 'PACK4'))
      setPromoError('La promotion PACK4 a été retirée (moins de 3 StudyBox)')
      setTimeout(() => setPromoError(''), 5000)
    }
  }

  const promoCodes = {
    'BIENVENUE15': { discount: 0.15, type: 'percentage' },
    'PACK4': { type: 'product', product: 'essentiel', quantity: 1 }
  }

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase().trim()
    if (promoCodes[code]) {
      const promo = promoCodes[code]
      
      if (promo.type === 'product') {
        // Vérifier si 3 StudyBox sont déjà dans le panier
        const currentTotalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0) + freeProducts.reduce((sum, item) => sum + item.quantity, 0)
        
        if (currentTotalQuantity >= 3) {
          // Ajouter le produit gratuit
          setFreeProducts([...freeProducts, { productKey: promo.product, quantity: promo.quantity, promoCode: code }])
          setPromoError('')
          setPromoCode('') // Vider le champ après application
        } else {
          setPromoError(`Ce code nécessite au moins 3 StudyBox dans le panier (${currentTotalQuantity}/3)`)
          setAppliedPromo(null)
        }
      } else {
        // Appliquer la réduction
        setAppliedPromo({ code, ...promo })
        setPromoError('')
      }
    } else {
      setPromoError('Code promo invalide')
      setAppliedPromo(null)
    }
  }

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0) + freeProducts.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + (products[item.productKey].price * item.quantity), 0)
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0
  const subtotalAfterDiscount = subtotal - discount
  
  // Calcul du prix de livraison selon l'option choisie
  const getShippingPrice = () => {
    if (totalQuantity >= 3) return 0 // Livraison gratuite pour 3+ boxes
    switch (formData.deliveryOption) {
      case 'express': return 9.95
      case 'relay': return 3.95
      case 'standard':
      default: return 4.95
    }
  }
  const shippingPrice = getShippingPrice()
  
  const giftWrapPrice = formData.giftWrap ? 2.50 : 0
  const totalPrice = subtotalAfterDiscount + shippingPrice + giftWrapPrice

  // Créer le Payment Intent quand on arrive à l'étape 3
  useEffect(() => {
    if (step === 3 && !clientSecret && totalPrice > 0) {
      createPaymentIntent()
    }
  }, [step])

  const createPaymentIntent = async () => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalPrice,
          metadata: {
            cart: JSON.stringify(cart),
            freeProducts: JSON.stringify(freeProducts),
            customerEmail: formData.email,
            customerName: `${formData.firstName} ${formData.lastName}`
          }
        })
      })

      const data = await response.json()
      if (data.clientSecret) {
        setClientSecret(data.clientSecret)
      }
    } catch (error) {
      console.error('Erreur création Payment Intent:', error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }


  const nextStep = () => {
    if (step < 4) setStep(step + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici on pourrait intégrer Stripe, PayPal, etc.
    setStep(4)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 bg-studybox-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Commander votre StudyBox
          </h1>
          <p className="text-lg text-white/80 font-light">
            Quelques étapes pour recevoir votre box étudiante
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Produit' },
              { num: 2, label: 'Livraison' },
              { num: 3, label: 'Paiement' },
              { num: 4, label: 'Confirmation' },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  step >= s.num 
                    ? 'bg-studybox-blue text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > s.num ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : s.num}
                </div>
                <span className={`ml-3 text-sm font-medium hidden sm:block ${
                  step >= s.num ? 'text-studybox-blue' : 'text-gray-500'
                }`}>
                  {s.label}
                </span>
                {index < 3 && (
                  <div className={`w-12 sm:w-24 h-1 mx-4 rounded-full transition-all duration-300 ${
                    step > s.num ? 'bg-studybox-blue' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Form Section */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Produit */}
              {step === 1 && (
                <AnimatedSection>
                  <div className="bg-white rounded-3xl p-10 shadow-sm">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-black mb-3">Choisissez votre StudyBox</h2>
                      <p className="text-gray-500 font-light">Sélectionnez la formule qui vous correspond</p>
                    </div>
                    
                    {/* Product Selection Cards */}
                    <div className="space-y-8 mb-10">
                      {Object.entries(products).map(([key, product]) => {
                        const isPopular = key === 'personnalisee'
                        const isPremium = key === 'premium'
                        const isEssentiel = key === 'essentiel'
                        const quantity = productQuantities[key]
                        const setQuantity = (newQuantity) => {
                          setProductQuantities(prev => ({
                            ...prev,
                            [key]: newQuantity
                          }))
                        }
                        
                        // Styles ULTRA distincts pour chaque pack
                        const cardStyles = isPopular 
                          ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-[0_20px_80px_-15px_rgba(168,85,247,0.8)] border-[6px] border-yellow-400 scale-110 hover:scale-[1.15] transform-gpu relative overflow-hidden' 
                          : isPremium
                          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white shadow-[0_20px_60px_-15px_rgba(234,179,8,0.5)] border-4 border-yellow-500 hover:border-yellow-400 hover:shadow-[0_20px_80px_-10px_rgba(234,179,8,0.8)] relative overflow-hidden'
                          : 'bg-gray-50 border border-gray-300 hover:border-gray-400 hover:shadow-md'
                        
                        const priceColor = isPopular 
                          ? 'text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]' 
                          : isPremium 
                          ? 'text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,1)]'
                          : 'text-studybox-blue'
                        
                        const buttonStyles = isPopular 
                          ? 'bg-white text-purple-700 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.8)] hover:bg-yellow-50 font-bold text-lg' 
                          : isPremium
                          ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500 font-black text-lg shadow-[0_10px_30px_-10px_rgba(234,179,8,0.8)]'
                          : 'bg-studybox-blue text-white hover:bg-studybox-blue/90 text-sm'
                        
                        const quantityStyles = isPopular 
                          ? 'bg-white/30 hover:bg-white/40 text-white backdrop-blur-sm border-2 border-white/50' 
                          : isPremium
                          ? 'bg-yellow-500/30 hover:bg-yellow-500/40 text-yellow-300 border-2 border-yellow-500'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        
                        const containerPadding = isPopular ? 'p-10' : isPremium ? 'p-9' : 'p-6'
                        const titleSize = isPopular ? 'text-4xl' : isPremium ? 'text-4xl' : 'text-2xl'
                        const priceSize = isPopular ? 'text-6xl' : isPremium ? 'text-6xl' : 'text-4xl'
                        
                        return (
                          <div key={key} className={`relative group ${isPopular ? 'z-10' : isPremium ? 'z-5' : 'z-0'}`}>
                            {isPopular && (
                              <>
                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-pulse"></div>
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-black text-base font-black px-8 py-3 rounded-full shadow-2xl z-20 animate-bounce">
                                  ⭐ LE PLUS POPULAIRE ⭐
                                </div>
                              </>
                            )}
                            {isPremium && (
                              <>
                                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75"></div>
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black text-base font-black px-8 py-3 rounded-full shadow-2xl z-20">
                                  👑 EXPÉRIENCE PREMIUM 👑
                                </div>
                              </>
                            )}
                            <div className={`h-full ${containerPadding} rounded-3xl transition-all duration-500 ${cardStyles} relative`}>
                              {isPopular && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[shimmer_3s_ease-in-out_infinite]"></div>
                              )}
                              {isPremium && (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_50%)]"></div>
                              )}
                              <div className="flex items-center justify-between gap-8 relative z-10">
                                {/* Left: Product Info */}
                                <div className="flex-1">
                                  <h3 className={`${titleSize} font-black mb-3 ${isEssentiel ? 'text-gray-700' : 'text-white'} ${isPopular || isPremium ? 'tracking-tight' : ''}`}>
                                    {product.name}
                                  </h3>
                                  <p className={`${isPopular || isPremium ? 'text-lg' : 'text-sm'} mb-5 ${
                                    isPopular ? 'text-white font-medium' : 
                                    isPremium ? 'text-gray-200 font-medium' : 
                                    'text-gray-500'
                                  }`}>
                                    {product.description}
                                  </p>
                                  <div className="flex items-baseline gap-2 mb-3">
                                    <span className={`${priceSize} font-black ${priceColor}`}>
                                      {product.price}
                                    </span>
                                    <span className={`${isPopular || isPremium ? 'text-3xl' : 'text-xl'} ${
                                      isPopular ? 'text-yellow-200' : 
                                      isPremium ? 'text-yellow-300' : 
                                      'text-gray-500'
                                    }`}>€</span>
                                  </div>
                                  {isPremium && (
                                    <div className="space-y-1">
                                      <p className="text-sm text-yellow-400 font-bold flex items-center gap-2">
                                        <span className="text-lg">✨</span> Expérience ultime & exclusive
                                      </p>
                                      <p className="text-sm text-yellow-300 font-semibold flex items-center gap-2">
                                        <span className="text-lg">🎁</span> Contenu premium maximal
                                      </p>
                                    </div>
                                  )}
                                  {isPopular && (
                                    <div className="space-y-1">
                                      <p className="text-sm text-yellow-200 font-bold flex items-center gap-2">
                                        <span className="text-lg">🔥</span> Meilleur rapport qualité-prix
                                      </p>
                                      <p className="text-sm text-white/90 font-semibold flex items-center gap-2">
                                        <span className="text-lg">💯</span> Le choix préféré des étudiants
                                      </p>
                                    </div>
                                  )}
                                </div>
                                
                                {/* Right: Quantity & Button */}
                                <div className="flex flex-col items-center gap-5">
                                  {/* Quantity Selector */}
                                  <div className="flex items-center gap-4">
                                    <button
                                      type="button"
                                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                      className={`${isPopular || isPremium ? 'w-12 h-12' : 'w-9 h-9'} flex items-center justify-center rounded-full transition-all duration-200 ${quantityStyles}`}
                                    >
                                      <svg className={`${isPopular || isPremium ? 'w-6 h-6' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                                      </svg>
                                    </button>
                                    <span className={`${isPopular || isPremium ? 'text-3xl' : 'text-xl'} font-black ${isPopular || isPremium ? 'w-16' : 'w-12'} text-center ${
                                      isEssentiel ? 'text-gray-700' : 'text-white'
                                    }`}>
                                      {quantity}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => setQuantity(Math.min(99, quantity + 1))}
                                      className={`${isPopular || isPremium ? 'w-12 h-12' : 'w-9 h-9'} flex items-center justify-center rounded-full transition-all duration-200 ${quantityStyles}`}
                                    >
                                      <svg className={`${isPopular || isPremium ? 'w-6 h-6' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                                      </svg>
                                    </button>
                                  </div>
                                  
                                  <button
                                    type="button"
                                    onClick={() => {
                                      addToCart(key, quantity)
                                      setQuantity(1)
                                    }}
                                    className={`${isPopular || isPremium ? 'px-10 py-5' : 'px-6 py-3'} rounded-2xl font-semibold transition-all duration-300 hover:scale-110 shadow-xl whitespace-nowrap ${buttonStyles}`}
                                  >
                                    {isPopular || isPremium ? 'CHOISIR' : 'Ajouter'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Cart Items */}
                    {cart.length > 0 && (
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-2xl font-bold text-black flex items-center gap-3">
                            <div className="w-10 h-10 bg-studybox-blue/10 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            Panier
                          </h3>
                          <span className="bg-studybox-blue text-white text-sm font-bold px-4 py-2 rounded-full">
                            {totalQuantity} {totalQuantity > 1 ? 'articles' : 'article'}
                          </span>
                        </div>
                        <div className="space-y-4">
                          {cart.map((item) => (
                            <div key={item.productKey} className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                              <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-studybox-blue/10 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                  <svg className="w-7 h-7 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                  </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-bold text-black text-lg">StudyBox {products[item.productKey].name}</p>
                                  <p className="text-sm text-gray-500">{products[item.productKey].price}€ l'unité</p>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2">
                                  <button
                                    type="button"
                                    onClick={() => updateCartQuantity(item.productKey, item.quantity - 1)}
                                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded-lg transition-all duration-200 hover:shadow-sm"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                                    </svg>
                                  </button>
                                  <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                                  <button
                                    type="button"
                                    onClick={() => updateCartQuantity(item.productKey, item.quantity + 1)}
                                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-white rounded-lg transition-all duration-200 hover:shadow-sm"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                    </svg>
                                  </button>
                                </div>
                                <p className="font-bold text-studybox-blue text-xl w-24 text-right">
                                  {(products[item.productKey].price * item.quantity).toFixed(2)}€
                                </p>
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(item.productKey)}
                                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                                  title="Supprimer"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Gift Option */}
                    <div className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer ${
                      formData.giftWrap 
                        ? 'bg-gradient-to-br from-studybox-blue/10 to-blue-50 border-2 border-studybox-blue shadow-lg' 
                        : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                    }`} onClick={() => setFormData({...formData, giftWrap: !formData.giftWrap})}>
                      <label className="flex items-start gap-4 cursor-pointer">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-0.5 ${
                          formData.giftWrap 
                            ? 'bg-studybox-blue border-studybox-blue' 
                            : 'border-gray-300 bg-white'
                        }`}>
                          {formData.giftWrap && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-black text-lg">Emballage cadeau</span>
                              <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 7h-1.209A4.92 4.92 0 0019 5.5C19 3.57 17.43 2 15.5 2c-1.58 0-2.903 1.06-3.337 2.5h-.326C11.403 3.06 10.08 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM8.5 4c.827 0 1.5.673 1.5 1.5S9.327 7 8.5 7 7 6.327 7 5.5 7.673 4 8.5 4zm7 0c.827 0 1.5.673 1.5 1.5S16.327 7 15.5 7 14 6.327 14 5.5s.673-1.5 1.5-1.5zM4 9h7v2H4V9zm13 11H7v-7h10v7zm0-9h-7V9h7v2z"/>
                              </svg>
                            </div>
                            <span className={`font-bold text-lg ${formData.giftWrap ? 'text-studybox-blue' : 'text-gray-600'}`}>
                              +2,50€
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Votre StudyBox sera emballée dans un joli papier cadeau avec un ruban élégant.
                          </p>
                        </div>
                      </label>
                      
                      {formData.giftWrap && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Message personnalisé (optionnel)
                          </label>
                          <textarea
                            name="giftMessage"
                            value={formData.giftMessage}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="Écrivez votre message ici..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent resize-none"
                          />
                        </div>
                      )}
                    </div>

                    {/* Info Banner */}
                    <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-green-900 text-lg">Livraison gratuite</p>
                        <p className="text-sm text-green-700">À partir de 3 StudyBox commandées</p>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-end pt-8">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={cart.length === 0}
                        className={`px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                          cart.length === 0 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-studybox-blue to-blue-600 text-white hover:shadow-2xl hover:scale-105 shadow-xl'
                        }`}
                      >
                        Continuer vers la livraison
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                    {cart.length === 0 && (
                      <p className="text-sm text-red-500 text-right mt-3 font-medium">⚠️ Ajoutez au moins un produit pour continuer</p>
                    )}
                  </div>
                </AnimatedSection>
              )}

              {/* Step 2: Livraison */}
              {step === 2 && (
                <AnimatedSection>
                  <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-black mb-8">Informations de livraison</h2>
                    
                    {/* Personal Info */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-black mb-4">Vos coordonnées</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                            placeholder="Votre prénom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                            placeholder="votre@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                            placeholder="+32 XXX XX XX XX"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-black mb-4">Adresse de livraison</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Adresse *</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                            placeholder="Rue et numéro"
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Code postal *</label>
                            <input
                              type="text"
                              name="postalCode"
                              value={formData.postalCode}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                              placeholder="1000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                              placeholder="Bruxelles"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Pays *</label>
                            <select
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-studybox-blue focus:border-transparent bg-white"
                            >
                              <option value="Belgique">Belgique</option>
                              <option value="France">France</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Pays-Bas">Pays-Bas</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Options de livraison */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-black mb-2">Options de livraison</h3>
                      <p className="text-gray-600 mb-6">Choisissez le mode de livraison qui vous convient</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Livraison Standard */}
                        <div
                          onClick={() => setFormData(prev => ({ ...prev, deliveryOption: 'standard' }))}
                          className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-200 ${
                            formData.deliveryOption === 'standard'
                              ? 'bg-studybox-blue/5 border-2 border-studybox-blue shadow-md'
                              : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                              formData.deliveryOption === 'standard' ? 'bg-studybox-blue/10' : 'bg-gray-100'
                            }`}>
                              <svg className={`w-8 h-8 ${formData.deliveryOption === 'standard' ? 'text-studybox-blue' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold text-black mb-2">Livraison Standard</h4>
                            <p className="text-sm font-semibold text-studybox-blue mb-2">3-5 jours ouvrables</p>
                            <p className="text-sm text-gray-600 mb-4">Livraison à domicile par Bpost</p>
                            <p className="text-2xl font-bold text-black">4.95€</p>
                          </div>
                          {formData.deliveryOption === 'standard' && (
                            <div className="absolute top-4 right-4">
                              <div className="w-6 h-6 bg-studybox-blue rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Livraison Express */}
                        <div
                          onClick={() => setFormData(prev => ({ ...prev, deliveryOption: 'express' }))}
                          className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-200 ${
                            formData.deliveryOption === 'express'
                              ? 'bg-studybox-blue/5 border-2 border-studybox-blue shadow-md'
                              : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                              formData.deliveryOption === 'express' ? 'bg-studybox-blue/10' : 'bg-gray-100'
                            }`}>
                              <svg className={`w-8 h-8 ${formData.deliveryOption === 'express' ? 'text-studybox-blue' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold text-black mb-2">Livraison Express</h4>
                            <p className="text-sm font-semibold text-studybox-blue mb-2">1-2 jours ouvrables</p>
                            <p className="text-sm text-gray-600 mb-4">Livraison prioritaire à domicile</p>
                            <p className="text-2xl font-bold text-black">9.95€</p>
                          </div>
                          {formData.deliveryOption === 'express' && (
                            <div className="absolute top-4 right-4">
                              <div className="w-6 h-6 bg-studybox-blue rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Point Relais */}
                        <div
                          onClick={() => setFormData(prev => ({ ...prev, deliveryOption: 'relay' }))}
                          className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-200 ${
                            formData.deliveryOption === 'relay'
                              ? 'bg-studybox-blue/5 border-2 border-studybox-blue shadow-md'
                              : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                              formData.deliveryOption === 'relay' ? 'bg-studybox-blue/10' : 'bg-gray-100'
                            }`}>
                              <svg className={`w-8 h-8 ${formData.deliveryOption === 'relay' ? 'text-studybox-blue' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h4 className="text-lg font-bold text-black mb-2">Point Relais</h4>
                            <p className="text-sm font-semibold text-studybox-blue mb-2">3-5 jours ouvrables</p>
                            <p className="text-sm text-gray-600 mb-4">Retrait dans un point relais proche de chez vous</p>
                            <p className="text-2xl font-bold text-black">3.95€</p>
                          </div>
                          {formData.deliveryOption === 'relay' && (
                            <div className="absolute top-4 right-4">
                              <div className="w-6 h-6 bg-studybox-blue rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Retour
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-studybox-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-studybox-blue/90 transition-all duration-200 flex items-center gap-2"
                      >
                        Continuer
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 3: Paiement avec Stripe */}
              {step === 3 && (
                <AnimatedSection>
                  <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-black mb-2">Paiement sécurisé</h2>
                      <p className="text-gray-600">Finalisez votre commande en toute sécurité avec Stripe</p>
                    </div>

                    {/* Stripe Payment Form */}
                    {clientSecret ? (
                      <Elements
                        stripe={stripePromise}
                        options={{
                          clientSecret,
                          appearance: {
                            theme: 'stripe',
                            variables: {
                              colorPrimary: '#1e40af',
                              colorBackground: '#ffffff',
                              colorText: '#1f2937',
                              colorDanger: '#ef4444',
                              fontFamily: 'system-ui, sans-serif',
                              spacingUnit: '4px',
                              borderRadius: '12px',
                            },
                          },
                        }}
                      >
                        <StripePaymentForm
                          onSuccess={(paymentIntent) => {
                            setPaymentSuccess(true)
                            setStep(4)
                          }}
                          onError={(error) => {
                            console.error('Erreur paiement:', error)
                          }}
                        />
                      </Elements>
                    ) : (
                      <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                          <svg className="animate-spin h-12 w-12 text-studybox-blue mx-auto mb-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <p className="text-gray-600 font-medium">Préparation du paiement...</p>
                        </div>
                      </div>
                    )}

                    {/* Navigation - Retour uniquement */}
                    <div className="mt-8 flex justify-start">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-gray-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Retour
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <AnimatedSection>
                  <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-black mb-4">Merci pour votre commande !</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Votre commande a été confirmée. Vous recevrez un email de confirmation à <strong>{formData.email || 'votre adresse email'}</strong>.
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
                      <h3 className="font-semibold text-black mb-4">Récapitulatif</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Numéro de commande</span>
                          <span className="font-medium">#SB{Date.now().toString().slice(-6)}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 mt-2 space-y-2">
                          {cart.map((item) => (
                            <div key={item.productKey} className="flex justify-between">
                              <span className="text-gray-600">StudyBox {products[item.productKey].name} x{item.quantity}</span>
                              <span className="font-medium">{(products[item.productKey].price * item.quantity).toFixed(2)}€</span>
                            </div>
                          ))}
                        </div>
                        {formData.giftWrap && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Emballage cadeau</span>
                            <span className="font-medium">{giftWrapPrice.toFixed(2)}€</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Livraison</span>
                          <span className="font-medium">{shippingPrice === 0 ? 'Gratuite' : `${shippingPrice.toFixed(2)}€`}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                          <span className="font-semibold text-black">Total</span>
                          <span className="font-bold text-studybox-blue">{totalPrice.toFixed(2)}€</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/"
                        className="bg-studybox-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-studybox-blue/90 transition-all duration-200"
                      >
                        Retour à l'accueil
                      </a>
                      <a
                        href="/contact"
                        className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-200"
                      >
                        Une question ?
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
          {step < 4 && (
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-36">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-studybox-blue/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black">Récapitulatif</h3>
                </div>
                
                {/* Products */}
                {(cart.length > 0 || freeProducts.length > 0) ? (
                  <div className="space-y-4 pb-6 border-b border-gray-100">
                    {/* Paid Products */}
                    {cart.map((item) => (
                      <div key={item.productKey} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-studybox-blue/10 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-black text-lg">StudyBox {products[item.productKey].name}</p>
                          <p className="text-sm text-gray-500">Quantité : {item.quantity}</p>
                        </div>
                        <p className="font-bold text-studybox-blue text-lg">
                          {(products[item.productKey].price * item.quantity).toFixed(2)}€
                        </p>
                      </div>
                    ))}
                    {/* Free Products */}
                    {freeProducts.map((item, index) => (
                      <div key={`free-${index}`} className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-black text-lg">StudyBox {products[item.productKey].name}</p>
                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">GRATUIT</span>
                          </div>
                          <p className="text-sm text-gray-500">Quantité : {item.quantity} (Code: {item.promoCode})</p>
                        </div>
                        <p className="font-bold text-green-600 text-lg">
                          0,00€
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pb-6 border-b border-gray-100 text-center py-12">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-base text-gray-500 font-medium">Votre panier est vide</p>
                  </div>
                )}

                {/* Subtotal */}
                {cart.length > 0 && (
                  <div className="flex justify-between py-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium text-base">Sous-total</span>
                    <span className="font-bold text-base">{subtotal.toFixed(2)}€</span>
                  </div>
                )}

                {/* Promo Code */}
                <div className="py-4 border-b border-gray-100">
                  <div className="mb-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Code promo</label>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Entrez votre code promo"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && applyPromoCode()}
                          className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-studybox-blue focus:border-transparent"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={applyPromoCode}
                        className="px-8 py-3 bg-gradient-to-r from-studybox-blue to-blue-600 text-white rounded-xl text-base font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        Appliquer
                      </button>
                    </div>
                  </div>
                  {appliedPromo && (
                    <div className="flex items-center gap-3 text-green-600 text-base font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Code {appliedPromo.code} appliqué (-{(appliedPromo.discount * 100)}%)</span>
                    </div>
                  )}
                  {!appliedPromo && promoCode && !promoError && freeProducts.some(item => item.promoCode === 'PACK4') && (
                    <div className="flex items-center gap-3 text-green-600 text-base font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>StudyBox Essentiel offerte avec le code PACK4 !</span>
                    </div>
                  )}
                  {promoError && (
                    <div className="flex items-center gap-3 text-red-500 text-base font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{promoError}</span>
                    </div>
                  )}
                </div>

                {/* Discount */}
                {appliedPromo && discount > 0 && (
                  <div className="flex justify-between py-4 text-green-600 border-b border-gray-100">
                    <span className="font-bold text-base">Réduction</span>
                    <span className="font-bold text-base">-{discount.toFixed(2)}€</span>
                  </div>
                )}

                {/* Options */}
                {formData.giftWrap && (
                  <div className="flex justify-between py-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium text-base">Emballage cadeau</span>
                    <span className="font-bold text-base">{giftWrapPrice.toFixed(2)}€</span>
                  </div>
                )}

                {/* Shipping */}
                <div className="flex justify-between py-4 border-b border-gray-100">
                  <span className="text-gray-700 font-medium text-base">Livraison</span>
                  <span className={`font-bold text-base ${shippingPrice === 0 ? 'text-green-600' : ''}`}>
                    {shippingPrice === 0 ? 'Gratuite' : `${shippingPrice.toFixed(2)}€`}
                  </span>
                </div>

                {/* Total */}
                <div className="flex justify-between pt-6 pb-4">
                  <span className="text-2xl font-bold text-black">Total</span>
                  <span className="text-2xl font-bold text-studybox-blue">{totalPrice.toFixed(2)}€</span>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Paiement sécurisé
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Livraison rapide
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Satisfait ou remboursé
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
