'use client'

import { useLanguage } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function TikTokPage() {
  const { language } = useLanguage()

  const content = [
    {
      title: language === 'fr' ? 'Conseils d\'étude' : 'Study Tips',
      description: language === 'fr' 
        ? 'Des astuces rapides et efficaces pour mieux étudier' 
        : 'Quick and effective tips to study better',
      icon: '📚'
    },
    {
      title: language === 'fr' ? 'Challenges créatifs' : 'Creative Challenges',
      description: language === 'fr' 
        ? 'Participez à nos challenges TikTok et partagez vos vidéos' 
        : 'Participate in our TikTok challenges and share your videos',
      icon: '⚡'
    },
    {
      title: language === 'fr' ? 'Vie étudiante' : 'Student Life',
      description: language === 'fr' 
        ? 'Suivez le quotidien de la communauté StudyBox' 
        : 'Follow the daily life of the StudyBox community',
      icon: '🎓'
    }
  ]

  const challenges = [
    {
      title: language === 'fr' ? '#StudyBoxChallenge' : '#StudyBoxChallenge',
      description: language === 'fr' 
        ? 'Montrez-nous votre espace de travail avec votre StudyBox' 
        : 'Show us your workspace with your StudyBox',
      prize: language === 'fr' ? 'Rejoignez la communauté' : 'Join the community'
    },
    {
      title: language === 'fr' ? '#StudyWithMe' : '#StudyWithMe',
      description: language === 'fr' 
        ? 'Partagez vos sessions d\'étude avec la communauté' 
        : 'Share your study sessions with the community',
      prize: language === 'fr' ? 'Inspirez les autres' : 'Inspire others'
    },
    {
      title: language === 'fr' ? '#StudyTips' : '#StudyTips',
      description: language === 'fr' 
        ? 'Partagez vos meilleures astuces pour réussir' 
        : 'Share your best tips for success',
      prize: language === 'fr' ? 'Partagez vos astuces' : 'Share your tips'
    }
  ]

  const partners = [
    {
      name: "L'Harmony",
      offer: language === 'fr' ? 'Réductions exclusives' : 'Exclusive discounts'
    },
    {
      name: 'Pepe & Ricotta',
      offer: language === 'fr' ? 'Offres spéciales' : 'Special offers'
    },
    {
      name: 'SunRice Poke',
      offer: language === 'fr' ? 'Promotions' : 'Promotions'
    },
    {
      name: 'Éclat Cacao',
      offer: language === 'fr' ? 'Avantages membres' : 'Member benefits'
    },
    {
      name: 'Buddy Focus',
      offer: language === 'fr' ? 'Offres exclusives' : 'Exclusive offers'
    },
    {
      name: 'Glacier Mouss',
      offer: language === 'fr' ? 'Réductions' : 'Discounts'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="font-semibold">TikTok</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {language === 'fr' ? 'Suivez-nous sur TikTok' : 'Follow us on TikTok'}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            {language === 'fr' 
              ? 'Rejoignez notre communauté TikTok pour des contenus exclusifs, des challenges et des concours !' 
              : 'Join our TikTok community for exclusive content, challenges and contests!'}
          </p>
          
          <a 
            href="https://www.tiktok.com/@studybox.be" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            @studybox.be
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            {language === 'fr' ? 'Notre contenu' : 'Our Content'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez ce que nous partageons sur TikTok' 
              : 'Discover what we share on TikTok'}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            {language === 'fr' ? 'Challenges en cours' : 'Current Challenges'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Participez à nos challenges TikTok et gagnez des cadeaux !' 
              : 'Participate in our TikTok challenges and win gifts!'}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4 mb-4">
                  <h3 className="font-bold text-xl mb-2">{challenge.title}</h3>
                  <p className="text-sm text-white/90">{challenge.description}</p>
                </div>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <span className="text-2xl">🎁</span>
                  <span>{challenge.prize}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-black">
            {language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez les offres exclusives de nos partenaires' 
              : 'Discover exclusive offers from our partners'}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="font-bold text-lg text-black mb-2">{partner.name}</h3>
                <p className="text-purple-600 font-medium">{partner.offer}</p>
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

      {/* Instagram Contests */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            {language === 'fr' ? 'Concours sur Instagram' : 'Contests on Instagram'}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Tous nos concours pour gagner des StudyBox et des cadeaux partenaires sont organisés sur Instagram !' 
              : 'All our contests to win StudyBoxes and partner gifts are organized on Instagram!'}
          </p>
          <a 
            href="/instagram" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {language === 'fr' ? 'Voir les concours Instagram' : 'See Instagram contests'}
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr' ? 'Rejoignez la StudyBox Family' : 'Join the StudyBox Family'}
          </h2>
          <p className="text-xl mb-10 text-white/90">
            {language === 'fr' 
              ? 'Des milliers d\'étudiants nous suivent déjà sur TikTok !' 
              : 'Thousands of students already follow us on TikTok!'}
          </p>
          <a 
            href="https://www.tiktok.com/@studybox.be" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-200 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            {language === 'fr' ? 'Suivre @studybox.be' : 'Follow @studybox.be'}
          </a>
        </div>
      </section>
    </div>
  )
}
