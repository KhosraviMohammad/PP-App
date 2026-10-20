export interface ProjectItem {
  id: string;
  title: { fa: string; en: string };
  category: { fa: string; en: string };
  badge: { fa: string; en: string };
  status: "ongoing" | "production";
  summary: { fa: string; en: string };
  description: { fa: string; en: string };
  highlights: { fa: string[]; en: string[] };
  tags: string[];
  metrics?: { label: { fa: string; en: string }; value: string }[];
  featured: boolean;
  image: string;
  gallery: string[];
}

export interface ExperienceItem {
  id: string;
  company: { fa: string; en: string };
  role: { fa: string; en: string };
  period: { fa: string; en: string };
  duration: { fa: string; en: string };
  achievements: { fa: string[]; en: string[] };
  technologies: string[];
}

export interface SkillCategory {
  title: { fa: string; en: string };
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const PORTFOLIO_INFO = {
  name: { fa: "محمد خسروی", en: "Mohammad Khosravi" },
  role: { fa: "مهندس نرم‌افزار و توسعه‌دهنده فول‌استک", en: "Software Engineer & Fullstack Developer" },
  avatar: "/images/me.jpg",
  cvFile: "/.gignore/Mohammad_Khosravi_CV.pdf",
  email: "mohammad.khosravi.7813@gmail.com",
  phone: "+98 910 379 1346",
  location: { fa: "ایران، اصفهان", en: "Isfahan, Iran" },
  socials: {
    github: "https://github.com/mohammadkhosravi",
    linkedin: "https://www.linkedin.com/in/mohammad-khosravi-7813/",
    telegram: "https://t.me/mohammad_kh78",
  },
  stats: [
    { value: "۴+", enValue: "4+", label: { fa: "سال سابقه حرفه‌ای", en: "Years Experience" } },
    { value: "+۱,۰۰۰", enValue: "1,000+", label: { fa: "ایجنت فعال امنیتی متصل", en: "Active Monitored Agents" } },
    { value: "۸x", enValue: "8x", label: { fa: "افزایش سرعت کوئری‌ها", en: "Query Speedup" } },
    { value: "+۵", enValue: "5+", label: { fa: "سامانه Enterprise پروداکشن", en: "Enterprise Production Systems" } },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: { fa: "بک‌اند و الگوهای معماری", en: "Backend & System Architecture" },
    iconName: "Terminal",
    skills: [
      { name: "Python / Django", level: 95, highlight: true },
      { name: "Node.js / Express", level: 90, highlight: true },
      { name: "Architectural Patterns (MVC, Pipe & Filter, Broker)", level: 92, highlight: true },
      { name: "RESTful APIs & Microservices", level: 90 },
      { name: "QuerySet & DB Query Optimization", level: 95, highlight: true },
    ],
  },
  {
    title: { fa: "داده‌ها، پایگاه داده و استریمینگ", en: "Data, Databases & Streaming" },
    iconName: "Storage",
    skills: [
      { name: "Apache Kafka (Log Streaming)", level: 90, highlight: true },
      { name: "MQTT / EMQX Protocol", level: 92, highlight: true },
      { name: "PostgreSQL & PostGIS (Spatial)", level: 95, highlight: true },
      { name: "MariaDB & MySQL (Normalization)", level: 90 },
      { name: "InfluxDB (Time-Series DB)", level: 85 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: { fa: "فرانت‌اند و رابط کاربری تعاملی", en: "Frontend & Interactive UI" },
    iconName: "Web",
    skills: [
      { name: "React & Next.js", level: 92, highlight: true },
      { name: "TypeScript / JavaScript", level: 90, highlight: true },
      { name: "Konva.js (Canvas & Card Design)", level: 88, highlight: true },
      { name: "Redux Toolkit & State Management", level: 90 },
      { name: "Material-UI / SASS / CSS3", level: 92 },
      { name: "PWA (Progressive Web Apps)", level: 85 },
    ],
  },
  {
    title: { fa: "دواپس، زیرساخت و ابزارها", en: "DevOps & Infrastructure" },
    iconName: "Cloud",
    skills: [
      { name: "Linux / Bash Scripting", level: 90, highlight: true },
      { name: "Docker & Containerization", level: 88, highlight: true },
      { name: "Nginx & Reverse Proxy", level: 85 },
      { name: "Grafana & Monitoring Dashboards", level: 88, highlight: true },
      { name: "Git & CI/CD Workflows", level: 92 },
      { name: "GeoServer & OGC Protocols", level: 85 },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "apex-iot",
    title: {
      fa: "سامانه هوشمند مانیتورینگ سنسورها و اسکادا (APEX IoT)",
      en: "APEX Industrial IoT & SCADA Telemetry Platform",
    },
    category: { fa: "اینترنت اشیا و مانیتورینگ اسکادا", en: "Industrial IoT & SCADA Telemetry" },
    badge: { fa: "پایش سنسورها و اسکادا", en: "Sensors & SCADA Telemetry" },
    status: "production",
    image: "/images/.gignore/projects/APEX-IOT/monitoring.png",
    gallery: [
      "/images/.gignore/projects/APEX-IOT/monitoring.png",
      "/images/.gignore/projects/APEX-IOT/sensor.png",
      "/images/.gignore/projects/APEX-IOT/sensor-chart.png",
      "/images/.gignore/projects/APEX-IOT/access.png",
    ],
    summary: {
      fa: "پلتفرم مانیتورینگ متمرکز، مدیریت سنسورهای صنعتی، تله‌متری داده‌ها و کنترل بلادرنگ در بستر اسکادا.",
      en: "Centralized SCADA & Industrial IoT monitoring platform for real-time sensor telemetry and control.",
    },
    description: {
      fa: "سامانه پیشرفته مانیتورینگ صنعتی و پایش بلادرنگ حسگرها و تجهیزات متصل اینترنت اشیا (IoT). این سیستم تله‌متری ارسالی از سنسورهای صنعتی را دریافت کرده و با تحلیل و پردازش مداوم، پارامترهای محیطی و صنعتی را در داشبورد تعاملی نمایش می‌دهد. شامل نمودارهای بلادرنگ سری‌های زمانی، سیستم ثبت آلارم و هشدارهای آنی، وضعیت آنلاین/آفلاین هر سنسور و مدیریت سطوح دسترسی پیشرفته اپراتورها.",
      en: "Comprehensive industrial IoT and SCADA monitoring solution architected for continuous real-time oversight of sensors and field telemetry. Processes incoming high-frequency sensor streams into intuitive interactive dashboards with live time-series analytical charts, instant threshold alerts, and multi-tier operator access control.",
    },
    highlights: {
      fa: [
        "مانیتورینگ بلادرنگ وضعیت حسگرها، نرخ داده‌ها و سلامت تجهیزات متصل",
        "رسم نمودارهای تحلیلی و مقایسه‌ای سری‌های زمانی سنسورها (Time-Series Charts)",
        "سیستم هوشمند آلارم، اعلان هشدار حد آستانه و ثبت رخدادهای بحرانی",
        "سیستم مدیریت سطوح دسترسی اپراتورها، دپارتمان‌ها و ناظران سامانه",
        "معماری بهینه‌سازی‌شده برای دریافت با توان عملیاتی بالای بسته‌های تله‌متری",
      ],
      en: [
        "Real-time sensor telemetry, throughput metrics, and device health monitoring",
        "Interactive time-series analytical graphing for multi-variable sensory trends",
        "Intelligent threshold alerting engine with event logging and audit trails",
        "Granular role-based access management for operators and supervisors",
        "High-throughput ingest pipeline optimized for high-frequency IoT packet streams",
      ],
    },
    tags: ["IoT / SCADA", "Time-Series Data", "React / Next.js", "Sensors Monitoring", "Real-Time Telemetry", "Access Control"],
    metrics: [
      { label: { fa: "نوع سامانه", en: "Platform Type" }, value: "SCADA & Industrial IoT" },
      { label: { fa: "نوع داده‌ها", en: "Data Type" }, value: "Time-Series Telemetry" },
      { label: { fa: "پایش بلادرنگ", en: "Monitoring" }, value: "Real-Time" },
    ],
    featured: true,
  },
  {
    id: "cavax-exchange",
    title: {
      fa: "صرافی آنلاین تبادل رمزارز کاواکس (معاملات ریال / تتر)",
      en: "CAVAX Cryptocurrency Exchange (IRR / USDT Platform)",
    },
    category: { fa: "فین‌تک، کریپتو و پلتفرم‌های مالی", en: "FinTech & Cryptocurrency Trading" },
    badge: { fa: "تبادل ریال / تتر و کیف پول", en: "IRR / USDT Fast Exchange" },
    status: "production",
    image: "/images/.gignore/projects/CAVAX/panel.png",
    gallery: [
      "/images/.gignore/projects/CAVAX/panel.png",
      "/images/.gignore/projects/CAVAX/Trade.png",
      "/images/.gignore/projects/CAVAX/Trade1.png",
      "/images/.gignore/projects/CAVAX/cards.png",
      "/images/.gignore/projects/CAVAX/history.png",
      "/images/.gignore/projects/CAVAX/history_responsive.png",
    ],
    summary: {
      fa: "پلتفرم سریع و امن خرید و فروش ریال به تتر، کیف پول امن، مدیریت کارت‌های بانکی و دفتر معاملات.",
      en: "Secure, high-speed cryptocurrency exchange for IRR/USDT trading, integrated wallet, and responsive ledger.",
    },
    description: {
      fa: "پلتفرم تبادل کریپتو و صرافی آنلاین متمرکز بر معاملات ریال و تتر (USDT). دارای موتور سریع مبادله و ترید لحظه‌ای، پنل کاربری مدرن تیره با نمایش موجودی و ارزش تخمینی دارایی‌های کیف پول، سیستم تایید و مدیریت کارت‌های بانکی عضو شتاب، گزارش‌گیری و فیلتر پیشرفته تراکنش‌ها و تاریخچه سفارشات به صورت کاملاً واکنش‌گرا و بهینه‌سازی‌شده برای دسکتاپ و موبایل.",
      en: "Full-scale cryptocurrency exchange and trading platform focused on the IRR/USDT trading pair. Engineered with an instant trade matching module, modern dark-themed user dashboard displaying crypto wallet portfolios, automated bank card authorization, advanced transaction filtering, and full responsive mobile/desktop optimization.",
    },
    highlights: {
      fa: [
        "موتور ترید آنی ریال به تتر (USDT) با محاسبه خودکار نرخ لحظه‌ای و کارمزد",
        "طراحی رابط کاربری مدرن، تیره و فوق‌سریع سازگار با انواع نمایشگرها و موبایل",
        "مدیریت کارت‌ها و حساب‌های بانکی تایید شده با پروتکل‌های امنیتی",
        "دفتر سفارشات، تاریخچه تراکنش‌ها، گزارش‌های مالی و ردیابی وضعیت تسویه‌ها",
      ],
      en: [
        "Instant IRR/USDT trading execution with real-time rate updates and dynamic fee calculation",
        "Sleek dark-mode aesthetic with pixel-perfect responsive layouts on mobile and desktop",
        "Verified bank card integration with security verification workflows",
        "Comprehensive order books, transaction history, audit trails, and settlement tracking",
      ],
    },
    tags: ["Next.js / React", "TypeScript", "Crypto Trading", "FinTech", "Redux Toolkit", "Responsive Design", "Security"],
    metrics: [
      { label: { fa: "جفت ارز اصلی", en: "Primary Pair" }, value: "USDT / IRR" },
      { label: { fa: "طراحی رابط", en: "UI Experience" }, value: "Mobile Responsive" },
      { label: { fa: "نوع سرویس", en: "Service" }, value: "Instant Exchange & Wallet" },
    ],
    featured: true,
  },
  {
    id: "ispm-web",
    title: {
      fa: "سامانه پایش امنیت و تحلیل لاگ ISPM-Web (SIEM)",
      en: "ISPM-Web Security Information & Event Management (SIEM)",
    },
    category: { fa: "امنیت سایبری و استریم بلادرنگ لاگ‌ها", en: "Cybersecurity & Real-Time Log Streaming" },
    badge: { fa: "۱۰۰۰+ ایجنت امنیتی فعال", en: "1,000+ Active Agents" },
    status: "ongoing",
    image: "/images/.gignore/projects/ISPM/policy.png",
    gallery: [
      "/images/.gignore/projects/ISPM/policy.png",
      "/images/.gignore/projects/ISPM/user.png",
      "/images/.gignore/projects/ISPM/login.png",
    ],
    summary: {
      fa: "معماری سیستم مانیتورینگ امنیتی متمرکز با اتصال بیش از ۱,۰۰۰ ایجنت ویندوز از طریق Kafka و پروتکل EMQX MQTT.",
      en: "Centralized security intelligence monitoring 1,000+ Windows endpoints via Kafka and EMQX MQTT.",
    },
    description: {
      fa: "معماری کامل سیستم مانیتورینگ و آنالیز لاگ‌های امنیتی کلاینت‌ها (SIEM). دریافت مداوم و با توان عملیاتی بالای لاگ‌های بیش از هزار کلاینت ویندوزی متصل از طریق Apache Kafka و پروتکل بهینه‌سازی‌شده EMQX MQTT (جایگزین وب‌سوکت سنتی)، همراه با پنل مدیریت خط‌مشی‌ها (Security Policies)، مدیریت کاربران، ایجنت‌ها و اپلیکیشن PWA با احراز هویت دوعاملی.",
      en: "End-to-end SIEM and distributed log intelligence platform receiving high-throughput security event logs from 1,000+ Windows endpoints via Apache Kafka and lightweight EMQX MQTT protocol. Features centralized security policy configuration, endpoint inventory, and PWA administration with multi-factor authentication.",
    },
    highlights: {
      fa: [
        "یکپارچه‌سازی و مانیتورینگ بلادرنگ بیش از ۱,۰۰۰ ایجنت امنیتی فعال",
        "استفاده از Apache Kafka برای پایپ‌لاین استریم داده‌ها و ذخیره‌سازی در MongoDB",
        "بهره‌گیری از پروتکل سبک و پرسرعت MQTT با سرور EMQX",
        "مدیریت خط‌مشی‌های امنیتی (Policies) و پنل مدیریت با احراز هویت دوعاملی",
      ],
      en: [
        "Real-time monitoring and log ingestion from 1,000+ active Windows endpoints",
        "Resilient high-volume streaming pipeline with Apache Kafka and MongoDB",
        "Lightweight message exchange powered by EMQX MQTT protocol",
        "Centralized security policy distribution and 2FA enterprise administration",
      ],
    },
    tags: ["Node.js", "React", "Vite", "Apache Kafka", "MQTT / EMQX", "MongoDB", "PWA", "Cybersecurity"],
    metrics: [
      { label: { fa: "ایجنت‌های تحت پوشش", en: "Monitored Agents" }, value: "1,000+" },
      { label: { fa: "پروتکل داده", en: "Protocol" }, value: "MQTT (EMQX)" },
      { label: { fa: "پایپ‌لاین استریم", en: "Pipeline" }, value: "Apache Kafka" },
    ],
    featured: true,
  },
  {
    id: "nama-lms",
    title: {
      fa: "سامانه مدیریت یادگیری سازمانی Nama LMS و طراح گواهینامه",
      en: "Nama LMS & Dynamic Certificate Builder",
    },
    category: { fa: "پلتفرم‌های آموزش الکترونیک سازمانی", en: "Enterprise E-Learning & Certificate Systems" },
    badge: { fa: "شهرداری اصفهان و جهاد دانشگاهی", en: "Isfahan Municipality & Jahad" },
    status: "production",
    image: "/images/.gignore/projects/NAMA/Dashboard.png",
    gallery: [
      "/images/.gignore/projects/NAMA/Dashboard.png",
      "/images/.gignore/projects/NAMA/CardDesign.png",
      "/images/.gignore/projects/NAMA/DepartmentManagement.png",
      "/images/.gignore/projects/NAMA/BrowsingHistory.png",
      "/images/.gignore/projects/NAMA/AccessManagement.png",
      "/images/.gignore/projects/NAMA/AccessManagement2.png",
    ],
    summary: {
      fa: "سامانه آموزش سازمانی شهرداری اصفهان و جهاد دانشگاهی با طراح گرافیکی مدرک (Konva.js) و پردازش پس‌زمینه اکسل.",
      en: "Enterprise LMS featuring dynamic canvas certificate designer (Konva.js) and asynchronous bulk processing.",
    },
    description: {
      fa: "توسعه سامانه جامع آموزش و مدیریت یادگیری سازمانی (LMS) پیاده‌سازی شده برای نهادهای بزرگی مانند جهاد دانشگاهی تهران، شرکت توکانیرو و آموزش شهروندی شهرداری اصفهان. دارای طراح بصری قالب‌های مدرک و گواهینامه با بوم گرافیکی تعاملی Konva.js، ایمپورت پیشرفته فایل‌های حجیم اکسل در تسک‌های پس‌زمینه با فیدبک لحظه‌ای، و مانیتورینگ منابع سرور با دیتابیس سری زمانی InfluxDB و داشبوردهای گرافانا.",
      en: "Comprehensive enterprise LMS deployed for prominent organizations including Isfahan Municipality and Jahad Daneshgahi. Features an interactive certificate design suite powered by Konva.js, background asynchronous pipeline for large Excel datasets with live progress feedback, and server telemetry telemetry via InfluxDB and Grafana.",
    },
    highlights: {
      fa: [
        "ابزار بصری و پیشرفته طراحی قالب مدرک با Konva.js روی بوم گرافیکی تعاملی",
        "پردازش فایل‌های حجیم اکسل در تسک‌های پس‌زمینه همراه با گزارش لحظه‌ای پیشرفت",
        "پایش بلادرنگ منابع سرورها با دیتابیس سری زمانی InfluxDB و داشبوردهای Grafana",
        "مدیریت کامل دپارتمان‌ها، چارت سازمانی، سطوح دسترسی و سوابق بازدیدها",
      ],
      en: [
        "Visual certificate canvas designer built on Konva.js for custom dynamic certs",
        "Heavy Excel student importing executed in background tasks with real-time feedback",
        "Telemetry tracking and server resource health with InfluxDB and Grafana",
        "Department hierarchies, role authorization matrix, and detailed access logs",
      ],
    },
    tags: ["Django", "React", "Konva.js", "InfluxDB", "Grafana", "Celery", "PostgreSQL", "LMS"],
    metrics: [
      { label: { fa: "موتور طراحی مدرک", en: "Canvas Engine" }, value: "Konva.js" },
      { label: { fa: "پایش سرور", en: "Telemetry" }, value: "InfluxDB + Grafana" },
      { label: { fa: "محیط استقرار", en: "Deployment" }, value: "شهرداری اصفهان" },
    ],
    featured: true,
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    company: { fa: "دیده‌پرداز صبا (Dide Pardaz Saba)", en: "Dide Pardaz Saba" },
    role: { fa: "توسعه‌دهنده فول‌استک (Fullstack Developer)", en: "Fullstack Developer" },
    period: { fa: "۲۰۲۴ - ۲۰۲۴", en: "2024 - 2024" },
    duration: { fa: "۶ ماه", en: "6 Months" },
    achievements: {
      fa: [
        "مشارکت در توسعه سامانه جامع Nama LMS برای جهاد دانشگاهی تهران، شرکت توکانیرو و آموزش شهروندی شهرداری اصفهان.",
        "پیاده‌سازی ماژول واردسازی اکسل در Background Tasks با ریپورت Real-Time درصد پیشرفت.",
        "طراحی و پیاده‌سازی طراح گرافیکی مدارک پایان دوره با استفاده از Konva.js.",
        "راه‌اندازی سیستم پایش و مانیتورینگ بلادرنگ منابع سرورها به کمک پایگاه داده سری‌زمانی InfluxDB و داشبوردهای Grafana.",
      ],
      en: [
        "Contributed to Nama LMS for Jahad Daneshgahi Tehran, extended to ToKaniroo and Isfahan Municipality Education.",
        "Implemented large Excel background importing tasks with real-time progress reporting.",
        "Engineered an interactive canvas-based certificate of completion designer using Konva.js.",
        "Set up an infrastructure resource monitoring system using InfluxDB time-series database and Grafana.",
      ],
    },
    technologies: ["Django", "React", "Konva.js", "InfluxDB", "Grafana", "Celery", "PostgreSQL"],
  },
  {
    id: "exp-2",
    company: { fa: "سپانو داده‌پرداز (Sepano Data Processing)", en: "Sepano Data Processing" },
    role: { fa: "توسعه‌دهنده بک‌اند (Backend Developer)", en: "Backend Developer" },
    period: { fa: "۲۰۲۳ - ۲۰۲۴", en: "2023 - 2024" },
    duration: { fa: "۱۱ ماه", en: "11 Months" },
    achievements: {
      fa: [
        "تکمیل و نگهداری بک‌اند سامانه CRM سازمانی برای پروژه‌های Isfpak، ShipshopApp و IranLocation در محیط پروداکشن.",
        "یکپارچه‌سازی سیستم احراز هویت دو مرحله‌ای (Google Auth، Microsoft Auth و OTP پیامکی).",
        "طراحی، نرمال‌سازی و شاخص‌گذاری دیتابیس رابطه‌ای MariaDB.",
        "یکپارچه‌سازی ماژول تشخیص چهره (Face Detection) با بک‌اند.",
        "بهینه‌سازی QuerySet های سنگین و کاهش زمان پردازش از ۸ ثانیه به ۰.۸۵ تا ۱ ثانیه.",
      ],
      en: [
        "Maintained and enhanced the production CRM backend for Isfpak, ShipshopApp, and IranLocation.",
        "Integrated multi-factor authentication (Google Authenticator, Microsoft Authenticator, and SMS OTP).",
        "Designed and normalized MariaDB schemas for optimal throughput.",
        "Integrated facial detection pipelines with backend services.",
        "Optimized slow queries, cutting execution latency from 8 seconds down to 0.85-1 second.",
      ],
    },
    technologies: ["Python", "Django", "MariaDB", "Face Detection", "MFA", "Redis"],
  },
  {
    id: "exp-3",
    company: { fa: "دیده‌پرداز صبا (Dide Pardaz Saba)", en: "Dide Pardaz Saba" },
    role: { fa: "توسعه‌دهنده فول‌استک (Fullstack Developer)", en: "Fullstack Developer" },
    period: { fa: "۲۰۲۱ - ۲۰۲۲", en: "2021 - 2022" },
    duration: { fa: "۱ سال و ۵ ماه", en: "1 Year & 5 Months" },
    achievements: {
      fa: [
        "توسعه فرانت‌اند و بک‌اند سامانه جهاد دانشگاهی تهران و نگهداری موفق آن در محیط پروداکشن.",
        "بهینه‌سازی و بازطراحی دیتابیس‌های رابطه‌ای با PostgreSQL.",
        "طراحی و پیاده‌سازی سیستم فرم‌ساز داینامیک (Form Builder).",
        "پیاده‌سازی ماژول‌های حسابداری، سیستم تخفیف‌ها و گزارش‌گیری‌های مالی.",
        "پیاده‌سازی داشبورد یکپارچه مدیریتی در فرانت‌اند و بک‌اند.",
      ],
      en: [
        "Delivered fullstack development and production maintenance for Jahad Daneshgahi Tehran project.",
        "Optimized relational schemas and database indexes in PostgreSQL.",
        "Designed and developed a flexible dynamic Form Builder engine.",
        "Implemented accounting, coupon discounting, and fiscal reporting workflows.",
        "Engineered fullstack administrative dashboards with interactive analytics.",
      ],
    },
    technologies: ["Django", "React", "PostgreSQL", "JavaScript", "CSS/SASS", "REST API"],
  },
];
