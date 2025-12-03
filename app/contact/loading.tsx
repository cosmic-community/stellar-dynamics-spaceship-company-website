export default function ContactLoading() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-800 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-800 rounded-lg w-96 mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="h-8 bg-gray-800 rounded w-48 mb-6 animate-pulse"></div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-800 rounded w-20 animate-pulse"></div>
                  <div className="h-6 bg-gray-800 rounded w-3/4 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="h-8 bg-gray-800 rounded w-48 mb-6 animate-pulse"></div>
            <div className="h-12 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-12 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-12 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-32 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-12 bg-gray-800 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}