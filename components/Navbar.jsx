'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import SearchModal from './SearchModal'

export default function Navbar() {
  const { language, changeLanguage, t } = useLanguage()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [studyboxOpen, setStudyboxOpen] = useState(false)
  const [newsOpen, setNewsOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(false)
  const [appOpen, setAppOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [partnersOpen, setPartnersOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  
  const [mobileStudyboxOpen, setMobileStudyboxOpen] = useState(false)
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false)
  const [mobileAppOpen, setMobileAppOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false)
  const [mobileContactOpen, setMobileContactOpen] = useState(false)

  const closeAllMenus = () => {
    setStudyboxOpen(false)
    setNewsOpen(false)
    setFaqOpen(false)
    setAppOpen(false)
    setAboutOpen(false)
    setPartnersOpen(false)
    setContactOpen(false)
  }
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1d1d1f] shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-12 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="StudyBox Logo" 
                width={64} 
                height={64}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Menu central - Desktop only */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium hover:opacity-70 transition-all duration-300 text-white">
              {t('nav.home')}
            </Link>

            {/* StudyBox Mega Menu */}
            <div className="relative">
              <Link 
                href="/studybox" 
                className="text-sm font-medium hover:opacity-70 transition-all duration-300 text-white"
                onMouseEnter={() => { closeAllMenus(); setStudyboxOpen(true); }}
              >
                {t('nav.studybox')}
              </Link>
              {studyboxOpen && (
                <div className="fixed left-0 right-0 top-16 z-40 animate-[slideDown_0.3s_ease-out]" onMouseEnter={() => setStudyboxOpen(true)} onMouseLeave={() => setStudyboxOpen(false)}>
                  <div className="w-full bg-white/80 backdrop-blur-xl shadow-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
                      <div className="grid grid-cols-2 gap-16">
                        <div className="animate-[fadeInUp_0.4s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.discover')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/studybox" className="text-2xl font-semibold hover:opacity-70 transition-opacity block text-black">{t('nav.theStudybox')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/studybox#pour-qui" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.forWho')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/studybox#prix" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.pricing')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.5s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.whyStudybox')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/avantages" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.ourAdvantages')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/qualite" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.qualityCommitment')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/temoignages" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.studentTestimonials')}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actualités Mega Menu */}
            <div className="relative">
              <Link 
                href="/actualites" 
                className="text-sm font-medium hover:opacity-70 transition-all duration-300 text-white"
                onMouseEnter={() => { closeAllMenus(); setNewsOpen(true); }}
              >
                {t('nav.news')}
              </Link>
              {newsOpen && (
                <div className="fixed left-0 right-0 top-16 z-40 animate-[slideDown_0.3s_ease-out]" onMouseEnter={() => setNewsOpen(true)} onMouseLeave={() => setNewsOpen(false)}>
                  <div className="w-full bg-white/80 backdrop-blur-xl shadow-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
                      <div className="grid grid-cols-3 gap-16">
                        <div className="animate-[fadeInUp_0.4s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.blogArticles')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/actualites" className="text-2xl font-semibold hover:opacity-70 transition-opacity block text-black">{t('nav.allNews')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/actualites#conseils-etudes" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.studyTips')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/actualites#organisation" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.organizationProductivity')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/actualites#vie-etudiante" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.studentLife')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.45s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.events')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/actualites#evenements" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.eventsAgenda')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/actualites#marches" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.marketsFairs')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.5s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.whatsNew')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/actualites#nouveaux-produits" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.newProducts')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/actualites#mises-a-jour-app" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.appUpdates')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/actualites#partenariats" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.newPartners')}</Link></li>
                            <li className="animate-[fadeInUp_0.7s_ease-out]"><Link href="/actualites#newsletter" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{language === 'fr' ? "S'inscrire à la newsletter" : "Subscribe to newsletter"}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Application Mega Menu */}
            <div className="relative">
              <Link 
                href="/application" 
                className="text-sm font-medium hover:opacity-70 transition-all duration-300 text-white"
                onMouseEnter={() => { closeAllMenus(); setAppOpen(true); }}
              >
                {t('nav.application')}
              </Link>
              {appOpen && (
                <div className="fixed left-0 right-0 top-16 z-40 animate-[slideDown_0.3s_ease-out]" onMouseEnter={() => setAppOpen(true)} onMouseLeave={() => setAppOpen(false)}>
                  <div className="w-full bg-white/80 backdrop-blur-xl shadow-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
                      <div className="grid grid-cols-3 gap-16">
                        <div className="animate-[fadeInUp_0.4s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.download')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/application" className="text-2xl font-semibold hover:opacity-70 transition-opacity block text-black">{t('nav.theApp')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/application/ios" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.downloadIOS')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/application/android" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.downloadAndroid')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/application/web" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.webVersion')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.45s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.features')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/application/organisation" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.courseOrganization')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/application/planning" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.planningReminders')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/application/notes" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.noteTaking')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.5s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.helpTutorials')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/application/guide" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.gettingStarted')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/temoignages" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.studentTestimonials')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/application/signaler-probleme" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.reportProblem')}</Link></li>
                            <li className="animate-[fadeInUp_0.7s_ease-out]"><Link href="/application/suggerer-fonctionnalite" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.suggestFeature')}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* À propos Mega Menu */}
            <div className="relative">
              <Link 
                href="/a-propos" 
                className="text-sm font-medium hover:opacity-70 transition-all duration-300 text-white"
                onMouseEnter={() => { closeAllMenus(); setAboutOpen(true); }}
              >
                {t('nav.about')}
              </Link>
              {aboutOpen && (
                <div className="fixed left-0 right-0 top-16 z-40 animate-[slideDown_0.3s_ease-out]" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
                  <div className="w-full bg-white/80 backdrop-blur-xl shadow-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
                      <div className="grid grid-cols-4 gap-12">
                        <div className="animate-[fadeInUp_0.4s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.ourCompany')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/a-propos" className="text-2xl font-semibold hover:opacity-70 transition-opacity block text-black">{t('nav.whoAreWe')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/a-propos#histoire" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.ourHistory')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/a-propos#equipe" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.theTeam')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/a-propos#vision" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.ourVision')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.45s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.ourValuesMenu')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/a-propos#mission" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.ourMission')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/a-propos#valeurs" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.ourValues')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/a-propos#engagements" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.ourCommitments')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.5s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.communityMenu')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/partenaires" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.ourPartners')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/contact" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.contactUs')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.55s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.faqSupport')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/faq" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.faq')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/support" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.supportSav')}</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Nos partenaires Mega Menu */}
            <div className="relative">
              <Link 
                href="/partenaires" 
                className="text-sm font-medium hover:opacity-70 transition-all duration-300 text-white"
                onMouseEnter={() => { closeAllMenus(); setPartnersOpen(true); }}
              >
                {t('nav.partners')}
              </Link>
              {partnersOpen && (
                <div className="fixed left-0 right-0 top-16 z-40 animate-[slideDown_0.3s_ease-out]" onMouseEnter={() => setPartnersOpen(true)} onMouseLeave={() => setPartnersOpen(false)}>
                  <div className="w-full bg-white/80 backdrop-blur-xl shadow-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
                      <div className="grid grid-cols-3 gap-16">
                        <div className="animate-[fadeInUp_0.4s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.ourPartners')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/partenaires" className="text-2xl font-semibold hover:opacity-70 transition-opacity block text-black">{t('nav.allPartners')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/partenaires#restauration" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.restaurant')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/partenaires#sports" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.sportsLeisure')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/partenaires#services" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.studentServices')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.45s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.becomePartner')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/partenaires#devenir-partenaire" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.whyJoinUs')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/partenaires#avantages" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.partnerAdvantages')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/partenaires#candidature" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.submitApplication')}</Link></li>
                                                      </ul>
                        </div>
                                              </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Mega Menu */}
            <div className="relative">
              <Link 
                href="/contact" 
                className="text-sm font-medium hover:opacity-70 transition-all duration-300 text-white"
                onMouseEnter={() => { closeAllMenus(); setContactOpen(true); }}
              >
                {t('nav.contact')}
              </Link>
              {contactOpen && (
                <div className="fixed left-0 right-0 top-16 z-40 animate-[slideDown_0.3s_ease-out]" onMouseEnter={() => setContactOpen(true)} onMouseLeave={() => setContactOpen(false)}>
                  <div className="w-full bg-white/80 backdrop-blur-xl shadow-2xl" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
                      <div className="grid grid-cols-3 gap-16">
                        <div className="animate-[fadeInUp_0.4s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.getInTouch')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/contact" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.contactUs')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/contact/formulaire" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.contactForm')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/support" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.supportSav')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/faq" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.faq')}</Link></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.45s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.socialMedia')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/instagram" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.followInstagram')}</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/facebook" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.followFacebook')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/tiktok" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">TikTok</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><a href="mailto:studybox.be@gmail.com" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">Email</a></li>
                          </ul>
                        </div>
                        <div className="animate-[fadeInUp_0.5s_ease-out]">
                          <h3 className="text-xs font-semibold uppercase tracking-wider mb-6 text-gray-500">{t('nav.proServices')}</h3>
                          <ul className="space-y-4">
                            <li className="animate-[fadeInUp_0.5s_ease-out]"><Link href="/contact/ecoles" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">Offre Écoles</Link></li>
                            <li className="animate-[fadeInUp_0.55s_ease-out]"><Link href="/partenaires" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.partnerships')}</Link></li>
                            <li className="animate-[fadeInUp_0.6s_ease-out]"><Link href="/contact/presse" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">{t('nav.pressMedia')}</Link></li>
                            <li className="animate-[fadeInUp_0.65s_ease-out]"><Link href="/contact/entreprises" className="text-lg hover:opacity-70 transition-opacity block text-gray-700">Entreprises</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            </div>

          {/* Actions droite - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-white" aria-label="Rechercher">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="relative">
              <select 
                className="px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 appearance-none pr-8 bg-white/10 text-white hover:bg-white/20" 
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="fr" className="text-black">FR</option>
                <option value="en" className="text-black">EN</option>
              </select>
              <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <Link href="/commander" className="bg-[#1089e6] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1089e6]/90 hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {t('nav.buy')}
            </Link>
          </div>
          
          {/* Actions Mobile - Style Apple */}
          <div className="flex lg:hidden items-center space-x-3">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-white" aria-label="Rechercher">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/commander" className="p-2 text-white" aria-label="Panier">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
    
    {/* Menu Mobile Plein Écran - Style Apple Amélioré */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-40 lg:hidden">
        <div className="fixed inset-0 bg-[#f5f5f7]" style={{ top: '48px' }}>
          <div className="h-full overflow-y-auto pb-20">
            <div className="px-4 py-4">
              
              {/* Accueil */}
              <Link 
                href="/" 
                className="block py-4 text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              
              {/* StudyBox avec sous-menu organisé */}
              <div className="border-t border-gray-300">
                <button
                  onClick={() => setMobileStudyboxOpen(!mobileStudyboxOpen)}
                  className="w-full flex items-center justify-between py-4 text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  <span>{t('nav.studybox')}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileStudyboxOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileStudyboxOpen && (
                  <div className="pb-4 space-y-6 animate-[slideDown_0.3s_ease-out]">
                    {/* Section Découvrir */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.discover')}</h4>
                      <div className="space-y-2">
                        <Link href="/studybox" className="block py-2 text-xl font-medium text-black hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>{t('nav.theStudybox')}</Link>
                        <Link href="/studybox#pour-qui" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.forWho')}</Link>
                        <Link href="/studybox#prix" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.pricing')}</Link>
                      </div>
                    </div>
                                        {/* Section Pourquoi StudyBox */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.whyStudybox')}</h4>
                      <div className="space-y-2">
                        <Link href="/avantages" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.ourAdvantages')}</Link>
                        <Link href="/qualite" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.qualityCommitment')}</Link>
                        <Link href="/temoignages" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.studentTestimonials')}</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Actualités avec sous-menu organisé */}
              <div className="border-t border-gray-300">
                <button
                  onClick={() => setMobileNewsOpen(!mobileNewsOpen)}
                  className="w-full flex items-center justify-between py-4 text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  <span>{t('nav.news')}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileNewsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileNewsOpen && (
                  <div className="pb-4 space-y-6 animate-[slideDown_0.3s_ease-out]">
                    {/* Section Blog & Articles */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.blogArticles')}</h4>
                      <div className="space-y-2">
                        <Link href="/actualites" className="block py-2 text-xl font-medium text-black hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>{t('nav.allNews')}</Link>
                        <Link href="/actualites#conseils-etudes" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.studyTips')}</Link>
                        <Link href="/actualites#organisation" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.organizationProductivity')}</Link>
                        <Link href="/actualites#vie-etudiante" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.studentLife')}</Link>
                      </div>
                    </div>
                    {/* Section Événements */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.events')}</h4>
                      <div className="space-y-2">
                        <Link href="/actualites#evenements" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.eventsAgenda')}</Link>
                        <Link href="/actualites#marches" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.marketsFairs')}</Link>
                      </div>
                    </div>
                    {/* Section Nouveautés */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.whatsNew')}</h4>
                      <div className="space-y-2">
                        <Link href="/actualites#nouveaux-produits" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.newProducts')}</Link>
                        <Link href="/actualites#mises-a-jour-app" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.appUpdates')}</Link>
                        <Link href="/actualites#partenariats" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.newPartners')}</Link>
                        <Link href="/actualites#newsletter" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{language === 'fr' ? "S'inscrire à la newsletter" : "Subscribe to newsletter"}</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Application avec sous-menu organisé */}
              <div className="border-t border-gray-300">
                <button
                  onClick={() => setMobileAppOpen(!mobileAppOpen)}
                  className="w-full flex items-center justify-between py-4 text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  <span>{t('nav.application')}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileAppOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileAppOpen && (
                  <div className="pb-4 space-y-6 animate-[slideDown_0.3s_ease-out]">
                    {/* Section Télécharger */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.download')}</h4>
                      <div className="space-y-2">
                        <Link href="/application" className="block py-2 text-xl font-medium text-black hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>{t('nav.theApp')}</Link>
                        <Link href="/application/ios" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.downloadIOS')}</Link>
                        <Link href="/application/android" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.downloadAndroid')}</Link>
                        <Link href="/application/web" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.webVersion')}</Link>
                      </div>
                    </div>
                    {/* Section Fonctionnalités */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.features')}</h4>
                      <div className="space-y-2">
                        <Link href="/application/organisation" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.courseOrganization')}</Link>
                        <Link href="/application/planning" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.planningReminders')}</Link>
                        <Link href="/application/notes" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.noteTaking')}</Link>
                      </div>
                    </div>
                    {/* Section Aide */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.helpTutorials')}</h4>
                      <div className="space-y-2">
                        <Link href="/application/guide" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.gettingStarted')}</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* À propos avec sous-menu organisé */}
              <div className="border-t border-gray-300">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between py-4 text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  <span>{t('nav.about')}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileAboutOpen && (
                  <div className="pb-4 space-y-6 animate-[slideDown_0.3s_ease-out]">
                    {/* Section Notre entreprise */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.ourCompany')}</h4>
                      <div className="space-y-2">
                        <Link href="/a-propos" className="block py-2 text-xl font-medium text-black hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>{t('nav.whoAreWe')}</Link>
                        <Link href="/a-propos#histoire" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.ourHistory')}</Link>
                        <Link href="/a-propos#equipe" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.theTeam')}</Link>
                        <Link href="/a-propos#vision" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.ourVision')}</Link>
                      </div>
                    </div>
                    {/* Section Nos valeurs */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.ourValuesMenu')}</h4>
                      <div className="space-y-2">
                        <Link href="/a-propos#mission" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.ourMission')}</Link>
                        <Link href="/a-propos#valeurs" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.ourValues')}</Link>
                      </div>
                    </div>
                    {/* Section Support */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.faqSupport')}</h4>
                      <div className="space-y-2">
                        <Link href="/faq" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.faq')}</Link>
                        <Link href="/support" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.supportSav')}</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Nos partenaires avec sous-menu organisé */}
              <div className="border-t border-gray-300">
                <button
                  onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                  className="w-full flex items-center justify-between py-4 text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  <span>{t('nav.partners')}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${mobilePartnersOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobilePartnersOpen && (
                  <div className="pb-4 space-y-6 animate-[slideDown_0.3s_ease-out]">
                    {/* Section Nos partenaires */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.ourPartners')}</h4>
                      <div className="space-y-2">
                        <Link href="/partenaires" className="block py-2 text-xl font-medium text-black hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>{t('nav.allPartners')}</Link>
                        <Link href="/partenaires#restauration" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.restaurant')}</Link>
                        <Link href="/partenaires#sports" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.sportsLeisure')}</Link>
                        <Link href="/partenaires#services" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.studentServices')}</Link>
                      </div>
                    </div>
                    {/* Section Devenir partenaire */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.becomePartner')}</h4>
                      <div className="space-y-2">
                        <Link href="/partenaires#devenir-partenaire" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.whyJoinUs')}</Link>
                      </div>
                    </div>
                                      </div>
                )}
              </div>
              
              {/* Contact avec sous-menu organisé */}
              <div className="border-t border-gray-300">
                <button
                  onClick={() => setMobileContactOpen(!mobileContactOpen)}
                  className="w-full flex items-center justify-between py-4 text-3xl font-semibold text-black hover:text-gray-600 transition-colors"
                >
                  <span>{t('nav.contact')}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileContactOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileContactOpen && (
                  <div className="pb-4 space-y-6 animate-[slideDown_0.3s_ease-out]">
                    {/* Section Nous contacter */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.getInTouch')}</h4>
                      <div className="space-y-2">
                        <Link href="/contact" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.contactUs')}</Link>
                        <Link href="/contact/formulaire" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.contactForm')}</Link>
                        <Link href="/support" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.supportSav')}</Link>
                        <Link href="/faq" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.faq')}</Link>
                      </div>
                    </div>
                    {/* Section Réseaux Sociaux */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.socialMedia')}</h4>
                      <div className="space-y-2">
                        <Link href="/instagram" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.followInstagram')}</Link>
                        <Link href="/facebook" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.followFacebook')}</Link>
                        <Link href="/tiktok" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>TikTok</Link>
                        <a href="mailto:studybox.be@gmail.com" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Email</a>
                      </div>
                    </div>
                    {/* Section Pro */}
                    <div className="pl-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t('nav.proServices')}</h4>
                      <div className="space-y-2">
                        <Link href="/contact/ecoles" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Offre Écoles</Link>
                        <Link href="/partenaires" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.partnerships')}</Link>
                        <Link href="/contact/presse" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>{t('nav.pressMedia')}</Link>
                        <Link href="/contact/entreprises" className="block py-2 text-lg text-gray-700 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Entreprises</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Langue - Style Apple */}
              <div className="border-t border-gray-300 pt-6 mt-6">
                <div className="pl-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Langue</h4>
                  <select 
                    className="w-full px-4 py-3 rounded-xl text-base font-medium cursor-pointer border-2 border-gray-300 bg-white hover:border-gray-400 transition-colors" 
                    value={language}
                    onChange={(e) => changeLanguage(e.target.value)}
                  >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
