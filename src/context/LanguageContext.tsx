"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeDirection } from "@/store/actions/themeActions";
import { selectThemeDirection } from "@/store/selectors/themeSelectors";
import { DIRECTIONS } from "@/store/constants";

export type Language = "fa" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fa: {
    // Nav
    "nav.home": "صفحه اصلی",
    "nav.about": "درباره من",
    "nav.skills": "مهارت‌ها",
    "nav.experience": "سوابق کاری",
    "nav.projects": "پروژه‌ها",
    "nav.blog": "وبلاگ",
    "nav.contact": "تماس با من",
    "nav.sample": "صفحه نمونه (CRUD)",
    "nav.downloadCv": "دانلود رزومه",

    // Hero
    "hero.badge": "آماده برای چالش‌های نوآورانه و پروژه‌های مقیاس‌پذیر",
    "hero.greeting": "سلام، من",
    "hero.name": "محمد خسروی",
    "hero.role": "مهندس نرم‌افزار و توسعه‌دهنده فول‌استک",
    "hero.bio":
      "توسعه‌دهنده نرم‌افزار با تمرکز بر معماری سیستم‌های توزیع‌شده، استریم بلادرنگ داده‌ها با Kafka و MQTT، پایگاه‌های داده رابطه‌ای و سری‌زمانی و بهینه‌سازی کارایی در مقیاس بالا.",
    "hero.cta.projects": "مشاهده پروژه‌ها",
    "hero.cta.contact": "ارتباط با من",
    "hero.cta.blog": "مطالعه مقالات",

    // Stats
    "stats.experience": "۴+ سال",
    "stats.experienceLabel": "تجربه توسعه نرم‌افزار",
    "stats.agents": "+۱,۰۰۰",
    "stats.agentsLabel": "ایجنت امنیتی متصل و پردازش لاگ",
    "stats.perf": "۸x",
    "stats.perfLabel": "بهینه‌سازی سرعت کوئری‌ها",
    "stats.projects": "+۵",
    "stats.projectsLabel": "پروژه سازمانی و در پروداکشن",

    // About
    "about.title": "درباره من",
    "about.subtitle": "نگاهی به مسیر تخصصی، معماری و فلسفه کاری من",
    "about.p1":
      "من محمد خسروی، کارشناس ارشد مهندسی نرم‌افزار هستم. هدف من خلق راه‌حل‌های مهندسی تمیز، پایدار و با کارایی بالا برای مسائل پیچیده مقیاس‌پذیر است.",
    "about.p2":
      "تسلط بر الگوهای معماری نرم‌افزار (از جمله MVC، Pipe & Filter و Broker) و استفاده هدفمند از ابزارهای مقرون‌به‌صرفه و مدرن، به من این امکان را می‌دهد که سرعت توسعه، پایداری و نگه‌داشت‌پذیری پروژه‌ها را به حداکثر برسانم.",
    "about.eduTitle": "تحصیلات دانشگاهی",
    "about.edu1.degree": "کارشناسی ارشد مهندسی نرم‌افزار",
    "about.edu1.school": "دانشگاه آزاد اسلامی، واحد نجف‌آباد",
    "about.edu1.years": "۲۰۲۳ - در حال حاضر",
    "about.edu2.degree": "کارشناسی مهندسی نرم‌افزار",
    "about.edu2.school": "دانشگاه آزاد اسلامی، واحد خمینی‌شهر",
    "about.edu2.years": "۲۰۱۹ - ۲۰۲۳",

    // Skills
    "skills.title": "مهارت‌های فنی و ابزارها",
    "skills.subtitle": "استک فناوری‌هایی که برای پیاده‌سازی سیستم‌های قابل اتکا استفاده می‌کنم",
    "skills.cat.backend": "بک‌اند و معماری",
    "skills.cat.data": "داده‌ها، پایگاه داده و استریمینگ",
    "skills.cat.frontend": "فرانت‌اند و رابط کاربری",
    "skills.cat.devops": "دواپس، لینوکس و زیرساخت",

    // Projects
    "projects.title": "پروژه‌های شاخص",
    "projects.subtitle": "برگزیده‌ای از معماری‌ها و سیستم‌هایی که پیاده‌سازی کرده‌ام",
    "projects.viewCode": "سورس کد",
    "projects.viewLive": "مشاهده جزئیات",
    "projects.status.ongoing": "در حال توسعه",
    "projects.status.production": "در حال استفاده در پروداکشن",

    // Experience
    "experience.title": "سوابق شغلی",
    "experience.subtitle": "مسیر همکاری و مسئولیت‌های من در شرکت‌های فناوری",

    // Blog
    "blog.title": "وبلاگ و یادداشت‌های فنی",
    "blog.subtitle": "اشتراک تجربیات در زمینه مهندسی سیستم، پردازش بلادرنگ و بهینه‌سازی دیتابیس",
    "blog.readTime": "دقیقه مطالعه",
    "blog.readMore": "مطالعه مقاله کامل",
    "blog.back": "بازگشت به مقالات",
    "blog.searchPlaceholder": "جستجو در عنوان یا محتوای مقالات...",
    "blog.allCategories": "همه دسته‌بندی‌ها",

    // Contact
    "contact.title": "تماس و ارتباط",
    "contact.subtitle": "برای چالش‌ها، موقعیت‌های همکاری یا مشاوره‌های فنی همواره مشتاق گفتگو هستم",
    "contact.email": "ایمیل:",
    "contact.phone": "تلفن همراه:",
    "contact.location": "موقعیت:",
    "contact.locationVal": "ایران، اصفهان",
    "contact.form.name": "نام شما",
    "contact.form.email": "ایمیل شما",
    "contact.form.subject": "موضوع پیام",
    "contact.form.message": "متن پیام",
    "contact.form.send": "ارسال پیام",
    "contact.form.success": "پیام شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیرم!",

    // Common
    "common.copyright": "تمامی حقوق محفوظ است © ۲۰۲۶ محمد خسروی",
    "common.themeToggle": "تغییر تم (روشن / تاریک)",
    "common.langToggle": "تغییر زبان (EN)",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.sample": "Sample CRUD Page",
    "nav.downloadCv": "Download CV",

    // Hero
    "hero.badge": "Available for scalable systems & ambitious engineering challenges",
    "hero.greeting": "Hi, I am",
    "hero.name": "Mohammad Khosravi",
    "hero.role": "Software Engineer & Fullstack Developer",
    "hero.bio":
      "Software engineer with proven experience in architecting distributed systems, real-time log streaming with Kafka and MQTT, high-performance relational databases, and enterprise web applications.",
    "hero.cta.projects": "Explore Projects",
    "hero.cta.contact": "Get in Touch",
    "hero.cta.blog": "Read Articles",

    // Stats
    "stats.experience": "4+ Years",
    "stats.experienceLabel": "Software Engineering Experience",
    "stats.agents": "1,000+",
    "stats.agentsLabel": "Active Security Agents Monitored",
    "stats.perf": "8x",
    "stats.perfLabel": "Query Performance Boost",
    "stats.projects": "5+",
    "stats.projectsLabel": "Production Enterprise Systems",

    // About
    "about.title": "About Me",
    "about.subtitle": "Architectural mindset, engineering philosophy, and academic background",
    "about.p1":
      "I am Mohammad Khosravi, a Software Engineer pursuing my Master's Degree. My passion lies in designing clean, cost-effective, and highly performant solutions for complex business and architectural problems.",
    "about.p2":
      "Proficient in architectural patterns (MVC, Pipe & Filter, Broker) and modern distributed tooling, I focus on maximizing developer velocity, code maintainability, and system resilience.",
    "about.eduTitle": "Academic Background",
    "about.edu1.degree": "Master's Degree in Software Engineering",
    "about.edu1.school": "Islamic Azad University, Najafabad Branch",
    "about.edu1.years": "2023 - Present",
    "about.edu2.degree": "Bachelor's Degree in Software Engineering",
    "about.edu2.school": "Islamic Azad University, Khomeyni Shahr Branch",
    "about.edu2.years": "2019 - 2023",

    // Skills
    "skills.title": "Technical Skills & Ecosystem",
    "skills.subtitle": "Core technologies and platforms I use to build scalable products",
    "skills.cat.backend": "Backend & Architecture",
    "skills.cat.data": "Data, Databases & Streaming",
    "skills.cat.frontend": "Frontend & Interactive UI",
    "skills.cat.devops": "DevOps, Linux & Infrastructure",

    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Selected systems and platforms built for production scale",
    "projects.viewCode": "Source Code",
    "projects.viewLive": "View Details",
    "projects.status.ongoing": "In Development",
    "projects.status.production": "Live in Production",

    // Experience
    "experience.title": "Work Experience",
    "experience.subtitle": "Career trajectory and key engineering responsibilities",

    // Blog
    "blog.title": "Engineering Blog",
    "blog.subtitle": "Articles and case studies on system architecture, query optimization, and real-time streaming",
    "blog.readTime": "min read",
    "blog.readMore": "Read Article",
    "blog.back": "Back to all articles",
    "blog.searchPlaceholder": "Search articles by title or keyword...",
    "blog.allCategories": "All Categories",

    // Contact
    "contact.title": "Let's Connect",
    "contact.subtitle": "Interested in collaborating or discussing technical challenges? Feel free to reach out.",
    "contact.email": "Email:",
    "contact.phone": "Phone:",
    "contact.location": "Location:",
    "contact.locationVal": "Isfahan, Iran",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.success": "Your message has been sent successfully. I will get back to you shortly!",

    // Common
    "common.copyright": "All rights reserved © 2026 Mohammad Khosravi",
    "common.themeToggle": "Toggle Theme (Light / Dark)",
    "common.langToggle": "Switch Language (فارسی)",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "fa",
  setLanguage: () => {},
  toggleLanguage: () => {},
  isRtl: true,
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const themeDirection = useSelector(selectThemeDirection);
  const [language, setLanguageState] = useState<Language>("fa");

  // Initialize from localStorage or theme direction
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "fa" || saved === "en") {
      setLanguageState(saved);
      const newDir = saved === "fa" ? DIRECTIONS.RTL : DIRECTIONS.LTR;
      if (themeDirection !== newDir) {
        dispatch(setThemeDirection(newDir));
      }
    } else {
      const initialLang: Language = themeDirection === "rtl" ? "fa" : "en";
      setLanguageState(initialLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    const newDir = lang === "fa" ? DIRECTIONS.RTL : DIRECTIONS.LTR;
    dispatch(setThemeDirection(newDir));
    document.documentElement.dir = newDir;
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === "fa" ? "en" : "fa");
  };

  const isRtl = language === "fa";

  const t = (key: string): string => {
    return translations[language][key] || translations.fa[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
