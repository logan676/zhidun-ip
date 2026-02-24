import type { ServiceType } from '../data/services'

interface ServiceTypeGridProps {
  serviceTypes: ServiceType[]
}

export default function ServiceTypeGrid({ serviceTypes }: ServiceTypeGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {serviceTypes.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
        >
          <h3 className="text-lg font-bold text-navy">{item.title}</h3>
          <p className="mt-2 text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
