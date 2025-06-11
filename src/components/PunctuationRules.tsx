import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PunctuationRules: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Правила пунктуации
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-purple-700">
                Причастный оборот
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-2 bg-green-100 text-green-800">
                  Выделяется запятыми
                </Badge>
                <p className="text-sm text-gray-600 mb-2">
                  Если стоит ПОСЛЕ определяемого слова:
                </p>
                <p className="italic bg-gray-50 p-3 rounded">
                  Девочка,{" "}
                  <span className="bg-purple-200 px-1 rounded">
                    играющая в саду
                  </span>
                  , весело смеялась.
                </p>
              </div>

              <div>
                <Badge className="mb-2 bg-red-100 text-red-800">
                  НЕ выделяется запятыми
                </Badge>
                <p className="text-sm text-gray-600 mb-2">
                  Если стоит ПЕРЕД определяемым словом:
                </p>
                <p className="italic bg-gray-50 p-3 rounded">
                  <span className="bg-purple-200 px-1 rounded">
                    Играющая в саду
                  </span>{" "}
                  девочка весело смеялась.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-blue-700">
                Деепричастный оборот
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className="mb-2 bg-green-100 text-green-800">
                  ВСЕГДА выделяется запятыми
                </Badge>
                <p className="text-sm text-gray-600 mb-2">
                  Независимо от места в предложении:
                </p>
                <div className="space-y-2">
                  <p className="italic bg-gray-50 p-3 rounded">
                    <span className="bg-blue-200 px-1 rounded">
                      Играя в саду
                    </span>
                    , девочка весело смеялась.
                  </p>
                  <p className="italic bg-gray-50 p-3 rounded">
                    Девочка,{" "}
                    <span className="bg-blue-200 px-1 rounded">
                      играя в саду
                    </span>
                    , весело смеялась.
                  </p>
                  <p className="italic bg-gray-50 p-3 rounded">
                    Девочка весело смеялась,{" "}
                    <span className="bg-blue-200 px-1 rounded">
                      играя в саду
                    </span>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PunctuationRules;
