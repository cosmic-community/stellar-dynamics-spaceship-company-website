import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-light border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient">Stellar Dynamics</h3>
            <p className="text-gray-400 text-sm">
              Pioneering the future of space exploration with cutting-edge spacecraft technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/spacecraft" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-primary">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-primary">Connect</h4>
            <p className="text-gray-400 text-sm mb-2">
              Ready to start your journey?
            </p>
            <Link href="/contact" className="text-primary hover:text-accent text-sm font-semibold transition-colors">
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Stellar Dynamics. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Powered by{' '}
            <a
              href="https://www.cosmicjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}