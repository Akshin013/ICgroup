import Link from "next/link";
import React from "react";
import { articles } from "@/articles";

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Статьи
      </h1>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/materials/articles/${article.id}`}
            className="block w-full p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-amber-400">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500">
              {article.author} — {article.position}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
