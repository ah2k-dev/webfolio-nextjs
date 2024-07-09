// app/page.tsx
import Image from "next/image";
import ThemeToggle from "./Components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <ThemeToggle />
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        Sample Text
      </h1>
    </main>
  );
}
