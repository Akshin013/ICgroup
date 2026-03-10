'use client';
import { useState } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const adminRoles = [
  {
    title: "Администратор 1C",
    icon: "🖥️",
    items: [
      "Установка и настройка серверов 1C (Application + SQL)",
      "Создание, перенос и оптимизация баз данных 1C",
      "Управление пользователями и ролями",
      "Установка и восстановление лицензий 1C",
      "Настройка стратегий Backup и Restore",
      "Анализ проблем производительности (медленные запросы, блокировки и т.д.)",
      "Кластеризация серверов 1C",
      "Техническая поддержка при обновлении конфигураций",
      "Решение проблем интеграции 1C + SQL",
      "Анализ журналов и логов (журнал регистрации и др.)",
    ],
  },
  {
    title: "Администратор БД (MS SQL / PostgreSQL)",
    icon: "🗄️",
    items: [
      "Установка и конфигурация SQL Server и PostgreSQL",
      "Резервное копирование, восстановление и репликация баз данных",
      "Планирование AlwaysOn / Failover",
      "Оптимизация производительности (индексы, оптимизация запросов)",
      "Управление дисками и log-файлами",
      "Мониторинг (Zabbix, Grafana, встроенные инструменты)",
      "Безопасность: управление пользователями, ролями и правами",
      "Миграция баз данных (SQL → PostgreSQL и др.)",
      "Анализ error log и проблем с job-ами",
      "Решение проблем переполнения дисков и transaction log",
    ],
  },
  {
    title: "Сетевой администратор",
    icon: "🌐",
    items: [
      "Построение сетей LAN / WAN",
      "Настройка firewall (Kerio, Palo Alto, OPNsense и др.)",
      "Конфигурация NAT, VPN (site-to-site, client-to-site)",
      "Планирование VLAN и подсетей",
      "Решение проблем маршрутизации",
      "Организация и фильтрация интернет-доступа",
      "Мониторинг логов и сетевого трафика",
      "Внедрение правил сетевой безопасности",
    ],
  },
  {
    title: "Администратор Windows Server",
    icon: "🪟",
    items: [
      "Установка Windows Server (2016–2022)",
      "Администрирование Active Directory (AD DS)",
      "Создание и применение GPO",
      "Настройка DNS, DHCP, File Server",
      "Настройка RDP и Terminal Server",
      "Решение проблем домена",
      "Резервное копирование и восстановление серверов",
      "Управление обновлениями и патчами",
      "Анализ Event Viewer и системных логов",
      "Мониторинг производительности серверов",
    ],
  },
  {
    title: "Help Desk / IT Support",
    icon: "🛟",
    items: [
      "Решение технических проблем пользователей",
      "Проблемы Windows, Office, принтеров",
      "Проблемы сети и интернета",
      "Удалённая поддержка (AnyDesk, RDP и др.)",
      "Проверка антивируса и безопасности",
      "Обучение пользователей",
      "Установка оборудования (ПК, принтеры, UPS)",
    ],
  },
  {
    title: "Почтовые серверы",
    icon: "📧",
    items: [
      "Установка почтовых серверов (on-prem / cloud / hybrid)",
      "Установка и настройка Microsoft Exchange Server",
      "Интеграция почтовых серверов с доменом",
      "Создание и управление почтовыми ящиками пользователей",
      "Конфигурация SMTP, POP3, IMAP",
      "Настройка записей MX, SPF, DKIM, DMARC",
      "Настройка антиспам и антивирусных механизмов",
      "Анализ проблем mail flow (входящая / исходящая почта)",
    ],
  },
  {
    title: "IT Procurement / Planning",
    icon: "🛒",
    items: [
      "Анализ требований к серверам и оборудованию",
      "Подготовка технической спецификации",
      "Планирование конфигурации серверов (CPU, RAM, Disk, RAID)",
      "Выбор систем хранения данных (SAN / NAS / DAS)",
      "Выбор сетевого оборудования (switch, firewall, router)",
      "Планирование лицензий (ОС, СУБД, антивирус)",
    ],
  },
];

