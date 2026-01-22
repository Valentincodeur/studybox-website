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
      <body>
        <LanguageProvider>
          <LayoutContent>{children}</LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  )
}
