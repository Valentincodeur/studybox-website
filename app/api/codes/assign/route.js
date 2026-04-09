import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Charger et gérer les codes depuis le fichier JSON
function loadCodes() {
  const filePath = path.join(process.cwd(), 'data', 'codes-studybox.json')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
}

function saveCodes(data) {
  const filePath = path.join(process.cwd(), 'data', 'codes-studybox.json')
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
}

// Fonction pour envoyer l'email avec le code
async function sendCodeEmail(email, code) {
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
        .code-box { background: #f3f4f6; border: 2px dashed #0ea5e9; padding: 20px; margin: 20px 0; text-align: center; border-radius: 8px; }
        .code { font-size: 28px; font-weight: bold; color: #0ea5e9; letter-spacing: 2px; font-family: 'Courier New', monospace; }
        .button { display: inline-block; background: #0ea5e9; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
        .warning { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Bienvenue sur StudyBox !</h1>
        </div>
        <div class="content">
          <p>Bonjour,</p>
          <p>Merci pour votre achat ! Votre paiement a été confirmé avec succès.</p>
          
          <p><strong>Voici votre code d'accès unique :</strong></p>
          
          <div class="code-box">
            <div class="code">${code}</div>
          </div>
          
          <div class="warning">
            <strong>⚠️ Important :</strong> Ce code est personnel et ne peut être utilisé qu'une seule fois. Ne le partagez avec personne.
          </div>
          
          <p><strong>Comment utiliser votre code :</strong></p>
          <ol>
            <li>Téléchargez l'application StudyBox (iOS ou Android)</li>
            <li>Créez votre compte avec cette adresse email : <strong>${email}</strong></li>
            <li>Entrez votre code d'accès lors de l'inscription</li>
            <li>Commencez à étudier intelligemment !</li>
          </ol>
          
          <div style="text-align: center;">
            <a href="https://studybox.com/download" class="button">Télécharger l'application</a>
          </div>
          
          <p>Si vous avez des questions, n'hésitez pas à nous contacter à <a href="mailto:support@studybox.com">support@studybox.com</a></p>
          
          <p>Bonne étude ! 📚</p>
          <p><strong>L'équipe StudyBox</strong></p>
        </div>
        <div class="footer">
          <p>Ce code expire dans 1 an et ne peut être utilisé qu'une seule fois.</p>
          <p>© ${new Date().getFullYear()} StudyBox. Tous droits réservés.</p>
        </div>
      </div>
    </body>
    </html>
  `
  
  // TODO: Intégrer votre service d'email (Resend, SendGrid, AWS SES, etc.)
  // Exemple avec Resend:
  /*
  const { Resend } = require('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'StudyBox <noreply@studybox.com>',
    to: email,
    subject: '🎉 Votre code d\'accès StudyBox',
    html: emailHTML
  })
  */
  
  // Pour l'instant, on simule l'envoi
  console.log(`Email envoyé à ${email} avec le code ${code}`)
  
  return true
}

export async function POST(request) {
  try {
    const { email, paymentId } = await request.json()
    
    if (!email || !paymentId) {
      return NextResponse.json({ 
        error: 'Email et paymentId requis' 
      }, { status: 400 })
    }
    
    // 1. Charger les codes depuis le fichier JSON
    const codesData = loadCodes()
    
    // 2. Trouver le premier code disponible
    const availableCodeIndex = codesData.codes.findIndex(code => 
      typeof code === 'string' // Code encore disponible (pas un objet)
    )
    
    if (availableCodeIndex === -1) {
      return NextResponse.json({ 
        error: 'Aucun code disponible. Stock épuisé. Veuillez contacter le support.' 
      }, { status: 400 })
    }
    
    const codeString = codesData.codes[availableCodeIndex]
    
    // 3. Envoyer l'email AVANT de marquer le code comme utilisé
    const emailSent = await sendCodeEmail(email, codeString)
    
    if (!emailSent) {
      return NextResponse.json({ 
        error: 'Erreur lors de l\'envoi de l\'email' 
      }, { status: 500 })
    }
    
    // 4. Marquer le code comme "sent" (désactivé) dans le fichier JSON
    codesData.codes[availableCodeIndex] = {
      code: codeString,
      status: 'sent',
      assigned_to_email: email,
      assigned_at: new Date().toISOString(),
      sent_at: new Date().toISOString(),
      payment_id: paymentId
    }
    
    // 5. Sauvegarder les modifications
    saveCodes(codesData)
    
    console.log(`✅ Code ${codeString} envoyé et désactivé pour ${email}`)
    console.log(`📊 Codes restants: ${codesData.codes.filter(c => typeof c === 'string').length}/${codesData.total}`)
    
    return NextResponse.json({ 
      success: true, 
      code: codeString,
      remaining: codesData.codes.filter(c => typeof c === 'string').length,
      message: 'Code envoyé par email et désactivé avec succès'
    })
    
  } catch (error) {
    console.error('❌ Erreur:', error)
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}
