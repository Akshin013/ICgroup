"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const navbar = () => {

  const languages = ["azerbaijan", "russia", "united-kingdom"];

  // сначала ставим дефолтный язык
  const [lang, setLang] = useState(languages);

  const [search, setSearch] = useState(true);

  // получаем localStorage только на клиенте
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "azerbaijan";
    const newOrder = [savedLang, ...languages.filter((l) => l !== savedLang)];
    setLang(newOrder);
  }, []);

  const changeSearch = () => {
    setSearch(!search);
  };

  const changeLang = (selected) => {
    const newOrder = [selected, ...languages.filter((l) => l !== selected)];
    setLang(newOrder);
    localStorage.setItem("lang", selected);
  };
  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="h-12 text-black flex items-center justify-between">
        {search ? (
          <>
            <Link href="/">
              <img className="w-25" src="/logo.png" alt="logo" />
            </Link>
            <div className="flex gap-6 items-center justify-between">
              <ul className="flex gap-6 ">
                <li className="relative group">
                  <Link
                    href="/training/educationCenter"
                    className="hover:text-amber-300"
                  >
                    Обучение
                  </Link>
                  {/* Выпадающее меню */}
                  <ul className="absolute left-0 top-full mt-2 w-40 bg-white text-black shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/training/educationCenter">
                        Учебный центр
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/training/signForCourses">
                        Обучающие курсы
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/training/trainingCourses">
                        Онлайн-заявка записи на курс
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="flex gap-6 ">
                <li className="relative group">
                  <Link
                    href="/materials/video"
                    className="hover:text-amber-300"
                  >
                    Материалы
                  </Link>
                  {/* Выпадающее меню */}
                  <ul className="absolute left-0 top-full mt-2 w-40 bg-white text-black shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/materials/video">Видео</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/materials/articles">Статьи</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/materials/technologies">Технологии</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="flex gap-6 ">
                <li className="relative group">
                  <Link href="#" className="hover:text-amber-300">
                    Услуги
                  </Link>
                  {/* Выпадающее меню */}
                  <ul className="absolute left-0 top-full mt-2 w-40 bg-white text-black shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/web">Веб-разработка</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/design">Дизайн</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/seo">SEO</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="flex gap-6 items-center">
                {/* Выбор языка */}
                <ul className="flex gap-6">
                  <li className="relative group cursor-pointer">
                    {/* Текущий язык */}
                    <img
                      className="h-8"
                      src={`/${lang[0]}.png`}
                      alt={lang[0]}
                    />

                    {/* Dropdown */}
                    <ul className="absolute left-0 top-full mt-2 w-40 bg-white text-black shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {lang.slice(1).map((l) => (
                        <li
                          key={l}
                          onClick={() => changeLang(l)}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          <img className="h-8" src={`/${l}.png`} alt={l} />
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <IoIosSearch size={28} />
            <input type="text" className=" w-full" />
          </>
        )}

        <div onClick={changeSearch} className="">
          {search ? (
            <div className="flex   gap-3">
              <IoIosSearch size={28} className="cursor-pointer"/>
            </div>
          ) : (
            <IoMdClose size={28} className="cursor-pointer"/>
          )}
        </div>
      </div>
    </header>
  );
};

export default navbar;
