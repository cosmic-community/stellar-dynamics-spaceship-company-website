export default function SpacecraftLoading() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-800 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-800 rounded-lg w-96 mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-secondary-light rounded-lg overflow-hidden border border-gray-800">
              <div className="h-64 bg-gray-800 animate-pulse"></div>
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
                <div className="h-8 bg-gray-800 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}