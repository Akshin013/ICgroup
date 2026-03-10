// app/technologies/page.js
import React from "react";

const TechnologiesPage = () => {
  const technologies = [
    "Технология прозрачного Проекта",
    "Технология подготовки кадров",
    "Технология построения автоматизированной информационной системы учёта",
    "Технология организации актуальных отчётных данных",
    "Технология построения бизнес модели хозяйственной деятельности предприятия",
    "Перспективные технологии",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mbн6">Технологии</h1>
      <ul className="list-decimal list-inside space-y-2">
        {technologies.map((tech, idx) => (
          <li key={idx} className="text-lg text-gray-800">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesPage;
