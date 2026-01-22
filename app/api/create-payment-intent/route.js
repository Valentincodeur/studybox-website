import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialiser Stripe avec votre clé secrète
// IMPORTANT: Ajoutez votre clé Stripe dans Vercel: STRIPE_SECRET_KEY=sk_live_...
const stripeKey = process.env.STRIPE_SECRET_KEY

export async function POST(request) {
  try {
    // Vérifier si Stripe est configuré
    if (!stripeKey) {
      return NextResponse.json(
        { error: 'Stripe n\'est pas encore configuré. Veuillez ajouter vos clés dans les variables d\'environnement.' },
        { status: 503 }
      )
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    const { amount, currency = 'eur', metadata = {} } = await request.json()

    // Créer un Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe utilise les centimes
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error('Erreur Stripe:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
