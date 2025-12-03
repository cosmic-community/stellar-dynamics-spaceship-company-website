import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const photo = member.metadata?.photo

  return (
    <div className="bg-secondary-light rounded-lg overflow-hidden border border-gray-800 card-hover">
      {/* Photo */}
      <div className="relative h-80 overflow-hidden">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={member.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <svg className="w-24 h-24 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-1">
          {member.title}
        </h3>
        
        {member.metadata?.role && (
          <p className="text-primary text-sm font-medium mb-3">
            {member.metadata.role}
          </p>
        )}

        {member.metadata?.bio && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {member.metadata.bio}
          </p>
        )}

        {/* Expertise */}
        {member.metadata?.expertise && member.metadata.expertise.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {member.metadata.expertise.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Social Links */}
        {(member.metadata?.email || member.metadata?.linkedin) && (
          <div className="flex gap-3 pt-4 border-t border-gray-800">
            {member.metadata.email && (
              <a
                href={`mailto:${member.metadata.email}`}
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
            {member.metadata.linkedin && (
              <a
                href={member.metadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}