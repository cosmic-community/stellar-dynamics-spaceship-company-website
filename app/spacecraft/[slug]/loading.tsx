export default function SpacecraftDetailLoading() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="h-6 bg-gray-800 rounded w-32 mb-8 animate-pulse"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="h-96 bg-gray-800 rounded-lg animate-pulse"></div>
          
          <div className="space-y-4">
            <div className="h-12 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-800 rounded w-32 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
            </div>
            <div className="h-16 bg-gray-800 rounded w-1/2 animate-pulse"></div>
            <div className="h-12 bg-gray-800 rounded w-40 animate-pulse"></div>
          </div>
        </div>
        
        <div>
          <div className="h-10 bg-gray-800 rounded w-64 mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                <div className="h-4 bg-gray-800 rounded w-20 mb-2 animate-pulse"></div>
                <div className="h-6 bg-gray-800 rounded w-32 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}