import React from "react";

const videoSections = [
  {
    title: "Юрий Робышев. Большой проект: Документация",
    parts: [
      { name: "Часть 1", url: "https://icgroups.az/ru/images/1.mp4" },
      { name: "Часть 2", url: "https://icgroups.az/ru/images/2.mp4" },
      { name: "Часть 3", url: "https://icgroups.az/ru/images/3.mp4" },
      { name: "Часть 4", url: "https://icgroups.az/ru/images/4.mp4" },
    ],
  },
  {
    title:
      "Юрий Робышев. Заказчик - Исполнитель: Взаимоотношения как основа успеха проекта",
    parts: [
      { name: "Часть 1", url: "https://icgroups.az/ru/images/2%2001.mp4" },
      { name: "Часть 2", url: "https://icgroups.az/ru/images/2%2002.mp4" },
      { name: "Часть 3", url: "https://icgroups.az/ru/images/2%2003.mp4" },
    ],
  },
  {
    title: "Роман Куличинский. Облачные технологии",
    parts: [
      { name: "Часть 1", url: "https://icgroups.az/ru/images/konv1.mp4" },
      { name: "Часть 2", url: "https://icgroups.az/ru/images/k2.mp4" },
      { name: "Часть 3", url: "https://icgroups.az/ru/images/k3.mp4" },
    ],
  },
];

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-16">
      {videoSections.map((section, index) => (
        <div key={index} className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">{section.title}</h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            {section.parts.map((video, i) => (
              <div
                key={i}
                className="rounded-xl shadow-md  flex flex-col gap-3 hover:shadow-xl transition"
              >
                <p className="font-medium text-gray-700">{video.name}</p>

                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <video
                    src={video.url}
                    autoPlay
                    muted
                    loop
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  >
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
