import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "В каком предложении причастный оборот выделяется запятыми?",
    options: [
      "Покрытая снегом земля выглядела красиво.",
      "Земля, покрытая снегом, выглядела красиво.",
      "Снегом покрытая земля выглядела красиво.",
    ],
    correct: 1,
    explanation:
      "Причастный оборот 'покрытая снегом' стоит после определяемого слова 'земля', поэтому выделяется запятыми.",
  },
  {
    id: 2,
    question: "Деепричастный оборот всегда:",
    options: [
      "Выделяется запятыми",
      "Не выделяется запятыми",
      "Выделяется в зависимости от позиции",
    ],
    correct: 0,
    explanation:
      "Деепричастный оборот всегда выделяется запятыми независимо от его положения в предложении.",
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = () => {
    if (parseInt(selectedAnswer) === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Проверь себя
        </h2>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                Очки: {score}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentQuestion < questions.length ? (
              <>
                <p className="text-lg mb-6">
                  {questions[currentQuestion].question}
                </p>

                <RadioGroup
                  value={selectedAnswer}
                  onValueChange={setSelectedAnswer}
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50"
                    >
                      <RadioGroupItem
                        value={index.toString()}
                        id={`option-${index}`}
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className="cursor-pointer flex-1"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {!showResult ? (
                  <Button
                    onClick={handleAnswer}
                    disabled={!selectedAnswer}
                    className="w-full mt-6"
                  >
                    Ответить
                  </Button>
                ) : (
                  <div className="mt-6">
                    <div
                      className={`p-4 rounded-lg mb-4 ${
                        parseInt(selectedAnswer) ===
                        questions[currentQuestion].correct
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      <p className="font-medium">
                        {parseInt(selectedAnswer) ===
                        questions[currentQuestion].correct
                          ? "Правильно! ✅"
                          : "Неправильно ❌"}
                      </p>
                      <p className="mt-2">
                        {questions[currentQuestion].explanation}
                      </p>
                    </div>

                    {currentQuestion < questions.length - 1 ? (
                      <Button onClick={nextQuestion} className="w-full">
                        Следующий вопрос
                      </Button>
                    ) : (
                      <div className="text-center">
                        <p className="text-xl mb-4">
                          Результат: {score} из {questions.length}
                        </p>
                        <Button onClick={resetQuiz} variant="outline">
                          Пройти заново
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Quiz;
