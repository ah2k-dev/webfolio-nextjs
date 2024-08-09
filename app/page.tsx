// app/page.tsx
"use client";
import ThemeToggle from "./Components/ThemeToggle";
import Hero from "./Components/Hero";
import { useRef } from "react";

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <ThemeToggle />
      <div className="wrapper" ref={wrapperRef}>
        <div id="hero" className="z-10">
          <Hero scrollContainer={wrapperRef} />
        </div>
      </div>
    </main>
  );
}
