'use client';

const timelineData = [
  { year: "1947", text: "Деннис Габор предложил принцип голографии" },
  { year: "1960", text: "Появление лазеров" },
  { year: "1970-е", text: "Первые оптические голограммы" },
  { year: "1980-е", text: "Защита документов и банкнот" },
  { year: "2000-е", text: "Цифровая голография" },
  { year: "2010+", text: "AR и MR технологии" },
];

const types = [
  { title: "Оптические", desc: "Записываются лазером на фотоматериал." },
  { title: "Цифровые", desc: "Обрабатываются и восстанавливаются компьютером." },
  { title: "CGH", desc: "Компьютерно-синтезированные голограммы." },
];

const applications = [
  { title: "Медицина", desc: "3D модели органов и планирование операций", icon: "🫀" },
  { title: "Безопасность", desc: "Паспорта, деньги, ID", icon: "🛡️" },
  { title: "Образование", desc: "Наглядное обучение", icon: "🎓" },
  { title: "Развлечения", desc: "Концерты, шоу, реклама", icon: "🎭" },
];

const technologies = [
  "Классическая лазерная голография",
  "Цифровая голография",
  "Псевдоголография",
  "Голографические дисплеи",
  "AR / MR голограммы",
];

export default function HolographicTechnology() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* HERO */}
      <div className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white py-20 px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-4xl mb-6">🔮</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">Голографические технологии</h1>
        <p className="text-cyan-100 text-lg max-w-xl mx-auto">Принципы, виды, применение и будущее голограмм</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-10">

        {/* 1. Понятие */}
        <section className="bg-gray-900 border border-cyan-900/40 rounded-2xl p-8 shadow-lg shadow-cyan-950/30">
          <h2 className="text-2xl font-black text-cyan-400 mb-4">1. Понятие голограммы</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Голограмма — это способ записи и воспроизведения светового поля объекта, позволяющий видеть изображение объёмным с сохранением глубины и перспективы. Запись голограммы происходит с помощью когерентного света (лазера): световой пучок делится на опорный и объектный.
          </p>
          <p className="text-gray-400 leading-relaxed">
            В отличие от обычной фотографии, голограмма хранит информацию не только о яркости, но и о <span className="text-cyan-400 font-semibold">фазе световой волны</span>.
          </p>
        </section>

        {/* 2. История */}
        <section className="bg-gray-900 border border-cyan-900/40 rounded-2xl p-8 shadow-lg shadow-cyan-950/30">
          <h2 className="text-2xl font-black text-cyan-400 mb-6">2. История развития</h2>
          <div className="relative pl-6 border-l-2 border-cyan-800 space-y-6">
            {timelineData.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[1.65rem] w-4 h-4 rounded-full bg-cyan-500 border-2 border-gray-950 shadow-md shadow-cyan-500/50" />
                <span className="inline-block bg-cyan-900/60 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full mb-1">{item.year}</span>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Физика */}
        <section className="bg-gray-900 border border-cyan-900/40 rounded-2xl p-8 shadow-lg shadow-cyan-950/30">
          <h2 className="text-2xl font-black text-cyan-400 mb-6">3. Физические основы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-gray-800/60 rounded-xl p-5 border border-cyan-900/30">
              <h3 className="text-cyan-300 font-bold mb-2">⚡ Интерференция</h3>
              <p className="text-gray-400 text-sm leading-relaxed">При наложении опорного и отражённого лазерного луча возникает интерференционная картина.</p>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-5 border border-cyan-900/30">
              <h3 className="text-cyan-300 font-bold mb-2">🌊 Дифракция</h3>
              <p className="text-gray-400 text-sm leading-relaxed">При освещении голограммы лазером восстанавливается исходная световая волна объекта.</p>
            </div>
          </div>
        </section>

        {/* 4. Типы */}
        <section className="bg-gray-900 border border-cyan-900/40 rounded-2xl p-8 shadow-lg shadow-cyan-950/30">
          <h2 className="text-2xl font-black text-cyan-400 mb-6">4. Типы голограмм</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {types.map(t => (
              <div key={t.title} className="group bg-gray-800/60 rounded-xl p-5 border border-cyan-900/30 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/30 hover:-translate-y-1 transition-all">
                <h3 className="text-cyan-300 font-bold mb-2 group-hover:text-cyan-400 transition-colors">{t.title}</h3>
                <p className="text-gray-400 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Технологии */}
        <section className="bg-gray-900 border border-cyan-900/40 rounded-2xl p-8 shadow-lg shadow-cyan-950/30">
          <h2 className="text-2xl font-black text-cyan-400 mb-6">5. Основные технологии</h2>
          <ul className="space-y-3">
            {technologies.map((t, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-6 h-6 rounded-full bg-cyan-900/60 text-cyan-400 text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Применение */}
        <section className="bg-gray-900 border border-cyan-900/40 rounded-2xl p-8 shadow-lg shadow-cyan-950/30">
          <h2 className="text-2xl font-black text-cyan-400 mb-6">6. Применение</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {applications.map(a => (
              <div key={a.title} className="group bg-gray-800/60 rounded-xl p-5 border border-cyan-900/30 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/30 hover:-translate-y-1 transition-all text-center">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="text-cyan-300 font-bold mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Будущее */}
        <section className="bg-gradient-to-br from-cyan-950 to-blue-950 border border-cyan-800/40 rounded-2xl p-8 shadow-lg shadow-cyan-950/30">
          <h2 className="text-2xl font-black text-cyan-400 mb-4">7. Будущее голографии</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Основные направления развития включают квантовую голографию, голографическую связь, интеграцию с ИИ и нейроинтерфейсами.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Квантовая голография", "Голографическая связь", "Интеграция с ИИ", "Нейроинтерфейсы"].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-medium border border-cyan-800/50">
                {tag}
              </span>
            ))}
          </div>
        </section>

      </div>

      <footer className="text-center py-6 text-gray-600 text-sm border-t border-gray-800">
        © 2026 | <span className="text-cyan-700">Голографические технологии</span>
      </footer>
    </main>
  );
}