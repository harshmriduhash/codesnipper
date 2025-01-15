"use client";
import React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeSwticher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-fit p-2 rounded-full dark:bg-zinc-600 bg-zinc-300 text-xs sm:text-sm md:text-base"
      )}
    >
      {theme === "light" ? (
        <IoMoon className="size-5" />
      ) : (
        <IoSunny className="size-5" />
      )}
    </button>
  );
};

export default ThemeSwticher;
