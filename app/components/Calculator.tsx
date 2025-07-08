import React, { useState } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

const buttons = [
  ["7", "8", "9", "/", "sin"],
  ["4", "5", "6", "*", "cos"],
  ["1", "2", "3", "-", "tan"],
  ["0", ".", "=", "+", "log"],
  ["C", "^", "(", ")", "√"],
];

function calculate(expr: string): string {
  try {
    // eslint-disable-next-line no-eval
    let replaced = expr
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/√/g, "Math.sqrt")
      .replace(/\^/g, "**");
    // Evaluate
    // eslint-disable-next-line no-eval
    let result = eval(replaced);
    return result.toString();
  } catch {
    return "Error";
  }
}

export const Calculator: React.FC = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val: string) => {
    if (val === "C") {
      setExpression("");
      setResult("");
    } else if (val === "=") {
      setResult(calculate(expression));
    } else {
      setExpression((prev) => prev + val);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl shadow-2xl p-6 border-4 border-yellow-400 relative">
      {/* Avengers logo */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <img src="/images/logo.png" alt="Avengers" className="w-20 h-20 rounded-full border-4 border-yellow-400 bg-black" />
      </div>
      <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-2 mt-12 font-avengers">Avengers Calculator</h2>
      <Display value={result || expression} />
      <div className="grid grid-cols-5 gap-2">
        {buttons.flat().map((btn, i) => (
          <Button
            key={i}
            onClick={() => handleClick(btn)}
            className={
              btn === "="
                ? "col-span-1 bg-yellow-400 text-black hover:bg-yellow-300"
                : btn === "C"
                ? "col-span-1 bg-red-600 hover:bg-red-400"
                : btn.match(/[+\-*/^]/)
                ? "bg-blue-600 hover:bg-blue-400"
                : btn.match(/sin|cos|tan|log|√/)
                ? "bg-purple-700 hover:bg-purple-500"
                : ""
            }
            ariaLabel={btn}
          >
            {btn}
          </Button>
        ))}
      </div>
      <p className="text-xs text-gray-300 mt-4 text-center">Made by Earth's Mightiest Developer</p>
    </div>
  );
};
