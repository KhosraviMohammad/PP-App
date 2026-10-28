# راهنمای جامع ساختار و معماری پروژه (Agent Context)

این مستند برای درک سریع و کامل ساختار پروژه **PP-App** (وب‌سایت شخصی و پورتفولیو **محمد خسروی**) توسط ایجنت هوش مصنوعی تهیه شده است تا در جلسات بعدی بدون نیاز به جستجوی مجدد تمام فایل‌ها، تصویر دقیقی از معماری و جزئیات کدبیس در دسترس باشد.

---

## ۱. مشخصات کلی و استک فنی (`package.json`)

- **مسیر پروژه:** `c:\Users\j-tech_ir\Desktop\programming\personal-portfolio\PP-App`
- **فریم‌ورک اصلی:** Next.js `^16.2.12` (App Router) + React `^19.2.6` + TypeScript `~6.0.2`
- **کتابخانه رابط کاربری:** Material-UI (`@mui/material` `^9.2.0`، `@mui/icons-material` `^9.0.1`)
- **استایل‌دهی و RTL:** Emotion (`@emotion/react`، `@emotion/styled`) + پلاگین راست‌چین `@mui/stylis-plugin-rtl`
- **مدیریت وضعیت (State Management):**
  - **Redux (`redux` + `redux-persist` + `@reduxjs/toolkit`):** ذخیره وضعیت جهت قالب (`rtl`/`ltr`)، حالت تم و عنوان/توضیحات هدر.
  - **React Context (`LanguageContext`):** مدیریت زبان (`fa` / `en`)، ترجمه‌ها (`t(key)`) و همگام‌سازی جهت صفحه با Redux و `localStorage`.
- **اعلان‌ها:** `react-toastify`

---

## ۲. درختواره فایل‌های اصلی پروژه (`src/` و `public/`)

