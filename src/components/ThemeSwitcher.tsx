
'use client'

import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    mounted ? (
      <Button isIconOnly className="bg-content2" onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      </Button>
    ) : <Button isIconOnly className="bg-content2">
    </Button>
  )
}