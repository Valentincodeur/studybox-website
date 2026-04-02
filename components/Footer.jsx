'use client'

import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-[#1d1d1f] text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Mention légale importante */}
          <div className="bg-studybox-blue/20 border border-studybox-blue/30 rounded-2xl px-6 py-4 max-w-3xl text-center">
            <p className="text-white/90 text-sm leading-relaxed">
              <span className="font-semibold">StudyBox est un projet de mini-entreprise pédagogique.</span><br />
              L'achat est réservé aux personnes majeures ou représentants légaux.<br />
              Le produit est destiné aux élèves du primaire/secondaire et aux étudiants du supérieur.
            </p>
          </div>
          
          <p className="text-gray-400">© 2026 StudyBox. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/legal#mentions-legales" className="text-gray-400 hover:text-white transition-colors">
              {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
            </Link>
            <Link href="/legal#cgv" className="text-gray-400 hover:text-white transition-colors">
              {language === 'fr' ? 'Conditions générales de vente' : 'Terms of Sale'}
            </Link>
            <Link href="/legal#confidentialite" className="text-gray-400 hover:text-white transition-colors">
              {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
            </Link>
            <Link href="/legal#cookies" className="text-gray-400 hover:text-white transition-colors">
              {language === 'fr' ? 'Politique cookies' : 'Cookie Policy'}
            </Link>
          </div>
          
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-6 pt-4">
            <a href="https://www.instagram.com/studybox.lje/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61568770320095" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@studybox.be" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="mailto:studybox.be@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Logo LJE - Badge Mini-Entreprise en bas à droite */}
        <div className="absolute bottom-6 right-6 hidden md:block group">
          <div className="relative">
            <div className="absolute inset-0 bg-white/80 rounded-2xl shadow-lg"></div>
            <a 
              href="https://www.lje.be/fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 block"
            >
              <img 
                src="/images/logo-lje.png" 
                alt="Les Jeunes Entreprises - LJE" 
                className="h-20 w-auto opacity-100 hover:opacity-100 transition-all duration-300 hover:scale-110"
              />
            </a>
            {/* Tooltip au survol */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
                Membre des Jeunes Entreprises
              </div>
            </div>
          </div>
        </div>

        {/* Version mobile du logo LJE - Centré */}
        <div className="md:hidden mt-8 flex justify-center">
          <div className="bg-white/80 rounded-2xl px-6 py-4 shadow-lg">
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs text-gray-600">Fièrement membre de</p>
              <div className="relative">
                <div className="absolute inset-0 bg-gray-50/80 rounded-xl"></div>
                <a 
                  href="https://www.lje.be/fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-10 block"
                >
                  <img 
                    src="/images/logo-lje.png" 
                    alt="Les Jeunes Entreprises - LJE" 
                    className="h-20 w-auto opacity-100 hover:opacity-100 transition-all duration-300 hover:scale-110"
                  />
                </a>
              </div>
              <p className="text-sm font-semibold text-gray-900">Les Jeunes Entreprises</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
