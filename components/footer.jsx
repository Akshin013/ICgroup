import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaVk, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              О компании
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-blue-500 transition">О нас</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition">Наш опыт</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition">Наши услуги</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition">Продукты 1С</Link></li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Обучение
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-500 transition">Материалы</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Контакты</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Политика конфиденциальности</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Контакты
            </h3>

            <p className="text-lg text-white font-medium">
              +994 12 599 88 25
            </p>

            <a
              href="mailto:office@icgroup.az"
              className="block mt-2 hover:text-blue-500 transition"
            >
              office@icgroup.az
            </a>

            {/* Socials */}
            <div className="flex gap-4 mt-6 text-xl">
              <a href="#" className="hover:text-blue-500 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-500 transition"><FaVk /></a>
              <a href="#" className="hover:text-blue-500 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-green-500 transition"><FaWhatsapp /></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} ICGROUP. Все права защищены.
        </div>

      </div>
    </footer>
  );
}
