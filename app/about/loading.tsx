export default function AboutLoading() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-800 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-800 rounded-lg w-96 mx-auto animate-pulse"></div>
        </div>
        
        <div className="space-y-12">
          <div className="bg-secondary-light p-8 rounded-lg border border-gray-800">
            <div className="h-8 bg-gray-800 rounded w-32 mb-4 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
          
          <div className="bg-secondary-light p-8 rounded-lg border border-gray-800">
            <div className="h-8 bg-gray-800 rounded w-32 mb-4 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}