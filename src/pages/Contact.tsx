import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { companyInfo } from '../data/company'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactCards = [
    { icon: Phone, title: '联系电话', value: companyInfo.phone },
    { icon: Mail, title: '电子邮箱', value: companyInfo.email },
    { icon: MapPin, title: '公司地址', value: companyInfo.address },
    { icon: Clock, title: '工作时间', value: companyInfo.businessHours },
  ]

  return (
    <>
      <PageBanner
        title="联系我们"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '联系我们' }]}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column: Contact Info Cards */}
            <div className="space-y-6">
              {contactCards.map((card) => (
                <div key={card.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <card.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{card.title}</h3>
                    <p className="text-gray-600">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-navy">在线留言</h2>

              {submitted && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-700">
                  留言已提交，我们会尽快与您联系！
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    联系电话 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-navy">
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gold py-3 text-white transition-colors hover:bg-gold-light"
                >
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-navy">公司位置</h2>
          {/* Replace with actual map embed */}
          <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-gray-200">
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <MapPin className="h-8 w-8" />
              <span>地图加载中...</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
