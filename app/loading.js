export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-950">
      <div className="text-center">
        <div className="relative">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-cyan-500/20 border-t-cyan-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
          </div>
        </div>
        <p className="mt-6 text-white font-medium animate-pulse">Chargement...</p>
      </div>
    </div>
  )
}
