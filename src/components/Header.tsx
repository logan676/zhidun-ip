import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { navItems } from '../data/navigation'
import { companyInfo } from '../data/company'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-navy">知盾</span>
          <span className="text-sm text-navy-light">知识产权</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative pb-1 text-sm font-medium transition-colors duration-200 hover:text-gold ${
                location.pathname === item.path
                  ? 'text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold'
                  : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={`tel:${companyInfo.phone}`}
          className="hidden items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gold-light md:flex"
        >
          <Phone className="h-4 w-4" />
          {companyInfo.phone}
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="text-navy md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col border-t border-gray-100 bg-white px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`border-b border-gray-50 py-3 text-sm font-medium transition-colors duration-200 hover:text-gold ${
                location.pathname === item.path ? 'text-gold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${companyInfo.phone}`}
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gold-light"
          >
            <Phone className="h-4 w-4" />
            {companyInfo.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
