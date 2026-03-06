import React from "react";

export default function CompanyPage() {
  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Решения 1С для вашего бизнеса
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
          Автоматизация, внедрение и сопровождение программных продуктов 1С в Азербайджане
        </p>
      </section>

      {/* ПРОДУКТЫ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Продукты 1С
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["Otrasli", "Bitrix", "Ucebniycentr", "Buxgalteriya"].map(
              (item, index) => (
                <div
                  key={index}
                  className="p-8 border rounded-2xl text-center hover:shadow-xl transition"
                >
                  <h3 className="text-lg font-semibold">{item}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши услуги
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Сопровождение 1С",
              "Внедрение и автоматизация",
              "Бухгалтерский аутсорсинг",
              "IT-консалтинг",
              "Разработка собственных решений",
              "Обучение пользователей",
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* СТАТИСТИКА */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Более 200 организаций и частных лиц уже сотрудничают с нами
        </h2>
        <p className="text-slate-300">
          Нам доверяют крупные компании Азербайджана
        </p>
      </section>

      {/* О КОМПАНИИ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10 text-lg leading-relaxed">

          <h2 className="text-3xl font-bold text-center">
            О компании
          </h2>

          <p>
            Наша компания занимается автоматизацией управления и учёта
            на базе программных продуктов 1С с 1997 года.
            За последние 20 лет произведено около 200 поставок,
            в том числе более 50 решений собственной разработки.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold mb-3">Сертифицированные специалисты</h3>
              <p>
                В компании работают специалисты, сертифицированные фирмой 1С.
                Общее количество сертификатов — 54.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold mb-3">Бухгалтерский аутсорсинг</h3>
              <p>
                С 2016 года успешно развиваем направление бухгалтерского
                обслуживания предприятий.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold mb-3">Опыт и доверие</h3>
              <p>
                Нам доверяют крупные компании Азербайджана.
              </p>
            </div>

            <div className="p-6 border rounded-2xl">
              <h3 className="font-semibold mb-3">Качество и разумная цена</h3>
              <p>
                Мы всегда предлагаем лучшее качество услуг
                за разумные деньги.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Есть вопросы?
        </h2>

        <p className="text-lg mb-8">
          Напишите нам или позвоните по телефону
        </p>

        <a
          href="tel:+9940555050537"
          className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-200 transition"
        >
          +994 055 505 05 37
        </a>
      </section>

    </div>
  );
}