import { NextResponse } from 'next/server'

// Fonction pour générer un code unique
function generateUniqueCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const segments = []
  
  for (let i = 0; i < 4; i++) {
    let segment = ''
    for (let j = 0; j < 4; j++) {
      segment += chars[Math.floor(Math.random() * chars.length)]
    }
    segments.push(segment)
  }
  
  return `STUDY-${segments.join('-')}`
}

export async function POST(request) {
  try {
    const { count = 10 } = await request.json()
    
    const codes = []
    const expiresAt = Date.now() + (365 * 24 * 60 * 60 * 1000) // 1 an
    
    for (let i = 0; i < count; i++) {
      const code = generateUniqueCode()
      codes.push({
        code: code,
        status: 'available',
        assigned_to_email: null,
        assigned_at: null,
        sent_at: null,
        payment_id: null,
        expires_at: expiresAt,
        created_at: Date.now(),
        notes: ''
      })
    }
    
    // TODO: Sauvegarder dans votre base de données
    // Exemple avec Firebase/Firestore:
    // const batch = db.batch()
    // codes.forEach(code => {
    //   const docRef = db.collection('access_codes').doc()
    //   batch.set(docRef, code)
    // })
    // await batch.commit()
    
    console.log(`${codes.length} codes générés`)
    
    return NextResponse.json({ 
      success: true, 
      codes: codes,
      count: codes.length,
      message: `${codes.length} codes générés avec succès`
    })
  } catch (error) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}
