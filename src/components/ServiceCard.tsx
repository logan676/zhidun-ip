import { Link } from 'react-router-dom'
import { FileCheck, Shield, BookOpen, Scale } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  FileCheck,
  Shield,
  BookOpen,
  Scale,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  path: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  path,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <Link
      to={path}
      className="group block rounded-lg border-b-4 border-transparent bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/10">
        {IconComponent && (
          <IconComponent className="h-8 w-8 text-navy" />
        )}
      </div>
      <h3 className="mt-4 text-xl font-bold text-navy">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <span className="mt-4 inline-block text-gold transition-colors duration-300 group-hover:text-gold-light">
        了解更多 &rarr;
      </span>
    </Link>
  )
}
