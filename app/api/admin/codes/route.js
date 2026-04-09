import { NextResponse } from 'next/server'

// Liste tous les codes avec filtres
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') // 'available', 'sent', 'expired'
    const search = searchParams.get('search') // Recherche par code ou email
    
    // TODO: Récupérer depuis votre base de données
    /*
    let query = {}
    if (status && status !== 'all') {
      query.status = status
    }
    if (search) {
      query.$or = [
        { code: { $regex: search, $options: 'i' } },
        { assigned_to_email: { $regex: search, $options: 'i' } }
      ]
    }
    
    const codes = await db.collection('access_codes')
      .find(query)
      .sort({ created_at: -1 })
      .toArray()
    */
    
    // Simulation avec des données d'exemple
    const allCodes = [
      {
        id: '1',
        code: 'STUDY-A1B2-C3D4-E5F6',
        status: 'available',
        assigned_to_email: null,
        assigned_at: null,
        sent_at: null,
        payment_id: null,
        created_at: Date.now() - 86400000,
        expires_at: Date.now() + 31536000000,
        notes: ''
      },
      {
        id: '2',
        code: 'STUDY-X9Y8-Z7W6-V5U4',
        status: 'sent',
        assigned_to_email: 'user@example.com',
        assigned_at: Date.now() - 3600000,
        sent_at: Date.now() - 3600000,
        payment_id: 'pay_123456',
        created_at: Date.now() - 172800000,
        expires_at: Date.now() + 31536000000,
        notes: ''
      },
      {
        id: '3',
        code: 'STUDY-M5N6-P7Q8-R9S0',
        status: 'sent',
        assigned_to_email: 'test@studybox.com',
        assigned_at: Date.now() - 7200000,
        sent_at: Date.now() - 7200000,
        payment_id: 'pay_789012',
        created_at: Date.now() - 259200000,
        expires_at: Date.now() + 31536000000,
        notes: ''
      }
    ]
    
    // Filtrer par status
    let codes = allCodes
    if (status && status !== 'all') {
      codes = codes.filter(c => c.status === status)
    }
    
    // Filtrer par recherche
    if (search) {
      codes = codes.filter(c => 
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        (c.assigned_to_email && c.assigned_to_email.toLowerCase().includes(search.toLowerCase()))
      )
    }
    
    // Calculer les statistiques
    const stats = {
      total: allCodes.length,
      available: allCodes.filter(c => c.status === 'available').length,
      sent: allCodes.filter(c => c.status === 'sent').length,
      expired: allCodes.filter(c => c.status === 'expired').length
    }
    
    return NextResponse.json({ 
      codes,
      stats,
      count: codes.length
    })
    
  } catch (error) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}

// Importer des codes manuellement (pour vous)
export async function POST(request) {
  try {
    const { codes } = await request.json()
    
    if (!Array.isArray(codes) || codes.length === 0) {
      return NextResponse.json({ 
        error: 'Tableau de codes requis' 
      }, { status: 400 })
    }
    
    // Valider et formater les codes
    const formattedCodes = codes.map(code => ({
      code: code.trim().toUpperCase(),
      status: 'available',
      assigned_to_email: null,
      assigned_at: null,
      sent_at: null,
      payment_id: null,
      created_at: Date.now(),
      expires_at: Date.now() + (365 * 24 * 60 * 60 * 1000), // 1 an
      notes: ''
    }))
    
    // TODO: Insérer dans votre base de données
    /*
    await db.collection('access_codes').insertMany(formattedCodes)
    */
    
    console.log(`${formattedCodes.length} codes importés`)
    
    return NextResponse.json({ 
      success: true,
      count: formattedCodes.length,
      message: `${formattedCodes.length} codes importés avec succès`
    })
    
  } catch (error) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}
