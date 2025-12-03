import { getSpacecraftBySlug, getSpacecraft } from '@/lib/cosmic'
import { Spacecraft } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const spacecraft = await getSpacecraft() as Spacecraft[]
  return spacecraft.map((ship) => ({
    slug: ship.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const spacecraft = await getSpacecraftBySlug(slug) as Spacecraft | null
  
  if (!spacecraft) {
    return {
      title: 'Spacecraft Not Found - Stellar Dynamics',
    }
  }

  return {
    title: `${spacecraft.title} - Stellar Dynamics`,
    description: spacecraft.metadata?.description || `Explore the ${spacecraft.title} spacecraft`,
  }
}

export default async function SpacecraftDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const spacecraft = await getSpacecraftBySlug(slug) as Spacecraft | null

  if (!spacecraft) {
    notFound()
  }

  const specs = spacecraft.metadata?.specifications || {}
  const features = spacecraft.metadata?.features || []
  const images = spacecraft.metadata?.images || []
  const mainImage = images[0]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/spacecraft"
          className="inline-flex items-center text-primary hover:text-accent mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Fleet
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            {mainImage ? (
              <img
                src={`${mainImage.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                alt={spacecraft.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-full h-96 bg-secondary-light rounded-lg flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
            
            {spacecraft.metadata?.status && (
              <span className="absolute top-4 right-4 bg-primary px-4 py-2 rounded-full text-sm font-semibold">
                {spacecraft.metadata.status}
              </span>
            )}
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              {spacecraft.title}
            </h1>
            
            {spacecraft.metadata?.category && (
              <p className="text-accent text-lg mb-4">{spacecraft.metadata.category}</p>
            )}

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {spacecraft.metadata?.description}
            </p>

            {spacecraft.metadata?.price && (
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-1">Starting at</p>
                <p className="text-4xl font-bold text-primary">
                  ${spacecraft.metadata.price.toLocaleString()}
                </p>
              </div>
            )}

            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
          </div>
        </div>

        {/* Specifications */}
        {Object.keys(specs).length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gradient">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specs.length && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Length</p>
                  <p className="text-xl font-semibold">{specs.length}</p>
                </div>
              )}
              {specs.width && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Width</p>
                  <p className="text-xl font-semibold">{specs.width}</p>
                </div>
              )}
              {specs.height && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Height</p>
                  <p className="text-xl font-semibold">{specs.height}</p>
                </div>
              )}
              {specs.weight && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Weight</p>
                  <p className="text-xl font-semibold">{specs.weight}</p>
                </div>
              )}
              {specs.max_speed && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Max Speed</p>
                  <p className="text-xl font-semibold">{specs.max_speed}</p>
                </div>
              )}
              {specs.crew_capacity !== undefined && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Crew Capacity</p>
                  <p className="text-xl font-semibold">{specs.crew_capacity}</p>
                </div>
              )}
              {specs.passenger_capacity !== undefined && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Passenger Capacity</p>
                  <p className="text-xl font-semibold">{specs.passenger_capacity}</p>
                </div>
              )}
              {specs.cargo_capacity && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Cargo Capacity</p>
                  <p className="text-xl font-semibold">{specs.cargo_capacity}</p>
                </div>
              )}
              {specs.range && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Range</p>
                  <p className="text-xl font-semibold">{specs.range}</p>
                </div>
              )}
              {specs.propulsion_system && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Propulsion System</p>
                  <p className="text-xl font-semibold">{specs.propulsion_system}</p>
                </div>
              )}
              {specs.power_source && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Power Source</p>
                  <p className="text-xl font-semibold">{specs.power_source}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gradient">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-secondary-light p-4 rounded-lg border border-gray-800">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}