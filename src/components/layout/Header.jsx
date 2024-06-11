import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/layout/Header.css";

export default function Header() {
   const [theme, setTheme] = useState("dark");

   useEffect(() => {
      updateTheme(theme);
   });

   const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      updateTheme(newTheme);
   };

   const updateTheme = (newTheme) => {
      const styleLink = document.getElementById("theme-link");
      if (styleLink) {
         styleLink.href = `/src/styles/themes/theme-${newTheme}.css`;
      }
   };

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
