'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const inputRef = useRef(null)
  const { t, language } = useLanguage()

  const calculateSimilarity = (str1, str2) => {
    const s1 = str1.toLowerCase()
    const s2 = str2.toLowerCase()
    
    if (s1 === s2) return 1
    if (s1.includes(s2) || s2.includes(s1)) return 0.8
    
    let matches = 0
    const minLength = Math.min(s1.length, s2.length)
    
    for (let i = 0; i < minLength; i++) {
      if (s1[i] === s2[i]) matches++
    }
    
    const longerLength = Math.max(s1.length, s2.length)
    return matches / longerLength
  }

  const pages = [
    { 
      path: '/', 
      title: 'Accueil', 
      titleEn: 'Home', 
      keywords: ['home', 'accueil', 'studybox', 'box', 'étudiant', 'student', 'page principale', 'main page', 'début', 'start']
    },
    { 
      path: '/studybox', 
      title: 'StudyBox', 
      titleEn: 'StudyBox', 
      keywords: ['studybox', 'box', 'produit', 'product', 'contenu', 'content', 'prix', 'price', 'découvrir', 'discover', 'qu\'est-ce que', 'what is', 'présentation', 'presentation', 'pour qui', 'for who', 'tarif', 'pricing']
    },
    { 
      path: '/actualites', 
      title: 'Actualités', 
      titleEn: 'News', 
      keywords: ['actualités', 'news', 'blog', 'articles', 'conseils', 'tips', 'événements', 'events', 'nouveautés', 'updates', 'infos', 'information', 'vie étudiante', 'student life']
    },
    { 
      path: '/application', 
      title: 'Application', 
      titleEn: 'Application', 
      keywords: ['app', 'application', 'mobile', 'ios', 'android', 'web', 'organisation', 'planning', 'télécharger', 'download', 'installer', 'install', 'fonctionnalités', 'features']
    },
    { 
      path: '/application/ios', 
      title: 'Application iOS', 
      titleEn: 'iOS App', 
      keywords: ['ios', 'iphone', 'ipad', 'apple', 'télécharger', 'download', 'app store', 'installer', 'install']
    },
    { 
      path: '/application/android', 
      title: 'Application Android', 
      titleEn: 'Android App', 
      keywords: ['android', 'google', 'play store', 'télécharger', 'download', 'installer', 'install', 'samsung', 'huawei']
    },
    { 
      path: '/application/web', 
      title: 'Version Web', 
      titleEn: 'Web Version', 
      keywords: ['web', 'navigateur', 'browser', 'online', 'en ligne', 'ordinateur', 'computer', 'pc']
    },
    { 
      path: '/application/organisation', 
      title: 'Organisation des cours', 
      titleEn: 'Course Organization', 
      keywords: ['organisation', 'cours', 'classes', 'organize', 'organiser', 'matières', 'subjects', 'emploi du temps', 'schedule']
    },
    { 
      path: '/application/planning', 
      title: 'Planning & Rappels', 
      titleEn: 'Planning & Reminders', 
      keywords: ['planning', 'rappels', 'reminders', 'calendrier', 'calendar', 'agenda', 'horaire', 'schedule', 'notification', 'alert']
    },
    { 
      path: '/application/notes', 
      title: 'Prise de notes', 
      titleEn: 'Note Taking', 
      keywords: ['notes', 'écrire', 'write', 'prendre des notes', 'note taking', 'rédiger', 'éditeur', 'editor']
    },
    { 
      path: '/application/guide', 
      title: 'Guide de démarrage', 
      titleEn: 'Getting Started', 
      keywords: ['guide', 'aide', 'help', 'tutoriel', 'tutorial', 'démarrage', 'commencer', 'start', 'premiers pas', 'first steps', 'comment utiliser', 'how to use']
    },
    { 
      path: '/application/signaler-probleme', 
      title: 'Signaler un problème', 
      titleEn: 'Report Problem', 
      keywords: ['problème', 'problem', 'bug', 'erreur', 'error', 'signaler', 'report', 'dysfonctionnement', 'issue', 'ne marche pas', 'not working']
    },
    { 
      path: '/application/suggerer-fonctionnalite', 
      title: 'Suggérer une fonctionnalité', 
      titleEn: 'Suggest Feature', 
      keywords: ['suggérer', 'suggest', 'fonctionnalité', 'feature', 'idée', 'idea', 'proposition', 'proposal', 'amélioration', 'improvement', 'demande', 'request']
    },
    { 
      path: '/a-propos', 
      title: 'À propos', 
      titleEn: 'About', 
      keywords: ['à propos', 'about', 'équipe', 'team', 'histoire', 'history', 'mission', 'vision', 'valeurs', 'values', 'qui sommes-nous', 'who are we', 'notre histoire', 'our story', 'fondateurs', 'founders']
    },
    { 
      path: '/partenaires', 
      title: 'Nos partenaires', 
      titleEn: 'Our Partners', 
      keywords: ['partenaires', 'partners', 'collaboration', 'restaurants', 'offres', 'offers', 'réductions', 'discounts', 'devenir partenaire', 'become partner', 'inscrire entreprise', 'register company', 'inscription partenaire', 'partner registration', 'rejoindre', 'join', 'partenariat', 'partnership', 'entreprise', 'business', 'commercial', 'b2b', 'professionnels', 'professionals', 'candidature', 'application', 's\'inscrire', 'sign up', 'enregistrer', 'register']
    },
    { 
      path: '/contact', 
      title: 'Contact', 
      titleEn: 'Contact', 
      keywords: ['contact', 'email', 'téléphone', 'phone', 'formulaire', 'form', 'support', 'nous contacter', 'contact us', 'joindre', 'reach', 'écrire', 'write', 'message', 'appeler', 'call']
    },
    { 
      path: '/commander', 
      title: 'Commander', 
      titleEn: 'Order', 
      keywords: ['commander', 'order', 'acheter', 'buy', 'panier', 'cart', 'achat', 'purchase', 'boutique', 'shop', 'magasin', 'store', 'payer', 'pay', 'checkout', 'obtenir', 'get']
    },
    { 
      path: '/offres', 
      title: 'Offres & Promotions', 
      titleEn: 'Offers & Promotions', 
      keywords: ['offres', 'offers', 'promotions', 'promo', 'réductions', 'discounts', 'soldes', 'sales', 'code promo', 'promo code', 'bon plan', 'deal', 'rabais', 'moins cher', 'cheaper', 'économiser', 'save']
    },
    { 
      path: '/livraison', 
      title: 'Livraison & Retours', 
      titleEn: 'Delivery & Returns', 
      keywords: ['livraison', 'delivery', 'retours', 'returns', 'expédition', 'shipping', 'transport', 'envoyer', 'send', 'recevoir', 'receive', 'délai', 'delay', 'remboursement', 'refund', 'retourner', 'return']
    },
    { 
      path: '/paiement', 
      title: 'Modes de paiement', 
      titleEn: 'Payment Methods', 
      keywords: ['paiement', 'payment', 'carte', 'card', 'paypal', 'banque', 'bank', 'visa', 'mastercard', 'payer', 'pay', 'transaction', 'sécurisé', 'secure', 'cb', 'carte bancaire']
    },
    { 
      path: '/avantages', 
      title: 'Nos avantages', 
      titleEn: 'Our Advantages', 
      keywords: ['avantages', 'advantages', 'bénéfices', 'benefits', 'pourquoi', 'why', 'atouts', 'strengths', 'points forts', 'strong points', 'raisons', 'reasons', 'choisir', 'choose']
    },
    { 
      path: '/qualite', 
      title: 'Engagement qualité', 
      titleEn: 'Quality Commitment', 
      keywords: ['qualité', 'quality', 'engagement', 'commitment', 'garantie', 'guarantee', 'excellence', 'fiabilité', 'reliability', 'confiance', 'trust', 'promesse', 'promise']
    },
    { 
      path: '/temoignages', 
      title: 'Témoignages', 
      titleEn: 'Testimonials', 
      keywords: ['témoignages', 'testimonials', 'avis', 'reviews', 'étudiants', 'students', 'retours', 'feedback', 'expérience', 'experience', 'opinion', 'commentaires', 'comments', 'notes', 'ratings']
    },
    { 
      path: '/faq', 
      title: 'FAQ', 
      titleEn: 'FAQ', 
      keywords: ['faq', 'questions', 'réponses', 'answers', 'aide', 'help', 'foire aux questions', 'questions fréquentes', 'frequently asked', 'comment', 'how', 'pourquoi', 'why', 'quoi', 'what']
    },
    { 
      path: '/support', 
      title: 'Support & SAV', 
      titleEn: 'Support & Customer Service', 
      keywords: ['support', 'sav', 'service', 'aide', 'help', 'assistance', 'service client', 'customer service', 'service après-vente', 'after sales', 'problème', 'problem', 'question', 'besoin d\'aide', 'need help']
    },
    { 
      path: '/legal', 
      title: 'Mentions légales', 
      titleEn: 'Legal Notice', 
      keywords: ['légal', 'legal', 'mentions', 'cgv', 'conditions', 'confidentialité', 'privacy', 'rgpd', 'gdpr', 'données personnelles', 'personal data', 'politique', 'policy', 'termes', 'terms', 'juridique']
    },
    { 
      path: '/planifier-semaine', 
      title: 'Planifier sa semaine', 
      titleEn: 'Plan Your Week', 
      keywords: ['planifier', 'plan', 'semaine', 'week', 'organisation', 'organization', 'organiser', 'organize', 'emploi du temps', 'schedule', 'agenda', 'calendrier', 'calendar', 'gérer son temps', 'time management']
    },
    { 
      path: '/techniques-etude', 
      title: 'Techniques d\'étude', 
      titleEn: 'Study Techniques', 
      keywords: ['techniques', 'étude', 'study', 'méthodes', 'methods', 'apprendre', 'learn', 'réviser', 'revise', 'mémoriser', 'memorize', 'efficace', 'efficient', 'conseils', 'tips', 'astuces', 'tricks', 'réussir', 'succeed']
    }
  ]

  const quickLinks = [
    { path: '/commander', title: 'Acheter une StudyBox', titleEn: 'Buy a StudyBox' },
    { path: '/partenaires', title: 'Trouver un partenaire', titleEn: 'Find a Partner' },
    { path: '/application', title: 'Application StudyBox', titleEn: 'StudyBox App' },
    { path: '/support', title: 'Support', titleEn: 'Support' },
    { path: '/contact', title: 'Nous contacter', titleEn: 'Contact Us' }
  ]

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      setSuggestions([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = pages.filter(page => {
      const titleMatch = page.title.toLowerCase().includes(query) || page.titleEn.toLowerCase().includes(query)
      const keywordMatch = page.keywords.some(keyword => keyword.toLowerCase().includes(query))
      const pathMatch = page.path.toLowerCase().includes(query)
      return titleMatch || keywordMatch || pathMatch
    })

    setSearchResults(results.slice(0, 8))

    if (results.length === 0 && query.length >= 3) {
      const similarPages = pages.map(page => {
        let maxSimilarity = 0
        
        maxSimilarity = Math.max(maxSimilarity, calculateSimilarity(query, page.title))
        maxSimilarity = Math.max(maxSimilarity, calculateSimilarity(query, page.titleEn))
        
        page.keywords.forEach(keyword => {
          maxSimilarity = Math.max(maxSimilarity, calculateSimilarity(query, keyword))
        })
        
        return { ...page, similarity: maxSimilarity }
      })
      .filter(page => page.similarity > 0.3)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5)

      setSuggestions(similarPages)
    } else {
      setSuggestions([])
    }
  }, [searchQuery])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" 
        onClick={onClose}
      />
      
      <div className="fixed top-16 left-0 right-0 z-[101] animate-[slideDown_0.3s_ease-out]">
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'fr' ? 'Rechercher sur studybox.com' : 'Search on studybox.com'}
                className="flex-1 text-2xl outline-none text-gray-900 placeholder-gray-400 font-light bg-transparent"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              />
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                aria-label="Fermer"
              >
                {language === 'fr' ? 'Annuler' : 'Cancel'}
              </button>
            </div>

            <div className="mt-6 max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() !== '' ? (
                searchResults.length > 0 ? (
                  <div className="space-y-1">
                    {searchResults.map((result) => (
                      <Link
                        key={result.path}
                        href={result.path}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100/80 transition-colors group"
                      >
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-900 group-hover:text-[#1089e6] transition-colors">
                          {language === 'en' ? result.titleEn : result.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-6">
                    <div className="text-center mb-6">
                      <p className="text-gray-500 text-lg mb-1">
                        {language === 'fr' ? 'Aucun résultat trouvé' : 'No results found'}
                      </p>
                      {suggestions.length > 0 && (
                        <p className="text-gray-400 text-sm">
                          {language === 'fr' ? 'Vouliez-vous dire :' : 'Did you mean:'}
                        </p>
                      )}
                    </div>
                    {suggestions.length > 0 && (
                      <div className="space-y-1">
                        {suggestions.map((suggestion) => (
                          <Link
                            key={suggestion.path}
                            href={suggestion.path}
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100/80 transition-colors group border border-gray-200"
                          >
                            <svg className="w-4 h-4 text-[#1089e6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <span className="text-gray-700 group-hover:text-[#1089e6] transition-colors">
                              {language === 'en' ? suggestion.titleEn : suggestion.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ) : (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    {language === 'fr' ? 'Liens rapides' : 'Quick Links'}
                  </h3>
                  <div className="space-y-1">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100/80 transition-colors group"
                      >
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-900 group-hover:text-[#1089e6] transition-colors">
                          {language === 'en' ? link.titleEn : link.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
