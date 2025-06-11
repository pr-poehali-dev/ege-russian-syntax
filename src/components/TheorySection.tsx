import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TheorySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Теория
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-700">
                Причастный оборот
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                <strong>Причастный оборот</strong> — это причастие с зависимыми
                словами.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="font-medium text-purple-800">Пример:</p>
                <p className="italic">
                  Мальчик,{" "}
                  <span className="bg-purple-200 px-1 rounded">
                    читающий книгу
                  </span>
                  , сидел у окна.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Обозначает признак предмета по действию</li>
                <li>Отвечает на вопросы: какой? какая? какое?</li>
                <li>Может стоять до или после определяемого слова</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-blue-100">
              <CardTitle className="text-blue-700">
                Деепричастный оборот
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                <strong>Деепричастный оборот</strong> — это деепричастие с
                зависимыми словами.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-medium text-blue-800">Пример:</p>
                <p className="italic">
                  <span className="bg-blue-200 px-1 rounded">Читая книгу</span>,
                  мальчик сидел у окна.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Обозначает добавочное действие</li>
                <li>Отвечает на вопросы: что делая? что сделав?</li>
                <li>Всегда относится к подлежащему</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TheorySection;
