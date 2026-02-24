import { getServiceById } from '../data/services'
import PageBanner from '../components/PageBanner'
import ServiceTypeGrid from '../components/ServiceTypeGrid'
import ProcessFlow from '../components/ProcessFlow'
import FAQAccordion from '../components/FAQAccordion'

export default function Legal() {
  const service = getServiceById('legal')!

  return (
    <>
      <PageBanner
        title={service.title}
        breadcrumbs={[{ label: '首页', path: '/' }, { label: service.title }]}
      />

      {/* Intro section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Types */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">
            服务类型
          </h2>
          <ServiceTypeGrid serviceTypes={service.serviceTypes} />
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">
            服务流程
          </h2>
          <ProcessFlow steps={service.processSteps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">
            常见问题
          </h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>
    </>
  )
}
