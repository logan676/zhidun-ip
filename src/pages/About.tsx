import { User, Award } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Timeline from '../components/Timeline'
import { teamMembers, milestones } from '../data/company'

const certifications = [
  '国家知识产权局认定代理资质',
  '全国优秀专利代理机构',
  'ISO9001质量管理体系认证',
  '中华商标协会会员单位',
]

export default function About() {
  return (
    <>
      <PageBanner
        title="关于我们"
        breadcrumbs={[{ label: '首页', path: '/' }, { label: '关于我们' }]}
      />

      {/* Section 1: 公司简介 */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">
            关于知盾知识产权
          </h2>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                知盾知识产权成立于2009年，是一家专注于为企业和个人提供全方位知识产权服务的专业机构。自创立以来，我们始终秉承"守护创新，捍卫智权"的使命，致力于帮助客户保护其创新成果和品牌资产。
              </p>
              <p>
                公司总部位于北京市海淀区中关村，汇聚了一批经验丰富的专利代理师、商标代理人和知识产权律师。凭借对行业的深刻理解和严谨的工作态度，我们已为超过5000家企业提供了优质的知识产权服务，累计代理案件超过20000件。
              </p>
              <p>
                我们提供涵盖专利申请、商标注册、版权登记、知识产权诉讼等全链条服务，以标准化流程和高效响应，确保客户的每一项知识产权都得到专业、可靠的保护。
              </p>
            </div>
            <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
              <span className="text-lg text-gray-400">公司形象</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 团队介绍 */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">
            专业团队
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-navy/10">
                  <User className="h-10 w-10 text-navy/40" />
                </div>
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm text-gold">{member.title}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 企业资质 */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">
            资质荣誉
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <Award className="h-7 w-7 text-gold" />
                </div>
                <p className="font-medium text-navy">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 发展历程 */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-navy">
            发展历程
          </h2>
          <Timeline milestones={milestones} />
        </div>
      </section>
    </>
  )
}
