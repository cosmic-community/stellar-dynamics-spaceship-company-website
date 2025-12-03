import { getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Our Team - Stellar Dynamics',
  description: 'Meet the expert team behind Stellar Dynamics',
}

export default async function TeamPage() {
  const team = await getTeamMembers() as TeamMember[]

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Meet Our Team
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse group of experts dedicated to advancing space exploration
          </p>
        </div>

        {team.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl">Team information coming soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}