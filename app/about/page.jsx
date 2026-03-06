import React from "react";

export default function About() {
  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            О компании ICGroup.AZ
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Автоматизация управления и учета на базе решений 1С.
            Консалтинг, внедрение, сопровождение и развитие бизнеса.
          </p>
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Наши преимущества
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Собственная система взращивания специалистов",
              "Уникальная Технология Прозрачного Проекта",
              "Подтвержденный опыт внедрения сложных проектов",
              "IT-консалтинг и оптимизация бизнес-процессов",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-2xl hover:shadow-lg transition"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О КОМПАНИИ */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-center mb-8">
            Чем мы занимаемся
          </h2>

          <p>
            Компания ICGroup.AZ занимается автоматизацией управления и учета
            на базе программных продуктов 1С. Мы предоставляем полный спектр
            услуг: от подбора программного продукта до внедрения и сопровождения.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Консультации и демонстрация решений</li>
            <li>Поставка программного обеспечения</li>
            <li>Внедрение и адаптация под бизнес</li>
            <li>Сопровождение и обновление</li>
            <li>Обучение пользователей и IT-специалистов</li>
          </ul>

          <p>
            В нашей компании работают сертифицированные специалисты фирмы 1С,
            которые постоянно повышают квалификацию и обеспечивают высокий
            уровень качества внедрений.
          </p>
        </div>
      </section>

      {/* СТАТУСЫ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши статусы и компетенции
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 border rounded-2xl hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                1С:Франчайзи
              </h3>
              <p className="text-slate-600">
                Официальный партнер 1С, гарантирующий качество внедрения,
                сопровождения и интеграции решений.
              </p>
            </div>

            <div className="p-8 border rounded-2xl hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                ISO 9001
              </h3>
              <p className="text-slate-600">
                Наличие системы менеджмента качества и регулярный контроль
                выполняемых работ.
              </p>
            </div>

            <div className="p-8 border rounded-2xl hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">
                1С:Центр ERP
              </h3>
              <p className="text-slate-600">
                Компетенции по ERP-решениям для управления предприятием,
                внедрение и курирование крупных проектов.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* РЕАЛЬНАЯ АВТОМАТИЗАЦИЯ */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Центр Реальной Автоматизации
          </h2>

          <p className="text-slate-300 text-lg">
            Мы помогаем компаниям выявить точки роста,
            автоматизировать ключевые бизнес-процессы
            и повысить прибыльность бизнеса.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div>• Анализ бизнес-процессов</div>
            <div>• План-факт анализ</div>
            <div>• Автоматизация складов и продаж</div>
            <div>• CRM и аналитика</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Повышайте эффективность бизнеса с нами
        </h2>

        <p className="text-lg text-slate-600 mb-8">
          Станьте лидером своей отрасли вместе с решениями 1С.
        </p>

        <a
          href="mailto:office@icgroup.az"
          className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition"
        >
          Получить консультацию
        </a>
      </section>

    </div>
  );
}
