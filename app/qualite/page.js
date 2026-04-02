'use client'

import { useLanguage } from '../../context/LanguageContext'
import AnimatedSection from '../../components/AnimatedSection'

export default function QualitePage() {
  const { language } = useLanguage()

  const commitments = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: language === 'fr' ? 'Qualité premium' : 'Premium quality',
      description: language === 'fr' 
        ? 'Notre application est développée avec les meilleures technologies et testée rigoureusement pour garantir une expérience utilisateur optimale.' 
        : 'Our application is developed with the best technologies and rigorously tested to guarantee an optimal user experience.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Éco-responsable' : 'Eco-responsible',
      description: language === 'fr' 
        ? 'Notre infrastructure cloud est optimisée pour minimiser l\'empreinte carbone. Stockage de données écologique et code optimisé pour réduire la consommation d\'énergie.' 
        : 'Our cloud infrastructure is optimized to minimize carbon footprint. Ecological data storage and optimized code to reduce energy consumption.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Sécurité des données' : 'Data security',
      description: language === 'fr' 
        ? 'Vos données sont cryptées et sécurisées selon les normes RGPD. Nous garantissons la confidentialité totale de vos cours et informations personnelles.' 
        : 'Your data is encrypted and secured according to GDPR standards. We guarantee complete confidentiality of your courses and personal information.',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: language === 'fr' ? 'Transparence totale' : 'Total transparency',
      description: language === 'fr' 
        ? 'Nous communiquons ouvertement sur nos fonctionnalités, nos mises à jour et nos pratiques. Pas de surprises, que de la confiance.' 
        : 'We communicate openly about our features, updates and practices. No surprises, just trust.',
    },
  ]

  const values = [
    {
      title: language === 'fr' ? 'Innovation' : 'Innovation',
      description: language === 'fr' 
        ? 'Nous intégrons les dernières technologies IA pour améliorer constamment l\'expérience d\'apprentissage de nos utilisateurs.' 
        : 'We integrate the latest AI technologies to constantly improve the learning experience of our users.',
      color: 'bg-blue-500',
    },
    {
      title: language === 'fr' ? 'Accessibilité' : 'Accessibility',
      description: language === 'fr' 
        ? 'Un prix unique de 10€ pour un accès à vie, accessible à tous les étudiants sans abonnement récurrent.' 
        : 'A one-time price of €10 for lifetime access, accessible to all students without recurring subscription.',
      color: 'bg-green-500',
    },
    {
      title: language === 'fr' ? 'Proximité' : 'Proximity',
      description: language === 'fr' 
        ? 'Une équipe à l\'écoute, disponible et réactive pour vous accompagner dans votre parcours étudiant.' 
        : 'A team that listens, available and responsive to support you in your student journey.',
      color: 'bg-purple-500',
    },
    {
      title: language === 'fr' ? 'Excellence' : 'Excellence',
      description: language === 'fr' 
        ? 'Nous visons l\'excellence dans tout ce que nous faisons, de la sélection des produits au service client.' 
        : 'We strive for excellence in everything we do, from product selection to customer service.',
      color: 'bg-orange-500',
    },
  ]

  const process = [
    {
      step: 1,
      title: language === 'fr' ? 'Développement agile' : 'Agile development',
      description: language === 'fr' 
        ? 'Nous développons chaque fonctionnalité en suivant les meilleures pratiques de développement logiciel.' 
        : 'We develop each feature following software development best practices.',
    },
    {
      step: 2,
      title: language === 'fr' ? 'Tests utilisateurs' : 'User testing',
      description: language === 'fr' 
        ? 'Chaque fonctionnalité est testée par notre équipe et des étudiants bêta-testeurs avant déploiement.' 
        : 'Each feature is tested by our team and student beta testers before deployment.',
    },
    {
      step: 3,
      title: language === 'fr' ? 'Optimisation IA' : 'AI optimization',
      description: language === 'fr' 
        ? 'Nos algorithmes d\'IA sont continuellement optimisés pour améliorer la pertinence des synthèses et quiz.' 
        : 'Our AI algorithms are continuously optimized to improve the relevance of summaries and quizzes.',
    },
    {
      step: 4,
      title: language === 'fr' ? 'Déploiement continu' : 'Continuous deployment',
      description: language === 'fr' 
        ? 'Mises à jour régulières et automatiques pour vous offrir toujours la meilleure version de StudyBox.' 
        : 'Regular and automatic updates to always offer you the best version of StudyBox.',
    },
  ]

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
              {language === 'fr' ? 'Qualité & Engagement' : 'Quality & Commitment'}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              {language === 'fr' 
                ? 'Notre engagement envers l\'excellence et la satisfaction de nos clients' 
                : 'Our commitment to excellence and customer satisfaction'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Ce que nous promettons à chaque étudiant' 
                : 'What we promise to every student'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex gap-6">
                  <div className="w-16 h-16 bg-studybox-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-studybox-blue">
                    {commitment.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{commitment.title}</h3>
                    <p className="text-gray-600 font-light">{commitment.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              {language === 'fr' ? 'Nos valeurs' : 'Our values'}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md h-full">
                  <div className={`w-3 h-3 ${value.color} rounded-full mb-4`}></div>
                  <h3 className="text-lg font-bold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-black mb-4">
              {language === 'fr' ? 'Notre processus qualité' : 'Our quality process'}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto font-light">
              {language === 'fr' 
                ? 'Comment nous garantissons la qualité de l\'application StudyBox' 
                : 'How we guarantee the quality of the StudyBox application'}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-studybox-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light">{item.description}</p>
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
              {language === 'fr' ? 'La qualité, notre priorité' : 'Quality, our priority'}
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light">
              {language === 'fr' 
                ? 'Découvrez par vous-même la différence StudyBox' 
                : 'Discover the StudyBox difference for yourself'}
            </p>
            <a 
              href="/commander" 
              className="inline-flex items-center gap-3 bg-white text-studybox-blue px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              {language === 'fr' ? 'Obtenir StudyBox' : 'Get StudyBox'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
