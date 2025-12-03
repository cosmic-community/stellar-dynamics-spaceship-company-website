import { getMissionServices } from '@/lib/cosmic'
import { MissionService } from '@/types'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Mission Services - Stellar Dynamics',
  description: 'Explore our comprehensive space mission services',
}

export default async function ServicesPage() {
  const services = await getMissionServices() as MissionService[]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Mission Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your space travel and exploration needs
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl">Services information coming soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}