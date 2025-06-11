import React from "react";
import Header from "@/components/Header";
import TheorySection from "@/components/TheorySection";
import InteractiveExamples from "@/components/InteractiveExamples";
import PunctuationRules from "@/components/PunctuationRules";
import Quiz from "@/components/Quiz";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TheorySection />
      <InteractiveExamples />
      <PunctuationRules />
      <Quiz />

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2024 ЕГЭ Русский язык - Подготовка к экзамену</p>
      </footer>
    </div>
  );
};

export default Index;
