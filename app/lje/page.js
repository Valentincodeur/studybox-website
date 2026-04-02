'use client'

import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'
import Image from 'next/image'

export default function LJEPage() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="mb-8">
              <Image 
                src="/images/logo-lje.png" 
                alt="Logo LJE" 
                width={200} 
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {language === 'fr' ? 'Les Jeunes Entrepreneurs' : 'Young Entrepreneurs'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'StudyBox est une mini-entreprise' 
                : 'StudyBox is a mini-company'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Qu'est-ce que LJE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Qu\'est-ce que LJE ?' : 'What is LJE?'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Un programme éducatif qui forme les entrepreneurs de demain' 
                : 'An educational program that trains tomorrow\'s entrepreneurs'}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'fr'
                    ? 'Les Jeunes Entrepreneurs (LJE) est un programme pédagogique qui permet aux étudiants de créer et gérer une véritable mini-entreprise pendant une année scolaire.'
                    : 'Young Entrepreneurs (LJE) is an educational program that allows students to create and manage a real mini-company during a school year.'}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'fr'
                    ? 'C\'est dans ce cadre que StudyBox a vu le jour en 2025. Trois étudiants motivés ont décidé de créer une solution concrète pour aider les étudiants à mieux s\'organiser et réussir leurs études.'
                    : 'It was in this context that StudyBox was born in 2025. Three motivated students decided to create a concrete solution to help students better organize themselves and succeed in their studies.'}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {language === 'fr'
                    ? 'Aujourd\'hui, StudyBox n\'est plus seulement une box physique : c\'est un écosystème digital combinant une application mobile innovante et des partenariats locaux pour accompagner les étudiants dans leur réussite académique.'
                    : 'Today, StudyBox is no longer just a physical box: it\'s a digital ecosystem combining an innovative mobile app and local partnerships to support students in their academic success.'}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-studybox-blue to-blue-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  {language === 'fr' ? 'Les objectifs de LJE' : 'LJE\'s objectives'}
                </h3>
                <ul className="space-y-4">
                  {[
                    language === 'fr' ? 'Développer l\'esprit entrepreneurial' : 'Develop entrepreneurial spirit',
                    language === 'fr' ? 'Apprendre la gestion d\'entreprise' : 'Learn business management',
                    language === 'fr' ? 'Travailler en équipe sur un projet concret' : 'Work as a team on a concrete project',
                    language === 'fr' ? 'Créer de la valeur pour la communauté' : 'Create value for the community',
                    language === 'fr' ? 'Acquérir des compétences professionnelles' : 'Acquire professional skills'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Le programme */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Le programme LJE' : 'The LJE program'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Une année pour apprendre l\'entrepreneuriat en pratique' 
                : 'One year to learn entrepreneurship in practice'}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: language === 'fr' ? 'Phase 1' : 'Phase 1',
                title: language === 'fr' ? 'Création' : 'Creation',
                description: language === 'fr' 
                  ? 'Formation de l\'équipe, brainstorming d\'idées, étude de marché et création du business plan.'
                  : 'Team formation, idea brainstorming, market study and business plan creation.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                phase: language === 'fr' ? 'Phase 2' : 'Phase 2',
                title: language === 'fr' ? 'Développement' : 'Development',
                description: language === 'fr' 
                  ? 'Lancement du produit, gestion des ventes, marketing et communication, suivi financier.'
                  : 'Product launch, sales management, marketing and communication, financial tracking.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                phase: language === 'fr' ? 'Phase 3' : 'Phase 3',
                title: language === 'fr' ? 'Clôture' : 'Closure',
                description: language === 'fr' 
                  ? 'Bilan de l\'année, liquidation de la mini-entreprise, présentation des résultats et apprentissages.'
                  : 'Year review, mini-company liquidation, presentation of results and learnings.',
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )
              }
            ].map((phase, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mb-6 text-studybox-blue">
                    {phase.icon}
                  </div>
                  <div className="text-sm font-bold text-studybox-blue mb-2">{phase.phase}</div>
                  <h3 className="text-2xl font-bold text-black mb-4">{phase.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences acquises */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Compétences acquises' : 'Skills acquired'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Une expérience formatrice pour le futur professionnel' 
                : 'A formative experience for the professional future'}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: language === 'fr' ? 'Gestion' : 'Management',
                skills: [
                  language === 'fr' ? 'Comptabilité' : 'Accounting',
                  language === 'fr' ? 'Finance' : 'Finance',
                  language === 'fr' ? 'Budget' : 'Budget',
                  language === 'fr' ? 'Ressources' : 'Resources'
                ]
              },
              {
                title: language === 'fr' ? 'Marketing' : 'Marketing',
                skills: [
                  language === 'fr' ? 'Communication' : 'Communication',
                  language === 'fr' ? 'Réseaux sociaux' : 'Social media',
                  language === 'fr' ? 'Branding' : 'Branding',
                  language === 'fr' ? 'Vente' : 'Sales'
                ]
              },
              {
                title: language === 'fr' ? 'Travail d\'équipe' : 'Teamwork',
                skills: [
                  language === 'fr' ? 'Collaboration' : 'Collaboration',
                  language === 'fr' ? 'Leadership' : 'Leadership',
                  language === 'fr' ? 'Délégation' : 'Delegation',
                  language === 'fr' ? 'Coordination' : 'Coordination'
                ]
              },
              {
                title: language === 'fr' ? 'Soft skills' : 'Soft skills',
                skills: [
                  language === 'fr' ? 'Créativité' : 'Creativity',
                  language === 'fr' ? 'Résolution problèmes' : 'Problem solving',
                  language === 'fr' ? 'Adaptabilité' : 'Adaptability',
                  language === 'fr' ? 'Prise de décision' : 'Decision making'
                ]
              }
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-black mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-studybox-blue rounded-full"></div>
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe StudyBox */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'L\'équipe StudyBox' : 'The StudyBox team'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Trois étudiants entrepreneurs passionnés' 
                : 'Three passionate student entrepreneurs'}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Timéo',
                role: language === 'fr' ? 'Co-fondateur' : 'Co-founder',
                description: language === 'fr' 
                  ? 'Passionné par l\'entrepreneuriat et l\'innovation au service des étudiants.'
                  : 'Passionate about entrepreneurship and innovation for students.'
              },
              {
                name: 'Nathan',
                role: language === 'fr' ? 'Co-fondateur' : 'Co-founder',
                description: language === 'fr' 
                  ? 'Engagé pour créer des solutions pratiques qui facilitent le quotidien étudiant.'
                  : 'Committed to creating practical solutions that make student life easier.'
              },
              {
                name: 'Valentin',
                role: language === 'fr' ? 'Co-fondateur' : 'Co-founder',
                description: language === 'fr' 
                  ? 'Déterminé à accompagner chaque étudiant vers la réussite académique.'
                  : 'Determined to support every student towards academic success.'
              }
            ].map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-studybox-blue to-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name[0]}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                  <div className="text-studybox-blue font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-600 font-light">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-studybox-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Intéressé par LJE ?' : 'Interested in LJE?'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Découvrez comment rejoindre le programme Les Jeunes Entrepreneurs' 
                : 'Discover how to join the Young Entrepreneurs program'}
            </p>
            <a 
              href="https://www.lje.be" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              {language === 'fr' ? 'Visiter le site LJE' : 'Visit LJE website'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
