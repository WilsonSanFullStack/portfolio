"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export default function AutoThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse">
        <div className="w-8 h-8 rounded-md bg-gray-300 dark:bg-gray-700"></div>
      </div>
    );
  }

  const themes = [
    { id: "light", icon: FiSun, label: "Claro" },
    { id: "dark", icon: FiMoon, label: "Oscuro" },
    { id: "system", icon: FiMonitor, label: "Sistema" },
  ];

  const currentTheme = themes.find(t => t.id === theme) || themes[2];

  return (
    <div className="relative group">
      <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
        <currentTheme.icon className="text-gray-700 dark:text-gray-300 text-xl" />
        <span className="hidden md:inline text-gray-700 dark:text-gray-300 font-medium">
          {currentTheme.label}
        </span>
      </div>
      
      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {themes.map((themeOption) => (
          <button
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
            className={`flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
              theme === themeOption.id
                ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <themeOption.icon className="text-lg" />
            <span className="font-medium">{themeOption.label}</span>
            {theme === themeOption.id && (
              <span className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}