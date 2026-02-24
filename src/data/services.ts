export interface ServiceType {
  title: string
  description: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: string
  path: string
  serviceTypes: ServiceType[]
  processSteps: ProcessStep[]
  faqs: FAQ[]
}

export const services: ServiceCategory[] = [
  {
    id: 'patent',
    title: '专利服务',
    description: '为企业和个人提供专业的专利申请、审查、维护等全流程服务',
    icon: 'FileCheck',
    path: '/patent',
    serviceTypes: [
      {
        title: '发明专利申请',
        description:
          '针对产品、方法或其改进所提出的新技术方案，提供从检索到授权的全流程代理服务',
      },
      {
        title: '实用新型专利申请',
        description:
          '针对产品的形状、构造或其结合的实用新技术方案，审查周期短、授权速度快',
      },
      {
        title: '外观设计专利申请',
        description:
          '保护产品外观的新设计，包括形状、图案、色彩及其组合的专利申请服务',
      },
      {
        title: '专利无效宣告',
        description:
          '对已授权专利提出无效宣告请求，或应对他人发起的无效宣告程序',
      },
      {
        title: 'PCT国际专利申请',
        description:
          '通过PCT途径向多个国家和地区申请专利保护，助力企业海外知产布局',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: '免费咨询',
        description: '了解您的技术方案，评估专利申请可行性和保护策略',
      },
      {
        step: 2,
        title: '专利检索',
        description: '进行全面的专利文献检索，分析现有技术，评估授权前景',
      },
      {
        step: 3,
        title: '撰写申请文件',
        description: '由资深代理师撰写权利要求书、说明书等申请文件',
      },
      {
        step: 4,
        title: '提交申请',
        description: '向国家知识产权局提交专利申请，获取申请号和受理通知书',
      },
      {
        step: 5,
        title: '审查跟进',
        description: '跟进审查进度，及时答复审查意见通知书',
      },
      {
        step: 6,
        title: '获得授权',
        description: '通过审查后获得专利授权，办理登记手续并领取证书',
      },
    ],
    faqs: [
      {
        question: '发明专利和实用新型专利有什么区别？',
        answer:
          '发明专利保护新的技术方案，包括产品和方法，审查周期约18-24个月，保护期限20年。实用新型专利仅保护产品的形状和构造，审查周期约6-8个月，保护期限10年。发明专利需要经过实质审查，技术含量和保护力度更高。',
      },
      {
        question: '专利申请大概需要多长时间？',
        answer:
          '发明专利从申请到授权通常需要18-24个月，实用新型专利约6-8个月，外观设计专利约4-6个月。如果申请符合条件，可以申请优先审查或快速预审，大幅缩短审查周期。我们会根据您的需求推荐最合适的申请策略。',
      },
      {
        question: '申请专利需要准备哪些材料？',
        answer:
          '申请人需提供技术交底书（包含技术方案的详细描述、技术效果说明等），以及申请人和发明人的身份信息。我们的代理师会基于技术交底书撰写正式的申请文件，整个过程中会与您充分沟通，确保申请文件准确完整地保护您的技术方案。',
      },
    ],
  },
  {
    id: 'trademark',
    title: '商标服务',
    description: '提供商标注册、变更、续展、异议等全方位商标服务',
    icon: 'Shield',
    path: '/trademark',
    serviceTypes: [
      {
        title: '商标注册',
        description:
          '提供商标查询、分类建议、申请材料准备及提交的全流程注册服务',
      },
      {
        title: '商标变更',
        description:
          '办理商标注册人名义、地址或其他注册事项的变更手续',
      },
      {
        title: '商标续展',
        description:
          '在商标有效期届满前办理续展注册，延续商标权利保护',
      },
      {
        title: '商标异议',
        description:
          '对公告期商标提出异议申请，或代理答辩他人提出的商标异议',
      },
      {
        title: '商标转让',
        description:
          '办理商标所有权的合法转让手续，确保转让过程安全合规',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: '商标查询',
        description: '进行商标近似查询，评估注册成功率和风险',
      },
      {
        step: 2,
        title: '准备材料',
        description: '确定商标分类，准备申请所需的各项材料',
      },
      {
        step: 3,
        title: '提交申请',
        description: '向国家商标局提交注册申请，获取受理通知书',
      },
      {
        step: 4,
        title: '形式审查',
        description: '商标局对申请材料进行形式审查，确认符合要求',
      },
      {
        step: 5,
        title: '实质审查',
        description: '审查商标是否符合注册条件，是否与在先权利冲突',
      },
      {
        step: 6,
        title: '公告/注册',
        description: '通过审查后进入公告期，无异议则核准注册并颁发证书',
      },
    ],
    faqs: [
      {
        question: '商标注册需要多长时间？',
        answer:
          '商标注册从提交申请到获得证书通常需要9-12个月。其中形式审查约1个月，实质审查约6-9个月，公告期3个月。如遇审查意见或异议，时间可能会延长。我们会全程跟踪进度并及时向您反馈。',
      },
      {
        question: '商标注册成功率有多高？',
        answer:
          '商标注册的成功率取决于商标本身的显著性和是否存在近似在先商标。通过我们专业的前期查询和分析，可以有效规避风险，客户商标注册成功率保持在90%以上。对于存在风险的商标，我们会提供替代方案和注册策略建议。',
      },
      {
        question: '商标到期后如何续展？',
        answer:
          '商标注册有效期为10年，到期前12个月内可以申请续展，每次续展有效期为10年。如果在有效期届满后6个月内未办理续展，还有6个月的宽展期，但需缴纳额外费用。建议提前规划续展，避免因疏忽导致商标失效。',
      },
    ],
  },
  {
    id: 'copyright',
    title: '版权服务',
    description: '为各类作品和软件提供版权登记、保护和维权服务',
    icon: 'BookOpen',
    path: '/copyright',
    serviceTypes: [
      {
        title: '软件著作权登记',
        description:
          '为计算机软件提供著作权登记服务，保护软件开发者的合法权益',
      },
      {
        title: '作品版权登记',
        description:
          '为文学、美术、音乐、影视等各类作品提供版权登记保护',
      },
      {
        title: '版权变更',
        description:
          '办理版权登记信息的变更手续，包括权利人、作品信息等的变更',
      },
      {
        title: '版权转让',
        description:
          '办理版权所有权的转让登记，确保权利转移合法有效',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: '咨询评估',
        description: '了解作品类型和需求，评估版权登记方案',
      },
      {
        step: 2,
        title: '准备材料',
        description: '整理作品样本、权属证明等登记所需材料',
      },
      {
        step: 3,
        title: '提交申请',
        description: '向版权保护中心提交登记申请',
      },
      {
        step: 4,
        title: '审查',
        description: '版权保护中心对申请材料进行审查核实',
      },
      {
        step: 5,
        title: '获得登记证书',
        description: '审查通过后颁发版权登记证书，确认权利归属',
      },
    ],
    faqs: [
      {
        question: '软件著作权登记需要多长时间？',
        answer:
          '软件著作权登记普通流程约需30-40个工作日。如果需要加急，可以申请加急办理，最快可在3-5个工作日内完成。我们会根据您的时间需求推荐合适的办理方式，并全程跟进登记进度。',
      },
      {
        question: '版权登记有什么好处？',
        answer:
          '版权登记是证明版权归属的最有效方式，在发生侵权纠纷时可以作为权属证据。同时，版权登记证书也是企业申请高新技术企业认定、软件产品登记、税收优惠等政策的重要支撑材料。此外，登记后的作品在维权时举证更加便捷。',
      },
      {
        question: '哪些作品可以进行版权登记？',
        answer:
          '文学作品、音乐作品、美术作品、摄影作品、影视作品、建筑作品、计算机软件等各类原创作品均可进行版权登记。只要是独立创作完成、具有独创性的智力成果，都属于著作权法保护的范围，建议尽早进行登记以获得法律保护。',
      },
    ],
  },
  {
    id: 'legal',
    title: '法律服务',
    description: '提供知识产权相关的法律咨询、侵权维权和诉讼代理服务',
    icon: 'Scale',
    path: '/legal',
    serviceTypes: [
      {
        title: '知识产权侵权诉讼',
        description:
          '代理专利、商标、版权等知识产权侵权案件的诉讼和应诉',
      },
      {
        title: '知识产权法律咨询',
        description:
          '为企业提供知识产权战略规划、风险防范等专业法律咨询',
      },
      {
        title: '知识产权维权',
        description:
          '通过行政投诉、司法诉讼等途径维护客户的知识产权合法权益',
      },
      {
        title: '企业知产风险评估',
        description:
          '对企业知识产权状况进行全面评估，识别潜在风险并提供防范建议',
      },
    ],
    processSteps: [
      {
        step: 1,
        title: '案情分析',
        description: '深入了解案件事实，分析法律关系和诉讼策略',
      },
      {
        step: 2,
        title: '证据收集',
        description: '全面收集和固定侵权证据，确保证据链完整有效',
      },
      {
        step: 3,
        title: '制定策略',
        description: '根据案情制定最优维权策略，包括诉讼或协商方案',
      },
      {
        step: 4,
        title: '提起诉讼/协商',
        description: '代理提起诉讼或进行侵权协商谈判，争取最大权益',
      },
      {
        step: 5,
        title: '执行结果',
        description: '跟进判决执行或协议履行，确保维权成果落实',
      },
    ],
    faqs: [
      {
        question: '发现被侵权后应该怎么办？',
        answer:
          '发现知识产权被侵权后，首先应及时固定和保全侵权证据，包括侵权产品、网页截图、公证书等。然后建议尽快咨询专业律师，评估侵权行为的性质和损害程度，制定合理的维权策略。维权途径包括发送律师函警告、向行政机关投诉、提起民事诉讼等。',
      },
      {
        question: '知识产权诉讼的周期和费用是怎样的？',
        answer:
          '知识产权民事诉讼一审周期通常为6-12个月，案情复杂的可能更长。费用主要包括律师费、诉讼费和证据保全费等，具体金额根据案件复杂程度和标的额而定。我们会在前期咨询阶段为您详细说明费用构成，并提供性价比最优的维权方案。',
      },
      {
        question: '企业如何预防知识产权风险？',
        answer:
          '企业应建立完善的知识产权管理制度，包括定期进行知产检索和监测、及时申请专利和商标注册、规范使用他人知识产权、对员工进行知产培训等。同时建议定期进行知识产权风险评估，及时发现和化解潜在风险，从源头上降低侵权纠纷的发生概率。',
      },
    ],
  },
]

/**
 * Helper to get a service category by its id
 */
export function getServiceById(id: string): ServiceCategory | undefined {
  return services.find((service) => service.id === id)
}
