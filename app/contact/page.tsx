import { getContactInfo } from '@/lib/cosmic'
import { ContactInfo } from '@/types'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - Stellar Dynamics',
  description: 'Get in touch with Stellar Dynamics for inquiries and consultations',
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo() as ContactInfo | null

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            Get in touch with our team for inquiries and consultations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
            
            {contactInfo ? (
              <div className="space-y-6">
                {contactInfo.metadata?.email && (
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <a href={`mailto:${contactInfo.metadata.email}`} className="text-lg text-primary hover:text-accent transition-colors">
                        {contactInfo.metadata.email}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.metadata?.phone && (
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <a href={`tel:${contactInfo.metadata.phone}`} className="text-lg text-primary hover:text-accent transition-colors">
                        {contactInfo.metadata.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.metadata?.address && (
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Address</p>
                      <p className="text-lg text-gray-300 whitespace-pre-line">
                        {contactInfo.metadata.address}
                      </p>
                    </div>
                  </div>
                )}

                {contactInfo.metadata?.office_hours && (
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Office Hours</p>
                      <p className="text-lg text-gray-300 whitespace-pre-line">
                        {contactInfo.metadata.office_hours}
                      </p>
                    </div>
                  </div>
                )}

                {/* Social Media Links */}
                {contactInfo.metadata?.social_media && (
                  <div className="pt-6 border-t border-gray-800">
                    <p className="text-gray-400 text-sm mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      {contactInfo.metadata.social_media.twitter && (
                        <a
                          href={contactInfo.metadata.social_media.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors"
                        >
                          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      )}
                      {contactInfo.metadata.social_media.linkedin && (
                        <a
                          href={contactInfo.metadata.social_media.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary/20 p-3 rounded-lg hover:bg-primary/30 transition-colors"
                        >
                          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400">Contact information coming soon!</p>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}