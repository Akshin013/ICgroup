"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const languages = ["azerbaijan", "russia", "united-kingdom"];

  const [lang, setLang] = useState(languages);
  const [search, setSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "azerbaijan";
    const newOrder = [savedLang, ...languages.filter((l) => l !== savedLang)];
    setLang(newOrder);
  }, []);

  const toggleSearch = () => setSearch(!search);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLang = (selected) => {
    const newOrder = [selected, ...languages.filter((l) => l !== selected)];
    setLang(newOrder);
    localStorage.setItem("lang", selected);
  };

  const navLinks = [
    {
      title: "Обучение",
      links: [
        { name: "Учебный центр", href: "/training/educationCenter" },
        { name: "Обучающие курсы", href: "/training/signForCourses" },
        { name: "Онлайн-заявка", href: "/training/trainingCourses" },
      ],
    },
    {
      title: "Материалы",
      links: [
        { name: "Видео", href: "/materials/video" },
        { name: "Статьи", href: "/materials/articles" },
        { name: "Технологии", href: "/materials/technologies" },
        { name: "Искусственный Интеллект", href: "/materials/technologies/AI" },
        { name: "Голографические технологии", href: "/materials/technologies/HolographicTechnology" },
        { name: "Таблица языков программирования", href: "/materials/technologies/TableOfProgrammingLanguages" },
        { name: "Что такое 1С", href: "/materials/technologies/WhatIs1C" },
        { name: "Администратор 1С", href: "/materials/technologies/Admin1C" },
      ],
    },
    {
      title: "Услуги",
      links: [
        { name: "Веб-разработка", href: "/web" },
        { name: "Дизайн", href: "/design" },
        { name: "SEO", href: "/seo" },
      ],
    },
  ];

  return (
    <>
      <header className="w-screen bg-white/80 backdrop-blur-md shadow-sm z-50 fixed top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="logo" className="h-10" />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((nav) => (
              <div key={nav.title} className="relative group">
                <span className="cursor-pointer hover:text-amber-500">{nav.title}</span>
                <ul className="absolute left-0 top-full mt-2 w-52 bg-white text-black shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {nav.links.map((link) => (
                    <li key={link.name} className="px-4 py-2 hover:bg-gray-100">
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Language selector */}
            <div className="relative group cursor-pointer">
              <img className="h-8" src={`/${lang[0]}.png`} alt={lang[0]} />
              <ul className="absolute left-0 top-full mt-2 w-32 bg-white text-black shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {lang.slice(1).map((l) => (
                  <li key={l} onClick={() => changeLang(l)} className="px-4 py-2 hover:bg-gray-100">
                    <img className="h-8" src={`/${l}.png`} alt={l} />
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button onClick={toggleSearch} className="sm:hidden">
              {search ? <IoMdClose size={24} /> : <IoIosSearch size={24} />}
            </button>
            <button onClick={toggleMenu} className="sm:hidden">
              {menuOpen ? <IoMdClose size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white shadow-md">
            <nav className="px-4 pt-4 pb-6 flex flex-col gap-2">
              {navLinks.map((nav) => (
                <div key={nav.title} className="border-b border-gray-200">
                  <span className="block py-2 font-semibold">{nav.title}</span>
                  <ul className="pl-4 flex flex-col gap-1">
                    {nav.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="block py-1 hover:text-amber-500">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Mobile Language Selector */}
              <div className="mt-4">
                <span className="font-semibold block mb-2">Язык</span>
                <div className="flex gap-2">
                  {lang.map((l) => (
                    <img key={l} className="h-8 cursor-pointer" src={`/${l}.png`} alt={l} onClick={() => changeLang(l)} />
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}

        {/* Mobile Search */}
        {search && (
          <div className="sm:hidden px-4 pb-4">
            <input
              type="text"
              placeholder="Поиск..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        )}
      </header>

      {/* Spacer — толкает контент вниз на высоту навбара */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
