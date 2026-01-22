'use client'

import { useLanguage } from '../../context/LanguageContext'
import Navbar from '@/components/Navbar'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'

export default function EquilibrerEtudesVieSocialePage() {
  const { language } = useLanguage()

  const tips = [
    {
      number: 1,
      title: language === 'fr' ? 'Définir ses priorités clairement' : 'Define your priorities clearly',
      description: language === 'fr'
        ? 'Identifiez ce qui compte vraiment pour vous : vos objectifs académiques, vos relations, vos passions. Un bon équilibre commence par savoir ce qui est important.'
        : 'Identify what really matters to you: your academic goals, relationships, passions. Good balance starts with knowing what\'s important.',
      tips: [
        language === 'fr' ? 'Listez vos 3-5 priorités principales' : 'List your 3-5 main priorities',
        language === 'fr' ? 'Soyez honnête avec vous-même' : 'Be honest with yourself',
        language === 'fr' ? 'Réévaluez régulièrement vos priorités' : 'Regularly reassess your priorities'
      ]
    },
    {
      number: 2,
      title: language === 'fr' ? 'Planifier du temps social fixe' : 'Schedule fixed social time',
      description: language === 'fr'
        ? 'Bloquez des créneaux dédiés à votre vie sociale dans votre agenda, comme vous le feriez pour un cours important. Cela garantit que vous ne négligez pas vos relations.'
        : 'Block dedicated slots for your social life in your calendar, as you would for an important class. This ensures you don\'t neglect your relationships.',
      tips: [
        language === 'fr' ? 'Réservez au moins 2-3 soirées par semaine' : 'Reserve at least 2-3 evenings per week',
        language === 'fr' ? 'Planifiez des activités avec vos amis' : 'Plan activities with friends',
        language === 'fr' ? 'Respectez ces moments comme des engagements' : 'Respect these moments as commitments'
      ]
    },
    {
      number: 3,
      title: language === 'fr' ? 'Apprendre à dire non' : 'Learn to say no',
      description: language === 'fr'
        ? 'Vous ne pouvez pas tout faire. Apprenez à refuser poliment les invitations ou activités qui ne correspondent pas à vos priorités ou qui surchargeraient votre emploi du temps.'
        : 'You can\'t do everything. Learn to politely decline invitations or activities that don\'t align with your priorities or would overload your schedule.',
      tips: [
        language === 'fr' ? 'Soyez sélectif dans vos engagements' : 'Be selective in your commitments',
        language === 'fr' ? 'Expliquez vos contraintes sans culpabiliser' : 'Explain your constraints without guilt',
        language === 'fr' ? 'Proposez des alternatives quand possible' : 'Suggest alternatives when possible'
      ]
    },
    {
      number: 4,
      title: language === 'fr' ? 'Combiner études et vie sociale' : 'Combine studies and social life',
      description: language === 'fr'
        ? 'Créez des groupes d\'étude avec vos amis, travaillez ensemble à la bibliothèque, ou révisez dans un café. Vous pouvez être productif tout en restant social.'
        : 'Create study groups with friends, work together at the library, or review in a café. You can be productive while staying social.',
      tips: [
        language === 'fr' ? 'Organisez des sessions d\'étude en groupe' : 'Organize group study sessions',
        language === 'fr' ? 'Faites des pauses ensemble' : 'Take breaks together',
        language === 'fr' ? 'Partagez vos notes et ressources' : 'Share your notes and resources'
      ]
    },
    {
      number: 5,
      title: language === 'fr' ? 'Optimiser son temps d\'étude' : 'Optimize your study time',
      description: language === 'fr'
        ? 'Travaillez plus intelligemment, pas plus longtemps. Utilisez des techniques efficaces comme la méthode Pomodoro pour libérer du temps pour votre vie sociale.'
        : 'Work smarter, not longer. Use effective techniques like the Pomodoro method to free up time for your social life.',
      tips: [
        language === 'fr' ? 'Éliminez les distractions pendant l\'étude' : 'Eliminate distractions while studying',
        language === 'fr' ? 'Utilisez des techniques de mémorisation efficaces' : 'Use effective memorization techniques',
        language === 'fr' ? 'Profitez des temps morts (transports, pauses)' : 'Take advantage of downtime (transport, breaks)'
      ]
    },
    {
      number: 6,
      title: language === 'fr' ? 'Maintenir une routine équilibrée' : 'Maintain a balanced routine',
      description: language === 'fr'
        ? 'Établissez une routine qui inclut du temps pour étudier, socialiser, faire du sport et vous reposer. La régularité aide à maintenir l\'équilibre sur le long terme.'
        : 'Establish a routine that includes time to study, socialize, exercise and rest. Regularity helps maintain balance in the long term.',
      tips: [
        language === 'fr' ? 'Dormez 7-9 heures par nuit' : 'Sleep 7-9 hours per night',
        language === 'fr' ? 'Pratiquez une activité physique régulière' : 'Practice regular physical activity',
        language === 'fr' ? 'Gardez du temps pour vos hobbies' : 'Keep time for your hobbies'
      ]
    },
    {
      number: 7,
      title: language === 'fr' ? 'Communiquer avec son entourage' : 'Communicate with those around you',
      description: language === 'fr'
        ? 'Expliquez à vos amis et famille vos contraintes académiques. Une bonne communication évite les malentendus et permet à vos proches de vous soutenir.'
        : 'Explain your academic constraints to friends and family. Good communication avoids misunderstandings and allows loved ones to support you.',
      tips: [
        language === 'fr' ? 'Partagez votre emploi du temps' : 'Share your schedule',
        language === 'fr' ? 'Prévenez en avance de vos périodes chargées' : 'Warn in advance of busy periods',
        language === 'fr' ? 'Demandez du soutien quand nécessaire' : 'Ask for support when needed'
      ]
    },
    {
      number: 8,
      title: language === 'fr' ? 'Accepter l\'imperfection' : 'Accept imperfection',
      description: language === 'fr'
        ? 'L\'équilibre parfait n\'existe pas. Certaines semaines seront plus chargées académiquement, d\'autres plus sociales. L\'important est de trouver un équilibre global qui vous convient.'
        : 'Perfect balance doesn\'t exist. Some weeks will be more academically busy, others more social. The important thing is to find an overall balance that suits you.',
      tips: [
        language === 'fr' ? 'Soyez flexible et adaptable' : 'Be flexible and adaptable',
        language === 'fr' ? 'Ne culpabilisez pas pour les écarts' : 'Don\'t feel guilty about deviations',
        language === 'fr' ? 'Ajustez en fonction des périodes' : 'Adjust according to periods'
      ]
    }
  ]

  const benefits = [
    {
      title: language === 'fr' ? 'Meilleure santé mentale' : 'Better mental health',
      description: language === 'fr' ? 'Réduire le stress et l\'anxiété grâce à un équilibre sain' : 'Reduce stress and anxiety through healthy balance',
      icon: '🧠'
    },
    {
      title: language === 'fr' ? 'Meilleures performances' : 'Better performance',
      description: language === 'fr' ? 'Des études montrent que les étudiants équilibrés réussissent mieux' : 'Studies show balanced students perform better',
      icon: '📈'
    },
    {
      title: language === 'fr' ? 'Relations enrichissantes' : 'Enriching relationships',
      description: language === 'fr' ? 'Maintenir des amitiés solides et un réseau social fort' : 'Maintain strong friendships and a strong social network',
      icon: '❤️'
    },
    {
      title: language === 'fr' ? 'Développement personnel' : 'Personal development',
      description: language === 'fr' ? 'Grandir sur tous les plans, pas seulement académiquement' : 'Grow in all areas, not just academically',
      icon: '🌱'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-500 to-green-700 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-emerald-400/30 to-teal-400/30" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-green-100 font-semibold text-sm uppercase tracking-wide">Vie Étudiante</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Équilibrer Études et Vie Sociale' : 'Balance Studies and Social Life'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr'
                ? 'Conseils pour maintenir un bon équilibre entre vos études et votre vie personnelle'
                : 'Tips to maintain a good balance between your studies and personal life'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {language === 'fr'
                ? 'Trouver le bon équilibre entre études et vie sociale est l\'un des plus grands défis de la vie étudiante. Trop d\'études peut mener au burn-out, tandis que trop de vie sociale peut compromettre vos résultats. Voici comment trouver le juste milieu.'
                : 'Finding the right balance between studies and social life is one of the biggest challenges of student life. Too much studying can lead to burnout, while too much socializing can compromise your results. Here\'s how to find the right balance.'}
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-green-900 font-semibold">
                💡 {language === 'fr' ? 'Conseil :' : 'Tip:'} {language === 'fr' ? 'L\'équilibre parfait est différent pour chacun. Trouvez ce qui fonctionne pour vous !' : 'The perfect balance is different for everyone. Find what works for you!'}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            {tips.map((tip, index) => (
              <AnimatedSection key={tip.number} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {tip.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black mb-3">
                        {tip.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {tip.description}
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">
                          ✓ {language === 'fr' ? 'Points clés :' : 'Key points:'}
                        </p>
                        <ul className="space-y-2">
                          {tip.tips.map((t, i) => (
                            <li key={i} className="text-gray-700 flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-12">
              {language === 'fr' ? 'Les Bénéfices d\'un Bon Équilibre' : 'Benefits of Good Balance'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{benefit.icon}</span>
                    <h3 className="text-xl font-bold text-black">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-green-500 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'fr' ? 'Prêt à Mieux Équilibrer Votre Vie ?' : 'Ready to Better Balance Your Life?'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'fr'
                ? 'Découvrez StudyBox, la solution complète pour gérer vos études et votre vie sociale'
                : 'Discover StudyBox, the complete solution to manage your studies and social life'}
            </p>
            <Link href="/offres" className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
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
