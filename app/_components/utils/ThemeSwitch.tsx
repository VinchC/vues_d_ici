"use client";

import { PiSunFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={0}
        height={0}
        alt="Light/Dark Toggle"
        priority={false}
      />
    );

  if (resolvedTheme === "dark") {
    return <PiSunFill onClick={() => setTheme("light")} className="text-card-foreground" />;
  }

  if (resolvedTheme === "light") {
    return (
      <BsFillMoonStarsFill
        onClick={() => setTheme("dark")}
        className="text-card-foreground"
      />
    );
  }
}
