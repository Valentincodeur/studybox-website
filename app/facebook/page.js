'use client'

import { useLanguage } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function FacebookPage() {
  const { language } = useLanguage()

  const benefits = [
    {
      title: language === 'fr' ? 'Actualités exclusives' : 'Exclusive News',
      description: language === 'fr' 
        ? 'Soyez les premiers informés de nos nouveautés et événements' 
        : 'Be the first to know about our news and events',
      icon: '📰'
    },
    {
      title: language === 'fr' ? 'Offres exclusives' : 'Exclusive Offers',
      description: language === 'fr' 
        ? 'Découvrez nos offres spéciales et promotions réservées à notre communauté' 
        : 'Discover our special offers and promotions reserved for our community',
      icon: '🎁'
    },
    {
      title: language === 'fr' ? 'Communauté étudiante' : 'Student Community',
      description: language === 'fr' 
        ? 'Échangez avec d\'autres étudiants et partagez vos expériences' 
        : 'Connect with other students and share your experiences',
      icon: '👥'
    }
  ]

  const partners = [
    {
      name: "L'Harmony",
      type: language === 'fr' ? 'Restaurant' : 'Restaurant',
      offer: language === 'fr' ? 'Réductions exclusives' : 'Exclusive discounts'
    },
    {
      name: 'Pepe & Ricotta',
      type: language === 'fr' ? 'Traiteur italien' : 'Italian Caterer',
      offer: language === 'fr' ? 'Offres spéciales' : 'Special offers'
    },
    {
      name: 'SunRice Poke',
      type: 'Poke bowls',
      offer: language === 'fr' ? 'Promotions membres' : 'Member promotions'
    },
    {
      name: 'Éclat Cacao',
      type: language === 'fr' ? 'Pâtisserie' : 'Pastry',
      offer: language === 'fr' ? 'Avantages partenaires' : 'Partner benefits'
    },
    {
      name: 'Buddy Focus',
      type: language === 'fr' ? 'Boisson énergisante' : 'Energy drink',
      offer: language === 'fr' ? 'Promotions spéciales' : 'Special promotions'
    },
    {
      name: 'Glacier Mouss',
      type: language === 'fr' ? 'Glacier' : 'Ice cream',
      offer: language === 'fr' ? 'Offres exclusives' : 'Exclusive offers'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="font-semibold text-gray-700">Facebook</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            {language === 'fr' ? 'Suivez-nous sur Facebook' : 'Follow us on Facebook'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {language === 'fr' 
              ? 'Rejoignez notre page Facebook pour ne rien manquer de nos actualités, concours et offres exclusives !' 
              : 'Join our Facebook page to not miss any of our news, contests and exclusive offers!'}
          </p>
          
          <a 
            href="https://www.facebook.com/profile.php?id=61568770320095" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            StudyBox
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            {language === 'fr' ? 'Pourquoi nous suivre ?' : 'Why follow us?'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez tous les avantages de notre communauté Facebook' 
              : 'Discover all the benefits of our Facebook community'}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            {language === 'fr' ? 'Offres Partenaires' : 'Partner Offers'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Profitez des offres exclusives de nos partenaires réservées à notre communauté Facebook' 
              : 'Take advantage of exclusive offers from our partners reserved for our Facebook community'}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">{partner.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{partner.type}</p>
                    <p className="text-sm text-blue-600 font-medium">{partner.offer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/partenaires" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              {language === 'fr' ? 'Découvrir tous nos partenaires' : 'Discover all our partners'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Contests Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            {language === 'fr' ? 'Concours sur Instagram' : 'Contests on Instagram'}
          </h2>
          
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-10 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold mb-4 text-black">
              {language === 'fr' ? 'Participez à nos concours Instagram !' : 'Participate in our Instagram contests!'}
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Tous nos concours et jeux pour gagner des StudyBox et des cadeaux partenaires sont organisés sur Instagram. Suivez-nous pour ne rien manquer !' 
                : 'All our contests and games to win StudyBoxes and partner gifts are organized on Instagram. Follow us to not miss anything!'}
            </p>
            <a 
              href="/instagram" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all"
            >
              {language === 'fr' ? 'Voir les concours Instagram' : 'See Instagram contests'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr' ? 'Rejoignez notre communauté' : 'Join our community'}
          </h2>
          <p className="text-xl mb-10 text-white/90">
            {language === 'fr' 
              ? 'Plus de 1000 étudiants nous font déjà confiance !' 
              : 'More than 1000 students already trust us!'}
          </p>
          <a 
            href="https://www.facebook.com/profile.php?id=61568770320095" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {language === 'fr' ? 'Suivre notre page' : 'Follow our page'}
          </a>
        </div>
      </section>
    </div>
  )
}