```text
PP-App/
├── public/
│   ├── .gignore/
│   │   └── Mohammad_Khosravi_CV.pdf        # فایل رزومه در پوشه .gignore
│   └── images/
│       ├── me.jpg                          # تصویر پروفایل
│       ├── Logo.png / Logo1.png
│       └── .gignore/projects/              # تصاویر و اسکرین‌شات‌های پروژه‌ها
│           ├── APEX-IOT/                   # (monitoring.png, sensor.png, sensor-chart.png, access.png)
│           ├── CAVAX/                      # (Trade.png, Trade1.png, panel.png, cards.png, history.png, history_responsive.png)
│           ├── ISPM/                       # (policy.png, user.png, login.png)
│           └── NAMA/                       # (CardDesign2.PNG, CardDesign.png, Dashboard.png, DepartmentManagement.png, ...)
│
└── src/
    ├── app/                                # مسیرهای Next.js App Router
    │   ├── layout.tsx                      # RootLayout: فونت‌های Vazirmatn و Space Grotesk + ClientRootProvider
    │   └── (dashboard)/
    │       ├── layout.tsx                  # پوشش صفحات با DashboardLayout (هدر + فوتر)
    │       ├── page.tsx                    # صفحه اصلی پورتفولیو (HomePage)
    │       ├── blog/
    │       │   └── page.tsx                # صفحه وبلاگ، جستجو، فیلتر دسته‌بندی و دیالوگ مطالعه مقاله
    │       └── projects/
    │           └── [id]/
    │               └── page.tsx            # صفحه جزئیات هر پروژه، گالری اسکرین‌شات‌ها و ناوبری پروژه قبلی/بعدی
    │
    ├── components/
    │   ├── layouts/
    │   │   ├── DashboardLayout.tsx         # لایه اصلی شامل Header، محتوای main و Footer
    │   │   └── Header.tsx                  # نوار ناوبری بالا (ثابت)، تغییر زبان (FA/EN)، دانلود رزومه و منوی موبایل (Drawer)
    │   └── portfolio/                      # سکشن‌های صفحه اصلی
    │       ├── HeroSection.tsx             # معرفی، دکمه‌های CTA، عکس پروفایل و ۴ کارت آمار کلیدی (Quick Stats)
    │       ├── ProjectsSection.tsx         # گرید نمایش کارت‌های پروژه‌ها با لینک به `/projects/[id]`
    │       ├── AboutSection.tsx            # رویکرد مهندسی، اصول کلیدی و سوابق تحصیلی (ارشد و کارشناسی)
    │       ├── SkillsSection.tsx           # نمایش ۴ دسته‌بندی مهارت‌ها با LinearProgress
    │       ├── ExperienceSection.tsx       # تایم‌لاین سوابق شغلی، دستاوردها و تگ‌های تکنولوژی
    │       └── ContactSection.tsx          # اطلاعات تماس مستقیم، شبکه‌های اجتماعی و فرم ارسال پیام (فعلاً در page.tsx کامنت شده)
    │
    ├── context/
    │   └── LanguageContext.tsx             # کانتکست دوزبانه (fa/en)، دیکشنری ترجمه‌ها و هوک `useLanguage()`
    │
    ├── data/
    │   ├── portfolioData.ts                # منبع اصلی داده‌های پورتفولیو (اطلاعات پایه، مهارت‌ها، پروژه‌ها، سوابق کاری)
    │   └── blogData.ts                     # داده‌ها و متن کامل مقالات فنی وبلاگ (دوزبانه)
    │
    ├── providers/
    │   ├── ClientRootProvider.tsx          # ترکیب ReduxProvider + MaterialUIProvider + LanguageProvider + GlobalStyles + ToastContainer
    │   ├── MaterialUIProvider.tsx          # ساخت تم MUI و Emotion Cache داینامیک بر اساس جهت (rtl/ltr)
    │   └── ReduxProvider.tsx               # Provider ریداکس و PersistGate
    │
    ├── store/                              # ساختار Redux
    │   ├── index.ts                        # پیکربندی Store و redux-persist
    │   ├── constants.ts                    # ثابت‌های THEMES و DIRECTIONS
    │   ├── types.ts                        # تایپ‌های اکشن‌ها و State
    │   ├── actions/                        # اکشن‌های headerActions و themeActions
    │   ├── reducers/                       # ردیوسرهای headerReducer و themeReducer
    │   ├── selectors/                      # سلکتورهای headerSelectors و themeSelectors
    │   └── api/sampleApi.ts                # (باقی‌مانده از قالب اولیه - بلااستفاده)
    │
    └── theme/                              # تنظیمات تم Material-UI
        ├── index.ts                        # تابع `createAppTheme` با `responsiveFontSizes`
        ├── palette.ts                      # پالت رنگی روشن (Light Mode)
        ├── typography.ts                   # تنظیمات تایپوگرافی (`Vazirmatn`, `Space Grotesk`)
        └── components/                     # استایل‌های سفارشی کامپوننت‌های MUI
            ├── index.ts
            ├── button.ts
            ├── card.ts
            ├── chip.ts
            ├── drawer.ts
            ├── iconButton.ts
            ├── input.ts
            ├── paper.ts
            └── table.ts
```

---

## ۳. جزئیات لایه‌ها و مکانیزم‌های کلیدی

### ۳.۱. سیستم دوزبانه (i18n) و راست‌چین/چپ‌چین (RTL/LTR)
1. **مدیریت زبان (`src/context/LanguageContext.tsx`):**
   - هوک `useLanguage()` مقادیر `{ language, setLanguage, toggleLanguage, isRtl, t }` را برمی‌گرداند.
   - زبان انتخابی در `localStorage` با کلید `"portfolio_lang"` ذخیره می‌شود.
   - با تغییر زبان، اکشن `setThemeDirection` در Redux فراخوانی شده و ویژگی‌های `document.documentElement.dir` و `lang` به‌روزرسانی می‌شوند.
2. **کش Emotion و تم MUI (`src/providers/MaterialUIProvider.tsx`):**
   - جهت فعلی (`rtl` یا `ltr`) را از استور Redux می‌خواند (`selectThemeDirection`).
   - در حالت `rtl`، پلاگین `rtlPlugin` (`@mui/stylis-plugin-rtl`) را روی Emotion Cache (`key: "muirtl"`) فعال می‌کند تا تمام فاصله‌ها و جهت‌های MUI به صورت خودکار راست‌چین شوند.
3. **ساختار داده‌های دوزبانه (`src/data/portfolioData.ts` & `src/data/blogData.ts`):**
   - متن‌های ثابت رابط کاربری از طریق `t("key")` در `LanguageContext.tsx` خوانده می‌شوند.
   - داده‌های محتوایی (پروژه‌ها، سوابق، مهارت‌ها، مقالات) دارای فیلدهای شیء به شکل `{ fa: string, en: string }` یا `{ fa: string[], en: string[] }` هستند و در کامپوننت‌ها با شرط `isRtl ? item.fa : item.en` نمایش داده می‌شوند.

