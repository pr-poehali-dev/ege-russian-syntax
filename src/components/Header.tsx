import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">ЕГЭ по Русскому языку</h1>
        <p className="text-xl opacity-90">Причастные и деепричастные обороты</p>
      </div>
    </header>
  );
};

export default Header;
