import React from "react";

export default function Contacts() {
  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Контакты
          </h1>
          <p className="text-lg text-slate-300">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Левая часть — информация */}
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                ICGROUP
              </h2>

              <p className="text-lg font-medium">
                📞 +994 12 599 88 25
              </p>

              <a
                href="mailto:office@icgroup.az"
                className="block mt-2 text-blue-600 hover:underline"
              >
                ✉ office@icgroup.az
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Адрес
              </h3>
              <p className="text-slate-600">
                Баку, улица Самеда Вургуна 43 <br />
                World Business Center
              </p>
            </div>

            {/* Карта */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Samad+Vurgun+43+Baku&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Правая часть — форма */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">
              Написать нам
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-slate-900"
              />

              <input
                type="email"
                placeholder="Ваш email"
                className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-slate-900"
              />

              <textarea
                placeholder="Сообщение"
                rows="4"
                className="w-full p-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-slate-900"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-xl hover:bg-slate-800 transition"
              >
                Отправить сообщение
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-12 text-center">
        <p className="text-lg">
          Мы поможем автоматизировать ваш бизнес и повысить его эффективность.
        </p>
      </section>

    </div>
  );
}
