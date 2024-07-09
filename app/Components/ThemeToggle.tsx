"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-600"
    >
      {theme === "light" ? (
        <FaMoon className="text-yellow-400 dark:text-yellow-400" />
      ) : (
        <FaSun className="text-yellow-400 dark:text-yellow-400" />
      )}
    </motion.button>
  );
}
