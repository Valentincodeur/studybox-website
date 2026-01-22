'use client'

import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'

export default function TemoignagesPage() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: 'Marie L.',
      role: language === 'fr' ? 'Étudiante en médecine, ULB' : 'Medical student, ULB',
      rating: 5,
      text: language === 'fr' 
        ? 'Wow, je suis bluffée ! Pour mes blocus de médecine, l\'app avec les points m\'a transformée. Fini la procrastination, je suis motivée à bosser tous les jours. Le concept de récompenser les efforts, c\'est révolutionnaire pour nous les étudiants !' 
        : 'Wow, I\'m blown away! For my medical exams, the app with points transformed me. No more procrastination, I\'m motivated to work every day. The concept of rewarding efforts is revolutionary for us students!',
      avatar: 'M',
    },
    {
      name: 'Thomas D.',
      role: language === 'fr' ? 'Étudiant en ingénierie civile, UCLouvain' : 'Civil Engineering student, UCLouvain',
      rating: 5,
      text: language === 'fr' 
        ? 'Ce qui m\'a séduit, c\'est le double impact : aide les étudiants ET soutient les commerces locaux. J\'ai pu décompresser au Crossing Schaerbeek après mes révisions grâce au bon de réduc. L\'application m\'a donné la discipline qu\'il me manquait. 10/10 !' 
        : 'What seduced me was the double impact: helping students AND supporting local businesses. I was able to decompress at Crossing Schaerbeek after my revisions thanks to the discount voucher. The app gave me the discipline I was missing. 10/10!',
      avatar: 'T',
    },
    {
      name: 'Sophie M.',
      role: language === 'fr' ? 'Étudiante en pharmacie, UCLouvain' : 'Pharmacy student, UCLouvain',
      rating: 4,
      text: language === 'fr' 
        ? 'Étudiante en pharmacie, j\'avais besoin d\'un coup de pouce. Cette application qui suit ma progression et me récompense, c\'est le déclic ! Le concept StudyBox est intelligent, ça nous aide vraiment à garder le cap. Petit bémol : j\'aimerais plus de personnalisation dans les récompenses.' 
        : 'Pharmacy student, I needed a boost. This app that tracks my progress and rewards me is the trigger! The StudyBox concept is smart, it really helps us stay on track. Small downside: I\'d like more personalization in the rewards.',
      avatar: 'S',
    },
    {
      name: 'Emma V.',
      role: language === 'fr' ? 'Étudiante en communication, IHECS' : 'Communication student, IHECS',
      rating: 5,
      text: language === 'fr' 
        ? 'En communication, j\'adore l\'idée de gamifier l\'étude ! L\'app qui compte mes heures et me donne des points, ça me pousse à être plus constante. Le concept de récompenser les bosseurs, c\'est exactement notre génération. Les bons de réduc locaux sont la cerise sur le gâteau !' 
        : 'In communication, I love the idea of gamifying studying! The app that counts my hours and gives me points pushes me to be more consistent. The concept of rewarding hard workers is exactly our generation. The local discount vouchers are the cherry on top!',
      avatar: 'E',
    },
    {
      name: 'Antoine R.',
      role: language === 'fr' ? 'Étudiant en kinésithérapie, HELB Ilya Prigogine' : 'Physiotherapy student, HELB Ilya Prigogine',
      rating: 5,
      text: language === 'fr' 
        ? 'Petit souci de livraison, résolu en moins de 24h... honnêtement, je n\'ai jamais vu ça ! Un SAV aussi réactif, ça change tout. Le concept StudyBox est pensé pour nous, et l\'application m\'a redonné la motivation que j\'avais perdue. Bravo l\'équipe !' 
        : 'Small delivery issue, resolved in less than 24h... honestly, I\'ve never seen that! Such responsive customer service changes everything. The StudyBox concept is designed for us, and the app gave me back the motivation I had lost. Bravo team!',
      avatar: 'A',
    },
    {
      name: 'Julie H.',
      role: language === 'fr' ? 'Étudiante en architecture, ULB' : 'Architecture student, ULB',
      rating: 4,
      text: language === 'fr' 
        ? 'Architecture oblige, je suis pointilleuse. Les post-its transparents sont parfaits pour mes plans, je peux annoter sans masquer. La canette Buddy est mon alliée pour les nuits blanches. Si je pouvais choisir ma formule selon mes projets, ce serait parfait. Mais déjà, c\'est du bon travail !' 
        : 'Architecture obliges, I\'m picky. The transparent post-its are perfect for my plans, I can annotate without masking. The Buddy can is my ally for all-nighters. If I could choose my formula according to my projects, it would be perfect. But already, it\'s good work!',
      avatar: 'J',
    },
    {
      name: 'Sarah T.',
      role: language === 'fr' ? 'Élève de 6ème secondaire, Athénée Robert Catteau' : '12th grade student, Athénée Robert Catteau',
      rating: 5,
      text: language === 'fr' 
        ? 'Sceptique au début, je me suis laissée convaincre ! L\'application qui me pousse à étudier, c\'est devenu mon rituel pour préparer mon CESS. J\'adore l\'idée de consommer local en même temps. Les bons de réduction sont parfaits pour se récompenser après une grosse session de révisions.' 
        : 'Skeptical at first, I let myself be convinced! The app that pushes me to study has become my ritual to prepare my CESS. I love the idea of consuming locally at the same time. The discount vouchers are perfect to reward yourself after a big revision session.',
      avatar: 'S',
    },
    {
      name: 'Léa B.',
      role: language === 'fr' ? 'Étudiante en psychologie, ULB' : 'Psychology student, ULB',
      rating: 5,
      text: language === 'fr' 
        ? 'En psychologie, le stress est notre ennemi. Cette application m\'aide à structurer mon travail, c\'est thérapeutique ! Le concept de gamifier l\'étude, ça me parle. Les bons de réduc pour un resto sympa, c\'est la récompense parfaite. Je valide à 100% !' 
        : 'In psychology, stress is our enemy. This app helps me structure my work, it\'s therapeutic! The concept of gamifying studying speaks to me. The discount vouchers for a nice restaurant are the perfect reward. I validate 100%!',
      avatar: 'L',
    },
    {
      name: 'Romain F.',
      role: language === 'fr' ? 'Étudiant en sciences de gestion, Solvay Brussels School' : 'Management student, Solvay Brussels School',
      rating: 5,
      text: language === 'fr' 
        ? 'Solvay, c\'est la course permanente. L\'application m\'aide à garder le cap quand tout s\'accélère. Le système de récompenses, c\'est intelligent. Le bon pour le Crossing Schaerbeek à 2 pas de chez moi, c\'est parfait pour décompresser. Investissement rentable !' 
        : 'Solvay, it\'s a permanent race. The app helps me stay on track when everything speeds up. The reward system is smart. The voucher for Crossing Schaerbeek 2 steps from my place is perfect for decompressing. Profitable investment!',
      avatar: 'R',
    },
    {
      name: 'Dylan S.',
      role: language === 'fr' ? 'Élève de 5ème secondaire, Collège Saint-Michel' : '11th grade student, Collège Saint-Michel',
      rating: 5,
      text: language === 'fr' 
        ? 'Ma mère m\'a offert ça pour Noël, j\'étais pas convaincu... mais l\'app avec les récompenses, ça m\'a kiffé ! Le concept de gamifier, c\'est fait pour nous. Mes notes ont explosé, mes parents sont fiers. Même moi je suis surpris 😄' 
        : 'My mom gave me this for Christmas, I wasn\'t convinced... but the app with rewards, I loved it! The concept of gamifying is made for us. My grades exploded, my parents are proud. Even I\'m surprised 😄',
      avatar: 'D',
    },
    {
      name: 'Inès L.',
      role: language === 'fr' ? 'Étudiante en sciences vétérinaires, ULiège' : 'Veterinary Sciences student, ULiège',
      rating: 5,
      text: language === 'fr' 
        ? 'Vétérinaire, c\'est cours + stages = zéro vie privée. L\'application m\'aide à optimiser chaque minute. Livraison Liège en 3 jours, impeccable. Le côté local belge, c\'est important pour moi. Un concept intelligent qui nous comprend vraiment.' 
        : 'Veterinary, it\'s classes + internships = zero private life. The app helps me optimize every minute. Delivery to Liège in 3 days, impeccable. The local Belgian side is important to me. A smart concept that really understands us.',
      avatar: 'I',
    },
    {
      name: 'Claire M.',
      role: language === 'fr' ? 'Maman de Nathan, élève de 6ème primaire' : 'Mom of Nathan, 6th grade student',
      rating: 5,
      text: language === 'fr' 
        ? 'J\'étais très sceptique au début... un autre gadget pour étudier ? Mais l\'application a transformé mon fils ! Il prépare son CEB avec motivation, les récompenses le stimulent. Je peux enfin le guider sereinement dans ses révisions. Un concept qui a changé notre quotidien !' 
        : 'I was very skeptical at first... another gadget for studying? But the app transformed my son! He\'s preparing his CEB with motivation, the rewards stimulate him. I can finally guide him calmly in his revisions. A concept that changed our daily life!',
      avatar: 'C',
    },
  ]

  const stats = [
    { 
      value: '200+', 
      label: language === 'fr' ? 'Étudiants satisfaits' : 'Satisfied students' 
    },
    { 
      value: '4.8/5', 
      label: language === 'fr' ? 'Note moyenne' : 'Average rating' 
    },
    { 
      value: '98%', 
      label: language === 'fr' ? 'Recommandent' : 'Recommend' 
    },
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

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
              {language === 'fr' ? 'Témoignages' : 'Testimonials'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Ce que nos étudiants disent de StudyBox' 
                : 'What our students say about StudyBox'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-studybox-blue mb-2">{stat.value}</div>
                  <p className="text-gray-600 font-light">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Avis de nos clients' : 'Customer reviews'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Des centaines d\'étudiants nous font confiance' 
                : 'Hundreds of students trust us'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-studybox-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-black">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 font-light flex-grow">{testimonial.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-black mb-6">
              {language === 'fr' ? 'Vous avez testé StudyBox ?' : 'Have you tried StudyBox?'}
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-light">
              {language === 'fr' 
                ? 'Partagez votre expérience et aidez d\'autres étudiants à découvrir nos produits' 
                : 'Share your experience and help other students discover our products'}
            </p>
            <a 
              href="/laisser-avis" 
              className="inline-flex items-center gap-3 bg-studybox-blue text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {language === 'fr' ? 'Laisser un avis' : 'Leave a review'}
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-20 bg-studybox-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'fr' ? 'Rejoignez la communauté' : 'Join the community'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Commandez votre StudyBox et faites partie de l\'aventure' 
                : 'Order your StudyBox and be part of the adventure'}
            </p>
            <a 
              href="/commander" 
              className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {language === 'fr' ? 'Commander ma StudyBox' : 'Order my StudyBox'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
