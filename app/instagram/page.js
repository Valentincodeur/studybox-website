'use client'

import { useLanguage } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function InstagramPage() {
  const { language } = useLanguage()

  const contests = [
    {
      title: language === 'fr' ? 'Concours mensuel StudyBox' : 'Monthly StudyBox Contest',
      description: language === 'fr' 
        ? 'Gagnez une StudyBox complète chaque mois en participant à nos concours Instagram !' 
        : 'Win a complete StudyBox every month by participating in our Instagram contests!',
      icon: '🎁'
    },
    {
      title: language === 'fr' ? 'Concours partenaires' : 'Partner Contests',
      description: language === 'fr' 
        ? 'Nos partenaires organisent régulièrement des concours pour vous faire gagner des cadeaux exclusifs.' 
        : 'Our partners regularly organize contests to win exclusive gifts.',
      icon: '🎉'
    },
    {
      title: language === 'fr' ? 'Réductions exclusives' : 'Exclusive Discounts',
      description: language === 'fr' 
        ? 'Suivez-nous pour découvrir nos codes promo et offres spéciales en avant-première.' 
        : 'Follow us to discover our promo codes and special offers in preview.',
      icon: '💰'
    }
  ]

  const partners = [
    {
      name: "L'Harmony",
      type: language === 'fr' ? 'Restaurant' : 'Restaurant',
      offer: language === 'fr' ? 'Concours repas gratuits' : 'Free meal contests'
    },
    {
      name: 'Pepe & Ricotta',
      type: language === 'fr' ? 'Traiteur italien' : 'Italian Caterer',
      offer: language === 'fr' ? 'Paniers gourmands à gagner' : 'Gourmet baskets to win'
    },
    {
      name: 'SunRice Poke',
      type: 'Poke bowls',
      offer: language === 'fr' ? 'Bons de réduction' : 'Discount vouchers'
    },
    {
      name: 'Éclat Cacao',
      type: language === 'fr' ? 'Pâtisserie' : 'Pastry',
      offer: language === 'fr' ? 'Dégustations gratuites' : 'Free tastings'
    },
    {
      name: 'Buddy Focus',
      type: language === 'fr' ? 'Boisson énergisante' : 'Energy drink',
      offer: language === 'fr' ? 'Packs découverte' : 'Discovery packs'
    },
    {
      name: 'Glacier Mouss',
      type: language === 'fr' ? 'Glacier' : 'Ice cream',
      offer: language === 'fr' ? 'Glaces offertes' : 'Free ice cream'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-semibold text-gray-700">Instagram</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            {language === 'fr' ? 'Suivez-nous sur Instagram' : 'Follow us on Instagram'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {language === 'fr' 
              ? 'Rejoignez notre communauté et participez à nos concours pour gagner des StudyBox et des cadeaux de nos partenaires !' 
              : 'Join our community and participate in our contests to win StudyBoxes and gifts from our partners!'}
          </p>
          
          <a 
            href="https://www.instagram.com/studybox.lje/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @studybox.lje
          </a>
        </div>
      </section>

      {/* Contests Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            {language === 'fr' ? 'Concours & Cadeaux' : 'Contests & Gifts'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Participez à nos concours réguliers pour tenter de gagner des StudyBox et bien plus encore !' 
              : 'Participate in our regular contests to try to win StudyBoxes and much more!'}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contests.map((contest, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-6xl mb-4">{contest.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{contest.title}</h3>
                <p className="text-gray-600">{contest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            {language === 'fr' ? 'Concours Partenaires' : 'Partner Contests'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Nos partenaires organisent régulièrement des concours exclusifs pour notre communauté Instagram' 
              : 'Our partners regularly organize exclusive contests for our Instagram community'}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">{partner.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{partner.type}</p>
                    <p className="text-sm text-purple-600 font-medium">{partner.offer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/partenaires" 
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:underline"
            >
              {language === 'fr' ? 'Découvrir tous nos partenaires' : 'Discover all our partners'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            {language === 'fr' ? 'Comment participer ?' : 'How to participate?'}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">
                {language === 'fr' ? 'Suivez-nous' : 'Follow us'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr' 
                  ? 'Abonnez-vous à @studybox.be sur Instagram' 
                  : 'Subscribe to @studybox.be on Instagram'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">
                {language === 'fr' ? 'Participez' : 'Participate'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr' 
                  ? 'Likez, commentez et partagez nos posts de concours' 
                  : 'Like, comment and share our contest posts'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">
                {language === 'fr' ? 'Gagnez' : 'Win'}
              </h3>
              <p className="text-gray-600">
                {language === 'fr' 
                  ? 'Les gagnants sont tirés au sort et annoncés sur Instagram' 
                  : 'Winners are drawn and announced on Instagram'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr' ? 'Rejoignez la communauté StudyBox' : 'Join the StudyBox community'}
          </h2>
          <p className="text-xl mb-10 text-white/90">
            {language === 'fr' 
              ? 'Ne manquez aucun concours, suivez-nous dès maintenant !' 
              : 'Don\'t miss any contest, follow us now!'}
          </p>
          <a 
            href="https://www.instagram.com/studybox.lje/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {language === 'fr' ? 'Suivre @studybox.lje' : 'Follow @studybox.lje'}
          </a>
        </div>
      </section>
    </div>
  )
}
