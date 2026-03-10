'use client';
import { useState } from "react";

const table1Data = [
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

const table2Data = [
  { no: 1, lang: "Scala", year: 2004, creator: "Мартин Одерски", purpose: "JVM, Big Data", country: "Швейцария" },
  { no: 2, lang: "C++", year: 1985, creator: "Бьёрн Страуструп", purpose: "Игры, системы, ООП", country: "США" },
  { no: 3, lang: "Erlang", year: 1986, creator: "Ericsson", purpose: "Телеком", country: "Швеция" },
  { no: 4, lang: "Perl", year: 1987, creator: "Ларри Уолл", purpose: "Скрипты, тексты", country: "США" },
  { no: 5, lang: "Haskell", year: 1990, creator: "Комитет учёных", purpose: "Функциональное", country: "США" },
];

const Badge = ({ text }) => {
  const colors = {
    "США": "bg-blue-100 text-blue-800",
    "Россия": "bg-red-100 text-red-800",
    "Великобритания": "bg-purple-100 text-purple-800",
    "Швейцария": "bg-green-100 text-green-800",
    "Франция": "bg-orange-100 text-orange-800",
    "Европа": "bg-yellow-100 text-yellow-800",
    "Швеция": "bg-teal-100 text-teal-800",
  };
  const cls = colors[text] || "bg-gray-100 text-gray-700";
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${cls}`}>
      {text}
    </span>
  );
};

const Table1 = () => (
  <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="bg-gray-900 text-white">
          {["Язык", "Год", "Создатель", "Назначение", "Страна"].map(h => (
            <th key={h} className="px-4 py-3 text-left font-semibold tracking-wide uppercase text-xs">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table1Data.map((row, i) => (
          <tr key={row.lang} className={`transition-colors hover:bg-indigo-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <td className="px-4 py-3 font-mono font-bold text-indigo-700">{row.lang}</td>
            <td className="px-4 py-3 text-gray-500">{row.year}</td>
            <td className="px-4 py-3 text-gray-700">{row.creator}</td>
            <td className="px-4 py-3 text-gray-600">{row.purpose}</td>
            <td className="px-4 py-3"><Badge text={row.country} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Table2 = () => (
  <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
    <table className="min-w-full text-sm">
      <thead>
        <tr className="bg-indigo-700 text-white">
          {["№", "Язык", "Год", "Создатель", "Назначение", "Страна"].map(h => (
            <th key={h} className="px-4 py-3 text-left font-semibold tracking-wide uppercase text-xs">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table2Data.map((row, i) => (
          <tr key={row.lang} className={`transition-colors hover:bg-indigo-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <td className="px-4 py-3 text-gray-400 font-mono text-xs">{row.no}</td>
            <td className="px-4 py-3 font-mono font-bold text-indigo-700">{row.lang}</td>
            <td className="px-4 py-3 text-gray-500">{row.year}</td>
            <td className="px-4 py-3 text-gray-700">{row.creator}</td>
            <td className="px-4 py-3 text-gray-600">{row.purpose}</td>
            <td className="px-4 py-3"><Badge text={row.country} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("table1");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-1 tracking-tight">
          🖥️ Языки программирования
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">История языков программирования</p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {[
            { key: "table1", label: "Таблица 1 · Классика" },
            { key: "table2", label: "Таблица 2 · Современные" },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-indigo-700 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "table1" ? <Table1 /> : <Table2 />}

        <p className="text-center text-xs text-gray-300 mt-6">
          {activeTab === "table1" ? `${table1Data.length} языков` : `${table2Data.length} языков`}
        </p>
      </div>
    </div>
  );
}