const aiSections = [
  { heading: "Что такое AI?", content: "AI (Artificial Intelligence) — созданная человеком технологическая система, имитирующая функции человеческого разума. Современный AI не обладает сознанием — это технология, а не разумное существо." },
  { heading: "История развития", content: "В 1950 году Алан Тьюринг предложил тест для определения способности машины имитировать мышление. В 1956 году Джон Маккарти впервые использовал термин «искусственный интеллект»." },
  { heading: "Задачи AI", list: ["Распознавание лиц и объектов", "Распознавание и синтез речи", "Понимание и генерация текстов", "Анализ больших данных", "Принятие решений", "Обучение на собственном опыте"] },
  { heading: "Типы AI", list: ["Узкий (слабый) AI — шахматы, голосовые помощники, рекомендации", "Общий (сильный) AI — гипотетическая система уровня человека"] },
  { heading: "Модели AI", list: ["Языковые модели (GPT, BERT)", "Компьютерное зрение (CNN, YOLO)", "Генеративные модели (GAN, диффузионные)", "Речевые и аналитические модели", "Обучение с подкреплением"] },
  { heading: "Машинное обучение", list: ["Обучение с учителем — размеченные данные", "Обучение без учителя — поиск закономерностей", "Обучение с подкреплением — награды и штрафы"] },
];

const table1 = [
  { lang: "1C", year: 1991, creator: "Борис Нуралиев", purpose: "Автоматизация бизнес-процессов", country: "Россия" },
  { lang: "Assembly", year: 1949, creator: "Кэтлин Бут", purpose: "Работа с процессором", country: "Великобритания" },
  { lang: "Fortran", year: 1957, creator: "IBM", purpose: "Научные расчёты", country: "США" },
  { lang: "Lisp", year: 1958, creator: "Джон Маккарти", purpose: "ИИ, наука", country: "США" },
  { lang: "ALGOL", year: 1958, creator: "Группа учёных", purpose: "Алгоритмы", country: "Европа" },
  { lang: "COBOL", year: 1959, creator: "Грейс Хоппер", purpose: "Банки, финансы", country: "США" },
  { lang: "APL", year: 1964, creator: "Кен Иверс", purpose: "Математика", country: "США" },
  { lang: "BASIC", year: 1964, creator: "Джон Кемени, Томас Курц", purpose: "Обучение", country: "США" },
  { lang: "PL/I", year: 1964, creator: "IBM", purpose: "Универсальные задачи", country: "США" },
  { lang: "Pascal", year: 1970, creator: "Никлаус Вирт", purpose: "Обучение, алгоритмы", country: "Швейцария" },
  { lang: "Forth", year: 1970, creator: "Чарльз Мур", purpose: "Встроенные системы", country: "США" },
  { lang: "C", year: 1972, creator: "Деннис Ритчи", purpose: "Системное программирование", country: "США" },
  { lang: "Smalltalk", year: 1972, creator: "Алан Кей", purpose: "Объектно-ориентированное", country: "США" },
  { lang: "Prolog", year: 1972, creator: "Ален Колмероэ", purpose: "Логика, ИИ", country: "Франция" },
  { lang: "Scheme", year: 1975, creator: "Гай Стилл, Джеральд Джей Сассман", purpose: "Функциональное", country: "США" },
  { lang: "Modula-2", year: 1978, creator: "Никлаус Вирт", purpose: "Системное, образование", country: "Швейцария" },
  { lang: "Ada", year: 1980, creator: "Минобороны США", purpose: "Надёжные системы", country: "США" },
  { lang: "Objective-C", year: 1984, creator: "Брэд Кокс", purpose: "macOS/iOS", country: "США" },
];

