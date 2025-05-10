import type { Route } from "./+types/home";
import { Calculator } from "../calculator/calculator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calculator PWA" },
    { name: "description", content: "A simple calculator for your basic math needs" },
  ];
}

export default function Home() {
  return <Calculator />;
}
