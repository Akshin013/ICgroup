'use client';
import { useState } from "react";

const products = [
  { name: "1С:Бухгалтерия", desc: "Ведение бухгалтерского и налогового учёта, отчётность и контроль финансов.", icon: "📊" },
  { name: "1С:ERP", desc: "Комплексное управление ресурсами предприятия и бизнес‑процессами.", icon: "🏭" },
  { name: "1С:УТ", desc: "Автоматизация торговли, складов, продаж и логистики.", icon: "🏬" },
  { name: "1С:ЗУП", desc: "Зарплата, кадры, HR‑процессы и учёт персонала.", icon: "👥" },
];

const technologies = [
  { name: "1С:Предприятие 8", desc: "Гибкая платформа для создания бизнес‑приложений любого уровня сложности.", icon: "⚙️" },
  { name: "Облачные решения", desc: "Работа через интернет, SaaS‑модель, доступ с любого устройства.", icon: "☁️" },
  { name: "Интеграции и API", desc: "Обмен данными с сайтами, CRM, банками, государственными сервисами.", icon: "🔗" },
  { name: "AI и аналитика", desc: "Бизнес‑аналитика, прогнозирование и работа с большими данными.", icon: "🤖" },
];

const timeline = [
  { year: "1991", text: "Основание компании 1С в Москве." },
  { year: "1992", text: "Выход первой версии «1С:Бухгалтерия»." },
  { year: "2003", text: "Появление платформы 1С:Предприятие 8." },
  { year: "Сегодня", text: "Миллионы пользователей и тысячи партнёров по всему миру." },
];

const Card = ({ icon, name, desc }) => (
  <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors">{name}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const nav = [
    { id: "about", label: "О компании" },
    { id: "products", label: "Продукты" },
    { id: "tech", label: "Технологии" },
    { id: "history", label: "История" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-500 text-white">
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-white"
              style={{
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                top: `${-40 + i * 10}px`,
                right: `${-40 + i * 5}px`,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6 text-3xl font-black">
            1С
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-3">1C Technologies</h1>
          <p className="text-red-100 text-lg max-w-xl mx-auto">
            Платформа автоматизации бизнеса, учёта и управления
          </p>
        </div>
      </header>

      {/* Nav */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 flex gap-1 overflow-x-auto">
          {nav.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                activeSection === item.id
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">

        {activeSection === "about" && (
          <section>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Что такое 1С</h2>
            <div className="w-12 h-1 bg-red-600 rounded-full mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              <strong className="text-gray-900">1С</strong> — это ведущая IT‑компания, разрабатывающая программные
              продукты для автоматизации бухгалтерского, управленческого и финансового учёта. Основной продукт —
              платформа <strong className="text-red-600">1С:Предприятие</strong>, которая используется миллионами
              компаний.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { val: "30+", label: "лет на рынке" },
                { val: "1M+", label: "компаний‑клиентов" },
                { val: "10 000+", label: "партнёров" },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-4xl font-black text-red-600 mb-1">{s.val}</div>
                  <div className="text-gray-500 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "products" && (
          <section>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Ключевые продукты</h2>
            <div className="w-12 h-1 bg-red-600 rounded-full mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {products.map(p => <Card key={p.name} {...p} />)}
            </div>
          </section>
        )}

        {activeSection === "tech" && (
          <section>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Технологии 1С</h2>
            <div className="w-12 h-1 bg-red-600 rounded-full mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {technologies.map(t => <Card key={t.name} {...t} />)}
            </div>
          </section>
        )}

        {activeSection === "history" && (
          <section>
            <h2 className="text-3xl font-black text-gray-900 mb-2">История компании</h2>
            <div className="w-12 h-1 bg-red-600 rounded-full mb-8" />
            <div className="relative pl-8 border-l-4 border-red-600 space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2.65rem] w-5 h-5 rounded-full bg-red-600 border-4 border-white shadow" />
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {item.year}
                  </span>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm mt-12">
        © 2026 <span className="text-red-500 font-bold">1C Technologies</span> • Учебная страница
      </footer>
    </div>
  );
}