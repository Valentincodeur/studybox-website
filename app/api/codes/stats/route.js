import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Charger les codes depuis le fichier JSON
function loadCodes() {
  const filePath = path.join(process.cwd(), 'data', 'codes-studybox.json')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
}

// API pour voir les statistiques des codes
export async function GET(request) {
  try {
    const codesData = loadCodes()
    
    const available = codesData.codes.filter(c => typeof c === 'string')
    const used = codesData.codes.filter(c => typeof c === 'object' && c.status === 'sent')
    
    const stats = {
      total: codesData.total,
      available: available.length,
      used: used.length,
      percentage_used: Math.round((used.length / codesData.total) * 100),
      last_codes_used: used.slice(-5).map(c => ({
        code: c.code,
        email: c.assigned_to_email,
        sent_at: c.sent_at
      }))
    }
    
    return NextResponse.json(stats)
    
  } catch (error) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}
