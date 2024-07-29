
'use client';

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HandCoins, MoonIcon, SunIcon, SunMoon } from "lucide-react";
import Link from "next/link";

type Theme = "light" | "dark";

const Header = () => {
    const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setIteam("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }, [theme]);

    return ( 
        <header className="mx-auto">  
        <div className=" py-5 px-10 md:px-0 content w-full md:w-[80%] mx-auto  place-content-center flex justify-between items-center">
         
          <Link href="/">
            <h1 className="text-2xl font-bold flex gap-1 items-center justify-between ">
              <HandCoins /> <span className="underline">Tracker</span> 
            </h1>
          </Link>

          <div className="flex gap-5 items-center">
            <Button onClick={toggleTheme}>
                {theme === "light" ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </Button>
            Sign out
          </div>
        </div>
      </header>
     );
}
 
export default Header;