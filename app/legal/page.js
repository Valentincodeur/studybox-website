'use client'

import { useLanguage } from '../../context/LanguageContext'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function LegalPage() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-studybox-blue to-blue-900 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {language === 'fr' ? 'Informations Légales' : 'Legal Information'}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Transparence et conformité pour votre tranquillité d\'esprit' 
              : 'Transparency and compliance for your peace of mind'}
          </p>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex flex-wrap gap-4 justify-center">
            <a href="#mentions-legales" className="px-6 py-2 bg-white rounded-full text-studybox-blue font-semibold hover:bg-studybox-blue hover:text-white transition-all duration-200 shadow-sm">
              {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
            </a>
            <a href="#cgv" className="px-6 py-2 bg-white rounded-full text-studybox-blue font-semibold hover:bg-studybox-blue hover:text-white transition-all duration-200 shadow-sm">
              {language === 'fr' ? 'CGV' : 'Terms of Sale'}
            </a>
            <a href="#confidentialite" className="px-6 py-2 bg-white rounded-full text-studybox-blue font-semibold hover:bg-studybox-blue hover:text-white transition-all duration-200 shadow-sm">
              {language === 'fr' ? 'Confidentialité' : 'Privacy'}
            </a>
            <a href="#cookies" className="px-6 py-2 bg-white rounded-full text-studybox-blue font-semibold hover:bg-studybox-blue hover:text-white transition-all duration-200 shadow-sm">
              Cookies
            </a>
          </nav>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Mentions Légales */}
        <section id="mentions-legales" className="mb-20 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-4xl font-bold text-black mb-8">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Éditeur du site' : 'Website Publisher'}
                </h3>
                <p className="mb-2"><strong>{language === 'fr' ? 'Nom du projet' : 'Project name'} :</strong> StudyBox</p>
                <p className="mb-2"><strong>{language === 'fr' ? 'Statut' : 'Status'} :</strong> {language === 'fr' ? 'Mini-entreprise pédagogique' : 'Educational mini-company'}</p>
                <p className="mb-2"><strong>{language === 'fr' ? 'Cadre' : 'Framework'} :</strong> {language === 'fr' ? 'Projet réalisé dans le cadre de LJE' : 'Project carried out within the framework of LJE'}</p>
                <p className="mb-2"><strong>{language === 'fr' ? 'Établissement scolaire' : 'Educational institution'} :</strong> Athénée Royal Crommelynck</p>
                <p className="mb-2"><strong>{language === 'fr' ? 'Responsable du projet' : 'Project manager'} :</strong> François De Witte</p>
                <p className="mb-2"><strong>Email :</strong> studybox.lje@gmail.com</p>
                <p className="mb-2"><strong>{language === 'fr' ? 'Pays' : 'Country'} :</strong> {language === 'fr' ? 'Belgique' : 'Belgium'}</p>
                <p className="mb-2"><strong>TVA :</strong> {language === 'fr' ? 'TVA non applicable – activité pédagogique' : 'VAT not applicable – educational activity'}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Responsabilité' : 'Liability'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'StudyBox ne peut être tenu responsable des dommages directs ou indirects résultant de l\'utilisation du site ou des produits proposés.'
                    : 'StudyBox cannot be held responsible for direct or indirect damages resulting from the use of the site or the products offered.'}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
                </h3>
                <p className="mb-3">
                  {language === 'fr' 
                    ? 'Tous les contenus (textes, images, logos) présents sur ce site sont la propriété de StudyBox et ne peuvent être reproduits sans autorisation.'
                    : 'All content (texts, images, logos) on this site is the property of StudyBox and may not be reproduced without permission.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'StudyBox n\'est pas responsable du contenu des sites externes vers lesquels ce site peut contenir des liens.'
                    : 'StudyBox is not responsible for the content of external sites to which this site may contain links.'}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Mise à jour' : 'Updates'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Les présentes mentions légales peuvent être mises à jour à tout moment et s\'appliquent dès leur publication sur le site.'
                    : 'These legal notices may be updated at any time and apply as soon as they are published on the site.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CGV */}
        <section id="cgv" className="mb-20 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-4xl font-bold text-black mb-8">
              {language === 'fr' ? 'Conditions Générales de Vente' : 'Terms and Conditions of Sale'}
            </h2>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* 1. Objet */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  1. {language === 'fr' ? 'Objet du contrat' : 'Purpose of the contract'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Les présentes conditions régissent l\'accès et l\'utilisation de l\'application mobile StudyBox, service pédagogique destiné aux étudiants.'
                    : 'These conditions govern access to and use of the StudyBox mobile application, an educational service for students.'}
                </p>
              </div>

              {/* 2. Description */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  2. {language === 'fr' ? 'Description du service' : 'Service description'}
                </h3>
                <p className="mb-3">
                  {language === 'fr'
                    ? 'StudyBox est une application mobile premium proposant des outils d\'organisation, de prise de notes, de planification et d\'aide à l\'étude.'
                    : 'StudyBox is a premium mobile application offering organization, note-taking, planning and study assistance tools.'}
                </p>
                <p className="text-sm italic">
                  {language === 'fr'
                    ? 'Les fonctionnalités peuvent être modifiées selon les besoins pédagogiques et les mises à jour de l\'application.'
                    : 'Features may be modified according to educational needs and application updates.'}
                </p>
              </div>

              {/* 3. Prix */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  3. {language === 'fr' ? 'Prix' : 'Prices'}
                </h3>
                <p className="mb-2">
                  {language === 'fr'
                    ? 'Les prix sont indiqués en euros (€) et incluent toutes les taxes applicables.'
                    : 'Prices are indicated in euros (€) and include all applicable taxes.'}
                </p>
                <p className="text-sm">
                  {language === 'fr'
                    ? 'TVA non applicable – activité pédagogique. Les prix peuvent être modifiés à tout moment mais restent fixes au moment de la commande.'
                    : 'VAT not applicable – educational activity. Prices may be changed at any time but remain fixed at the time of order.'}
                </p>
              </div>

              {/* 4. Paiement */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  4. {language === 'fr' ? 'Paiement' : 'Payment'}
                </h3>
                <p className="mb-3">
                  {language === 'fr'
                    ? 'Le paiement s\'effectue en ligne de manière sécurisée via Stripe ou PayPal.'
                    : 'Payment is made online securely via Stripe or PayPal.'}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold mb-2">{language === 'fr' ? 'Méthodes acceptées :' : 'Accepted methods:'}</p>
                  <ul className="space-y-1 text-sm">
                    <li>• {language === 'fr' ? 'Carte bancaire (Visa, Mastercard)' : 'Credit card (Visa, Mastercard)'}</li>
                    <li>• Bancontact</li>
                    <li>• PayPal</li>
                  </ul>
                </div>
              </div>

              {/* 5. Accès au service */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  5. {language === 'fr' ? 'Accès au service' : 'Service access'}
                </h3>
                <p className="mb-3">
                  {language === 'fr'
                    ? 'L\'accès à l\'application StudyBox est immédiat après validation du paiement. Vous recevrez vos identifiants de connexion par email.'
                    : 'Access to the StudyBox application is immediate after payment validation. You will receive your login credentials by email.'}
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-studybox-blue">
                    {language === 'fr' ? '📱 Disponible sur iOS et Android' : '📱 Available on iOS and Android'}
                  </p>
                </div>
              </div>

              {/* 6. Droit de rétractation */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  6. {language === 'fr' ? 'Droit de rétractation' : 'Right of withdrawal'}
                </h3>
                <p className="mb-3">
                  {language === 'fr'
                    ? 'Conformément à la législation belge, vous disposez de 14 jours pour annuler votre abonnement et demander un remboursement.'
                    : 'In accordance with Belgian legislation, you have 14 days to cancel your subscription and request a refund.'}
                </p>
                <p className="text-sm italic">
                  {language === 'fr'
                    ? 'Pour les contenus numériques, le droit de rétractation s\'applique tant que vous n\'avez pas commencé à utiliser le service.'
                    : 'For digital content, the right of withdrawal applies as long as you have not started using the service.'}
                </p>
              </div>

              {/* 7. Responsabilité */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  7. {language === 'fr' ? 'Responsabilité' : 'Liability'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'StudyBox ne peut être tenue responsable des dommages indirects ou de l\'usage pédagogique des produits. Notre responsabilité est limitée au montant de la commande.'
                    : 'StudyBox cannot be held responsible for indirect damages or the educational use of products. Our liability is limited to the order amount.'}
                </p>
              </div>

              {/* 8. Données personnelles */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  8. {language === 'fr' ? 'Données personnelles' : 'Personal data'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Les informations recueillies (email, nom) sont utilisées uniquement pour la gestion de votre compte et l\'accès à l\'application. Pour plus de détails, consultez notre '
                    : 'The information collected (email, name) is used only for managing your account and application access. For more details, see our '}
                  <Link href="/legal#confidentialite" className="text-studybox-blue hover:underline font-semibold">
                    {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
                  </Link>.
                </p>
              </div>

              {/* 9. Droit applicable */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  9. {language === 'fr' ? 'Droit applicable' : 'Applicable law'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Les présentes conditions sont régies par le droit belge.'
                    : 'These conditions are governed by Belgian law.'}
                </p>
              </div>

              {/* 10. Mise à jour */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  10. {language === 'fr' ? 'Mise à jour des CGV' : 'Update of Terms'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Les présentes conditions peuvent être modifiées à tout moment. Les conditions en vigueur sont celles publiées sur le site au moment de la commande.'
                    : 'These conditions may be modified at any time. The conditions in force are those published on the site at the time of the order.'}
                </p>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-r from-studybox-blue/10 to-blue-100/50 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {language === 'fr' ? '📧 Contact pour réclamations' : '📧 Contact for complaints'}
                </h3>
                <p className="mb-2">
                  {language === 'fr'
                    ? 'Pour toute question ou réclamation concernant votre commande :'
                    : 'For any questions or complaints regarding your order:'}
                </p>
                <a href="mailto:studybox.lje@gmail.com" className="text-studybox-blue font-semibold hover:underline">
                  studybox.lje@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Politique de Confidentialité */}
        <section id="confidentialite" className="mb-20 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-4xl font-bold text-black mb-8">
              {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Collecte des données' : 'Data Collection'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Nous collectons les données personnelles suivantes :'
                    : 'We collect the following personal data:'}
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                  <li>{language === 'fr' ? 'Nom et prénom' : 'First and last name'}</li>
                  <li>{language === 'fr' ? 'Adresse email' : 'Email address'}</li>
                  <li>{language === 'fr' ? 'Informations de paiement (via prestataire sécurisé)' : 'Payment information (via secure provider)'}</li>
                  <li>{language === 'fr' ? 'Données d\'utilisation de l\'application (optionnel)' : 'Application usage data (optional)'}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Utilisation des données' : 'Use of Data'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Vos données sont utilisées pour :'
                    : 'Your data is used to:'}
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                  <li>{language === 'fr' ? 'Gérer votre compte et votre abonnement' : 'Manage your account and subscription'}</li>
                  <li>{language === 'fr' ? 'Vous donner accès à l\'application' : 'Give you access to the application'}</li>
                  <li>{language === 'fr' ? 'Vous envoyer des informations sur nos services (avec votre consentement)' : 'Send you information about our services (with your consent)'}</li>
                  <li>{language === 'fr' ? 'Améliorer nos services et fonctionnalités' : 'Improve our services and features'}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Protection des données' : 'Data Protection'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.'
                    : 'We implement all appropriate technical and organizational measures to protect your personal data against unauthorized access, modification, disclosure or destruction.'}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Vos droits (RGPD)' : 'Your Rights (GDPR)'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Conformément au RGPD, vous disposez des droits suivants :'
                    : 'In accordance with GDPR, you have the following rights:'}
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                  <li>{language === 'fr' ? 'Droit d\'accès à vos données' : 'Right of access to your data'}</li>
                  <li>{language === 'fr' ? 'Droit de rectification' : 'Right of rectification'}</li>
                  <li>{language === 'fr' ? 'Droit à l\'effacement' : 'Right to erasure'}</li>
                  <li>{language === 'fr' ? 'Droit à la limitation du traitement' : 'Right to restriction of processing'}</li>
                  <li>{language === 'fr' ? 'Droit à la portabilité' : 'Right to data portability'}</li>
                  <li>{language === 'fr' ? 'Droit d\'opposition' : 'Right to object'}</li>
                </ul>
                <p className="mt-3">
                  {language === 'fr'
                    ? 'Pour exercer ces droits, contactez-nous à : studybox.lje@gmail.com'
                    : 'To exercise these rights, contact us at: studybox.lje@gmail.com'}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Conservation des données' : 'Data Retention'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles sont collectées, et conformément aux obligations légales.'
                    : 'Your data is kept for the time necessary for the purposes for which it is collected, and in accordance with legal obligations.'}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {language === 'fr' ? 'Partage des données' : 'Data Sharing'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Nous ne vendons ni ne louons vos données personnelles. Vos données peuvent être partagées avec nos prestataires de services (paiement, hébergement) uniquement dans le cadre de la fourniture du service.'
                    : 'We do not sell or rent your personal data. Your data may be shared with our service providers (payment, hosting) only as part of providing the service.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Politique Cookies */}
        <section id="cookies" className="mb-20 scroll-mt-32">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-4xl font-bold text-black mb-8">
              {language === 'fr' ? 'Politique Cookies' : 'Cookie Policy'}
            </h2>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              {/* 1. Qu'est-ce qu'un cookie */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  1. {language === 'fr' ? 'Qu\'est-ce qu\'un cookie ?' : 'What is a cookie?'}
                </h3>
                <p className="mb-2">
                  {language === 'fr'
                    ? 'Un cookie est un petit fichier texte déposé sur votre appareil lors de la consultation d\'un site internet.'
                    : 'A cookie is a small text file placed on your device when visiting a website.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'Il permet au site de fonctionner correctement ou d\'améliorer l\'expérience utilisateur.'
                    : 'It allows the site to function properly or improve the user experience.'}
                </p>
              </div>

              {/* 2. Qui utilise les cookies */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  2. {language === 'fr' ? 'Qui utilise les cookies ?' : 'Who uses cookies?'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Le site StudyBox est géré par une mini-entreprise pédagogique, dans le cadre de LJE (Les Jeunes Entreprises), en Belgique.'
                    : 'The StudyBox website is managed by an educational mini-company, as part of LJE (Les Jeunes Entreprises), in Belgium.'}
                </p>
              </div>

              {/* 3. Quels cookies sont utilisés */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  3. {language === 'fr' ? 'Quels cookies sont utilisés sur StudyBox ?' : 'What cookies are used on StudyBox?'}
                </h3>
                <p className="mb-4 font-semibold">
                  {language === 'fr'
                    ? 'StudyBox utilise uniquement des cookies strictement nécessaires au fonctionnement du site.'
                    : 'StudyBox only uses cookies strictly necessary for the operation of the site.'}
                </p>
                
                <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
                  <h4 className="text-xl font-semibold text-black mb-3">
                    {language === 'fr' ? '✓ Cookies essentiels (obligatoires)' : '✓ Essential cookies (mandatory)'}
                  </h4>
                  <p className="mb-3">
                    {language === 'fr'
                      ? 'Ces cookies sont indispensables pour :'
                      : 'These cookies are essential for:'}
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• {language === 'fr' ? 'Le fonctionnement technique du site' : 'The technical operation of the site'}</li>
                    <li>• {language === 'fr' ? 'La navigation entre les pages' : 'Navigation between pages'}</li>
                    <li>• {language === 'fr' ? 'La gestion du panier et des commandes' : 'Cart and order management'}</li>
                    <li>• {language === 'fr' ? 'La sécurité et la prévention des abus' : 'Security and abuse prevention'}</li>
                  </ul>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="font-semibold">
                      👉 {language === 'fr' ? 'Ces cookies ne collectent aucune donnée à des fins commerciales ou publicitaires.' : 'These cookies do not collect any data for commercial or advertising purposes.'}
                    </p>
                    <p className="font-semibold">
                      👉 {language === 'fr' ? 'Ils ne peuvent pas être désactivés, car le site ne fonctionnerait plus correctement.' : 'They cannot be disabled, as the site would no longer function properly.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Cookies non utilisés */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  4. {language === 'fr' ? 'Cookies non utilisés' : 'Cookies not used'}
                </h3>
                <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                  <p className="mb-3 font-semibold">
                    {language === 'fr' ? 'StudyBox n\'utilise pas :' : 'StudyBox does not use:'}
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>✗ {language === 'fr' ? 'De cookies publicitaires' : 'Advertising cookies'}</li>
                    <li>✗ {language === 'fr' ? 'De cookies marketing' : 'Marketing cookies'}</li>
                    <li>✗ {language === 'fr' ? 'De cookies de suivi tiers' : 'Third-party tracking cookies'}</li>
                    <li>✗ {language === 'fr' ? 'De cookies de revente ou de profilage' : 'Resale or profiling cookies'}</li>
                    <li>✗ {language === 'fr' ? 'De traceurs publicitaires ou réseaux sociaux' : 'Advertising trackers or social networks'}</li>
                  </ul>
                  <p className="mt-4 font-semibold text-sm">
                    {language === 'fr'
                      ? 'Aucune donnée n\'est transmise à des partenaires ou plateformes externes à des fins commerciales.'
                      : 'No data is transmitted to partners or external platforms for commercial purposes.'}
                  </p>
                </div>
              </div>

              {/* 5. Consentement */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  5. {language === 'fr' ? 'Consentement' : 'Consent'}
                </h3>
                <p className="mb-3">
                  {language === 'fr'
                    ? 'Conformément à la législation européenne :'
                    : 'In accordance with European legislation:'}
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• {language === 'fr' ? 'Les cookies strictement nécessaires ne nécessitent pas de consentement préalable' : 'Strictly necessary cookies do not require prior consent'}</li>
                  <li>• {language === 'fr' ? 'Aucun cookie non essentiel n\'est déposé sans accord explicite' : 'No non-essential cookies are placed without explicit consent'}</li>
                  <li>• {language === 'fr' ? 'Un bandeau d\'information peut être affiché pour informer l\'utilisateur de l\'utilisation de cookies techniques' : 'An information banner may be displayed to inform the user of the use of technical cookies'}</li>
                </ul>
              </div>

              {/* 6. Durée de conservation */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  6. {language === 'fr' ? 'Durée de conservation' : 'Retention period'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Les cookies utilisés par StudyBox ont une durée de vie limitée et sont automatiquement supprimés après leur expiration ou à la fermeture du navigateur, selon leur nature.'
                    : 'Cookies used by StudyBox have a limited lifespan and are automatically deleted after expiration or when the browser is closed, depending on their nature.'}
                </p>
              </div>

              {/* 7. Gestion des cookies */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  7. {language === 'fr' ? 'Gestion des cookies' : 'Cookie management'}
                </h3>
                <p className="mb-3">
                  {language === 'fr'
                    ? 'Vous pouvez configurer votre navigateur pour :'
                    : 'You can configure your browser to:'}
                </p>
                <ul className="space-y-2 ml-4 mb-4">
                  <li>• {language === 'fr' ? 'Bloquer les cookies' : 'Block cookies'}</li>
                  <li>• {language === 'fr' ? 'Supprimer les cookies existants' : 'Delete existing cookies'}</li>
                </ul>
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <p className="font-semibold">
                    ⚠️ {language === 'fr' ? 'Attention :' : 'Warning:'} {language === 'fr' ? 'le blocage des cookies essentiels peut empêcher le bon fonctionnement du site.' : 'blocking essential cookies may prevent the site from functioning properly.'}
                  </p>
                </div>
              </div>

              {/* 8. Lien avec la politique de confidentialité */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  8. {language === 'fr' ? 'Lien avec la politique de confidentialité' : 'Link to privacy policy'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Pour plus d\'informations sur la manière dont vos données sont traitées, consultez notre '
                    : 'For more information on how your data is processed, see our '}
                  <Link href="/legal#confidentialite" className="text-studybox-blue hover:underline font-semibold">
                    {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
                  </Link>.
                </p>
              </div>

              {/* 9. Modification de la politique cookies */}
              <div className="border-l-4 border-studybox-blue pl-6">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  9. {language === 'fr' ? 'Modification de la politique cookies' : 'Modification of cookie policy'}
                </h3>
                <p>
                  {language === 'fr'
                    ? 'Cette politique peut être modifiée à tout moment. La version en vigueur est celle publiée sur le site au moment de la consultation.'
                    : 'This policy may be modified at any time. The version in force is the one published on the site at the time of consultation.'}
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
