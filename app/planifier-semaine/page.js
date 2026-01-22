'use client'

import { useLanguage } from '../../context/LanguageContext'
import Navbar from '@/components/Navbar'
import AnimatedSection from '../../components/AnimatedSection'
import Link from 'next/link'

export default function PlanifierSemainePage() {
  const { language } = useLanguage()

  const steps = [
    {
      number: 1,
      title: language === 'fr' ? 'Faire le bilan de la semaine précédente' : 'Review the previous week',
      description: language === 'fr'
        ? 'Prenez 10 minutes pour analyser ce qui a fonctionné et ce qui doit être amélioré. Identifiez vos réussites et vos difficultés.'
        : 'Take 10 minutes to analyze what worked and what needs improvement. Identify your successes and difficulties.',
      tips: [
        language === 'fr' ? 'Notez vos accomplissements' : 'Note your accomplishments',
        language === 'fr' ? 'Identifiez les obstacles rencontrés' : 'Identify obstacles encountered',
        language === 'fr' ? 'Ajustez votre approche si nécessaire' : 'Adjust your approach if necessary'
      ]
    },
    {
      number: 2,
      title: language === 'fr' ? 'Lister toutes vos tâches et obligations' : 'List all your tasks and obligations',
      description: language === 'fr'
        ? 'Rassemblez tous vos cours, devoirs, examens, projets et activités extra-scolaires dans une liste complète.'
        : 'Gather all your classes, homework, exams, projects and extracurricular activities in a complete list.',
      tips: [
        language === 'fr' ? 'Vérifiez vos syllabus et agendas' : 'Check your syllabi and calendars',
        language === 'fr' ? 'Notez les deadlines importantes' : 'Note important deadlines',
        language === 'fr' ? 'N\'oubliez pas les activités personnelles' : 'Don\'t forget personal activities'
      ]
    },
    {
      number: 3,
      title: language === 'fr' ? 'Prioriser avec la matrice d\'Eisenhower' : 'Prioritize with Eisenhower Matrix',
      description: language === 'fr'
        ? 'Classez vos tâches selon leur urgence et importance : Urgent & Important, Important mais pas urgent, Urgent mais pas important, Ni urgent ni important.'
        : 'Classify your tasks by urgency and importance: Urgent & Important, Important but not urgent, Urgent but not important, Neither urgent nor important.',
      tips: [
        language === 'fr' ? 'Concentrez-vous sur l\'important' : 'Focus on what\'s important',
        language === 'fr' ? 'Planifiez les tâches importantes non urgentes' : 'Schedule important non-urgent tasks',
        language === 'fr' ? 'Déléguez ou éliminez le reste' : 'Delegate or eliminate the rest'
      ]
    },
    {
      number: 4,
      title: language === 'fr' ? 'Bloquer des créneaux horaires' : 'Block time slots',
      description: language === 'fr'
        ? 'Assignez des blocs de temps spécifiques pour chaque tâche. Soyez réaliste sur le temps nécessaire et incluez des pauses.'
        : 'Assign specific time blocks for each task. Be realistic about time needed and include breaks.',
      tips: [
        language === 'fr' ? 'Utilisez la technique Pomodoro (25min + 5min pause)' : 'Use Pomodoro technique (25min + 5min break)',
        language === 'fr' ? 'Planifiez les tâches difficiles quand vous êtes le plus alerte' : 'Schedule difficult tasks when most alert',
        language === 'fr' ? 'Laissez du temps tampon entre les activités' : 'Leave buffer time between activities'
      ]
    },
    {
      number: 5,
      title: language === 'fr' ? 'Prévoir du temps pour l\'imprévu' : 'Plan for the unexpected',
      description: language === 'fr'
        ? 'Réservez 20-30% de votre temps pour les imprévus, les urgences ou les tâches qui prennent plus de temps que prévu.'
        : 'Reserve 20-30% of your time for unexpected events, emergencies or tasks that take longer than expected.',
      tips: [
        language === 'fr' ? 'Ne surchargez pas votre planning' : 'Don\'t overload your schedule',
        language === 'fr' ? 'Gardez des créneaux flexibles' : 'Keep flexible time slots',
        language === 'fr' ? 'Acceptez que tout ne se passe pas comme prévu' : 'Accept that everything won\'t go as planned'
      ]
    },
    {
      number: 6,
      title: language === 'fr' ? 'Équilibrer travail et repos' : 'Balance work and rest',
      description: language === 'fr'
        ? 'Incluez du temps pour vous détendre, faire du sport, voir vos amis et dormir suffisamment (7-9h par nuit).'
        : 'Include time to relax, exercise, see friends and get enough sleep (7-9h per night).',
      tips: [
        language === 'fr' ? 'Le repos fait partie de la productivité' : 'Rest is part of productivity',
        language === 'fr' ? 'Planifiez des activités plaisantes' : 'Schedule enjoyable activities',
        language === 'fr' ? 'Respectez vos heures de sommeil' : 'Respect your sleep hours'
      ]
    },
    {
      number: 7,
      title: language === 'fr' ? 'Utiliser les bons outils' : 'Use the right tools',
      description: language === 'fr'
        ? 'Choisissez un système qui vous convient : agenda papier, application mobile, calendrier numérique ou tableau.'
        : 'Choose a system that suits you: paper planner, mobile app, digital calendar or board.',
      tips: [
        language === 'fr' ? 'Google Calendar ou Notion pour le numérique' : 'Google Calendar or Notion for digital',
        language === 'fr' ? 'Bullet Journal pour le papier' : 'Bullet Journal for paper',
        language === 'fr' ? 'L\'application StudyBox pour tout centraliser' : 'StudyBox app to centralize everything'
      ]
    },
    {
      number: 8,
      title: language === 'fr' ? 'Réviser et ajuster quotidiennement' : 'Review and adjust daily',
      description: language === 'fr'
        ? 'Chaque soir, prenez 5 minutes pour vérifier votre planning du lendemain et ajuster si nécessaire.'
        : 'Each evening, take 5 minutes to check tomorrow\'s schedule and adjust if necessary.',
      tips: [
        language === 'fr' ? 'Préparez vos affaires la veille' : 'Prepare your things the night before',
        language === 'fr' ? 'Visualisez votre journée' : 'Visualize your day',
        language === 'fr' ? 'Restez flexible et adaptable' : 'Stay flexible and adaptable'
      ]
    }
  ]

  const tools = [
    {
      name: 'Google Calendar',
      description: language === 'fr' ? 'Synchronisation multi-appareils, rappels automatiques' : 'Multi-device sync, automatic reminders',
      icon: '📅'
    },
    {
      name: 'Notion',
      description: language === 'fr' ? 'Tout-en-un : notes, tâches, calendrier' : 'All-in-one: notes, tasks, calendar',
      icon: '📝'
    },
    {
      name: 'Trello',
      description: language === 'fr' ? 'Organisation visuelle par tableaux' : 'Visual organization by boards',
      icon: '📊'
    },
    {
      name: 'StudyBox App',
      description: language === 'fr' ? 'Spécialement conçu pour les étudiants' : 'Specially designed for students',
      icon: '📱'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-600 to-purple-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-blue-400/30" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-block bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-purple-200 font-semibold text-sm uppercase tracking-wide">Organisation</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Planifier sa Semaine Efficacement' : 'Plan Your Week Effectively'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr'
                ? 'Apprenez à organiser votre temps pour maximiser votre productivité sans stress'
                : 'Learn to organize your time to maximize your productivity without stress'}
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
                ? 'Une bonne planification hebdomadaire est la clé pour réussir ses études tout en gardant un équilibre de vie. Voici une méthode complète en 8 étapes pour organiser votre semaine de manière efficace et réaliste.'
                : 'Good weekly planning is the key to succeeding in your studies while maintaining a life balance. Here is a complete 8-step method to organize your week effectively and realistically.'}
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="text-purple-900 font-semibold">
                💡 {language === 'fr' ? 'Conseil :' : 'Tip:'} {language === 'fr' ? 'Planifiez votre semaine le dimanche soir pour commencer du bon pied.' : 'Plan your week on Sunday evening to start off right.'}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">
                          ✓ {language === 'fr' ? 'Points clés :' : 'Key points:'}
                        </p>
                        <ul className="space-y-2">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="text-gray-700 flex items-start">
                              <span className="text-purple-600 mr-2">•</span>
                              {tip}
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

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-12">
              {language === 'fr' ? 'Outils Recommandés' : 'Recommended Tools'}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <AnimatedSection key={tool.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{tool.icon}</span>
                    <h3 className="text-xl font-bold text-black">{tool.name}</h3>
                  </div>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'fr' ? 'Prêt à Mieux Organiser Votre Semaine ?' : 'Ready to Better Organize Your Week?'}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {language === 'fr'
                ? 'Découvrez StudyBox, la solution complète pour les étudiants organisés'
                : 'Discover StudyBox, the complete solution for organized students'}
            </p>
            <Link href="/offres" className="inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
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
