'use client';

const aiExamples = [
  { no: 1, name: "ChatGPT", creator: "OpenAI", field: "Языковые модели", use: "Общение, генерация текстов и кода" },
  { no: 2, name: "AlphaFold", creator: "DeepMind", field: "Биология", use: "Предсказание структуры белков" },
  { no: 3, name: "AutoGPT", creator: "Toran Bruce Richards", field: "Автономные агенты", use: "Автоматизация задач" },
  { no: 4, name: "Gemini", creator: "Google DeepMind", field: "Мультимодальные модели", use: "Поиск и анализ информации" },
  { no: 5, name: "Midjourney", creator: "Midjourney Lab", field: "Генерация изображений", use: "Дизайн, иллюстрации" },
  { no: 6, name: "GitHub Copilot", creator: "GitHub + OpenAI", field: "Программирование", use: "Автодополнение кода, ускорение разработки" },
  { no: 7, name: "Whisper", creator: "OpenAI", field: "Распознавание речи", use: "Транскрипция аудио, субтитры" },
  { no: 8, name: "Tesla Autopilot", creator: "Tesla", field: "Автопилот", use: "Помощь в вождении" },
  { no: 9, name: "DALL·E", creator: "OpenAI", field: "Генерация изображений", use: "Иллюстрации, реклама, творчество" },
  { no: 10, name: "Stable Diffusion", creator: "Stability AI", field: "Генерация изображений", use: "Креативные проекты, игры, комиксы" },
  { no: 11, name: "Netflix Recommender", creator: "Netflix / YouTube", field: "Рекомендательные системы", use: "Подбор фильмов, видео, музыки" },
  { no: 12, name: "Face Recognition", creator: "Meta, Apple, Huawei", field: "Безопасность", use: "Разблокировка устройств, контроль доступа" },
  { no: 13, name: "Банковские чатботы", creator: "Банки / ИТ-компании", field: "Клиентская поддержка", use: "Ответы клиентам, поддержка 24/7" },
  { no: 14, name: "Claude", creator: "Anthropic", field: "Языковые модели", use: "Общение, помощь в обучении, автоматизация" },
  { no: 15, name: "Bard", creator: "Google", field: "Языковые модели", use: "Ответы на вопросы, генерация текстов" },
  { no: 16, name: "Jasper AI", creator: "Jasper", field: "Генерация текста", use: "Маркетинг, соцсети, email-рассылки" },
  { no: 17, name: "Runway", creator: "Runway", field: "Генерация видео", use: "Монтаж, спецэффекты, анимация" },
  { no: 18, name: "Copilot Chat", creator: "Microsoft + OpenAI", field: "Офисные приложения", use: "Генерация текста, анализ данных" },
  { no: 19, name: "LLaMA", creator: "Meta", field: "Языковые модели", use: "Исследования, генерация текстов" },
  { no: 20, name: "Synthesis AI", creator: "Synthesis AI", field: "3D-модели", use: "VR/AR, симуляции, тестирование" },
];

const stages = [
  { period: "1950–1970", text: "Первые алгоритмы и логические программы" },
  { period: "1970–1990", text: "Экспертные системы" },
  { period: "2000-е", text: "Развитие машинного обучения" },
  { period: "2010+", text: "Нейронные сети и генеративный ИИ" },
];

const tasks = [
  "Распознавание лиц и объектов",
  "Распознавание и синтез речи",
  "Понимание и генерация текстов",
  "Анализ больших объёмов данных",
  "Принятие решений",
  "Обучение на собственном опыте",
];

const models = [
  { label: "Языковые модели", examples: "GPT, BERT", icon: "💬" },
  { label: "Компьютерное зрение", examples: "CNN, YOLO", icon: "👁️" },
  { label: "Генеративные модели", examples: "GAN, диффузионные", icon: "🎨" },
  { label: "Речевые модели", examples: "Whisper, TTS", icon: "🎙️" },
  { label: "Аналитические модели", examples: "XGBoost, Prophet", icon: "📊" },
  { label: "Обучение с подкреплением", examples: "AlphaGo, PPO", icon: "🏆" },
];

const mlTypes = [
  { title: "С учителем", desc: "Использование размеченных данных", icon: "👨‍🏫" },
  { title: "Без учителя", desc: "Поиск скрытых закономерностей", icon: "🔍" },
  { title: "С подкреплением", desc: "Обучение через награды и штрафы", icon: "🎮" },
];

const fieldColors = {
  "Языковые модели": "bg-violet-900/50 text-violet-300",
  "Биология": "bg-green-900/50 text-green-300",
  "Автономные агенты": "bg-orange-900/50 text-orange-300",
  "Мультимодальные модели": "bg-blue-900/50 text-blue-300",
  "Генерация изображений": "bg-pink-900/50 text-pink-300",
  "Программирование": "bg-cyan-900/50 text-cyan-300",
  "Распознавание речи": "bg-yellow-900/50 text-yellow-300",
  "Автопилот": "bg-red-900/50 text-red-300",
  "Рекомендательные системы": "bg-teal-900/50 text-teal-300",
  "Безопасность": "bg-gray-700/50 text-gray-300",
  "Клиентская поддержка": "bg-indigo-900/50 text-indigo-300",
  "Генерация текста": "bg-lime-900/50 text-lime-300",
  "Генерация видео": "bg-fuchsia-900/50 text-fuchsia-300",
  "Офисные приложения": "bg-sky-900/50 text-sky-300",
  "3D-модели": "bg-amber-900/50 text-amber-300",
};

