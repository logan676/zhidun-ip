import { Link } from 'react-router-dom'
import { companyInfo } from '../data/company'

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-gold to-gold-light py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          需要知识产权服务？立即联系我们
        </h2>
        <p className="mt-4 text-xl text-white">{companyInfo.phone}</p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-navy transition-all duration-300 hover:bg-gray-100"
        >
          立即咨询
        </Link>
      </div>
    </section>
  )
}
