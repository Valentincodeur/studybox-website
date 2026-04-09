'use client'

import { useState, useEffect } from 'react'

export default function AdminCodesPage() {
  const [codes, setCodes] = useState([])
  const [stats, setStats] = useState({ total: 0, available: 0, sent: 0, expired: 0 })
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [generateCount, setGenerateCount] = useState(10)
  const [loading, setLoading] = useState(false)
  const [importText, setImportText] = useState('')
  const [showImport, setShowImport] = useState(false)

  useEffect(() => {
    loadCodes()
  }, [filter, search])

  const loadCodes = async () => {
    const params = new URLSearchParams()
    if (filter !== 'all') params.append('status', filter)
    if (search) params.append('search', search)
    
    const res = await fetch(`/api/admin/codes?${params}`)
    const data = await res.json()
    setCodes(data.codes)
    setStats(data.stats)
  }

  const generateCodes = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/codes/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: generateCount })
      })
      const data = await res.json()
      
      if (data.success) {
        alert(`✅ ${data.count} codes générés avec succès !`)
        loadCodes()
      }
    } catch (error) {
      alert('❌ Erreur: ' + error.message)
    }
    setLoading(false)
  }

  const importCodes = async () => {
    const codesArray = importText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
    
    if (codesArray.length === 0) {
      alert('Aucun code à importer')
      return
    }
    
    setLoading(true)
    try {
      const res = await fetch('/api/admin/codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codes: codesArray })
      })
      const data = await res.json()
      
      if (data.success) {
        alert(`✅ ${data.count} codes importés avec succès !`)
        setImportText('')
        setShowImport(false)
        loadCodes()
      }
    } catch (error) {
      alert('❌ Erreur: ' + error.message)
    }
    setLoading(false)
  }

  const exportCodes = () => {
    const csv = [
      ['Code', 'Status', 'Email', 'Date création', 'Date envoi', 'Payment ID'].join(','),
      ...codes.map(c => [
        c.code,
        c.status,
        c.assigned_to_email || '',
        new Date(c.created_at).toLocaleString(),
        c.sent_at ? new Date(c.sent_at).toLocaleString() : '',
        c.payment_id || ''
      ].join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `studybox-codes-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gestion des codes d'accès</h1>
          <p className="text-gray-600">Gérez tous vos codes StudyBox en un seul endroit</p>
        </div>
        
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-500 text-sm font-medium">Total</div>
                <div className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</div>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-green-600 text-sm font-medium">Disponibles</div>
                <div className="text-3xl font-bold text-green-600 mt-1">{stats.available}</div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-blue-600 text-sm font-medium">Envoyés</div>
                <div className="text-3xl font-bold text-blue-600 mt-1">{stats.sent}</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-red-600 text-sm font-medium">Expirés</div>
                <div className="text-3xl font-bold text-red-600 mt-1">{stats.expired}</div>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Actions rapides</h2>
          <div className="flex flex-wrap gap-4">
            {/* Générer des codes */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={generateCount}
                onChange={(e) => setGenerateCount(parseInt(e.target.value) || 1)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="1000"
              />
              <button
                onClick={generateCodes}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
              >
                {loading ? '⏳ Génération...' : '🎲 Générer des codes'}
              </button>
            </div>
            
            {/* Importer des codes */}
            <button
              onClick={() => setShowImport(!showImport)}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 font-medium transition-colors"
            >
              📥 Importer vos codes
            </button>
            
            {/* Exporter */}
            <button
              onClick={exportCodes}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium transition-colors"
            >
              📤 Exporter en CSV
            </button>
          </div>
          
          {/* Zone d'import */}
          {showImport && (
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold mb-2 text-purple-900">Importer vos codes</h3>
              <p className="text-sm text-purple-700 mb-3">Collez vos codes ci-dessous (un par ligne) :</p>
              <textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder="STUDY-XXXX-XXXX-XXXX&#10;STUDY-YYYY-YYYY-YYYY&#10;STUDY-ZZZZ-ZZZZ-ZZZZ"
                className="w-full h-32 border border-purple-300 rounded-lg p-3 font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={importCodes}
                  disabled={loading || !importText.trim()}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 font-medium transition-colors"
                >
                  Importer
                </button>
                <button
                  onClick={() => { setShowImport(false); setImportText('') }}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 font-medium transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Filtres et recherche */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Filtres par status */}
            <div className="flex gap-2 flex-wrap">
              {[
                { value: 'all', label: 'Tous', color: 'gray' },
                { value: 'available', label: 'Disponibles', color: 'green' },
                { value: 'sent', label: 'Envoyés', color: 'blue' },
                { value: 'expired', label: 'Expirés', color: 'red' }
              ].map(({ value, label, color }) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === value
                      ? `bg-${color}-600 text-white`
                      : `bg-${color}-100 text-${color}-700 hover:bg-${color}-200`
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            
            {/* Recherche */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Rechercher un code ou email..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Liste des codes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Code</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Créé le</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Envoyé le</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Payment ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {codes.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      Aucun code trouvé
                    </td>
                  </tr>
                ) : (
                  codes.map((code, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm font-semibold text-gray-900">
                        {code.code}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          code.status === 'available' ? 'bg-green-100 text-green-800' :
                          code.status === 'sent' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {code.status === 'available' ? '✅ Disponible' :
                           code.status === 'sent' ? '📧 Envoyé' :
                           '⏰ Expiré'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {code.assigned_to_email || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(code.created_at).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {code.sent_at ? new Date(code.sent_at).toLocaleDateString('fr-FR') : '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                        {code.payment_id || '-'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
