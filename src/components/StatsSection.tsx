import { stats } from '../data/company'

export default function StatsSection() {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-gold md:text-5xl">
                {stat.value}
                <span className="text-3xl md:text-4xl">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
