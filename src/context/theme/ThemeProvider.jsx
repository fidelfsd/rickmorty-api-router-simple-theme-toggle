import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
   const [theme, setTheme] = useState(() => {
      // Obtener el tema inicial desde el localStorage o usar "dark" como predeterminado
      return localStorage.getItem("theme") || "dark";
   });

   useEffect(() => {
      // Actualizar el tema en el DOM
      document.documentElement.setAttribute("data-theme", theme);
      // Guardar el tema en localStorage
      localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
   };

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
}
