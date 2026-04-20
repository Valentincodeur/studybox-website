'use client'

import AnimatedSection from '@/components/AnimatedSection'
import Navbar from '@/components/Navbar'

export default function AProposPage() {
  const team = [
    {
      name: 'Nathan',
      role: 'Directeur Marketing',
      description: 'Spécialiste en communication et stratégie digitale. Il développe la visibilité de StudyBox et crée des campagnes engageantes pour toucher les étudiants.',
      photo: '/images/nathanbg.png'
    },
    {
      name: 'Valentin',
      role: 'CIO de l\'entreprise',
      description: 'Visionnaire et leader stratégique. Il coordonne l\'ensemble des opérations de l\'entreprise et assure l\'alignement de l\'équipe avec la mission de StudyBox.',
      photo: '/images/valentinbg.png'
    },
    {
      name: 'Timéo',
      role: 'Directeur financier',
      description: 'Expert en gestion financière et budgétisation. Il veille à la santé économique de StudyBox et optimise les investissements pour garantir la pérennité du projet.',
      photo: '/images/timeobg.png'
    },
    {
      name: 'François',
      role: 'Coach LJE',
      description: 'Coach expert en entrepreneuriat qui guide l\'équipe dans l\'aventure de la mini-entreprise. Il apporte son expérience et son savoir-faire pour accompagner les jeunes entrepreneurs.',
      photo: '/images/PhotoFrançois.jpg'
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-studybox-blue to-studybox-blue/90">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            À propos
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Trois étudiants, une mission : révolutionner l'expérience étudiante.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section id="histoire" className="py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-black tracking-tight">
                  Notre histoire
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  <p>
                    StudyBox est née d'un constat simple : les étudiants doivent apprendre énormément de matière, mais on ne leur explique presque jamais comment bien étudier. En tant qu'étudiants, nous avons nous-mêmes été confrontés à ce manque de méthodes et d'organisation.
                  </p>
                  <p>
                    C'est en 2025, dans le cadre d'une mini-entreprise (LJE), que l'idée a vu le jour. Trois étudiants motivés ont décidé de créer une solution concrète pour aider les étudiants à mieux apprendre et mieux s'organiser. Au départ, StudyBox se présentait sous forme de box physique contenant des outils d'organisation et de méthodologie d'étude.
                  </p>
                  <p>
                    Face à l'évolution des besoins des étudiants et aux nouvelles technologies, StudyBox a décidé de faire évoluer son modèle. Aujourd'hui, StudyBox est devenue une application mobile complète qui intègre toutes les fonctionnalités nécessaires pour réussir ses études : organisation, planning, fiches de révision, quiz interactifs, et bien plus encore.
                  </p>
                  <p>
                    Cette transition vers le 100% digital nous permet d'offrir une solution plus accessible, plus flexible et plus puissante pour accompagner les étudiants dans leur réussite académique.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src="/images/equipe-studybox.jpg" 
                    alt="Photo de l'équipe StudyBox"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Les Jeunes Entrepreneurs */}
      <section className="py-20 px-6 bg-gradient-to-b from-studybox-blue to-blue-900">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 inline-block">
                  <img 
                    src="/images/Logo-LJE.png" 
                    alt="Logo Les Jeunes Entreprises - LJE"
                    className="h-32 w-auto mx-auto"
                  />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Les Jeunes Entrepreneurs
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                StudyBox est une mini-entreprise
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Notre Mission */}
      <section id="mission" className="py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight">
                Notre mission
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Simplifier la vie étudiante, un étudiant à la fois.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-gray-50 rounded-3xl p-10 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">Innovation</h3>
                <p className="text-gray-600 font-light">
                  Repenser constamment nos solutions pour répondre aux besoins réels des étudiants.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-gray-50 rounded-3xl p-10 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">Passion</h3>
                <p className="text-gray-600 font-light">
                  Chaque fonctionnalité est développée avec soin et attention pour votre réussite.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-gray-50 rounded-3xl p-10 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">Communauté</h3>
                <p className="text-gray-600 font-light">
                  Créer un réseau solidaire d'étudiants et de partenaires engagés.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section id="equipe" className="py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight">
                L'équipe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Trois étudiants entrepreneurs et leur coach, unis par une même vision.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <div className="text-center group">
                  {/* Avatar placeholder */}
                  <div className={`${(member.name === 'Timéo' || member.name === 'Valentin') ? 'w-52 h-52' : 'w-48 h-48'} mx-auto mb-8 rounded-full bg-white flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={`Photo de ${member.name}`}
                        className="w-full h-full object-cover object-center scale-110"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-20 h-20 bg-studybox-blue/20 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-4xl font-bold text-studybox-blue">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-studybox-blue font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Photo de l'équipe complète */}
          <AnimatedSection delay={400}>
            <div className="text-center mt-16 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                Ensemble, nous créons l'avenir
              </h3>
            </div>
            <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/Photo équipe complète.JPG" 
                alt="Photo de l'équipe StudyBox au complet"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section id="valeurs" className="py-32 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight">
                Nos valeurs
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-studybox-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Qualité</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Nous sélectionnons avec soin chaque produit pour garantir une expérience premium à nos étudiants.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-studybox-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Accessibilité</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Des prix justes pour que chaque étudiant puisse bénéficier de nos solutions.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-studybox-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Proximité</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Nous privilégions les partenaires locaux et les circuits courts pour un impact positif.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-studybox-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Réactivité</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      À l'écoute de vos retours pour améliorer constamment notre offre et nos services.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Notre Vision & Engagements */}
      <section id="vision" className="py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight">
                Notre vision
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Devenir la référence de l'accompagnement étudiant en Belgique.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Notre ambition est simple : que chaque étudiant puisse accéder aux outils 
                  et ressources nécessaires à sa réussite, sans compromis sur la qualité.
                </p>
                <p>
                  Nous croyons en un modèle où les entreprises locales et les étudiants 
                  grandissent ensemble, créant un écosystème bénéfique pour tous.
                </p>
                <p>
                  D'ici les prochaines années, nous souhaitons étendre notre réseau de partenaires 
                  et proposer des solutions toujours plus adaptées aux besoins des étudiants.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-studybox-gray rounded-3xl p-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-studybox-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Croissance responsable</p>
                      <p className="text-sm text-gray-600">Grandir tout en restant fidèles à nos valeurs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-studybox-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Impact local</p>
                      <p className="text-sm text-gray-600">Soutenir l'économie locale et les commerces de proximité</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-studybox-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Communauté étudiante</p>
                      <p className="text-sm text-gray-600">Créer des liens durables entre étudiants</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section id="engagements" className="py-32 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight">
                Nos engagements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Ce que nous promettons à chaque étudiant.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Qualité garantie</h3>
                <p className="text-gray-600 font-light">
                  Chaque produit est sélectionné avec soin pour répondre à vos attentes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Support réactif</h3>
                <p className="text-gray-600 font-light">
                  Une équipe à votre écoute pour répondre à toutes vos questions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-studybox-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Livraison rapide</h3>
                <p className="text-gray-600 font-light">
                  Recevez votre StudyBox dans les meilleurs délais.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-studybox-blue">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Rejoignez l'aventure StudyBox
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              Découvrez comment nous pouvons vous accompagner dans votre réussite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/studybox" 
                className="bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Découvrir la StudyBox
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Nous contacter
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
