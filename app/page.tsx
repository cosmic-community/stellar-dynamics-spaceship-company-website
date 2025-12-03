import Link from 'next/link'
import { getSpacecraft, getTestimonials, getMissionServices } from '@/lib/cosmic'
import { Spacecraft, Testimonial, MissionService } from '@/types'
import SpacecraftCard from '@/components/SpacecraftCard'
import TestimonialCard from '@/components/TestimonialCard'
import ServiceCard from '@/components/ServiceCard'

export default async function HomePage() {
  const spacecraft = await getSpacecraft() as Spacecraft[]
  const testimonials = await getTestimonials() as Testimonial[]
  const services = await getMissionServices() as MissionService[]

  // Get featured spacecraft (first 3)
  const featuredSpacecraft = spacecraft.slice(0, 3)
  
  // Get featured testimonials (first 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  
  // Get featured services (first 3)
  const featuredServices = services.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop&auto=format,compress')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Welcome to Stellar Dynamics
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Pioneering the future of space exploration with cutting-edge spacecraft technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/spacecraft" className="btn-primary">
              Explore Fleet
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Spacecraft */}
      <section className="py-16 px-4 bg-secondary-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Spacecraft
            </h2>
            <p className="text-gray-400 text-lg">
              Discover our most advanced spacecraft models
            </p>
          </div>

          {featuredSpacecraft.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {featuredSpacecraft.map((ship) => (
                  <SpacecraftCard key={ship.id} spacecraft={ship} />
                ))}
              </div>
              <div className="text-center">
                <Link href="/spacecraft" className="btn-primary">
                  View All Spacecraft
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p>No spacecraft available at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Mission Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Mission Services
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive solutions for all your space travel needs
            </p>
          </div>

          {featuredServices.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {featuredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
              <div className="text-center">
                <Link href="/services" className="btn-primary">
                  View All Services
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p>Services information coming soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-secondary-light/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg">
              Trusted by organizations worldwide
            </p>
          </div>

          {featuredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p>Testimonials coming soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Explore the Stars?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your space mission requirements
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}