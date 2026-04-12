'use client'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Une erreur est survenue
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message || 'Quelque chose s\'est mal passé'}
        </p>
        <button
          onClick={() => reset()}
          className="bg-studybox-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
