import * as React from "react";

type Color = "default" | "red" | "rose" | "orange" | "green" | "blue" | "yellow" | "violet";

export function useThemeColor() {
  const [themeColor, setThemeColor] = React.useState("default");
  // const [themeColor, setThemeColor] = React.useState<Color>("default");

  React.useEffect(() => {
    const classList = document.body.classList;
    classList.remove(
      "theme-default",
      "theme-red",
      "theme-rose",
      "theme-orange",
      "theme-green",
      "theme-blue",
      "theme-yellow",
      "theme-violet"
    );
    classList.add(`theme-${themeColor}`);
  }, [themeColor]);

  return { themeColor, setThemeColor };
}
