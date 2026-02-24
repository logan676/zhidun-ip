export interface NavItem {
  label: string
  path: string
}

export const navItems: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '专利服务', path: '/patent' },
  { label: '商标服务', path: '/trademark' },
  { label: '版权服务', path: '/copyright' },
  { label: '法律服务', path: '/legal' },
  { label: '关于我们', path: '/about' },
  { label: '联系我们', path: '/contact' },
]
