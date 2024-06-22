import { useTheme } from "@hooks/useTheme";
import "@styles/components/ThemeSwitcher.css";

export default function ThemeSwitcher() {
   const { theme, toggleTheme } = useTheme();

   return (
      <label className="theme-switch">
         <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
         <span className="slider"></span>
      </label>
   );
}
