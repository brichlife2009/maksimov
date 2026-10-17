export type ProjectScreen = {
  src: string
  title: string
  caption: string
  frame?: 'gallery' | 'phone'
}

export type ProjectGallery = {
  title: string
  lead: string
  screens: ProjectScreen[]
}

export type CaseStudy = {
  slug: string
  title: string
  shortTitle: string
  period: string
  role: string
  summary: string
  cover: string
  tags: string[]
  stack: string[]
  accent: string
  overview: string[]
  responsibilities: string[]
  modules: {
    title: string
    description: string
  }[]
  challenges: {
    title: string
    text: string
  }[]
  galleries: ProjectGallery[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rmg',
    title: 'B2B-платформа оптовых поставок RMGroup',
    shortTitle: 'RMGroup',
    period: '03.2025 — 09.2026',
    role: 'Full-stack Developer',
    summary:
      'Экосистема из клиентского кабинета и внутренней CRM: оптовые заказы техники, логистика, склад и коммуникации с магазинами.',
    cover: '/projects/rmg/catalog-subcategories.png',
    tags: ['SaaS', 'B2B', 'CRM', 'Logistics'],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'REST API',
      'WebSocket',
    ],
    accent:
      'Оптовая продажа с доставкой: каталог → заказ → отгрузка → статус поставки для магазинов по РФ и СНГ.',
    overview: [
      'Два связанных продукта одного заказчика: Client — кабинет оптового покупателя, CRM — операционка команды.',
      'Спроектировал и реализовал frontend и backend самостоятельно: от ролей и каталога до логистики, чатов и складских сценариев.',
      'Фокус продукта — дать магазинам покупать оптом с понятной доставкой, а команде — проводить заказы без хаоса в статусах и коммуникациях.',
    ],
    responsibilities: [
      'Архитектура Client и CRM, общая модель ролей и рабочих процессов',
      'Клиентский кабинет: каталог, бренды/линейки, оформление оптовых заказов, статусы поставок',
      'CRM: модерация и сопровождение заказов, заявки курьера, маршруты, склад и проводки',
      'Чаты с магазинами, системные уведомления и заметки по сделкам',
      'Интеграция IMEI Checker на фронте с готовыми сервисами проверки и мобильным сканом',
      'Backend API, схемы данных в PostgreSQL, realtime для чатов',
    ],
    modules: [
      {
        title: 'Client',
        description:
          'Кабинет магазина: каталог, заказы, отгрузки, финансы и проверка IMEI перед работой с товаром.',
      },
      {
        title: 'CRM',
        description:
          'Внутренний контур: заявки курьера, чаты, склад, проблемные позиции и бухгалтерские проводки.',
      },
    ],
    challenges: [
      {
        title: 'Логистика',
        text:
          'Много статусов и каналов доставки (курьер, Ozon, WB, СДЭК, почта). Нужно было собрать понятные экраны отгрузки, инвентаризации и заявок, чтобы команда не теряла заказ между этапами.',
      },
      {
        title: 'IMEI Checker',
        text:
          'По коду товара формируется штрихкод, который сканируют с телефона. Я подготовил фронт кабинета под готовые сервисы проверки (сайт + мобильное приложение проверки разрабатывал не я).',
      },
    ],
    galleries: [
      {
        title: 'Client',
        lead: 'Ключевые экраны кабинета оптового покупателя.',
        screens: [
          {
            src: '/projects/rmg/catalog-subcategories.png',
            title: 'Каталог · подкатегории',
            caption: 'Навигация по ассортименту и быстрый вход в нужную группу товаров.',
          },
          {
            src: '/projects/rmg/catalog-brand.png',
            title: 'Выбор бренда и линейки',
            caption: 'Сценарий сужения каталога перед оптовым заказом.',
          },
          {
            src: '/projects/rmg/orders.png',
            title: 'Заказы',
            caption: 'Список оптовых заказов, статусы и переход к составу поставки.',
          },
          {
            src: '/projects/rmg/shipment-inventory.png',
            title: 'Отгрузка и инвентаризация',
            caption: 'Контроль отгрузки, когда на складе идёт инвентаризация.',
          },
          {
            src: '/projects/rmg/imei-checker.png',
            title: 'IMEI Checker',
            caption: 'Проверка IMEI/серийников через интеграцию с внешними сервисами.',
          },
        ],
      },
      {
        title: 'CRM',
        lead: 'Операционный контур команды: логистика, чаты, склад.',
        screens: [
          {
            src: '/projects/rmg/courier-requests.png',
            title: 'Заявки курьера',
            caption: 'Kanban по статусам доставки и каналам отгрузки.',
          },
          {
            src: '/projects/rmg/chats.png',
            title: 'Чаты',
            caption: 'Переписка с магазинами, системные алерты и заметки по клиенту.',
          },
          {
            src: '/projects/rmg/products-issues.png',
            title: 'Проблемные товары',
            caption: 'Обзор позиций с ошибками и исключениями на операционном контуре.',
          },
          {
            src: '/projects/rmg/ledger.png',
            title: 'Проводки',
            caption: 'Финансовые и складские движения, связанные с заказами.',
          },
        ],
      },
    ],
  },
  {
    slug: 'bcx',
    title: 'B-ConX Matchbox — кабинет международной торговой сети',
    shortTitle: 'B-ConX',
    period: '02.2025 — 05.2025',
    role: 'Senior Frontend Developer',
    summary:
      'Кабинет участника B-ConX: Matchbox с вкладками Products / Agents / Matches, newsfeed и профили агентов в международной логистической сети.',
    cover: '/projects/bcx/matchbox.png',
    tags: ['B2B', 'Dashboard', 'Logistics', 'Enterprise'],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Redux',
      'CSS Modules',
      'REST API',
    ],
    accent:
      'Matchbox-таблица: агенты, продукты и matches в одном кабинете — поиск, счётчики вкладок и быстрые действия.',
    overview: [
      'B-ConX Matchbox — операционный кабинет международной торговой и логистической сети (Trade · Trust · Transport).',
      'Участники ведут агентов, продукты и matches, следят за newsfeed и поддерживают профили компаний.',
      'Фокус работы — frontend кабинета: таблицы, вкладки, карточки агентов и сценарии ежедневной работы в сети.',
    ],
    responsibilities: [
      'Frontend кабинета Matchbox: вкладки Products, Agents, Matches со счётчиками и поиском',
      'Таблицы агентов: компания, география, контакты, membership и действия по строке',
      'Newsfeed сети и блок новых агентов',
      'Профили участников и компаний: контакты, about, карточка компании и команда',
      'Экран входа в Matchbox и общая стилизация интерфейса кабинета',
    ],
    modules: [
      {
        title: 'Matchbox',
        description:
          'Единый дашборд с вкладками Products / Agents / Matches — основной рабочий контур участника сети.',
      },
      {
        title: 'Сеть и профили',
        description:
          'Newsfeed, карточки новых агентов и профили компаний с контактами и описанием.',
      },
    ],
    challenges: [
      {
        title: 'Matchbox-таблица',
        text:
          'Нужно было собрать плотную операционную таблицу с вкладками, счётчиками и действиями по строке — чтобы агенты и matches читались быстро на больших списках.',
      },
      {
        title: 'Единый кабинет',
        text:
          'Несколько сущностей в одном dashboard: продукты, агенты, matches, лента и профиль. Важно было сохранить понятную навигацию и единый визуальный язык вкладок.',
      },
    ],
    galleries: [
      {
        title: 'Matchbox',
        lead: 'Основной кабинет: вкладки, поиск и таблица агентов.',
        screens: [
          {
            src: '/projects/bcx/matchbox.png',
            title: 'My Matchbox · Agents',
            caption:
              'Таблица агентов: компания, страна, контакты, membership и действия. Вкладки Products / Agents / Matches.',
          },
        ],
      },
      {
        title: 'Сеть и профили',
        lead: 'Лента сети, вход и карточка участника.',
        screens: [
          {
            src: '/projects/bcx/newsfeed.png',
            title: 'Newsfeed',
            caption: 'Лента B-ConX и блок новых агентов с переходом в профиль.',
          },
          {
            src: '/projects/bcx/profile.png',
            title: 'Agent profile',
            caption: 'Профиль участника: контакты, about, компания и команда.',
          },
          {
            src: '/projects/bcx/login.jpg',
            title: 'Login',
            caption: 'Вход в B-ConX Matchbox.',
          },
        ],
      },
    ],
  },
  {
    slug: 'wrl',
    title: 'Международная торговая платформа WorldRing',
    shortTitle: 'WorldRing',
    period: '09.2024 — 02.2025',
    role: 'Senior Frontend Developer',
    summary:
      'Закрытая международная B2B-сеть и marketplace: поиск логистических партнёров, профили компаний, конференции и операционный кабинет.',
    cover: '/projects/wrl/company-profile.jpg',
    tags: ['B2B', 'Marketplace', 'Logistics', 'Enterprise'],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Redux',
      'CSS Modules',
      'Google Maps',
      'REST API',
    ],
    accent:
      'Поиск партнёров и агентов по миру: карта, фильтры, профили компаний и вход в закрытую бизнес-сеть.',
    overview: [
      'WorldRing (WestRing GmbH) — международная бизнес-сеть со штаб-квартирой в Германии.',
      'Закрытая цифровая платформа и marketplace, которая объединяет SME, экспедиторов, перевозчиков и грузоотправителей.',
      'Помогает компаниям находить логистических партнёров, оптимизировать цепочки поставок, покупать и продавать товары по миру. Доступ — по заявке на членство.',
    ],
    responsibilities: [
      'Весь frontend платформы: публичные страницы, профили, карта агентов, конференции и кабинет',
      'Список агентов с картой, фильтрами по стране и поиском',
      'Профили компаний: контакты, команда, услуги, офисы, география присутствия',
      'Marketplace и поиск предложений с фильтрами по типу и уровню членства',
      'Конференции: регистрация, спонсоры, отели и связанные сценарии',
      'Сложный дашборд: агенты, продукты, клиенты, приглашения и matches',
      'Пять ролей с разным UI и функционалом: Admin, Super Agent, Agent, Customer, Temp',
    ],
    modules: [
      {
        title: 'Публичная сеть',
        description:
          'Agent list, карта, профили компаний и материалы WorldRing — витрина закрытой B2B-сети.',
      },
      {
        title: 'Кабинет',
        description:
          'Dashboard с агентами, продуктами, приглашениями и matches для ежедневной работы участников.',
      },
    ],
    challenges: [
      {
        title: 'Пять ролей',
        text:
          'Admin, Super Agent, Agent, Customer и Temp — у каждой роли свои стили, доступы и сценарии. Нужно было держать единую систему компонентов и при этом не смешивать функционал между ролями.',
      },
      {
        title: 'Маркеры на карте',
        text:
          'Нужны были удобные и функциональные маркеры: много точек по миру, фильтры, связка карты со списком агентов без перегруза интерфейса.',
      },
      {
        title: 'Сложный дашборд',
        text:
          'Кабинет с несколькими сущностями, вкладками, счётчиками и тяжёлыми таблицами. Важно было сохранить читаемость и скорость работы на больших списках.',
      },
    ],
    galleries: [
      {
        title: 'Сеть и профили',
        lead: 'Как участники находят партнёров и знакомятся с компаниями.',
        screens: [
          {
            src: '/projects/wrl/company-profile.jpg',
            title: 'Company profile',
            caption: 'Карточка компании: контакты, команда, услуги, карта и офисы.',
          },
          {
            src: '/projects/wrl/agent-list.png',
            title: 'Agent list',
            caption: 'Каталог агентов с картой, фильтрами по стране и карточками компаний.',
          },
          {
            src: '/projects/wrl/screen-a.png',
            title: 'Agent list · карта',
            caption: 'Тёмная карта с маркерами агентов и поиском по стране.',
          },
          {
            src: '/projects/wrl/agent-profile.jpg',
            title: 'Agent profile',
            caption: 'Профиль агента: компания, рейтинг, связанные пользователи.',
          },
        ],
      },
      {
        title: 'Marketplace и кабинет',
        lead: 'Поиск предложений и операционный dashboard участника сети.',
        screens: [
          {
            src: '/projects/wrl/dashboard-detail.jpg',
            title: 'Marketplace',
            caption: 'Поиск B2B-предложений с фильтрами по типу и membership.',
          },
          {
            src: '/projects/wrl/dashboard-agents.png',
            title: 'Dashboard · Agents',
            caption: 'Таблица агентов с вкладками, счётчиками и быстрым поиском.',
          },
        ],
      },
      {
        title: 'Конференции и контент',
        lead: 'Ивенты сети и обучающие материалы для участников.',
        screens: [
          {
            src: '/projects/wrl/conferences.jpg',
            title: 'Conferences',
            caption: 'Страница конференции: регистрация, спонсоры и связанные активности.',
          },
          {
            src: '/projects/wrl/conferences-hotels.jpg',
            title: 'Conferences · hotels',
            caption: 'Бронирование отелей и детали участия в ивенте.',
          },
          {
            src: '/projects/wrl/screen-b.jpg',
            title: 'Sales Videos',
            caption: 'Раздел видео и training для участников сети.',
          },
        ],
      },
    ],
  },
  {
    slug: 'imine',
    title: 'E-commerce майнинг-оборудования IMINE',
    shortTitle: 'IMINE',
    period: '10.2023 — 08.2024',
    role: 'Tech Lead, Full-stack',
    summary:
      'Интернет-магазин высокочекового ASIC-оборудования: каталог, карточки товаров, сравнение, checkout и сопутствующие сервисы.',
    cover: '/projects/imine/home.jpg',
    tags: ['E-commerce', 'B2C', 'Crypto'],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'REST API',
      'Telegram Mini App',
    ],
    accent:
      'Каталог ASIC и сильные карточки товаров: спеки, наличие, цены и путь до покупки на высоком чеке.',
    overview: [
      'IMINE — e-commerce для майнинг-оборудования: витрина, каталог брендов, карточки ASIC и оформление заказа.',
      'Как Tech Lead отвечал за архитектуру продукта, постановку задач и реализацию frontend + backend.',
      'Параллельно с сайтом шёл Telegram Mini App DELO того же заказчика — отдельный кейс в портфолио.',
    ],
    responsibilities: [
      'Архитектура e-commerce и ответственность за frontend/backend как Tech Lead',
      'Каталог ASIC, фильтры, бренды, хиты продаж и карточки товаров со спеками',
      'Сравнение, избранное, корзина и checkout для физлиц / юрлиц и ИП',
      'Интеграция сценариев оплаты и доставки (в т.ч. USDT, СДЭК, самовывоз)',
      'Разделы дата-центров, новостей, гарантии и лидогенерации',
      'Адаптив и UX с упором на конверсию, в том числе с мобильных',
    ],
    modules: [
      {
        title: 'Витрина и каталог',
        description:
          'Главная, бренды, карточки ASIC, сравнение и избранное — основной путь знакомства с ассортиментом.',
      },
      {
        title: 'Заказ и сервисы',
        description:
          'Checkout, оплата/доставка, дата-центры, новости и консультации вокруг покупки оборудования.',
      },
    ],
    challenges: [
      {
        title: 'Высокий чек',
        text:
          'Нужно было быстро доносить хешрейт, алгоритм, наличие и выгоду на карточке — без перегруза, но с доверием к покупке дорогой позиции.',
      },
      {
        title: 'Checkout для разных типов клиентов',
        text:
          'Разные сценарии для физлиц и юрлиц, несколько способов доставки и оплаты, включая крипто, без ломания единого флоу оформления.',
      },
    ],
    galleries: [
      {
        title: 'Каталог и товар',
        lead: 'Главный акцент кейса — витрина ASIC и карточки оборудования.',
        screens: [
          {
            src: '/projects/imine/home.jpg',
            title: 'Главная витрина',
            caption: 'Hero, категории, бренды и хиты продаж ASIC.',
          },
          {
            src: '/projects/imine/product.jpg',
            title: 'Карточка товара',
            caption: 'Спеки, наличие, цена, медиа и вкладки описания.',
          },
          {
            src: '/projects/imine/checkout.jpg',
            title: 'Checkout',
            caption: 'Оформление заказа: покупатель, доставка и способы оплаты.',
          },
        ],
      },
      {
        title: 'Сервисы вокруг покупки',
        lead: 'Контент и B2B-сервисы, которые поддерживают продажи оборудования.',
        screens: [
          {
            src: '/projects/imine/catalog.jpg',
            title: 'Новости',
            caption: 'Контентный раздел с фильтрами статей и новостей.',
          },
          {
            src: '/projects/imine/extra.jpg',
            title: 'Дата-центры',
            caption: 'Размещение оборудования: локации, тарифы и оффер.',
          },
        ],
      },
    ],
  },
  {
    slug: 'delo',
    title: 'Telegram Mini App DELO',
    shortTitle: 'DELO',
    period: '10.2023 — 08.2024',
    role: 'Tech Lead, Full-stack',
    summary:
      'Telegram Mini App для сообщества предпринимателей: обучение, ивенты, недвижимость, инвестиции, Grid-бот и трёхуровневая рефералка.',
    cover: '/projects/delo/cover.jpg',
    tags: ['Telegram', 'Mini App', 'Marketplace', 'Fintech'],
    stack: [
      'React',
      'TypeScript',
      'Telegram Mini App',
      'Telegram Bot API',
      'Node.js',
      'REST API',
    ],
    accent:
      'Одна Mini App внутри Telegram вместо набора сервисов: сообщество, маркетплейсы и кабинет с реферальной экономикой.',
    overview: [
      'DELO — Telegram Mini App экосистемы того же заказчика, что и IMINE: закрытое сообщество предпринимателей внутри мессенджера.',
      'Платформа объединяет несколько вертикалей: академия и курсы, офлайн/онлайн ивенты с билетами, поиск недвижимости, инвестиционные офферы и Grid-бот.',
      'Поверх продуктов — личный кабинет: баланс, интересы, избранное и реферальная структура на три линии.',
    ],
    responsibilities: [
      'Архитектура Mini App и интеграция с Telegram Bot API (авторизация, контекст пользователя)',
      'Онбординг сообщества и навигация по модулям академии / бизнеса',
      'Каталоги курсов, ивентов с тарифами билетов, недвижимости и инвестиций',
      'Фильтры, избранное, карточки объектов и сценарии покупки / заявки на консультацию',
      'Кабинет: профиль, баланс, интересы, реферальная ссылка и статистика по линиям',
      'Раздел Grid-бот: депозит, вывод, баланс и реферальная структура',
      'UI под ограничения Telegram WebView и маленький экран',
    ],
    modules: [
      {
        title: 'Сообщество и обучение',
        description:
          'Онбординг DELO, академия курсов и карточки офлайн/онлайн мероприятий с тарифами билетов.',
      },
      {
        title: 'Маркетплейсы',
        description:
          'Недвижимость (поиск и карточка ЖК) и инвестиции с фильтрами по сумме, сроку и способу входа.',
      },
      {
        title: 'Кабинет и Grid-бот',
        description:
          'Профиль, баланс, интересы, трёхуровневая рефералка и операции со счётом Grid-бота.',
      },
    ],
    challenges: [
      {
        title: 'Много вертикалей в одном WebView',
        text:
          'Нужно было собрать сообщество, курсы, ивенты, недвижимость, инвестиции и бота в единый mobile-flow без ощущения «зоопарка» экранов.',
      },
      {
        title: 'Реферальная экономика и кабинет',
        text:
          'Сложные данные по линиям, балансу и вознаграждениям — важно показать понятно и не перегрузить узкий экран Telegram.',
      },
    ],
    galleries: [
      {
        title: 'Сообщество и кабинет',
        lead: 'Вход в DELO и личное пространство участника.',
        screens: [
          {
            src: '/projects/delo/onboarding.jpg',
            title: 'Онбординг сообщества',
            caption: 'Позиционирование DELO и блоки академии / бизнес-академии.',
            frame: 'phone',
          },
          {
            src: '/projects/delo/profile.jpg',
            title: 'Профиль',
            caption: 'Баланс, рефералка, достижения, интересы и статистика линии.',
            frame: 'phone',
          },
          {
            src: '/projects/delo/referral-structure.jpg',
            title: 'Реферальная структура',
            caption: 'Три линии: участники, депозиты и заработок.',
            frame: 'phone',
          },
        ],
      },
      {
        title: 'Обучение и ивенты',
        lead: 'Контент сообщества: курсы и продажа билетов.',
        screens: [
          {
            src: '/projects/delo/academy.jpg',
            title: 'Академия',
            caption: 'Каталог курсов с фильтрами по направлениям и CTA покупки.',
            frame: 'phone',
          },
          {
            src: '/projects/delo/event-tickets.jpg',
            title: 'Ивент · билеты',
            caption: 'Офлайн-тренинг с тарифами STANDART / VIP.',
            frame: 'phone',
          },
          {
            src: '/projects/delo/event-conference.jpg',
            title: 'Конференция',
            caption: 'Карточка события и тарифы ONLINE / СТАНДАРТ.',
            frame: 'phone',
          },
        ],
      },
      {
        title: 'Недвижимость, инвестиции, Grid-бот',
        lead: 'Продуктовые вертикали внутри той же Mini App.',
        screens: [
          {
            src: '/projects/delo/realty-search.jpg',
            title: 'Недвижимость · поиск',
            caption: 'Фильтры покупки/страны/цены и сетка объектов.',
            frame: 'phone',
          },
          {
            src: '/projects/delo/realty-detail.jpg',
            title: 'Недвижимость · объект',
            caption: 'Карточка ЖК: цены, параметры, описание и заявка.',
            frame: 'phone',
          },
          {
            src: '/projects/delo/investments.jpg',
            title: 'Инвестиции',
            caption: 'Поиск офферов по сумме, сроку и способу (USD / RUB / CRYPTO).',
            frame: 'phone',
          },
          {
            src: '/projects/delo/grid-bot.jpg',
            title: 'Grid-бот',
            caption: 'Депозит, вывод, баланс и вход в реферальную структуру.',
            frame: 'phone',
          },
        ],
      },
    ],
  },
  {
    slug: 'mip',
    title: 'NFT-платформа MIP',
    shortTitle: 'MIP',
    period: '03.2020 — 11.2020',
    role: 'Junior+ Frontend Developer',
    summary:
      'Web3-платформа с игровой экономикой: сборка NFT-роботов из частей, loot-кейсы с рулеткой, маркет и Season Pass.',
    cover: '/projects/mip/cover.jpg',
    tags: ['Web3', 'NFT', 'Gaming'],
    stack: [
      'React',
      'JavaScript',
      'Web3.js',
      'MetaMask',
      'Smart Contracts',
      'CSS',
    ],
    accent:
      'Два равных ядра продукта: Garage — сборка робота из выбранных элементов и mint; рулетка при открытии кейсов.',
    overview: [
      'MIP — NFT-платформа с gamification: пользователи собирают уникальных роботов и петов из запчастей, открывают кейсы и торгуют частями на маркете.',
      'Авторизация через MetaMask, баланс в токенах MIP, mint персонажа и работа со смарт-контрактами.',
      'Вокруг ядра — Loot, Market, Season Pass, XP/бонусы и ежедневный free spin.',
    ],
    responsibilities: [
      'Frontend интерфейсов Garage, Loot, Spinner, Market и Season Pass',
      'Сборка робота/пета из выбранных частей: слоты, превью, apply/take off, mint',
      'Рулетка открытия кейсов: twist, множители, сетка возможных дропов',
      'Авторизация через MetaMask и отображение wallet/баланса',
      'Интеграция со смарт-контрактами: mint и управление NFT',
      'Инвентарь с фильтрами, редкостями и пагинацией на больших списках',
    ],
    modules: [
      {
        title: 'Garage + Mint',
        description:
          'Конструктор персонажа: слоты частей, превью, инвентарь и mint готового робота.',
      },
      {
        title: 'Loot & Spinner',
        description:
          'Кейсы и рулетка с множителями — основной игровой цикл дропа частей.',
      },
      {
        title: 'Market & Pass',
        description:
          'Торговля частями, Season Pass, XP и бонусы в экономике MIP.',
      },
    ],
    challenges: [
      {
        title: 'Сборка робота из частей',
        text:
          'Нужно было связать слоты, инвентарь, превью и состояния apply/confirmed так, чтобы сборка оставалась понятной на тяжёлом UI со спрайтами/3D-превью.',
      },
      {
        title: 'Рулетка кейсов',
        text:
          'Анимация twist, стоимость в MIP, множители и таблица возможных дропов — без фризов на слабых машинах и с читаемым результатом.',
      },
    ],
    galleries: [
      {
        title: 'Garage и экономика дропа',
        lead: 'Главный акцент кейса — конструктор и кейсы.',
        screens: [
          {
            src: '/projects/mip/garage.jpg',
            title: 'Garage',
            caption: 'Сборка робота и пета из частей, превью и mint.',
          },
          {
            src: '/projects/mip/spinner.jpg',
            title: 'Spinner',
            caption: 'Рулетка открытия кейса: twist, множители и дропы.',
          },
          {
            src: '/projects/mip/loot.jpg',
            title: 'Loot',
            caption: 'Каталог кейсов с фильтрами по цене и источнику.',
          },
        ],
      },
      {
        title: 'Маркет и прогрессия',
        lead: 'Торговля частями и долгосрочная мотивация игрока.',
        screens: [
          {
            src: '/projects/mip/market.jpg',
            title: 'Market',
            caption: 'Покупка частей по редкости, фракции и фильтрам.',
          },
          {
            src: '/projects/mip/season-pass.jpg',
            title: 'Season Pass',
            caption: 'Premium/Free треки наград и прогресс сезона.',
          },
          {
            src: '/projects/mip/xp-bonuses.jpg',
            title: 'XP и бонусы',
            caption: 'Прогресс Season Pass и ежедневные бонусы.',
          },
          {
            src: '/projects/mip/profile-bonuses.jpg',
            title: 'Профиль',
            caption: 'Кошелёк MetaMask, бонусы, история кейсов и новости.',
          },
        ],
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug)
}
