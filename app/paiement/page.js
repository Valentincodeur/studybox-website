'use client'

import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'

export default function PaiementPage() {
  const { language } = useLanguage()

  const paymentMethods = [
    {
      name: 'Visa',
      icon: (
        <svg className="w-16 h-10" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#1A1F71"/>
          <path d="M19.5 21H17L18.75 11H21.25L19.5 21Z" fill="white"/>
          <path d="M28.5 11.25C28 11.05 27.2 10.85 26.2 10.85C23.7 10.85 22 12.15 22 14C22 15.4 23.2 16.15 24.15 16.6C25.1 17.05 25.45 17.35 25.45 17.75C25.45 18.35 24.7 18.6 24 18.6C23 18.6 22.45 18.45 21.6 18.1L21.25 17.95L20.9 20.35C21.55 20.65 22.7 20.9 23.9 20.9C26.55 20.9 28.2 19.65 28.2 17.65C28.2 16.55 27.5 15.7 26.05 15C25.2 14.55 24.65 14.25 24.65 13.8C24.65 13.4 25.1 12.95 26.05 12.95C26.85 12.95 27.45 13.1 27.9 13.3L28.15 13.4L28.5 11.25Z" fill="white"/>
          <path d="M32.5 11H30.5C29.85 11 29.35 11.2 29.1 11.85L25.5 21H28.15L28.65 19.55H31.85L32.15 21H34.5L32.5 11ZM29.35 17.55C29.55 17 30.35 14.9 30.35 14.9C30.35 14.9 30.55 14.35 30.7 14L30.85 14.85C30.85 14.85 31.35 17.1 31.45 17.55H29.35Z" fill="white"/>
          <path d="M16.5 11L14 17.85L13.7 16.4C13.2 14.75 11.65 12.95 9.9 12.05L12.15 21H14.85L19.2 11H16.5Z" fill="white"/>
          <path d="M12.5 11H8.55L8.5 11.2C11.65 12 13.75 13.9 14.5 16.15L13.7 11.9C13.55 11.25 13.05 11.05 12.5 11Z" fill="#F9A533"/>
        </svg>
      ),
      description: language === 'fr' ? 'Carte de crédit Visa' : 'Visa credit card',
    },
    {
      name: 'Mastercard',
      icon: (
        <svg className="w-16 h-10" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#F5F5F5"/>
          <circle cx="18" cy="16" r="8" fill="#EB001B"/>
          <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
          <path d="M24 10.5C25.8 12 27 14.35 27 17C27 19.65 25.8 22 24 23.5C22.2 22 21 19.65 21 17C21 14.35 22.2 12 24 10.5Z" fill="#FF5F00"/>
        </svg>
      ),
      description: language === 'fr' ? 'Carte de crédit Mastercard' : 'Mastercard credit card',
    },
    {
      name: 'Bancontact',
      icon: (
        <svg className="w-16 h-10" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#005498"/>
          <rect x="8" y="10" width="14" height="12" rx="2" fill="#FFD800"/>
          <rect x="26" y="10" width="14" height="12" rx="2" fill="#005498" stroke="#FFD800" strokeWidth="2"/>
        </svg>
      ),
      description: language === 'fr' ? 'Paiement belge sécurisé' : 'Secure Belgian payment',
    },
    {
      name: 'PayPal',
      icon: (
        <svg className="w-16 h-10" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#F5F5F5"/>
          <path d="M18.5 8H23.5C26.5 8 28 9.5 27.5 12C27 15 24.5 16.5 21.5 16.5H20L19 22H15.5L18.5 8Z" fill="#003087"/>
          <path d="M21 10H24C26 10 27 11 26.5 13C26 15.5 24 16.5 22 16.5H21L20.5 20H18L21 10Z" fill="#009CDE"/>
          <path d="M28.5 10H31.5C33.5 10 34.5 11 34 13C33.5 15.5 31.5 16.5 29.5 16.5H28.5L28 20H25.5L28.5 10Z" fill="#003087"/>
          <path d="M30 12H32C33 12 33.5 12.5 33.25 13.5C33 14.5 32 15 31 15H30.5L30 17H28.5L30 12Z" fill="#009CDE"/>
        </svg>
      ),
      description: language === 'fr' ? 'Paiement via compte PayPal' : 'Payment via PayPal account',
    },
    {
      name: language === 'fr' ? 'Virement bancaire' : 'Bank Transfer',
      icon: (
        <svg className="w-16 h-10" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#F5F5F5"/>
          <path d="M24 6L8 14H40L24 6Z" fill="#1089E6"/>
          <rect x="11" y="15" width="4" height="10" fill="#1089E6"/>
          <rect x="18" y="15" width="4" height="10" fill="#1089E6"/>
          <rect x="26" y="15" width="4" height="10" fill="#1089E6"/>
          <rect x="33" y="15" width="4" height="10" fill="#1089E6"/>
          <rect x="8" y="25" width="32" height="3" fill="#1089E6"/>
        </svg>
      ),
      description: language === 'fr' ? 'Virement SEPA sécurisé' : 'Secure SEPA transfer',
    },
    {
      name: 'Apple Pay',
      icon: (
        <svg className="w-16 h-10" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#000000"/>
          <path d="M16.5 11.5C16.2 11.8 15.7 12 15.3 12C15.2 11.6 15.4 11.1 15.7 10.8C16 10.5 16.5 10.3 16.9 10.3C17 10.7 16.8 11.2 16.5 11.5ZM16.9 12.1C16.3 12.1 15.8 12.4 15.5 12.4C15.2 12.4 14.7 12.1 14.2 12.1C13.6 12.1 13 12.4 12.7 13C12 14.1 12.5 15.8 13.2 16.8C13.5 17.3 13.9 17.8 14.4 17.8C14.9 17.8 15.1 17.5 15.7 17.5C16.3 17.5 16.4 17.8 17 17.8C17.5 17.8 17.9 17.3 18.2 16.8C18.6 16.2 18.7 15.7 18.7 15.7C18.7 15.7 17.8 15.4 17.8 14.4C17.8 13.5 18.5 13.1 18.5 13.1C18.1 12.5 17.5 12.1 16.9 12.1Z" fill="white"/>
          <path d="M24 13H25.5C26.9 13 27.8 13.9 27.8 15.3C27.8 16.7 26.9 17.6 25.5 17.6H24V13ZM25 14.2V16.4H25.4C26.3 16.4 26.8 15.9 26.8 15.3C26.8 14.7 26.3 14.2 25.4 14.2H25Z" fill="white"/>
          <path d="M28.5 16.5C28.5 15.7 29.1 15.2 30.1 15.1L31.3 15V14.7C31.3 14.3 31 14 30.5 14C30.1 14 29.8 14.2 29.7 14.5H28.8C28.8 13.8 29.5 13.3 30.5 13.3C31.6 13.3 32.2 13.9 32.2 14.7V17.6H31.3V17C31 17.4 30.5 17.7 29.9 17.7C29.1 17.7 28.5 17.2 28.5 16.5ZM31.3 16.1V15.7L30.2 15.8C29.6 15.8 29.3 16 29.3 16.4C29.3 16.8 29.6 17 30.1 17C30.7 17 31.3 16.6 31.3 16.1Z" fill="white"/>
          <path d="M33.2 19.3V18.5C33.3 18.5 33.5 18.5 33.6 18.5C34 18.5 34.2 18.3 34.3 17.9L34.4 17.6L32.8 13.4H33.8L34.9 16.7L36 13.4H37L35.3 17.9C34.9 19 34.5 19.3 33.6 19.3C33.5 19.3 33.3 19.3 33.2 19.3Z" fill="white"/>
        </svg>
      ),
      description: language === 'fr' ? 'Paiement rapide Apple' : 'Fast Apple payment',
    },
    {
      name: 'Google Pay',
      icon: (
        <svg className="w-16 h-10" viewBox="0 0 48 32" fill="none">
          <rect width="48" height="32" rx="4" fill="#FFFFFF" stroke="#E8E8E8" strokeWidth="1"/>
          <path d="M23.5 15.5V17.5H27.3C27.1 18.3 26.3 19.8 23.5 19.8C21.1 19.8 19.2 17.9 19.2 15.5C19.2 13.1 21.1 11.2 23.5 11.2C24.9 11.2 25.9 11.8 26.5 12.3L28 10.9C26.9 9.9 25.5 9.3 23.5 9.3C20.1 9.3 17.3 12.1 17.3 15.5C17.3 18.9 20.1 21.7 23.5 21.7C27 21.7 29.2 19.3 29.2 15.6C29.2 15.2 29.2 14.9 29.1 14.6H23.5V15.5Z" fill="#4285F4"/>
          <path d="M32.5 13.5C31.1 13.5 30 14.7 30 16.1C30 17.5 31.1 18.7 32.5 18.7C33.9 18.7 35 17.5 35 16.1C35 14.7 33.9 13.5 32.5 13.5ZM32.5 17.5C31.8 17.5 31.2 16.9 31.2 16.1C31.2 15.3 31.8 14.7 32.5 14.7C33.2 14.7 33.8 15.3 33.8 16.1C33.8 16.9 33.2 17.5 32.5 17.5Z" fill="#EA4335"/>
        </svg>
      ),
      description: language === 'fr' ? 'Paiement rapide Google' : 'Fast Google payment',
    },
  ]

  const securityFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: language === 'fr' ? 'Cryptage SSL' : 'SSL Encryption',
      description: language === 'fr' 
        ? 'Toutes vos données sont cryptées avec la technologie SSL 256 bits' 
        : 'All your data is encrypted with 256-bit SSL technology',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: language === 'fr' ? '3D Secure' : '3D Secure',
      description: language === 'fr' 
        ? 'Authentification renforcée pour les paiements par carte' 
        : 'Enhanced authentication for card payments',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Conforme PCI DSS' : 'PCI DSS Compliant',
      description: language === 'fr' 
        ? 'Nous respectons les normes de sécurité les plus strictes' 
        : 'We comply with the strictest security standards',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: language === 'fr' ? 'Données protégées' : 'Protected Data',
      description: language === 'fr' 
        ? 'Vos informations bancaires ne sont jamais stockées sur nos serveurs' 
        : 'Your banking information is never stored on our servers',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: language === 'fr' ? 'Certifié Stripe' : 'Stripe Certified',
      description: language === 'fr' 
        ? 'Utilisé par des millions d\'entreprises dans le monde, Stripe garantit la sécurité de vos transactions' 
        : 'Used by millions of companies worldwide, Stripe guarantees the security of your transactions',
    },
  ]

  const faqs = [
    {
      question: language === 'fr' ? 'Quand serai-je débité ?' : 'When will I be charged?',
      answer: language === 'fr' 
        ? 'Votre compte sera débité immédiatement après la validation de votre commande.' 
        : 'Your account will be charged immediately after your order is validated.',
    },
    {
      question: language === 'fr' ? 'Puis-je payer en plusieurs fois ?' : 'Can I pay in installments?',
      answer: language === 'fr' 
        ? 'Pour le moment, nous ne proposons pas le paiement en plusieurs fois. Cependant, cette option sera bientôt disponible.' 
        : 'At the moment, we do not offer installment payments. However, this option will be available soon.',
    },
    {
      question: language === 'fr' ? 'Ma carte a été refusée, que faire ?' : 'My card was declined, what should I do?',
      answer: language === 'fr' 
        ? 'Vérifiez que vos informations sont correctes et que votre carte n\'est pas expirée. Si le problème persiste, contactez votre banque ou essayez un autre moyen de paiement.' 
        : 'Check that your information is correct and that your card has not expired. If the problem persists, contact your bank or try another payment method.',
    },
    {
      question: language === 'fr' ? 'Comment obtenir une facture ?' : 'How do I get an invoice?',
      answer: language === 'fr' 
        ? 'Une facture est automatiquement envoyée par email après chaque commande. Vous pouvez également la télécharger depuis votre espace client.' 
        : 'An invoice is automatically sent by email after each order. You can also download it from your customer area.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Moyens de paiement' : 'Payment Methods'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Payez en toute sécurité avec le moyen de paiement de votre choix' 
                : 'Pay securely with the payment method of your choice'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Nous acceptons' : 'We accept'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Plusieurs options de paiement sécurisées pour votre confort' 
                : 'Several secure payment options for your convenience'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">{method.name}</h3>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Paiement 100% sécurisé par Stripe' : '100% Secure Payment by Stripe'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-6 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Vos paiements sont protégés par Stripe, leader mondial de la sécurité des transactions en ligne' 
                : 'Your payments are protected by Stripe, the global leader in online transaction security'}
            </p>
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-200 inline-flex items-center gap-3">
                <svg className="w-8 h-8 text-[#635BFF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
                </svg>
                <span className="text-2xl font-bold text-[#635BFF]">Stripe</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-studybox-blue">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-semibold">{language === 'fr' ? 'Paiement sécurisé' : 'Secure payment'}</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-semibold">SSL 256 bits</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">PCI DSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              {language === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600 font-light">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {language === 'fr' ? 'Prêt à commander ?' : 'Ready to order?'}
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-light">
              {language === 'fr' 
                ? 'Commandez votre StudyBox en toute sécurité' 
                : 'Order your StudyBox securely'}
            </p>
            <a 
              href="/commander" 
              className="inline-flex items-center gap-3 bg-studybox-blue text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {language === 'fr' ? 'Commander maintenant' : 'Order now'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
