import { MissionService } from '@/types'

interface ServiceCardProps {
  service: MissionService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const image = service.metadata?.image
  const features = service.metadata?.features || []

  return (
    <div className="bg-secondary-light rounded-lg overflow-hidden border border-gray-800 card-hover">
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-100">
            {service.title}
          </h3>
          {service.metadata?.service_type && (
            <span className="text-xs text-accent font-medium whitespace-nowrap ml-2">
              {service.metadata.service_type}
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm mb-4">
          {service.metadata?.description}
        </p>

        {/* Duration & Price Range */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {service.metadata?.duration && (
            <div>
              <p className="text-xs text-gray-500 mb-1">Duration</p>
              <p className="text-sm font-semibold text-gray-300">
                {service.metadata.duration}
              </p>
            </div>
          )}
          {service.metadata?.price_range && (
            <div>
              <p className="text-xs text-gray-500 mb-1">Price Range</p>
              <p className="text-sm font-semibold text-primary">
                {service.metadata.price_range}
              </p>
            </div>
          )}
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 mb-2">Includes:</p>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}