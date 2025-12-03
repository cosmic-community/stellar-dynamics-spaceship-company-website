import { getSpacecraft } from '@/lib/cosmic'
import { Spacecraft } from '@/types'
import SpacecraftCard from '@/components/SpacecraftCard'

export const metadata = {
  title: 'Our Fleet - Stellar Dynamics',
  description: 'Browse our complete fleet of advanced spacecraft models',
}

export default async function SpacecraftPage() {
  const spacecraft = await getSpacecraft() as Spacecraft[]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Our Spacecraft Fleet
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our complete range of cutting-edge spacecraft, each designed with precision engineering and innovative technology
          </p>
        </div>

        {spacecraft.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spacecraft.map((ship) => (
              <SpacecraftCard key={ship.id} spacecraft={ship} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl">No spacecraft available at the moment.</p>
            <p className="mt-2">Check back soon for our latest models!</p>
          </div>
        )}
      </div>
    </div>
  )
}