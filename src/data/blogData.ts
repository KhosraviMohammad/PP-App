export interface BlogPost {
  id: string;
  slug: string;
  title: { fa: string; en: string };
  excerpt: { fa: string; en: string };
  content: { fa: string; en: string };
  category: { fa: string; en: string };
  readingTime: number;
  date: { fa: string; en: string };
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "kafka-mqtt-log-pipeline-architecture",
    title: {
      fa: "معماری پایپ‌لاین لاگ در مقیاس ۱۰۰۰+ ایجنت با Apache Kafka و EMQX MQTT",
      en: "Architecting a 1,000+ Agent Log Pipeline with Apache Kafka and EMQX MQTT",
    },
    excerpt: {
      fa: "بررسی چالش‌های مانیتورینگ متمرکز امنیت، چرایی انتخاب پروتکل MQTT به جای وب‌سوکت برای ایجنت‌های ویندوز، و نحوه استفاده از کافکا به عنوان بافر پرسرعت.",
      en: "Lessons learned from scaling a centralized security telemetry pipeline: Why MQTT was chosen over WebSockets for 1,000+ Windows agents, and how Kafka buffers millions of events.",
    },
    category: { fa: "معماری سیستم و توزیع‌شده", en: "Distributed Systems & Architecture" },
    readingTime: 6,
    date: { fa: "۱۴ مهر ۱۴۰۴", en: "Oct 6, 2025" },
    tags: ["Kafka", "MQTT", "EMQX", "System Design", "Node.js", "Docker"],
    featured: true,
    content: {
      fa: `
در پروژه‌های پایش امنیت سازمانی (SIEM)، یکی از چالش‌های بنیادین، جمع‌آوری لاگ‌ها از صدها و هزاران سرور و سیستم کلاینت بدون تحمیل سربار پردازشی بر شبکه است.

### ۱. چالش وب‌سوکت در مقیاس بالا
در شروع طراحی، پروتکل‌های رایج نظیر HTTP Polling و WebSocket بررسی شدند. اتصال مداوم بیش از ۱,۰۰۰ ایجنت ویندوز از طریق WebSocket، منابع رم و کانکشن‌های باز زیادی را بر روی سرور نگه‌می‌داشت و در زمان قطعی‌های مقطعی شبکه، بازسازی کانکشن‌ها باعث ایجاد طوفان درخواست (Thundering Herd) می‌شد.

### ۲. چرا پروتکل MQTT و بروکر EMQX؟
پروتکل MQTT به عنوان یک استاندارد سبک و بر پایه الگوی Publish/Subscribe عمل می‌کند. بروکر قدرتمند EMQX به دلیل قابلیت مدیریت میلیون‌ها کانکشن همزمان و سربار پایین Header پکت‌ها (تنها ۲ بایت)، انتخاب فوق‌العاده‌ای بود:
- پشتیبانی بومی از سطوح مختلف کیفیت خدمات (QoS 0, 1, 2)
- قابلیت Keep-alive با مصرف پهنای باند ناچیز
- ایزولاسیون کامل کلاینت‌ها بر اساس تاپیک‌های مجزا

### ۳. ورود Apache Kafka به عنوان بافر و استریمینگ پایدار
برای جلوگیری از افت پرفورمنس پایگاه داده در لحظات اوج ارسال لاگ (Spikes)، لاگ‌های دریافتی از MQTT مستقیماً در دیتابیس نوشته نمی‌شوند، بلکه به یک کلاستر Apache Kafka هدایت می‌گردند:
- **ایمنی در برابر ترافیک لحظه‌ای:** کافکا اجازه می‌دهد لاگ‌ها با خیال راحت بافر شوند.
- **پردازش غیرهمگام (Asynchronous Consumers):** ورکرها لاگ‌ها را در دسته‌های بهینه (Batch) ایندکس و در MongoDB و دیتابیس تحلیلی ذخیره می‌کنند.

### نتیجه‌گیری
این ترکیب معماری تضمین می‌کند که حتی در صورت آفلاین شدن موقت بخشی از سرورها یا حمله سایبری همراه با حجم بالای تولید لاگ، هیچ لاگی از دست نرود و پنل مانیتورینگ همواره سریع و بدون تاخیر باقی بماند.
      `,
      en: `
In enterprise Security Information and Event Management (SIEM) systems, one of the primary engineering challenges is ingesting telemetry and event logs from thousands of endpoints without choking network resources.

### 1. The Bottlenecks of Traditional WebSockets
Initially, HTTP Polling and WebSockets were evaluated. Holding 1,000+ persistent TCP connections via WebSockets across distributed Windows agents consumed excessive memory on edge servers. Moreover, temporary network drops triggered aggressive reconnection storms (the thundering herd problem).

### 2. Why MQTT with EMQX?
MQTT operates on an ultra-lightweight Publish/Subscribe architecture with fixed header overhead of just 2 bytes. EMQX was chosen because:
- Native QoS levels (0, 1, 2) ensuring delivery guarantees.
- Highly efficient keep-alive ping mechanisms with minimal bandwidth consumption.
- Clean topic-based isolation for each agent and cluster.

### 3. Apache Kafka as the Resilient Stream Buffer
Directly writing millions of real-time security events into MongoDB or relational stores would rapidly exhaust database connection pools. Kafka decouples ingestion from storage:
- **Spike Absorption:** Kafka buffers bursts safely during sudden security incidents.
- **Batched Consumption:** Consumer workers process and index incoming logs into persistence engines without stalling the ingestion layer.

### Conclusion
This architecture guarantees zero log loss, low operational overhead, and real-time dashboard responsiveness even during extreme event spikes.
      `,
    },
  },
  {
    id: "post-2",
    slug: "optimizing-slow-database-queries-from-8s-to-under-1s",
    title: {
      fa: "چگونه کوئری‌های سنگین دیتابیس را از ۸ ثانیه به زیر ۱ ثانیه کاهش دادم؟",
      en: "How I Optimized Heavy Database Queries from 8s to under 1s",
    },
    excerpt: {
      fa: "تجربه عملی در بهینه‌سازی دیتابیس MariaDB و Django ORM در سامانه CRM سازمانی: از ایندکس‌های ترکیبی تا رفع مشکل N+1 و بهینه‌سازی QuerySet.",
      en: "A real-world case study in MariaDB and Django ORM optimization in a high-traffic CRM: From composite indexes to fixing N+1 queries and QuerySet tuning.",
    },
    category: { fa: "پایگاه داده و پرفورمنس", en: "Databases & Performance" },
    readingTime: 5,
    date: { fa: "۲۰ آبان ۱۴۰۴", en: "Nov 10, 2025" },
    tags: ["MariaDB", "PostgreSQL", "Django", "SQL", "Indexing", "Optimization"],
    featured: true,
    content: {
      fa: `
در سیستم‌های پروداکشن با رشد حجم تراکنش‌ها و مشتریان، کوئری‌هایی که در ابتدای پروژه در چند میلی‌ثانیه اجرا می‌شدند، به مرور با کندی مواجه می‌شوند. در ادامه تجربه‌ام از کاهش زمان کوئری یک گزارش تحلیلی از ۸ ثانیه به ۰.۸۵ ثانیه را مرور می‌کنیم.

### ۱. شناسایی گلوگاه با EXPLAIN و Slow Query Log
اولین گام، فعال‌سازی لاگ کوئری‌های کند و استفاده از دستور \`EXPLAIN\` بود. مشاهده شد که دیتابیس برای محاسبه یک فیلتر چند شرطی، اقدام به **Full Table Scan** بر روی جدولی با صدها هزار رکورد می‌کرد.

### ۲. طراحی ایندکس‌های ترکیبی (Composite Indexes)
افزودن ایندکس‌های منفرد کافی نبود. با توجه به ترتیب فیلترها در شرط \`WHERE\` و فیلد مرتب‌سازی (\`ORDER BY\`)، یک ایندکس ترکیبی با ترتیب دقیق ستون‌ها تعریف شد:
\`\`\`sql
CREATE INDEX idx_company_status_created ON transactions (company_id, status, created_at DESC);
\`\`\`
این کار تعداد ردیف‌های بررسی شده را از چند صد هزار به کمتر از چند صد ردیف تقلیل داد.

### ۳. حذف معضل N+1 Query در ORM
در بک‌اند، به دلیل استفاده ناخودآگاه از روابط Foreign Key داخل حلقه، برای هر ردیف یک کوئری مجزا به دیتابیس ارسال می‌شد! با جایگزینی متدهای:
\`\`\`python
# قبل از بهینه‌سازی
records = Transaction.objects.filter(...)
# بعد از بهینه‌سازی
records = Transaction.objects.filter(...).select_related('customer').prefetch_related('items')
\`\`\`
تعداد کوئری‌ها از بیش از ۲۵۰ کوئری به تنها ۲ کوئری کاهش یافت!

### ۴. نرمال‌سازی اصولی و پرهیز از محاسبات تکراری
فیلدهای محاسباتی پرمصرف به صورت ساختاریافته در یک فیلد کش یا با استفاده از Trigger محاسبه شدند تا نیازی به \`COUNT\` و \`SUM\` زنده روی کل جدول نباشد.

### نتیجه
زمان بارگذاری گزارش تحلیلی از ۸.۰ ثانیه به **۰.۸۵ تا ۱ ثانیه** رسید؛ بدون اینکه نیازی به ارتقای سخت‌افزار سرور وجود داشته باشد.
      `,
      en: `
As customer datasets grow in production, queries that initially took milliseconds often degrade significantly. Here is how I brought an 8-second analytic query down to 0.85s in an enterprise CRM.

### 1. Pinpointing Bottlenecks with EXPLAIN
Using MariaDB's slow query log alongside \`EXPLAIN ANALYZE\`, we found that multi-conditional filtering was triggering massive **Full Table Scans** across hundreds of thousands of transaction records.

### 2. Designing Composite Indexes
Single-column indexes failed because the database optimizer could not merge them efficiently. By observing the exact order of columns in the \`WHERE\` clause and the \`ORDER BY\` sorting:
\`\`\`sql
CREATE INDEX idx_company_status_created ON transactions (company_id, status, created_at DESC);
\`\`\`
This reduced the inspected row count from over 300,000 to just a few hundred.

### 3. Eliminating the N+1 Query Problem in Django ORM
Looping over foreign key relationships without eager loading led to hundreds of sequential database round-trips:
\`\`\`python
# Optimized with eager loading
records = Transaction.objects.filter(...).select_related('customer').prefetch_related('items')
\`\`\`
This reduced round-trips from 250+ queries to just 2 consolidated SQL calls.

### 4. Strategic Normalization & Aggregation Caching
Pre-aggregating recurring metrics avoided live \`SUM()\` calculations across entire history tables during critical user lookups.

### Final Result
Page response time dropped from 8.0s to **0.85s**, completely stabilizing server CPU usage without any hardware upgrades.
      `,
    },
  },
  {
    id: "post-3",
    slug: "building-production-webgis-with-postgis-and-geoserver",
    title: {
      fa: "راهنمای معماری WebGIS سازمانی با PostGIS و GeoServer",
      en: "Architectural Guide: Building Production WebGIS with PostGIS & GeoServer",
    },
    excerpt: {
      fa: "معماری دو دیتابیسی برای داده‌های مکانی، نحوه برقراری ارتباط با استانداردهای OGC (WMS/WFS) و ساخت پروکسی امن بین کلاینت و GeoServer.",
      en: "Designing a dual-database architecture for spatial layers, interfacing with OGC standards (WMS/WFS), and securing GeoServer behind a centralized proxy.",
    },
    category: { fa: "سامانه‌های اطلاعات مکانی (GIS)", en: "Geospatial Systems (GIS)" },
    readingTime: 7,
    date: { fa: "۵ آذر ۱۴۰۴", en: "Nov 25, 2025" },
    tags: ["PostGIS", "GeoServer", "WebGIS", "PostgreSQL", "Django", "React"],
    featured: false,
    content: {
      fa: `
سیستم‌های وب‌جی‌آی‌اس (WebGIS) به دلیل ماهیت برداری و رستری داده‌های نقشه، نیازمند معماری متفاوتی نسبت به نرم‌افزارهای معمول وب هستند. در پروژه سامانه «جغراف»، تجربیات ارزنده‌ای در این زمینه شکل گرفت.

### ۱. معماری دو دیتابیسی (Dual-Database Architecture)
یکی از بهترین تصمیم‌های معماری، تفکیک داده‌های مکانی از داده‌های احراز هویت و مالی بود:
- **دیتابیس تراکنشی (Default DB):** کاربران، دسترسی‌ها، پرداخت‌ها و تنظیمات سیستم.
- **دیتابیس مکانی (Spatial DB):** دیتابیس PostgreSQL مجهز به اکستنشن قدرتمند **PostGIS** برای نگهداری لایه‌ها، خطوط، پلی‌گون‌ها و توپولوژی‌ها. این تفکیک اجازه می‌دهد بک‌آپ‌گیری، تیونینگ بافر و کش‌های مکانی مستقلاً مدیریت شوند.

### ۲. نقش GeoServer و استانداردهای OGC
سرور GeoServer مسئول تبدیل داده‌های خام مکانی به سرویس‌های استاندارد بین‌المللی است:
- **WMS (Web Map Service):** تولید کاشی‌های تصویری از نقشه
- **WFS (Web Feature Service):** تحویل داده‌های برداری خام و خصوصیات عوارض جهت ویرایش در فرانت‌اند
- **WPS (Web Processing Service):** اجرای الگوریتم‌های تحلیلی پیچیده نظیر بافرینگ یا تقاطع هندسی

### ۳. پیاده‌سازی پروکسی امن متمرکز
اتصال مستقیم مرورگر کلاینت به GeoServer خطرات امنیتی به همراه دارد (مانند دسترسی غیرمجاز به لایه‌های محرمانه). به همین دلیل، یک پروکسی مرکزی در بک‌اند Django پیاده‌سازی شد که:
۱. درخواست‌های WMS/WFS را احراز هویت می‌کند.
۲. کوئری‌های فیلتر فضایی بر اساس سطح دسترسی کاربر (Role-Based Row Security) را تزریق می‌کند.
۳. خروجی را با هدرهای کش مناسب تحویل کلاینت می‌دهد.

این معماری پایداری، سرعت و امنیت کاملی برای پلتفرم فراهم ساخت.
      `,
      en: `
WebGIS platforms deal with massive vector coordinates and raster imagery, requiring distinct architectural choices compared to traditional CRUD systems.

### 1. Dual-Database Spatial Architecture
Separating transactional operational data from spatial topology yielded significant reliability advantages:
- **Primary Relational DB:** Users, organizations, subscriptions, and access logs.
- **Spatial Engine DB:** Dedicated PostgreSQL instance powered by **PostGIS** managing geometries, polygons, and spatial indexes (GIST).

### 2. GeoServer & OGC Protocols
GeoServer acts as the bridge between raw coordinates and open standards:
- **WMS:** Renders raster map tiles dynamically.
- **WFS:** Delivers geojson/vector features directly to client canvas for client-side selection and editing.
- **WPS:** Executes spatial algebra (intersections, buffers) on the server.

### 3. Centralized Security Proxy
Exposing GeoServer ports directly to browsers is a significant security risk. We engineered a centralized proxy within Django that:
1. Validates user tokens on every spatial layer request.
2. Appends tenant-level geometry filters on the fly.
3. Caches recurring raster tiles at the network edge.

The result is a fast, compliant, and rock-solid geospatial platform.
      `,
    },
  },
  {
    id: "post-4",
    slug: "background-tasks-with-realtime-reporting",
    title: {
      fa: "پردازش تسک‌های سنگین پس‌زمینه با گزارش‌دهی بلادرنگ پیشرفت",
      en: "Handling Heavy Background Tasks with Real-Time Progress Reporting",
    },
    excerpt: {
      fa: "راهنمای پیاده‌سازی واردسازی فایل‌های بزرگ اکسل در تسک‌های پس‌زمینه و ارسال درصد پیشرفت لحظه‌ای به کاربر به جای فریز شدن رابط کاربری.",
      en: "Architecting large Excel importing jobs in asynchronous background queues while pushing real-time progress bars to the frontend without UI freezes.",
    },
    category: { fa: "توسعه فول‌استک و صف‌ها", en: "Fullstack & Asynchronous Queues" },
    readingTime: 4,
    date: { fa: "۱۸ دی ۱۴۰۴", en: "Jan 8, 2026" },
    tags: ["Celery", "Redis", "WebSockets", "Django", "React", "UX"],
    featured: false,
    content: {
      fa: `
در سامانه LMS دیده‌پرداز صبا، اساتید و مدیران دانشگاه نیازمند ایمپورت لیست هزاران دانش‌پذیر از طریق فایل‌های اکسل بودند. پردازش مستقیم فایل در چرخه Request-Response باعث ایجاد تایم‌اوت HTTP (504 Gateway Timeout) و تجربه کاربری بسیار ضعیف می‌شد.

### راهکار معماری:
۱. **دریافت فایل و تخصیص شناسه تسک (Task ID):** به محض آپلود، فایل در فضای ذخیره‌سازی موقت ذخیره شده و تسک ناهمگام در صف Celery ایجاد می‌شود.
۲. **پردازش دسته‌ای (Chunking):** فایل اکسل سطر به سطر خوانده نشده، بلکه در دسته‌های ۵۰۰ تایی پردازش و اعتبارسنجی می‌شود.
۳. **گزارش لحظه‌ای پیشرفت:** ورکر در هر مرحله، وضعیت را از طریق کانال وب‌سوکت یا کش Redis برای شناسه تسک به‌روزرسانی می‌کند.
۴. **نمایش در فرانت‌اند:** کاربر در داشبورد، یک پروگرس‌بار زنده و لیست خطاهای اعتبارسنجی سطرها را بدون نیاز به رفرش صفحه مشاهده می‌کند.

این الگو قابلیت اطمینان سیستم را به ۱۰۰٪ رساند و خطای تایم‌اوت سرور را برای همیشه برطرف کرد.
      `,
      en: `
In large educational platforms, administrators often need to import rosters of thousands of students via spreadsheets. Processing this synchronously inside an HTTP request inevitably triggers Gateway Timeouts and locks client interfaces.

### The Solution:
1. **Instant Acknowledgment & Task ID:** The uploaded file is staged, and a task is pushed to Celery with an immediate 202 Accepted response.
2. **Chunked Validation:** Rows are validated in batches of 500 to keep memory profiles flat.
3. **Real-time Telemetry:** Worker threads emit progress percentages and validation states through Redis Pub/Sub directly to the client's WebSocket.
4. **Interactive UI:** The user sees a live progress bar and downloadable row-by-row validation diagnostics.

This pattern eliminated timeouts completely and drastically improved administrator trust in the platform.
      `,
    },
  },
];
