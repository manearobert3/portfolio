"use client";
import React from "react";
import { useState } from "react";
import SunSvg from "../../public/sun";
import MoonSvg from "../../public/moon";
import { useTheme } from "next-themes";
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (resolvedTheme === "light") {
    return (
      <button
        className="btn btn-circle btn-ghost"
        onClick={() => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
      >
        <MoonSvg />
      </button>
    );
  }
  if (resolvedTheme === "dark") {
    return (
      <button
        className="btn btn-circle btn-ghost"
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        <SunSvg />
      </button>
    );
  }
}