export default function AIPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* HERO */}
      <div className="bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white py-20 px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-4xl mb-6">🤖</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">Искусственный Интеллект</h1>
        <p className="text-purple-200 text-lg max-w-2xl mx-auto">История, типы, модели и примеры современного AI</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">

        {/* История */}
        <section className="bg-gray-900 border border-purple-900/40 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-purple-400 mb-2">История развития ИИ</h2>
          <div className="w-10 h-1 bg-purple-600 rounded mb-6" />
          <p className="text-gray-400 text-sm mb-6 max-w-3xl">
            Идея создания разумных машин появилась в середине XX века. В <span className="text-purple-300 font-semibold">1950 году</span> Алан Тьюринг предложил тест для определения способности машины имитировать мышление человека. В <span className="text-purple-300 font-semibold">1956 году</span> Джон Маккарти впервые использовал термин «искусственный интеллект».
          </p>
          <div className="relative pl-6 border-l-2 border-purple-800 space-y-5">
            {stages.map((s, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[1.65rem] w-4 h-4 rounded-full bg-purple-500 border-2 border-gray-950" />
                <span className="inline-block bg-purple-900/60 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-1">{s.period}</span>
                <p className="text-gray-300 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Задачи */}
        <section className="bg-gray-900 border border-purple-900/40 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-purple-400 mb-2">Задачи ИИ</h2>
          <div className="w-10 h-1 bg-purple-600 rounded mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-800/60 rounded-xl px-4 py-3 border border-purple-900/30">
                <span className="w-6 h-6 rounded-full bg-purple-900/60 text-purple-400 text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                <span className="text-gray-300 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Типы */}
        <section className="bg-gray-900 border border-purple-900/40 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-purple-400 mb-2">Типы ИИ</h2>
          <div className="w-10 h-1 bg-purple-600 rounded mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-gray-800/60 rounded-xl p-6 border border-purple-900/30">
              <h3 className="text-purple-300 font-bold mb-2">🎯 Узкий (слабый) AI</h3>
              <p className="text-gray-400 text-sm mb-3">Предназначен для конкретных задач, не выходит за рамки специализации.</p>
              <ul className="space-y-1">
                {["Шахматные программы (Deep Blue)", "Распознавание лиц в смартфонах", "Голосовые помощники (Siri, Алиса)", "Рекомендательные системы"].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-400">
                    <span className="text-purple-500 shrink-0">▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-6 border border-purple-900/30">
              <h3 className="text-purple-300 font-bold mb-2">🧠 Общий (сильный) AI</h3>
              <p className="text-gray-400 text-sm">Гипотетическая система, способная мыслить и обучаться на уровне человека. В настоящее время существует только в теории и научной фантастике.</p>
            </div>
          </div>
        </section>

        {/* Модели */}
        <section className="bg-gray-900 border border-purple-900/40 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-purple-400 mb-2">Классификация по моделям</h2>
          <div className="w-10 h-1 bg-purple-600 rounded mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map(m => (
              <div key={m.label} className="bg-gray-800/60 rounded-xl p-5 border border-purple-900/30 hover:border-purple-500/40 hover:-translate-y-0.5 transition-all">
                <div className="text-2xl mb-2">{m.icon}</div>
                <h3 className="text-purple-300 font-bold text-sm mb-1">{m.label}</h3>
                <p className="text-gray-500 text-xs">{m.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Машинное обучение */}
        <section className="bg-gray-900 border border-purple-900/40 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-purple-400 mb-2">Машинное обучение</h2>
          <div className="w-10 h-1 bg-purple-600 rounded mb-4" />
          <p className="text-gray-400 text-sm mb-6 max-w-2xl">Подраздел AI, позволяющий системам обучаться на данных без явного программирования.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mlTypes.map(m => (
              <div key={m.title} className="bg-gray-800/60 rounded-xl p-5 border border-purple-900/30 text-center">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="text-purple-300 font-bold mb-2">{m.title}</h3>
                <p className="text-gray-400 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Таблица */}
        <section className="bg-gray-900 border border-purple-900/40 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-purple-400 mb-2">Примеры ИИ</h2>
          <div className="w-10 h-1 bg-purple-600 rounded mb-6" />
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  {["№", "Название", "Создатель", "Область", "Применение"].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {aiExamples.map((r, i) => (
                  <tr key={r.no} className={`hover:bg-purple-950/30 transition-colors ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800/40"}`}>
                    <td className="px-4 py-2.5 text-gray-500 text-xs font-mono">{r.no}</td>
                    <td className="px-4 py-2.5 font-semibold text-purple-300">{r.name}</td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{r.creator}</td>
                    <td className="px-4 py-2.5">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${fieldColors[r.field] || "bg-gray-700 text-gray-300"}`}>
                        {r.field}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-gray-400 text-xs">{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>

      <footer className="text-center py-6 text-gray-600 text-sm border-t border-gray-800">
        © 2026 | <span className="text-purple-700">Искусственный Интеллект</span>
      </footer>
    </main>
  );
}
