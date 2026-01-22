import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email, message, type } = await request.json()

    if (!email || !message || !type) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    const subject = type === 'problem' 
      ? '🔴 Signalement de problème - Application StudyBox'
      : '💡 Suggestion de fonctionnalité - Application StudyBox'

    const emailContent = `
      <h2>${type === 'problem' ? 'Signalement de problème' : 'Suggestion de fonctionnalité'}</h2>
      <p><strong>Email de l'utilisateur:</strong> ${email}</p>
      <hr />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr />
      <p><em>Envoyé depuis le site StudyBox</em></p>
    `

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'StudyBox <onboarding@resend.dev>',
        to: 'studybox.lje@gmail.com',
        reply_to: email,
        subject: subject,
        html: emailContent,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API error:', errorData)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
