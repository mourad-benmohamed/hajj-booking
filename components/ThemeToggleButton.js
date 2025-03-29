"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggleButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return (
      <span className="animate-pulse min-w-[32px] min-h-[32px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-50 border dark:border-zinc-700 border-zinc-300" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative min-w-[32px] min-h-[32px] p-1.5 rounded-full dark:bg-zinc-800 bg-green-50 dark:border-zinc-700 hover:dark:bg-zinc-700 hover:bg-zinc-200 transition-colors duration-100"
      aria-label="Toggle Theme"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0, rotate: currentTheme === "light" ? 90 : -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: currentTheme === "light" ? -90 : 90 }}
          transition={{ duration: 0.1, type: "spring", stiffness: 200 }}
          className="flex items-center justify-center"
        >
          {currentTheme === "light" ? (
            <FaMoon className="text-gray-800 w-4 h-4" />
          ) : (
            <IoMdSunny className="text-yellow-500 w-5 h-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}