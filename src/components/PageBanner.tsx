import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface PageBannerProps {
  title: string
  breadcrumbs: BreadcrumbItem[]
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-r from-navy-dark to-navy py-16 md:py-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {item.path ? (
                <Link to={item.path} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
