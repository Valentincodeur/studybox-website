'use client'

import { useLanguage } from '../../context/LanguageContext'
import Navbar from '@/components/Navbar'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'

export default function TechniquesEtudePage() {
  const { language } = useLanguage()

  const techniques = [
    {
      id: 1,
      title: language === 'fr' ? 'Technique Pomodoro' : 'Pomodoro Technique',
      description: language === 'fr'
        ? 'Étudiez par sessions de 25 minutes avec des pauses de 5 minutes. Après 4 sessions, prenez une pause plus longue de 15-30 minutes.'
        : 'Study in 25-minute sessions with 5-minute breaks. After 4 sessions, take a longer 15-30 minute break.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Améliore la concentration et réduit la fatigue' : 'Improves focus and reduces fatigue'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Méthode Cornell' : 'Cornell Method',
      description: language === 'fr'
        ? 'Divisez votre page en 3 sections : notes principales, mots-clés à gauche, résumé en bas. Idéal pour réviser efficacement.'
        : 'Divide your page into 3 sections: main notes, keywords on the left, summary at the bottom. Ideal for effective review.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Structure vos notes pour une révision optimale' : 'Structures your notes for optimal review'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Technique du Canard en Caoutchouc' : 'Rubber Duck Technique',
      description: language === 'fr'
        ? 'Expliquez votre cours à voix haute à un objet (canard, peluche). Si vous bloquez, c\'est que vous devez approfondir ce point.'
        : 'Explain your lesson out loud to an object (duck, stuffed animal). If you get stuck, you need to deepen that point.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Identifie rapidement vos lacunes de compréhension' : 'Quickly identifies your comprehension gaps'
    },
    {
      id: 4,
      title: language === 'fr' ? 'Apprentissage par l\'Enseignement' : 'Learning by Teaching',
      description: language === 'fr'
        ? 'Créez un groupe d\'étude et enseignez à tour de rôle. Enseigner force à structurer et clarifier ses connaissances.'
        : 'Create a study group and take turns teaching. Teaching forces you to structure and clarify your knowledge.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Renforce la maîtrise et révèle les zones floues' : 'Strengthens mastery and reveals unclear areas'
    },
    {
      id: 5,
      title: language === 'fr' ? 'Technique des Flashcards' : 'Flashcards Technique',
      description: language === 'fr'
        ? 'Créez des cartes question-réponse. Révisez régulièrement en mélangeant les cartes. Séparez celles maîtrisées des autres.'
        : 'Create question-answer cards. Review regularly by shuffling cards. Separate mastered ones from others.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Mémorisation active et rapide' : 'Active and fast memorization'
    },
    {
      id: 6,
      title: language === 'fr' ? 'Palais de Mémoire' : 'Memory Palace',
      description: language === 'fr'
        ? 'Visualisez un lieu familier et placez-y mentalement les informations à retenir. Parcourez ce lieu pour vous souvenir.'
        : 'Visualize a familiar place and mentally place information to remember there. Walk through this place to remember.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Technique de mémorisation très puissante' : 'Very powerful memorization technique'
    },
    {
      id: 7,
      title: language === 'fr' ? 'Méthode des Questions' : 'Question Method',
      description: language === 'fr'
        ? 'Transformez chaque titre et sous-titre en question avant de lire. Lisez ensuite pour trouver les réponses.'
        : 'Transform each title and subtitle into a question before reading. Then read to find the answers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Rend la lecture plus active et ciblée' : 'Makes reading more active and targeted'
    },
    {
      id: 8,
      title: language === 'fr' ? 'Technique du Résumé Progressif' : 'Progressive Summary Technique',
      description: language === 'fr'
        ? 'Après chaque section, résumez en 3-5 phrases. À la fin du chapitre, résumez tout en un paragraphe.'
        : 'After each section, summarize in 3-5 sentences. At the end of the chapter, summarize everything in one paragraph.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Force la synthèse et la compréhension profonde' : 'Forces synthesis and deep understanding'
    },
    {
      id: 9,
      title: language === 'fr' ? 'Étude en Mouvement' : 'Study in Motion',
      description: language === 'fr'
        ? 'Marchez en révisant vos notes ou écoutez vos cours enregistrés. Le mouvement stimule le cerveau et la mémoire.'
        : 'Walk while reviewing your notes or listen to your recorded lessons. Movement stimulates the brain and memory.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Combine activité physique et apprentissage' : 'Combines physical activity and learning'
    },
    {
      id: 10,
      title: language === 'fr' ? 'Technique des Analogies' : 'Analogy Technique',
      description: language === 'fr'
        ? 'Reliez les nouveaux concepts à des situations familières. Créez des comparaisons et métaphores pour mieux comprendre.'
        : 'Connect new concepts to familiar situations. Create comparisons and metaphors for better understanding.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      benefit: language === 'fr' ? 'Facilite la compréhension de concepts abstraits' : 'Facilitates understanding of abstract concepts'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? '10 Techniques pour Mieux Étudier' : '10 Techniques to Study Better'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr'
                ? 'Découvrez les méthodes scientifiquement prouvées pour améliorer votre apprentissage'
                : 'Discover scientifically proven methods to improve your learning'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'fr'
                ? 'Ces techniques ont été sélectionnées pour leur efficacité prouvée par la recherche en neuroscience et en psychologie cognitive. Expérimentez-les et trouvez celles qui fonctionnent le mieux pour vous !'
                : 'These techniques have been selected for their proven effectiveness by neuroscience and cognitive psychology research. Experiment with them and find what works best for you!'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Techniques Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <AnimatedSection key={technique.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-studybox-blue/10 rounded-lg flex items-center justify-center text-studybox-blue">
                      {technique.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {technique.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {technique.description}
                      </p>
                      <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                        <p className="text-sm font-semibold text-green-800">
                          ✓ {technique.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-studybox-blue to-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'fr' ? 'Prêt à Optimiser Votre Apprentissage ?' : 'Ready to Optimize Your Learning?'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'fr'
                ? 'Découvrez comment StudyBox peut vous aider à mettre en pratique ces techniques'
                : 'Discover how StudyBox can help you implement these techniques'}
            </p>
            <Link href="/offres" className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {language === 'fr' ? 'Découvrir StudyBox' : 'Discover StudyBox'}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