### ۳.۲. سیستم طراحی و تم (`src/theme/`)
- **حالت تم:** همیشه بر پایه **Light Mode** تنظیم شده است (`src/theme/palette.ts`).
- **رنگ‌های اصلی:**
  - `primary.main`: `#2563eb` (آبی برند)
  - `secondary.main`: `#06b6d4` (فیروزه‌ای/سیان برند)
  - `background.default`: `#f8fafc` | `background.paper`: `#ffffff`
  - `text.primary`: `#0f172a` | `text.secondary`: `#64748b`
  - `success.main`: `#26A17B`
- **فونت‌ها:** فونت اصلی فارسی و انگلیسی `Vazirmatn` و فونت مکمل اعداد/لاتین `Space Grotesk` است.
- **سفارشی‌سازی کامپوننت‌ها (`src/theme/components/`):** استایل‌های پیش‌فرض MUI برای `Button`، `Card`، `Chip`، `Drawer`، `IconButton`، `Input`، `Paper` و `Table` در این پوشه بازنویسی شده‌اند.

### ۳.۳. مدل داده‌ها در `src/data/portfolioData.ts`
- **`PORTFOLIO_INFO`**: مشخصات فردی، آواتار (`/images/me.jpg`)، ایمیل، تلفن، لینک‌های گیت‌هاب/لینکدین/تلگرام و ۴ آمار کلیدی (`stats`).
- **`SKILL_CATEGORIES` (`SkillCategory[]`)**: ۴ دسته مهارت (بک‌اند و معماری، داده‌ها و استریمینگ، فرانت‌اند، دواپس و زیرساخت) که هر مهارت شامل `{ name, level, highlight }` است.
- **`PROJECTS_DATA` (`ProjectItem[]`)**: شامل ۴ پروژه اصلی:
  1. `apex-iot`: سامانه پایش و کنترل هوشمند صنعتی (SCADA & Industrial IoT)
  2. `cavax-exchange`: پلتفرم تبادل رمزارز و مدیریت کیف پول کاواکس (IRR / USDT)
  3. `ispm-web`: سامانه پایش امنیت و تحلیل لاگ ISPM-Web (SIEM)
  4. `nama-lms`: سامانه مدیریت یادگیری سازمانی Nama LMS و طراح گواهینامه
- **`EXPERIENCES_DATA` (`ExperienceItem[]`)**: ۳ سابقه شغلی در شرکت‌های «دیده‌پرداز صبا» و «سپانو داده‌پرداز».

---

## ۴. نکات فنی و موارد قابل توجه (Known Notes & Quirks)

1. **کامنت بودن بخش تماس در صفحه اصلی:**
   - در فایل `src/app/(dashboard)/page.tsx` خط ۳۷، کامپوننت `<ContactSection />` کامنت شده است، اما در `Header.tsx` و `HeroSection.tsx` لینک‌های `#contact` و `/#contact` همچنان وجود دارند.
2. **مسیر فایل رزومه (`Mohammad_Khosravi_CV.pdf`):**
   - فایل فیزیکی رزومه درون `public/.gignore/Mohammad_Khosravi_CV.pdf` (و همچنین یک نسخه در ریشه اصلی فضای کاری بالاتر از `PP-App`) قرار دارد.
   - در `PORTFOLIO_INFO.cvFile` مسیر `/.gignore/Mohammad_Khosravi_CV.pdf` ثبت شده، اما در `Header.tsx` و `HeroSection.tsx` ویژگی `href` دکمه دانلود رزومه روی `/Mohammad_Khosravi_CV.pdf` تنظیم شده است.
3. **حساسیت به حروف بزرگ/کوچک در پسوند تصاویر:**
   - در `public/images/.gignore/projects/NAMA/CardDesign2.PNG` پسوند فایل با حروف بزرگ (`.PNG`) است، در حالی که در `portfolioData.ts` به صورت `.png` نوشته شده است (در ویندوز کار می‌کند اما در سرورهای لینوکسی حساس به حروف بزرگ و کوچک است).
4. **فایل‌های باقی‌مانده از قالب اولیه (`exchangepanel`):**
   - فایل‌های `src/schemas/sampleSchemas.ts`، `src/store/api/sampleApi.ts`، `vite.config.ts` و `index.html` از قالب قبلی باقی مانده‌اند و در اجرای Next.js نقشی ندارند.
