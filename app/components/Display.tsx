import React from "react";

type DisplayProps = {
  value: string;
};

export const Display: React.FC<DisplayProps> = ({ value }) => (
  <div className="bg-black text-green-400 font-mono text-2xl rounded p-4 mb-4 w-full text-right shadow-inner min-h-[3rem] border-2 border-yellow-400">
    {value || "0"}
  </div>
);
