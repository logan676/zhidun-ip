export interface CompanyInfo {
  name: string
  slogan: string
  phone: string
  email: string
  address: string
  businessHours: string
}

export const companyInfo: CompanyInfo = {
  name: '知盾知识产权',
  slogan: '守护创新，捍卫智权',
  phone: '400-888-8888',
  email: 'info@zhidun-ip.com',
  address: '北京市海淀区中关村大街1号知识产权大厦18层',
  businessHours: '周一至周五 9:00-18:00',
}

export interface Stat {
  label: string
  value: string
  suffix: string
}

export const stats: Stat[] = [
  { label: '服务企业', value: '5000', suffix: '+' },
  { label: '代理案件', value: '20000', suffix: '+' },
  { label: '行业经验', value: '15', suffix: '年' },
  { label: '专业团队', value: '50', suffix: '+' },
]

export interface Advantage {
  title: string
  description: string
}

export const advantages: Advantage[] = [
  {
    title: '专业团队',
    description: '拥有资深专利代理师、商标代理人和知识产权律师',
  },
  {
    title: '高效服务',
    description: '标准化流程，快速响应，全程跟踪',
  },
  {
    title: '成功率高',
    description: '专利授权率和商标注册成功率行业领先',
  },
  {
    title: '全方位保护',
    description: '从申请到维权，提供一站式知识产权保护方案',
  },
]

export interface TeamMember {
  name: string
  title: string
  description: string
}

export const teamMembers: TeamMember[] = [
  {
    name: '张明辉',
    title: '创始人/首席专利代理师',
    description: '20年知识产权行业经验',
  },
  {
    name: '李思远',
    title: '商标事务总监',
    description: '15年商标代理经验',
  },
  {
    name: '王雅琴',
    title: '法律服务总监',
    description: '12年知识产权诉讼经验',
  },
  {
    name: '陈志强',
    title: '版权事务总监',
    description: '10年版权代理经验',
  },
]

export interface Milestone {
  year: string
  description: string
}

export const milestones: Milestone[] = [
  { year: '2009', description: '知盾知识产权正式成立' },
  { year: '2012', description: '获得国家知识产权局认定代理资质' },
  { year: '2015', description: '累计服务企业超过1000家' },
  { year: '2018', description: '荣获全国优秀专利代理机构称号' },
  { year: '2021', description: '成立法律服务部门，提供全方位知产保护' },
  { year: '2024', description: '累计代理案件突破20000件' },
]
