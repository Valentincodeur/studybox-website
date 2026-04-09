import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request) {
  try {
    const { amount, customerEmail, customerName, productName } = await request.json()
    
    // Vérifier si Stripe est configuré
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe n\'est pas configuré. Veuillez ajouter STRIPE_SECRET_KEY dans les variables d\'environnement.' },
        { status: 503 }
      )
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })

    // Créer une session de paiement Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: productName || 'StudyBox - Accès à vie',
              description: 'Toutes les fonctionnalités incluses',
            },
            unit_amount: Math.round(amount * 100), // Convertir en centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerEmail,
      metadata: {
        customer_name: customerName,
      },
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/paiement/succes?code=STDB-${Math.random().toString(36).substr(2, 4).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}&email={CUSTOMER_EMAIL}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/commander`,
    })

    return NextResponse.json({ url: session.url })
    
  } catch (error) {
    console.error('Erreur Stripe:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
