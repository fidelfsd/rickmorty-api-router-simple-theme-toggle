import { Link } from "react-router-dom";
import "../../styles/layout/Header.css";
import { useTheme } from "@hooks/useTheme";

export default function Header() {
   const { theme, toggleTheme } = useTheme();

   return (
      <header className="header">
         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
         </nav>
         <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"} Mode
         </button>
      </header>
   );
}
