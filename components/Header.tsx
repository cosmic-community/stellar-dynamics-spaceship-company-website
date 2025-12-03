import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-secondary/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all"></div>
              <svg className="w-10 h-10 text-primary relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86-.95-6.54-4.53-6.9-8.56L12 7.14l6.9 4.3c-.36 4.03-3.04 7.61-6.9 8.56z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Stellar Dynamics</h1>
              <p className="text-xs text-gray-400">Space Technology</p>
            </div>
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  )
}