export const profile = {
  name: 'Владислав Максимов',
  role: 'Senior Frontend / Full-stack Developer',
  tagline:
    'Собираю сложные B2B-интерфейсы, дашборды и Telegram Mini Apps на React и TypeScript.',
  location: 'Тбилиси, Грузия',
  timezone: 'Asia/Tbilisi',
  experienceYears: '6,5',
  telegram: 'https://t.me/Brichlife96',
  telegramHandle: '@Brichlife96',
  email: 'Vladislav.maksimov-4444@mail.ru',
  phone: '+375255325824',
  phoneDisplay: '+375 (25) 532-58-24',
  cvUrl: '/Maximov_CV.pdf',
}

export const aboutPoints = [
  '6,5 лет коммерческой разработки: логистика, CRM, e-commerce, Telegram Mini Apps, Web3',
  'Специализация — React / Next.js и TypeScript, сложные дашборды и ролевые системы',
  'Опыт Tech Lead на full-stack продуктах: архитектура, постановка задач, ответственность за frontend и backend',
  'Работаю удалённо из Тбилиси, открыт к продуктовым и B2B-командам',
]

export const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Redux',
  'Vite',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Tailwind CSS',
  'Telegram Mini Apps',
]

export type Project = {
  id: string
  slug?: string
  title: string
  period: string
  role: string
  summary: string
  tags: string[]
  stack: string[]
  mockTone: 'teal' | 'ink' | 'sand' | 'slate' | 'olive'
}

export const projects: Project[] = [
  {
    id: 'b2b-wholesale',
    slug: 'rmg',
    title: 'B2B-платформа оптовых поставок RMGroup',
    period: '03.2025 — 09.2026',
    role: 'Full-stack Developer',
    summary:
      'Client + CRM одного заказчика: оптовые заказы с доставкой, логистика, склад, чаты и IMEI-проверки. Frontend и backend — самостоятельно.',
    tags: ['SaaS', 'B2B', 'CRM', 'Logistics'],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL'],
    mockTone: 'teal',
  },
  {
    id: 'bcx-matchbox',
    slug: 'bcx',
    title: 'B-ConX Matchbox — кабинет международной торговой сети',
    period: '02.2025 — 05.2025',
    role: 'Senior Frontend Developer',
    summary:
      'Кабинет Matchbox: вкладки Products / Agents / Matches, newsfeed и профили агентов. Акцент — операционная таблица.',
    tags: ['B2B', 'Dashboard', 'Logistics'],
    stack: ['Next.js', 'React', 'TypeScript', 'Redux', 'CSS Modules'],
    mockTone: 'ink',
  },
  {
    id: 'trade-platform',
    slug: 'wrl',
    title: 'Международная торговая платформа WorldRing',
    period: '09.2024 — 02.2025',
    role: 'Senior Frontend Developer',
    summary:
      'Закрытая B2B-сеть и marketplace: поиск агентов по карте, профили компаний, конференции и сложный кабинет участника. Весь frontend.',
    tags: ['B2B', 'Marketplace', 'Logistics'],
    stack: ['Next.js', 'React', 'TypeScript', 'Redux', 'Google Maps'],
    mockTone: 'ink',
  },
  {
    id: 'mining-ecommerce',
    slug: 'imine',
    title: 'E-commerce майнинг-оборудования IMINE',
    period: '10.2023 — 08.2024',
    role: 'Tech Lead, Full-stack',
    summary:
      'Интернет-магазин ASIC: каталог, карточки товаров, checkout для физлиц и юрлиц. Параллельно — Telegram Mini App DELO.',
    tags: ['E-commerce', 'B2C', 'Crypto'],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    mockTone: 'sand',
  },
  {
    id: 'tg-mini-app',
    slug: 'delo',
    title: 'Telegram Mini App DELO',
    period: '10.2023 — 08.2024',
    role: 'Tech Lead, Full-stack',
    summary:
      'Mini App сообщества предпринимателей: академия, ивенты, недвижимость, инвестиции, Grid-бот и реферальная структура.',
    tags: ['Telegram', 'Mini App', 'Marketplace'],
    stack: ['React', 'Telegram Mini App', 'TypeScript', 'Node.js'],
    mockTone: 'slate',
  },
  {
    id: 'nft-mip',
    slug: 'mip',
    title: 'NFT-платформа MIP',
    period: '03.2020 — 11.2020',
    role: 'Junior+ Frontend Developer',
    summary:
      'Web3-игра: сборка робота из NFT-частей в Garage, рулетка кейсов, маркет, Season Pass. MetaMask и смарт-контракты.',
    tags: ['Web3', 'NFT', 'Gaming'],
    stack: ['React', 'Web3', 'MetaMask', 'Smart Contracts'],
    mockTone: 'olive',
  },
]

export type Job = {
  company: string
  role: string
  period: string
  tags: string[]
}

export const experience: Job[] = [
  {
    company: 'B2B-платформа оптовых поставок RMGroup',
    role: 'Full-stack Developer',
    period: '03.2025 — 09.2026',
    tags: ['SaaS', 'CRM', 'Logistics'],
  },
  {
    company: 'B-ConX Matchbox',
    role: 'Senior Frontend Developer',
    period: '02.2025 — 05.2025',
    tags: ['B2B', 'Dashboard', 'Logistics'],
  },
  {
    company: 'Международная торговая платформа WorldRing',
    role: 'Senior Frontend Developer',
    period: '09.2024 — 02.2025',
    tags: ['B2B', 'Marketplace', 'Logistics'],
  },
  {
    company: 'IMINE + Telegram Mini App DELO',
    role: 'Tech Lead, Full-stack',
    period: '10.2023 — 08.2024',
    tags: ['E-commerce', 'Mini App'],
  },
  {
    company: 'Logistic Platform',
    role: 'Senior Frontend Developer',
    period: '01.2023 — 09.2023',
    tags: ['B2B', 'Dashboards'],
  },
  {
    company: 'Платформа для сети ресторанов',
    role: 'Middle+ Frontend Developer',
    period: '04.2022 — 12.2022',
    tags: ['React', 'Roles'],
  },
  {
    company: 'Dating-платформа',
    role: 'Middle+ Frontend Developer',
    period: '12.2020 — 03.2022',
    tags: ['Mobile', 'Messenger'],
  },
  {
    company: 'NFT-платформа MIP',
    role: 'Junior+ Frontend Developer',
    period: '03.2020 — 11.2020',
    tags: ['Web3', 'NFT', 'Gaming'],
  },
]
