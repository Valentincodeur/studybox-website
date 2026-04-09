import { NextResponse } from 'next/server'

// Webhook appelé automatiquement après un paiement réussi
// (Stripe, PayPal, etc.)
export async function POST(request) {
  try {
    const paymentData = await request.json()
    
    // TODO: Vérifier la signature du webhook pour la sécurité
    // Exemple avec Stripe:
    /*
    const sig = request.headers.get('stripe-signature')
    const event = stripe.webhooks.constructEvent(
      await request.text(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
    */
    
    console.log('Webhook reçu:', paymentData)
    
    // Vérifier que le paiement est réussi
    if (paymentData.status === 'succeeded' || paymentData.status === 'completed') {
      const email = paymentData.customer_email || paymentData.payer_email
      const paymentId = paymentData.id || paymentData.payment_id
      
      if (!email) {
        console.error('Email manquant dans le paiement')
        return NextResponse.json({ 
          error: 'Email manquant' 
        }, { status: 400 })
      }
      
      // Assigner automatiquement un code et l'envoyer par email
      const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
      const response = await fetch(`${baseUrl}/api/codes/assign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email, 
          paymentId: paymentId 
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        console.log(`✅ Code ${data.code} envoyé et désactivé pour ${email}`)
        
        // Retourner l'URL de redirection avec le code
        const redirectUrl = `${baseUrl}/paiement/succes?code=${data.code}&email=${encodeURIComponent(email)}`
        
        return NextResponse.json({ 
          received: true,
          success: true,
          redirect_url: redirectUrl,
          code: data.code,
          message: 'Paiement traité avec succès'
        })
      } else {
        console.error('❌ Erreur lors de l\'assignation du code:', data.error)
        return NextResponse.json({ 
          received: true,
          success: false,
          error: data.error
        }, { status: 400 })
      }
    }
    
    return NextResponse.json({ 
      received: true,
      message: 'Webhook traité avec succès'
    })
    
  } catch (error) {
    console.error('Erreur webhook:', error)
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}

// Pour tester le webhook manuellement
export async function GET(request) {
  return NextResponse.json({ 
    message: 'Webhook endpoint actif',
    info: 'Utilisez POST pour envoyer des événements de paiement'
  })
}
