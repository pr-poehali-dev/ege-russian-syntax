import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Example {
  id: number;
  text: string;
  highlight: string;
  type: "причастный" | "деепричастный";
  explanation: string;
}

const examples: Example[] = [
  {
    id: 1,
    text: "Студент, изучающий русский язык, хорошо сдал экзамен.",
    highlight: "изучающий русский язык",
    type: "причастный",
    explanation:
      "Причастный оборот стоит после определяемого слова 'студент', поэтому выделяется запятыми.",
  },
  {
    id: 2,
    text: "Изучая русский язык, студент много читал.",
    highlight: "Изучая русский язык",
    type: "деепричастный",
    explanation:
      "Деепричастный оборот всегда выделяется запятыми, обозначает добавочное действие.",
  },
  {
    id: 3,
    text: "Написанное учеником сочинение получило высокую оценку.",
    highlight: "Написанное учеником",
    type: "причастный",
    explanation:
      "Причастный оборот стоит перед определяемым словом 'сочинение', поэтому НЕ выделяется запятыми.",
  },
];

const InteractiveExamples: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Интерактивные примеры
        </h2>

        <div className="grid gap-6">
          {examples.map((example) => (
            <Card
              key={example.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Пример {example.id}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSelectedExample(
                        selectedExample === example.id ? null : example.id,
                      )
                    }
                  >
                    {selectedExample === example.id
                      ? "Скрыть разбор"
                      : "Показать разбор"}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  {example.text.split(example.highlight).map((part, index) => (
                    <span key={index}>
                      {part}
                      {index <
                        example.text.split(example.highlight).length - 1 && (
                        <span
                          className={`px-2 py-1 rounded font-medium ${
                            example.type === "причастный"
                              ? "bg-purple-200 text-purple-800"
                              : "bg-blue-200 text-blue-800"
                          }`}
                        >
                          {example.highlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>

                {selectedExample === example.id && (
                  <div
                    className={`p-4 rounded-lg mt-4 animate-fade-in ${
                      example.type === "причастный"
                        ? "bg-purple-100"
                        : "bg-blue-100"
                    }`}
                  >
                    <p className="font-medium mb-2">
                      Тип:{" "}
                      <span className="capitalize">{example.type} оборот</span>
                    </p>
                    <p className="text-gray-700">{example.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveExamples;
