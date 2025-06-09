"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useThemeStyle, type ThemeStyle } from "@/components/theme-provider";

const themeStyles: { name: string; value: ThemeStyle; description: string }[] =
  [
    {
      name: "Default",
      value: "default",
      description: "Clean and modern shadcn design",
    },
    // {
    //   name: "Neo-Brutalist",
    //   value: "neo-brutalist",
    //   description: "Bold, raw, and unapologetic design",
    // },
    {
      name: "Glassmorphism",
      value: "glassmorphism",
      description: "Translucent and ethereal UI elements",
    },
    {
      name: "Cyberpunk",
      value: "cyberpunk",
      description: "Neon-lit futuristic aesthetics",
    },
    {
      name: "Minimal",
      value: "minimal",
      description: "Clean and distraction-free design",
    },
    {
      name: "Skeumorphism",
      value: "skeumorphism",
      description: "Real-world texture and depth",
    },
  ];

export function ThemeStyleSelector() {
  const { themeStyle, setThemeStyle } = useThemeStyle();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Theme Style</CardTitle>
        <CardDescription>
          Transform your UI with different visual styles while maintaining
          functionality
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {themeStyles.map((style) => (
            <Button
              key={style.value}
              variant={themeStyle === style.value ? "default" : "outline"}
              className="h-auto p-4 flex flex-col items-start"
              onClick={() => setThemeStyle(style.value)}
            >
              <div className="font-semibold text-left">{style.name}</div>
              <div className="text-sm text-muted-foreground text-left mt-1">
                {style.description}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
