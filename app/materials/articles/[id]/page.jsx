"use client";

import { useParams } from "next/navigation";
import React from "react";
import {articles} from "@/articles"

const ArticlePage = () => {
  const params = useParams();
  const { id } = params;
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-600 mb-6">
        {article.author} — {article.position}
      </p>

      {article.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>

          {section.content &&
            section.content.map((text, i) => (
              <p key={i} className="mb-1">
                {text}
              </p>
            ))}

          {section.list && (
            <ul className="list-disc list-inside ml-4">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.groups && (
            <ul className="list-disc list-inside ml-4">
              {section.groups.map((g, i) => (
                <li key={i}>
                  {g.name} — {g.range}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticlePage;