const table2 = [
  { no: 1, lang: "Scala", year: 2004, creator: "Мартин Одерски", purpose: "JVM, Big Data", country: "Швейцария" },
  { no: 2, lang: "C++", year: 1985, creator: "Бьёрн Страуструп", purpose: "Игры, системы, ООП", country: "США" },
  { no: 3, lang: "Erlang", year: 1986, creator: "Ericsson", purpose: "Телеком", country: "Швеция" },
  { no: 4, lang: "Perl", year: 1987, creator: "Ларри Уолл", purpose: "Скрипты, тексты", country: "США" },
  { no: 5, lang: "Haskell", year: 1990, creator: "Комитет", purpose: "Функциональное", country: "США" },
  { no: 6, lang: "Python", year: 1991, creator: "Гвидо ван Россум", purpose: "ИИ, автоматизация", country: "Нидерланды" },
  { no: 7, lang: "Visual Basic", year: 1991, creator: "Microsoft", purpose: "Windows-приложения", country: "США" },
  { no: 8, lang: "Groovy", year: 2003, creator: "Apache", purpose: "JVM-проекты", country: "США" },
  { no: 9, lang: "Lua", year: 1993, creator: "Иерузалимски", purpose: "Скрипты, игры", country: "Бразилия" },
  { no: 10, lang: "R", year: 1993, creator: "Росс Ихака", purpose: "Статистика, наука", country: "Новая Зеландия" },
  { no: 11, lang: "PHP", year: 1995, creator: "Расмус Лердорф", purpose: "Веб, сервер", country: "Дания" },
  { no: 12, lang: "Java", year: 1995, creator: "Джеймс Гослинг", purpose: "Корпоративные системы", country: "США" },
  { no: 13, lang: "JavaScript", year: 1995, creator: "Брендан Айк", purpose: "Веб, фронтенд", country: "США" },
  { no: 14, lang: "Ruby", year: 1995, creator: "Юкихиро Мацумото", purpose: "Веб", country: "Япония" },
  { no: 15, lang: "Delphi / Object Pascal", year: 1995, creator: "Borland", purpose: "Windows-приложения", country: "США" },
];

const table3 = [
  { no: 1, lang: "Carbon", year: 2022, creator: "Google", purpose: "Альтернатива C++", country: "США" },
  { no: 2, lang: "Scratch", year: 2007, creator: "MIT", purpose: "Обучение детей", country: "США" },
  { no: 3, lang: "Go (Golang)", year: 2009, creator: "Google", purpose: "Серверы, облака", country: "США" },
  { no: 4, lang: "Rust", year: 2010, creator: "Mozilla", purpose: "Системы, безопасность", country: "США" },
  { no: 5, lang: "Dart", year: 2010, creator: "Google", purpose: "Веб и мобильные", country: "США" },
  { no: 6, lang: "Kotlin", year: 2011, creator: "JetBrains", purpose: "Android", country: "Россия" },
  { no: 7, lang: "Julia", year: 2012, creator: "MIT", purpose: "Наука, математика", country: "США" },
  { no: 8, lang: "TypeScript", year: 2012, creator: "Microsoft", purpose: "Веб, большие проекты", country: "США" },
  { no: 9, lang: "Elixir", year: 2012, creator: "Жозе Валим", purpose: "Серверы, распред. системы", country: "Бразилия" },
  { no: 10, lang: "Swift", year: 2014, creator: "Apple", purpose: "iOS/macOS", country: "США" },
  { no: 11, lang: "Hack", year: 2014, creator: "Meta", purpose: "Веб-разработка", country: "США" },
  { no: 12, lang: "Nim", year: 2015, creator: "Андреас Румпф", purpose: "Высокая скорость", country: "Германия" },
  { no: 13, lang: "Crystal", year: 2014, creator: "Ари Хара", purpose: "Высокая скорость", country: "Япония" },
  { no: 14, lang: "Zig", year: 2016, creator: "Эндрю Келли", purpose: "Системное ПО", country: "США" },
  { no: 15, lang: "V", year: 2019, creator: "Александр Медведников", purpose: "Простое и безопасное", country: "Россия" },
];

const countryColors = {
  "США": "bg-blue-100 text-blue-800",
  "Россия": "bg-red-100 text-red-800",
  "Великобритания": "bg-purple-100 text-purple-800",
  "Швейцария": "bg-green-100 text-green-800",
  "Франция": "bg-orange-100 text-orange-800",
  "Европа": "bg-yellow-100 text-yellow-800",
  "Швеция": "bg-teal-100 text-teal-800",
  "Япония": "bg-pink-100 text-pink-800",
  "Нидерланды": "bg-amber-100 text-amber-800",
  "Бразилия": "bg-lime-100 text-lime-800",
  "Дания": "bg-rose-100 text-rose-800",
  "Германия": "bg-gray-100 text-gray-700",
  "Новая Зеландия": "bg-cyan-100 text-cyan-800",
};

