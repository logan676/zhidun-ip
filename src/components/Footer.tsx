import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { navItems } from '../data/navigation'
import { companyInfo } from '../data/company'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Company Info */}
          <div>
            <div className="mb-4 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">知盾</span>
              <span className="text-sm text-gray-300">知识产权</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {companyInfo.slogan}。专注知识产权保护，为企业提供专利、商标、版权及法律咨询等一站式专业服务。
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">导航链接</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-gold-light"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-gold-light"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-gray-300">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-gray-400 sm:flex-row lg:px-8">
          <span>&copy; 2024 知盾知识产权 版权所有</span>
          <span>京ICP备XXXXXXXX号</span>
        </div>
      </div>
    </footer>
  )
}
