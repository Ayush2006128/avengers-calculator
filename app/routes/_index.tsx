import type { MetaFunction } from "@remix-run/node";
import { Calculator } from "../components/Calculator";

export const meta: MetaFunction = () => {
  return [
    { title: "Avengers Calculator" },
    { name: "description", content: "WScientific calculator inspired by Marvel's the Avengers and Tony Stark." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 to-blue-600">
      <Calculator />
    </div>
  );
}

