"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export type ThemeStyle =
  | "default"
  // | "neo-brutalist"
  | "glassmorphism"
  | "skeumorphism"
  | "cyberpunk"
  | "minimal";

interface ThemeStyleContextType {
  themeStyle: ThemeStyle;
  setThemeStyle: (style: ThemeStyle) => void;
}

const ThemeStyleContext = React.createContext<
  ThemeStyleContextType | undefined
>(undefined);

export function useThemeStyle() {
  const context = React.useContext(ThemeStyleContext);
  if (context === undefined) {
    throw new Error("useThemeStyle must be used within a ThemeStyleProvider");
  }
  return context;
}

function ThemeStyleProvider({ children }: { children: React.ReactNode }) {
  const [themeStyle, setThemeStyle] = React.useState<ThemeStyle>("default");

  React.useEffect(() => {
    const stored = localStorage.getItem("theme-style");
    if (
      stored &&
      [
        "default",
        // "neo-brutalist",
        "glassmorphism",
        "skeumorphism",
        "cyberpunk",
        "minimal",
      ].includes(stored)
    ) {
      setThemeStyle(stored as ThemeStyle);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme-style", themeStyle);
    document.documentElement.setAttribute("data-theme-style", themeStyle);
  }, [themeStyle]);

  return (
    <ThemeStyleContext.Provider value={{ themeStyle, setThemeStyle }}>
      {children}
    </ThemeStyleContext.Provider>
  );
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) {
  return (
    <NextThemeProvider {...props}>
      <ThemeStyleProvider>{children}</ThemeStyleProvider>
    </NextThemeProvider>
  );
}
