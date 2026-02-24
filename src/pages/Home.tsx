import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'
import { services } from '../data/services'

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Services Overview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-navy">
            我们的服务
          </h2>
          <p className="mt-4 text-center text-gray-600">
            提供全方位知识产权保护方案
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                path={service.path}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
