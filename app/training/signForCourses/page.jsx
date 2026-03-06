import React from "react";

const CoursesPage = () => {
  const courses = [
    {
      title: 'Администрирование системы "1С:Предприятие 8"',
      description:
        'Цель курса: сформировать целостное представление об администрировании системы "1С:Предприятие 8" и выработать практические навыки установки платформы, прикладных решений, серверов защиты, их администрирования и сопровождения с использованием различной инфраструктуры. Курс рассчитан на технических специалистов, имеющих базовые навыки настройки операционных систем, исполняющих задачи администрирования "1С:Предприятие 8".',
      lessons: 20,
      price: 1200,
    },
    {
      title:
        'Вводный курс для начинающих по работе в системе «1С: Бухгалтерия»',
      description:
        'Этот курс рекомендован для начинающих бухгалтерских работников, которые хотят научиться применять бухгалтерские знания в системе «1С: Бухгалтерия».',
      lessons: 8,
      price: 100,
    },
    {
      title:
        'Вводный курс для начинающих по работе в системе «1С: Зарплата и управление персоналом»',
      description:
        'Курс рекомендован для желающих получить начальные знания по работе HR и расчёту зарплаты, а также для продвинутых работников отделов HR и бухгалтерии, которые хотят подобрать систему для автоматизации учёта на своём предприятии.',
      lessons: 12,
      price: 100,
    },
    {
      title:
        'Профессиональный курс по бухучету в системе «1С: Бухгалтерия»',
      description:
        'Этот курс рекомендован опытным сотрудникам бухгалтерского отдела, которые хотят оптимизировать свою работу, вести бухучет предприятия к предельной точности при помощи системы «1С: Бухгалтерия».',
      lessons: 10,
      price: 175,
    },
    {
      title:
        'Профессиональный курс по расчёту зарплаты в системе «1С: Зарплата и управление персоналом»',
      description:
        'Курс рекомендован для сотрудников бухгалтерии и специалистов по расчёту и начислению зарплаты, которые хотят оптимизировать свою работу и вести расчёт своей зарплаты в системе «1С: Зарплата и управление персоналом».',
      lessons: 12,
      price: 175,
    },
    {
      title:
        'Профессиональный курс по учёту кадров в системе «1С: Зарплата и управление персоналом»',
      description:
        'Курс рекомендован для сотрудников отдела HR, которые хотят оптимизировать свою работу и вести точный учёт кадровой документации в системе «1С: Зарплата и управление персоналом».',
      lessons: 12,
      price: 175,
    },
    {
      title: "Курс по Управлению Торговли",
      description:
        'Курс рекомендован для руководителей торговых предприятий, специалистов торговых подразделений, работников учетных служб торговых предприятий, которые хотят оптимизировать свою работу в соответствии с потребностями реального бизнеса.',
      lessons: 10,
      price: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Расписание курсов – ICGROUP
        </h1>

        <div className="grid grid-cols-12 font-semibold border-b pb-3 mb-6 text-sm md:text-base">
          <div className="col-span-8">Курс</div>
          <div className="col-span-2 text-center">Кол-во уроков</div>
          <div className="col-span-2 text-center">Цена, AZN</div>
        </div>

        <div className="space-y-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-4 border-b pb-6"
            >
              <div className="col-span-8">
                <h2 className="font-semibold mb-2 underline cursor-pointer hover:text-blue-600 transition">
                  {course.title}
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="col-span-2 text-center flex items-start justify-center pt-2 font-medium">
                {course.lessons}
              </div>

              <div className="col-span-2 text-center flex items-start justify-center pt-2 font-medium">
                {course.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
