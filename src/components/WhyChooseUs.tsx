import { CheckCircle } from 'lucide-react'
import { advantages } from '../data/company'

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-navy">
          为什么选择知盾
        </h2>
        <p className="mt-4 text-center text-gray-600">
          值得信赖的知识产权服务伙伴
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                <CheckCircle className="h-8 w-8 text-gold" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">
                {advantage.title}
              </h3>
              <p className="mt-2 text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
