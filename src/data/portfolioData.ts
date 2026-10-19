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
  cvFile: "/Mohammad_Khosravi_CV.pdf",
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
    id: "ispm-web",
    title: {
      fa: "سامانه پایش امنیت و تحلیل لاگ ISPM-Web (SIEM)",
      en: "ISPM-Web Security Information & Event Management (SIEM)",
    },
    category: { fa: "سیستم‌های توزیع‌شده و استریم بلادرنگ", en: "Distributed Systems & Streaming" },
    badge: { fa: "۱۰۰۰+ ایجنت امنیتی", en: "1,000+ Active Agents" },
    status: "ongoing",
    summary: {
      fa: "معماری سیستم مانیتورینگ امنیتی متمرکز با اتصال بیش از ۱۰۰۰ ایجنت ویندوز از طریق Kafka و پروتکل EMQX MQTT با نسخه PWA.",
      en: "Centralized security monitoring architecture integrating 1,000+ Windows agents via Kafka and EMQX MQTT with PWA support.",
    },
    description: {
      fa: "طراحی معماری کامل با Node.js (Express)، Vite و React. لاگ‌های امنیتی بیش از هزار کلاینت ویندوزی از طریق Apache Kafka استریم و پردازش می‌شوند. جهت کاهش سربار و افزایش سرعت، پروتکل MQTT با EMQX جایگزین وب‌سوکت شده و پنل مدیریتی پیشرفته به همراه احراز هویت دو مرحله‌ای پیاده شده است.",
      en: "Full architecture design using Node.js (Express), Vite, and React. Real-time streaming pipeline processing logs from 1,000+ Windows agents using Apache Kafka and MongoDB. MQTT over EMQX replaced traditional WebSockets for optimal performance.",
    },
    highlights: {
      fa: [
        "یکپارچه‌سازی و مانیتورینگ بلادرنگ بیش از ۱,۰۰۰ ایجنت امنیتی فعال",
        "استفاده از Apache Kafka برای استریم داده‌ها و ذخیره‌سازی در MongoDB",
        "پیاده‌سازی پروتکل ارتباطی MQTT به کمک EMQX",
        "طراحی پنل مدیریت پیشرفته و اپلیکیشن PWA با احراز هویت دوعاملی",
      ],
      en: [
        "Real-time monitoring and management of 1,000+ Windows security agents",
        "High-throughput data streaming pipeline powered by Apache Kafka & MongoDB",
        "Lightweight agent communication using EMQX MQTT protocol",
        "Enterprise admin dashboard and PWA with Google Authenticator-style MFA",
      ],
    },
    tags: ["Node.js", "React", "Vite", "Apache Kafka", "MQTT / EMQX", "MongoDB", "PWA", "Docker"],
    metrics: [
      { label: { fa: "ایجنت‌های تحت پوشش", en: "Monitored Agents" }, value: "1,000+" },
      { label: { fa: "پروتکل داده", en: "Protocol" }, value: "MQTT (EMQX)" },
      { label: { fa: "پایپ‌لاین استریم", en: "Pipeline" }, value: "Kafka" },
    ],
    featured: true,
  },
  {
    id: "joghraf-webgis",
    title: {
      fa: "سامانه WebGIS جغراف (پلتفرم تحلیل داده‌های مکانی)",
      en: "Joghraf Enterprise WebGIS Platform",
    },
    category: { fa: "سامانه‌های اطلاعات مکانی و GIS", en: "Geographic Information Systems" },
    badge: { fa: "PostGIS & GeoServer", en: "PostGIS & GeoServer" },
    status: "production",
    summary: {
      fa: "سامانه WebGIS با دو دیتابیس مجزا، اکستنشن PostGIS و پروکسی متمرکز بین کلاینت‌ها و GeoServer با پروتکل‌های OGC.",
      en: "Enterprise WebGIS platform with dual PostgreSQL databases, PostGIS spatial engine, and centralized GeoServer proxy.",
    },
    description: {
      fa: "توسعه پلتفرم اطلاعات مکانی با Django، React و دو دیتابیس مجزا (یک دیتابیس اختصاصی با PostGIS برای عوارض و لایه‌های نقشه و دیگری برای داده‌های سیستمی). پیاده‌سازی پروکسی امن میان کلاینت‌ها و GeoServer با پشتیبانی از پروتکل‌های استاندارد WMS، WFS، WCS و WPS.",
      en: "Developed with Django, React, and two PostgreSQL instances (one with PostGIS for spatial layers, one for transactional data). Features a custom secure proxy managing GeoServer communication with full OGC standard support (WMS, WFS, WCS, WPS).",
    },
    highlights: {
      fa: [
        "معماری دو دیتابیسی با پایگاه داده مکانی اختصاصی PostGIS",
        "پیاده‌سازی پروکسی امن بین کلاینت‌ها و GeoServer",
        "پشتیبانی کامل از استانداردهای بین‌المللی OGC (WMS, WFS, WCS, WPS)",
        "رندرینگ سریع لایه‌های نقشه و فیلترهای تحلیلی در فرانت‌اند",
      ],
      en: [
        "Dual database architecture with dedicated PostGIS spatial engine",
        "Centralized secure proxy between web clients and GeoServer",
        "Full support for international OGC standards (WMS, WFS, WCS, WPS)",
        "High-performance client-side layer rendering and spatial querying",
      ],
    },
    tags: ["Django", "React", "PostgreSQL", "PostGIS", "GeoServer", "OGC Protocols", "GIS"],
    metrics: [
      { label: { fa: "موتور مکانی", en: "Spatial Engine" }, value: "PostGIS" },
      { label: { fa: "سرور نقشه", en: "Map Server" }, value: "GeoServer" },
      { label: { fa: "پروتکل‌ها", en: "Standards" }, value: "WMS/WFS/WCS" },
    ],
    featured: true,
  },
  {
    id: "nama-lms",
    title: {
      fa: "سامانه مدیریت یادگیری Nama LMS و ابزار صدور گواهینامه",
      en: "Nama LMS & Dynamic Certificate Builder",
    },
    category: { fa: "سامانه‌های آموزش الکترونیک سازمانی", en: "Enterprise Learning Systems" },
    badge: { fa: "شهرداری اصفهان و جهاد دانشگاهی", en: "Isfahan Municipality & Jahad" },
    status: "production",
    summary: {
      fa: "توسعه سامانه آموزش نما با ایمپورتر اکسل در پس‌زمینه با گزارش آنی، طراحی قالب گواهینامه با Konva.js و پایش سرور با InfluxDB و Grafana.",
      en: "LMS for major institutions featuring real-time Excel background processing, dynamic canvas certificate designer, and InfluxDB monitoring.",
    },
    description: {
      fa: "مشارکت در توسعه سامانه جامع LMS برای جهاد دانشگاهی تهران، شرکت توکانیرو و آموزش شهروندی شهرداری اصفهان. طراحی و پیاده‌سازی سیستم صدور و طراحی مدرک با Konva.js، ایمپورت فایل‌های حجیم اکسل در Background Tasks همراه با وب‌سوکت گزارش‌دهی لحظه‌ای، و مانیتورینگ منابع سرور با دیتابیس سری‌زمانی InfluxDB و گرافانا.",
      en: "Fullstack development on Nama LMS deployed for Jahad Daneshgahi Tehran, ToKaniroo, and Municipality of Isfahan. Engineered a visual certificate builder using Konva.js, background Excel file processing with live progress updates, and infrastructure telemetry using InfluxDB and Grafana.",
    },
    highlights: {
      fa: [
        "ایمپورتر فایل‌های اکسل بزرگ در تسک‌های پس‌زمینه با گزارش‌دهی Real-Time",
        "طراحی و پیاده‌سازی ابزار ویژوال طراحی قالب مدرک با Konva.js",
        "پایش بلادرنگ منابع سرورها با InfluxDB و داشبوردهای Grafana",
        "گسترش سامانه برای سازمان‌های بزرگ با هزاران دانش‌پذیر",
      ],
      en: [
        "Heavy Excel importing executed in background tasks with real-time feedback",
        "Interactive certificate of completion canvas designer built with Konva.js",
        "Server telemetry and resource tracking using InfluxDB and Grafana",
        "Successfully scaled for educational institutions with tens of thousands of users",
      ],
    },
    tags: ["Django", "React", "Konva.js", "InfluxDB", "Grafana", "Celery", "PostgreSQL"],
    metrics: [
      { label: { fa: "موتور طراحی", en: "Canvas Engine" }, value: "Konva.js" },
      { label: { fa: "پایش سرور", en: "Telemetry" }, value: "InfluxDB + Grafana" },
      { label: { fa: "پردازش", en: "Processing" }, value: "Background Tasks" },
    ],
    featured: true,
  },
  {
    id: "crm-performance",
    title: {
      fa: "سامانه CRM سازمانی و موتور بهینه‌سازی کوئری",
      en: "Enterprise CRM & High-Performance Query Engine",
    },
    category: { fa: "مدیریت ارتباط با مشتری و دیتابیس", en: "CRM & Database Performance" },
    badge: { fa: "کاهش زمان کوئری از ۸ ثانیه به ۰.۸۵ ثانیه", en: "8s to 0.85s Optimization" },
    status: "production",
    summary: {
      fa: "تکمیل بک‌اند سیستم CRM پروژه‌های Isfpak، ShipshopApp و IranLocation، احراز هویت چندعاملی، نرمال‌سازی MariaDB و تشخیص چهره.",
      en: "Production CRM backend for major commerce projects with MFA, face detection integration, and 8x query optimization.",
    },
    description: {
      fa: "طراحی و توسعه بک‌اند سامانه CRM و پنل مدیریت برای پروژه‌های Isfpak، ShipshopApp و IranLocation. بهینه‌سازی کوئری‌های بسیار سنگین دیتابیس به طوری که زمان اجرای کوئری‌ها از ۸ ثانیه به ۰.۸۵ تا ۱ ثانیه کاهش یافت. پیاده‌سازی MFA با سرویس‌های گوگل، مایکروسافت و پیامک و یکپارچه‌سازی سیستم تشخیص چهره با بک‌اند.",
      en: "Architected and delivered the backend for an enterprise CRM serving multiple live production applications. Reduced critical database query times from 8.0s to 0.85s via index tuning and QuerySet optimization. Integrated multi-factor authentication and backend facial recognition.",
    },
    highlights: {
      fa: [
        "بهینه‌سازی خیره‌کننده کوئری‌های سنگین از ۸ ثانیه به زیر ۱ ثانیه",
        "پیاده‌سازی احراز هویت چند عاملی (Google Auth, Microsoft Auth, SMS)",
        "نرمال‌سازی اصولی پایگاه داده MariaDB و شاخص‌گذاری پیشرفته",
        "یکپارچه‌سازی الگوریتم‌های تشخیص چهره (Face Detection) با بک‌اند",
      ],
      en: [
        "Dramatic query optimization reducing execution time from 8s to 0.85s",
        "Multi-factor authentication (Google Authenticator, Microsoft Auth, SMS)",
        "Advanced relational schema normalization and index optimization in MariaDB",
        "Backend facial recognition pipeline integration",
      ],
    },
    tags: ["Python / Django", "MariaDB", "Face Detection", "MFA", "Query Optimization", "Redis"],
    metrics: [
      { label: { fa: "بهبود زمان کوئری", en: "Query Speedup" }, value: "8s ➔ 0.85s" },
      { label: { fa: "احراز هویت", en: "Auth Security" }, value: "MFA + Face" },
      { label: { fa: "محیط اجرا", en: "Environment" }, value: "Production" },
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
