import { getCompanyInfo } from '@/lib/cosmic'
import { CompanyInfo } from '@/types'

export const metadata = {
  title: 'About Us - Stellar Dynamics',
  description: 'Learn about Stellar Dynamics and our mission to advance space exploration',
}

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo() as CompanyInfo | null

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            About Stellar Dynamics
          </h1>
          <p className="text-gray-400 text-lg">
            Pioneering the future of space exploration
          </p>
        </div>

        {companyInfo ? (
          <div className="space-y-12">
            {/* Mission Statement */}
            {companyInfo.metadata?.mission_statement && (
              <div className="bg-secondary-light p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {companyInfo.metadata.mission_statement}
                </p>
              </div>
            )}

            {/* Vision Statement */}
            {companyInfo.metadata?.vision_statement && (
              <div className="bg-secondary-light p-8 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-accent">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {companyInfo.metadata.vision_statement}
                </p>
              </div>
            )}

            {/* History */}
            {companyInfo.metadata?.history && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our History</h2>
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {companyInfo.metadata.history}
                </p>
              </div>
            )}

            {/* Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyInfo.metadata?.founded_year && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Founded</p>
                  <p className="text-2xl font-bold text-primary">{companyInfo.metadata.founded_year}</p>
                </div>
              )}
              {companyInfo.metadata?.headquarters && (
                <div className="bg-secondary-light p-6 rounded-lg border border-gray-800">
                  <p className="text-gray-400 text-sm mb-2">Headquarters</p>
                  <p className="text-2xl font-bold text-primary">{companyInfo.metadata.headquarters}</p>
                </div>
              )}
            </div>

            {/* Values */}
            {companyInfo.metadata?.values && companyInfo.metadata.values.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyInfo.metadata.values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3 bg-secondary-light p-6 rounded-lg border border-gray-800">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-lg">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl">Company information coming soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}