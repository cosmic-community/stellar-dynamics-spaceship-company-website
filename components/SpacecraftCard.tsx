import Link from 'next/link'
import { Spacecraft } from '@/types'

interface SpacecraftCardProps {
  spacecraft: Spacecraft;
}

export default function SpacecraftCard({ spacecraft }: SpacecraftCardProps) {
  const image = spacecraft.metadata?.images?.[0]

  return (
    <Link href={`/spacecraft/${spacecraft.slug}`} className="group">
      <div className="bg-secondary-light rounded-lg overflow-hidden border border-gray-800 card-hover">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          {image ? (
            <img
              src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={spacecraft.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {/* Status Badge */}
          {spacecraft.metadata?.status && (
            <span className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-semibold">
              {spacecraft.metadata.status}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-primary transition-colors">
              {spacecraft.title}
            </h3>
            {spacecraft.metadata?.category && (
              <span className="text-xs text-accent font-medium">
                {spacecraft.metadata.category}
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {spacecraft.metadata?.description}
          </p>

          {spacecraft.metadata?.price && (
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Starting at</p>
                <p className="text-2xl font-bold text-primary">
                  ${spacecraft.metadata.price.toLocaleString()}
                </p>
              </div>
              <span className="text-primary group-hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}