const Badge = ({ text }) => (
  <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${countryColors[text] || "bg-gray-100 text-gray-600"}`}>{text}</span>
);

const LangTable1 = () => (
  <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="bg-gray-900 text-white">
          {["Язык", "Год", "Создатель", "Назначение", "Страна"].map(h => (
            <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table1.map((r, i) => (
          <tr key={r.lang} className={`hover:bg-blue-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <td className="px-4 py-2.5 font-mono font-bold text-blue-700">{r.lang}</td>
            <td className="px-4 py-2.5 text-gray-500">{r.year}</td>
            <td className="px-4 py-2.5 text-gray-700">{r.creator}</td>
            <td className="px-4 py-2.5 text-gray-600">{r.purpose}</td>
            <td className="px-4 py-2.5"><Badge text={r.country} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const LangTable2 = ({ data, title }) => (
  <div>
    <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-blue-700 text-white">
            {["№", "Язык", "Год", "Создатель", "Назначение", "Страна"].map(h => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={r.lang} className={`hover:bg-blue-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <td className="px-4 py-2.5 text-gray-400 font-mono text-xs">{r.no}</td>
              <td className="px-4 py-2.5 font-mono font-bold text-blue-700">{r.lang}</td>
              <td className="px-4 py-2.5 text-gray-500">{r.year}</td>
              <td className="px-4 py-2.5 text-gray-700">{r.creator}</td>
              <td className="px-4 py-2.5 text-gray-600">{r.purpose}</td>
              <td className="px-4 py-2.5"><Badge text={r.country} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Admin1CPage() {
  const [activeSection, setActiveSection] = useState("services");
  const [tablTab, setTablTab] = useState("t1");

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white py-14 px-6 text-center">
        <h1 className="text-4xl font-black tracking-tight mb-2">IC group.az</h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">IT-услуги, администрирование и автоматизация бизнеса</p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {[
            { key: "services", label: "🖥️ Услуги 1C" },
            { key: "ai", label: "🤖 ИИ" },
            { key: "langs", label: "💻 Языки" },
          ].map(btn => (
            <button key={btn.key} onClick={() => setActiveSection(btn.key)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${activeSection === btn.key ? "bg-white text-blue-700 shadow-lg" : "bg-white/20 hover:bg-white/30 text-white"}`}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* ── SERVICES ── */}
        {activeSection === "services" && (
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">Направления 1C</h2>
            <div className="w-10 h-1 bg-blue-600 rounded mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {adminRoles.map(role => (
                <div key={role.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-3xl mb-3">{role.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-3 text-blue-700">{role.title}</h3>
                  <ul className="space-y-1.5">
                    {role.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── AI ── */}
        {activeSection === "ai" && (
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">Искусственный Интеллект</h2>
            <div className="w-10 h-1 bg-blue-600 rounded mb-4" />
            <p className="text-gray-500 mb-8 max-w-2xl">Системы анализа данных, автоматизация процессов, машинное обучение и интеллектуальные решения для бизнеса.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {aiSections.map(s => (
                <div key={s.heading} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-blue-700 mb-3">{s.heading}</h3>
                  {s.content && <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>}
                  {s.list && (
                    <ul className="space-y-1.5">
                      {s.list.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-600">
                          <span className="text-blue-400 shrink-0">▸</span>{item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── LANGS ── */}
        {activeSection === "langs" && (
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">Языки программирования</h2>
            <div className="w-10 h-1 bg-blue-600 rounded mb-6" />
            <div className="flex gap-2 mb-6 flex-wrap">
              {[
                { key: "t1", label: "Таблица 1 · Классика" },
                { key: "t2", label: "Таблица 2 · 1985–2004" },
                { key: "t3", label: "Таблица 3 · Современные" },
              ].map(t => (
                <button key={t.key} onClick={() => setTablTab(t.key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${tablTab === t.key ? "bg-blue-700 text-white shadow" : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300"}`}>
                  {t.label}
                </button>
              ))}
            </div>
            {tablTab === "t1" && <LangTable1 />}
            {tablTab === "t2" && <LangTable2 data={table2} title="Языки 1985–2004" />}
            {tablTab === "t3" && <LangTable2 data={table3} title="Современные языки (2007–2022)" />}
          </div>
        )}

      </div>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm mt-6">
        © 2026 <span className="text-blue-400 font-bold">IC group.az</span> • Учебная страница
      </footer>
    </main>
  );
}