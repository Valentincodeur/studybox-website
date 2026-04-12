import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'
import LayoutContent from '../components/LayoutContent'

export const metadata = {
  title: 'StudyBox - L\'outil complet pour organiser, étudier et réussir',
  description: 'Une box élégante, utile et conçue pour faciliter le quotidien scolaire.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  )
}
