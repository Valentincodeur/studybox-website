import { NextResponse } from 'next/server'
import codesData from '@/data/codes-studybox.json'

// Importer automatiquement les codes du fichier JSON
export async function POST(request) {
  try {
    const codes = codesData.codes
    
    if (!codes || codes.length === 0) {
      return NextResponse.json({ 
        error: 'Aucun code trouvé dans le fichier' 
      }, { status: 400 })
    }
    
    // Formater les codes pour la base de données
    const formattedCodes = codes.map(code => ({
      code: code.trim().toUpperCase(),
      status: 'available',
      assigned_to_email: null,
      assigned_at: null,
      sent_at: null,
      payment_id: null,
      created_at: Date.now(),
      expires_at: Date.now() + (365 * 24 * 60 * 60 * 1000), // 1 an
      notes: 'Importé depuis codes-studybox.json'
    }))
    
    // TODO: Insérer dans votre base de données
    /*
    // Exemple avec Firebase/Firestore:
    const batch = db.batch()
    formattedCodes.forEach(code => {
      const docRef = db.collection('access_codes').doc()
      batch.set(docRef, code)
    })
    await batch.commit()
    
    // Exemple avec MongoDB:
    await db.collection('access_codes').insertMany(formattedCodes)
    */
    
    console.log(`✅ ${formattedCodes.length} codes importés depuis le fichier JSON`)
    
    return NextResponse.json({ 
      success: true,
      count: formattedCodes.length,
      codes: formattedCodes,
      message: `${formattedCodes.length} codes importés avec succès`
    })
    
  } catch (error) {
    console.error('Erreur import:', error)
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}

// Vérifier combien de codes sont disponibles
export async function GET(request) {
  try {
    return NextResponse.json({ 
      total: codesData.total,
      codes_available: codesData.codes.length,
      file: 'codes-studybox.json'
    })
  } catch (error) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}
